// Run: npm test  (Node >= 23 strips TS types natively)
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import {
  TIMELESS_JEWELS,
  getJewel,
  checkSeed,
  seedCount,
  buildTradeQuery,
  buildTradeUrl,
} from "../src/lib/timeless.ts";

test("every jewel has a sane seed range and conquerors", () => {
  assert.equal(TIMELESS_JEWELS.length, 6);
  for (const j of TIMELESS_JEWELS) {
    assert.ok(j.seedMin < j.seedMax, j.name);
    assert.ok(j.conquerors.length >= 3, j.name);
    for (const c of j.conquerors) {
      assert.match(c.tradeStatId, /^explicit\.pseudo_timeless_jewel_[a-z]+$/);
    }
  }
});

test("trade stat ids are unique", () => {
  const ids = TIMELESS_JEWELS.flatMap((j) => j.conquerors.map((c) => c.tradeStatId));
  assert.equal(new Set(ids).size, ids.length);
});

test("seed validation respects ranges and Elegant Hubris step of 20", () => {
  const lp = getJewel("lethal-pride");
  assert.deepEqual(checkSeed(lp, "12,345"), { ok: true, seed: 12345 });
  assert.equal(checkSeed(lp, "9999").ok, false);
  assert.equal(checkSeed(lp, "abc").ok, false);
  assert.equal(checkSeed(lp, "").ok, false);

  const eh = getJewel("elegant-hubris");
  assert.deepEqual(checkSeed(eh, "2020"), { ok: true, seed: 2020 });
  const bad = checkSeed(eh, "2031");
  assert.equal(bad.ok, false);
  assert.equal(bad.nearest, 2040);
  assert.equal(seedCount(eh), 7901);
  assert.equal(seedCount(getJewel("glorious-vanity")), 7901);
});

test("trade query pins the seed on every conqueror line", () => {
  const mf = getJewel("militant-faith");
  const q = buildTradeQuery({ jewel: mf, seed: 4567 });
  const filters = q.query.stats[0].filters;
  assert.equal(q.query.stats[0].type, "count");
  assert.equal(filters.length, mf.conquerors.length);
  for (const f of filters) assert.deepEqual(f.value, { min: 4567, max: 4567 });

  const one = buildTradeQuery({ jewel: mf, seed: 4567, conqueror: "Avarius" });
  assert.deepEqual(one.query.stats[0].filters.map((f) => f.id), [
    "explicit.pseudo_timeless_jewel_avarius",
  ]);
  assert.throws(() => buildTradeQuery({ jewel: mf, conqueror: "Kaom" }));
});

test("trade url encodes league and round-trips the query", () => {
  const url = buildTradeUrl({ jewel: getJewel("glorious-vanity"), seed: 100, league: "Phrecia 2.0" });
  assert.ok(url.startsWith("https://www.pathofexile.com/trade/search/Phrecia%202.0?q="));
  const q = JSON.parse(decodeURIComponent(url.split("?q=")[1]));
  assert.equal(q.query.name, "Glorious Vanity");
  assert.equal(buildTradeUrl({ jewel: getJewel("glorious-vanity"), league: "" }).includes("/search/Standard?q="), true);
});

// Optional: verify ids against a cached copy of the official stats API.
const statsPath = process.env.POE_STATS_JSON;
test("stat ids exist in the official trade API", { skip: !statsPath || !existsSync(statsPath) }, () => {
  const data = JSON.parse(readFileSync(statsPath, "utf8"));
  const official = new Set(data.result.flatMap((g) => g.entries.map((e) => e.id)));
  for (const j of TIMELESS_JEWELS) for (const c of j.conquerors) assert.ok(official.has(c.tradeStatId), c.tradeStatId);
});
