// Timeless Jewel data for Path of Exile 1.
// Trade stat ids verified against https://www.pathofexile.com/api/trade/data/stats (2026-11-28).

export type JewelId =
  | "glorious-vanity"
  | "lethal-pride"
  | "brutal-restraint"
  | "militant-faith"
  | "elegant-hubris"
  | "heroic-tragedy";

export interface Conqueror {
  name: string;
  /** Keystone this conqueror's version turns keystones into (classic three only). */
  keystone?: string;
  tradeStatId: string;
}

export interface TimelessJewel {
  id: JewelId;
  name: string;
  faction: string;
  color: string;
  seedMin: number;
  seedMax: number;
  /** Valid seeds are multiples of this step (Elegant Hubris only rolls in 20s). */
  seedStep: number;
  /** The jewel's mod line, with # where the seed goes. */
  modText: string;
  effect: string;
  conquerors: Conqueror[];
}

const stat = (c: string) => `explicit.pseudo_timeless_jewel_${c}`;

export const TIMELESS_JEWELS: TimelessJewel[] = [
  {
    id: "glorious-vanity",
    name: "Glorious Vanity",
    faction: "Vaal",
    color: "#4488ee",
    seedMin: 100,
    seedMax: 8000,
    seedStep: 1,
    modText: "Bathed in the blood of # sacrificed in the name of {c}",
    effect: "Replaces notables with Vaal notables and adds random Vaal mods to small passives. The strongest and most seed-dependent jewel.",
    conquerors: [
      { name: "Xibaqua", keystone: "Divine Flesh", tradeStatId: stat("xibaqua") },
      { name: "Ahuana", keystone: "Immortal Ambition", tradeStatId: stat("ahuana") },
      { name: "Doryani", keystone: "Corrupted Soul", tradeStatId: stat("doryani") },
      { name: "Zerphi", tradeStatId: stat("zerphi") },
    ],
  },
  {
    id: "lethal-pride",
    name: "Lethal Pride",
    faction: "Karui",
    color: "#d02040",
    seedMin: 10000,
    seedMax: 18000,
    seedStep: 1,
    modText: "Commanded leadership over # warriors under {c}",
    effect: "Adds Strength to small passives and an extra Karui mod (double damage, crit, resistances) to each notable.",
    conquerors: [
      { name: "Kaom", keystone: "Strength of Blood", tradeStatId: stat("kaom") },
      { name: "Rakiata", keystone: "Tempered by War", tradeStatId: stat("rakiata") },
      { name: "Akoya", keystone: "Chainbreaker", tradeStatId: stat("akoya") },
      { name: "Kiloava", tradeStatId: stat("kiloava") },
    ],
  },
  {
    id: "brutal-restraint",
    name: "Brutal Restraint",
    faction: "Maraketh",
    color: "#2dc50e",
    seedMin: 500,
    seedMax: 8000,
    seedStep: 1,
    modText: "Denoted service of # dekhara in the akhara of {c}",
    effect: "Adds Dexterity to small passives and replaces notables with Maraketh notables.",
    conquerors: [
      { name: "Asenath", keystone: "Dance with Death", tradeStatId: stat("asenath") },
      { name: "Nasima", keystone: "Second Sight", tradeStatId: stat("nasima") },
      { name: "Balbala", keystone: "The Traitor", tradeStatId: stat("balbala") },
      { name: "Deshret", tradeStatId: stat("deshret") },
    ],
  },
  {
    id: "militant-faith",
    name: "Militant Faith",
    faction: "Templar",
    color: "#c8b07a",
    seedMin: 2000,
    seedMax: 10000,
    seedStep: 1,
    modText: "Carved to glorify # new faithful converted by High Templar {c}",
    effect: "Adds Devotion to small passives and replaces or augments notables with Templar notables. Popular for aura and minion builds.",
    conquerors: [
      { name: "Avarius", keystone: "Power of Purpose", tradeStatId: stat("avarius") },
      { name: "Dominus", keystone: "Inner Conviction", tradeStatId: stat("dominus") },
      { name: "Maxarius", keystone: "Transcendence", tradeStatId: stat("maxarius") },
      { name: "Venarius", tradeStatId: stat("venarius") },
    ],
  },
  {
    id: "elegant-hubris",
    name: "Elegant Hubris",
    faction: "Eternal Empire",
    color: "#af6025",
    seedMin: 2000,
    seedMax: 160000,
    seedStep: 20,
    modText: "Commissioned # coins to commemorate {c}",
    effect: "Removes all small passive stats and replaces notables with Eternal Empire notables. Seeds only roll in steps of 20.",
    conquerors: [
      { name: "Cadiro", keystone: "Supreme Decadence", tradeStatId: stat("cadiro") },
      { name: "Victario", keystone: "Supreme Grandstanding", tradeStatId: stat("victario") },
      { name: "Caspiro", keystone: "Supreme Ostentation", tradeStatId: stat("caspiro") },
      { name: "Chitus", tradeStatId: stat("chitus") },
    ],
  },
  {
    id: "heroic-tragedy",
    name: "Heroic Tragedy",
    faction: "Kalguur",
    color: "#9a7bd4",
    seedMin: 100,
    seedMax: 8000,
    seedStep: 1,
    modText: "Remembrancing # songworthy deeds by the line of {c}",
    effect: "Kalguuran jewel added in Settlers of Kalguur. Transforms passives in its radius with Kalguuran modifiers and notables.",
    conquerors: [
      { name: "Vorana", tradeStatId: stat("vorana") },
      { name: "Medved", tradeStatId: stat("medved") },
      { name: "Uhtred", tradeStatId: stat("uhtred") },
    ],
  },
];

export function getJewel(id: JewelId): TimelessJewel {
  const jewel = TIMELESS_JEWELS.find((j) => j.id === id);
  if (!jewel) throw new Error(`Unknown timeless jewel: ${id}`);
  return jewel;
}

export type SeedCheck =
  | { ok: true; seed: number }
  | { ok: false; reason: string; nearest?: number };

/** Validate a seed typed by the user against the jewel's real roll range. */
export function checkSeed(jewel: TimelessJewel, raw: string): SeedCheck {
  const trimmed = raw.trim().replace(/,/g, "");
  if (trimmed === "") return { ok: false, reason: "Enter the number shown on your jewel." };
  if (!/^\d+$/.test(trimmed)) return { ok: false, reason: "Seeds are whole numbers." };
  const seed = Number(trimmed);
  if (seed < jewel.seedMin || seed > jewel.seedMax) {
    return {
      ok: false,
      reason: `${jewel.name} seeds range from ${jewel.seedMin.toLocaleString("en-US")} to ${jewel.seedMax.toLocaleString("en-US")}.`,
      nearest: Math.min(jewel.seedMax, Math.max(jewel.seedMin, seed)),
    };
  }
  if (seed % jewel.seedStep !== 0) {
    const nearest = Math.round(seed / jewel.seedStep) * jewel.seedStep;
    return {
      ok: false,
      reason: `${jewel.name} seeds are multiples of ${jewel.seedStep}.`,
      nearest: Math.min(jewel.seedMax, Math.max(jewel.seedMin, nearest)),
    };
  }
  return { ok: true, seed };
}

/** Number of distinct seeds a jewel can roll (per conqueror). */
export function seedCount(jewel: TimelessJewel): number {
  return Math.floor((jewel.seedMax - jewel.seedMin) / jewel.seedStep) + 1;
}

export interface TradeSearchOptions {
  jewel: TimelessJewel;
  /** Exact seed; omit to list every seed. */
  seed?: number;
  /** Conqueror name; omit for any conqueror. */
  conqueror?: string;
  league: string;
}

/** Build the official pathofexile.com trade search query for a timeless jewel. */
export function buildTradeQuery({ jewel, seed, conqueror }: Omit<TradeSearchOptions, "league">) {
  const conquerors = conqueror
    ? jewel.conquerors.filter((c) => c.name === conqueror)
    : jewel.conquerors;
  if (conquerors.length === 0) throw new Error(`${conqueror} is not a ${jewel.name} conqueror`);
  const value = seed === undefined ? {} : { min: seed, max: seed };
  return {
    query: {
      status: { option: "online" },
      name: jewel.name,
      type: "Timeless Jewel",
      stats: [
        {
          type: "count",
          value: { min: 1 },
          filters: conquerors.map((c) => ({ id: c.tradeStatId, value })),
        },
      ],
    },
    sort: { price: "asc" },
  };
}

export function buildTradeUrl(opts: TradeSearchOptions): string {
  const league = opts.league.trim() || "Standard";
  const q = JSON.stringify(buildTradeQuery(opts));
  return `https://www.pathofexile.com/trade/search/${encodeURIComponent(league)}?q=${encodeURIComponent(q)}`;
}
