"use client";

import { useMemo, useState } from "react";
import {
  TIMELESS_JEWELS,
  getJewel,
  checkSeed,
  seedCount,
  buildTradeUrl,
  type JewelId,
} from "@/lib/timeless";

// Update when a new challenge league launches (source: /api/trade/data/leagues).
const LEAGUES = ["Covens", "Hardcore Covens", "Standard", "Hardcore"];

export default function TimelessJewelCalculator() {
  const [jewelId, setJewelId] = useState<JewelId>("glorious-vanity");
  const [conqueror, setConqueror] = useState<string>("");
  const [seedInput, setSeedInput] = useState("");
  const [league, setLeague] = useState(LEAGUES[0]);

  const jewel = getJewel(jewelId);
  const check = useMemo(() => checkSeed(jewel, seedInput), [jewel, seedInput]);
  const seed = check.ok ? check.seed : undefined;
  const conq = jewel.conquerors.find((c) => c.name === conqueror);

  const tradeUrl = buildTradeUrl({ jewel, seed, conqueror: conq?.name, league });
  const anySeedUrl = buildTradeUrl({ jewel, conqueror: conq?.name, league });
  const modLine = jewel.modText
    .replace("#", seed !== undefined ? seed.toLocaleString("en-US") : "#")
    .replace("{c}", conq?.name ?? jewel.conquerors[0].name);

  const pickJewel = (id: JewelId) => {
    setJewelId(id);
    setConqueror("");
    setSeedInput("");
  };

  return (
    <div className="poe-frame animate-fade-in-delay-1">
      <div className="poe-frame-header">
        <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
          Seed Checker &amp; Trade Search
        </h2>
      </div>
      <div className="poe-frame-body space-y-6">
        {/* Step 1: jewel */}
        <fieldset>
          <legend className="text-poe-text-bright text-sm mb-3">1. Pick your Timeless Jewel</legend>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {TIMELESS_JEWELS.map((j) => {
              const active = j.id === jewelId;
              return (
                <button
                  key={j.id}
                  type="button"
                  onClick={() => pickJewel(j.id)}
                  aria-pressed={active}
                  className={`stat-card text-left flex items-center gap-2.5 transition-colors ${
                    active ? "!border-poe-gold/70" : "hover:!border-poe-gold/30"
                  }`}
                >
                  <span
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: j.color, boxShadow: `0 0 6px ${j.color}80` }}
                  />
                  <span>
                    <span className={`block text-sm ${active ? "text-poe-gold-bright" : "text-poe-text-bright"}`}>
                      {j.name}
                    </span>
                    <span className="block text-poe-text-dim text-[11px] font-[family-name:var(--font-mono)]">
                      {j.seedMin.toLocaleString("en-US")}–{j.seedMax.toLocaleString("en-US")}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>

        {/* Step 2: conqueror + seed */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <label className="block">
            <span className="block text-poe-text-bright text-sm mb-2">2. Conqueror</span>
            <select value={conqueror} onChange={(e) => setConqueror(e.target.value)} className="w-full">
              <option value="">Any conqueror</option>
              {jewel.conquerors.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.name}
                  {c.keystone ? ` — ${c.keystone}` : ""}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="block text-poe-text-bright text-sm mb-2">3. Seed number</span>
            <input
              type="text"
              inputMode="numeric"
              placeholder={`${jewel.seedMin}–${jewel.seedMax}`}
              value={seedInput}
              onChange={(e) => setSeedInput(e.target.value)}
              className="w-full font-[family-name:var(--font-mono)]"
              aria-invalid={seedInput !== "" && !check.ok}
            />
          </label>
          <label className="block">
            <span className="block text-poe-text-bright text-sm mb-2">League</span>
            <select value={league} onChange={(e) => setLeague(e.target.value)} className="w-full">
              {LEAGUES.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Result */}
        <div className="stat-card space-y-3" aria-live="polite">
          <p className="text-[13px] italic text-poe-text-dim">&ldquo;{modLine}&rdquo;</p>
          {seedInput === "" ? (
            <p className="text-sm text-poe-text-dim">
              Enter the number from your jewel&apos;s mod line to validate it and search trade for that exact seed.
              {jewel.seedStep > 1 && ` ${jewel.name} only rolls multiples of ${jewel.seedStep}.`}
            </p>
          ) : check.ok ? (
            <p className="text-sm text-poe-green">
              ✓ Valid {jewel.name} seed. One of {seedCount(jewel).toLocaleString("en-US")} possible seeds
              {conq ? ` for ${conq.name}` : " per conqueror"}.
            </p>
          ) : (
            <p className="text-sm text-poe-red">
              {check.reason}
              {check.nearest !== undefined && (
                <>
                  {" "}
                  <button
                    type="button"
                    className="underline text-poe-gold-light hover:text-poe-gold-bright"
                    onClick={() => setSeedInput(String(check.nearest))}
                  >
                    Use {check.nearest.toLocaleString("en-US")}
                  </button>
                </>
              )}
            </p>
          )}
          {conq?.keystone && (
            <p className="text-sm text-poe-text-dim">
              Keystones in radius become <span className="text-poe-text-bright">{conq.keystone}</span>.
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-2 pt-1">
            <a
              href={check.ok ? tradeUrl : anySeedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="poe-btn text-center"
            >
              {check.ok ? `Search trade for seed ${check.seed.toLocaleString("en-US")}` : `Search all ${jewel.name} on trade`}
            </a>
            {check.ok && (
              <a
                href={anySeedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-sm text-poe-text-dim hover:text-poe-gold-light self-center px-3"
              >
                or browse every seed →
              </a>
            )}
          </div>
        </div>

        <p className="text-poe-text-dim text-xs leading-relaxed">{jewel.effect}</p>
      </div>
    </div>
  );
}
