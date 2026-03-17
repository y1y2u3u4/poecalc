"use client";

import { useState, useMemo } from "react";

// PoE gem experience table (cumulative XP needed for each level)
const GEM_XP_TABLE: Record<number, number> = {
  1: 0,
  2: 70,
  3: 308,
  4: 927,
  5: 2_280,
  6: 4_908,
  7: 9_590,
  8: 17_564,
  9: 30_536,
  10: 51_012,
  11: 82_746,
  12: 131_368,
  13: 205_048,
  14: 315_864,
  15: 481_484,
  16: 727_896,
  17: 1_094_904,
  18: 1_639_248,
  19: 2_447_448,
  20: 3_644_748,
  21: 68_880_000,
};

// Quality effects for common gem categories
const QUALITY_CATEGORIES = [
  { label: "Attack Gem", effect: "increased Attack Speed", perPercent: "0.5%" },
  { label: "Spell Gem", effect: "increased Cast Speed", perPercent: "0.5%" },
  { label: "Aura Gem", effect: "increased Area of Effect", perPercent: "1%" },
  { label: "Support Gem", effect: "varies by gem", perPercent: "varies" },
  { label: "Vaal Gem", effect: "increased Soul gain", perPercent: "1%" },
];

export default function ImbueGemCalculator() {
  const [currentQuality, setCurrentQuality] = useState(0);
  const [targetQuality, setTargetQuality] = useState(20);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [targetLevel, setTargetLevel] = useState(20);

  const gcpResult = useMemo(() => {
    const needed = Math.max(0, targetQuality - currentQuality);
    return {
      gcpNeeded: needed,
      // Approximate GCP value in chaos (varies by league, ~1-2c each typically)
      note: needed === 0 ? "Already at target quality" : `${needed} Gemcutter's Prism${needed > 1 ? "s" : ""} required`,
    };
  }, [currentQuality, targetQuality]);

  const xpResult = useMemo(() => {
    const clampedCurrent = Math.max(1, Math.min(21, currentLevel));
    const clampedTarget = Math.max(1, Math.min(21, targetLevel));
    const currentXp = GEM_XP_TABLE[clampedCurrent] || 0;
    const targetXp = GEM_XP_TABLE[clampedTarget] || 0;
    const needed = Math.max(0, targetXp - currentXp);
    return {
      currentXp,
      targetXp,
      xpNeeded: needed,
    };
  }, [currentLevel, targetLevel]);

  const formatNumber = (n: number) => {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
    if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
    return n.toLocaleString();
  };

  return (
    <div className="space-y-6 animate-fade-in-delay-1">
      {/* GCP Calculator */}
      <div className="poe-frame">
        <div className="poe-frame-header">
          <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
            GCP Quality Calculator
          </h2>
        </div>
        <div className="poe-frame-body space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-poe-text-dim text-xs block mb-1.5">
                Current Quality (%)
              </label>
              <input
                type="number"
                min={0}
                max={30}
                value={currentQuality}
                onChange={(e) => setCurrentQuality(Math.max(0, Math.min(30, parseInt(e.target.value) || 0)))}
                className="stat-input w-full"
              />
            </div>
            <div>
              <label className="text-poe-text-dim text-xs block mb-1.5">
                Target Quality (%)
              </label>
              <input
                type="number"
                min={0}
                max={30}
                value={targetQuality}
                onChange={(e) => setTargetQuality(Math.max(0, Math.min(30, parseInt(e.target.value) || 0)))}
                className="stat-input w-full"
              />
            </div>
          </div>

          {/* Quick presets */}
          <div className="flex flex-wrap gap-2">
            <span className="text-poe-text-dim text-xs">Quick:</span>
            {[
              { label: "0% → 20%", from: 0, to: 20 },
              { label: "5% → 20%", from: 5, to: 20 },
              { label: "10% → 20%", from: 10, to: 20 },
              { label: "0% → 23%", from: 0, to: 23 },
            ].map((preset) => (
              <button
                key={preset.label}
                onClick={() => {
                  setCurrentQuality(preset.from);
                  setTargetQuality(preset.to);
                }}
                className="text-xs px-2 py-0.5 border border-poe-border text-poe-text-dim hover:border-poe-gold/40 hover:text-poe-gold transition-colors"
              >
                {preset.label}
              </button>
            ))}
          </div>

          {/* Result */}
          <div className="stat-card text-center">
            <div className="text-poe-gold font-[family-name:var(--font-heading)] text-3xl tracking-wide">
              {gcpResult.gcpNeeded}
            </div>
            <div className="text-poe-text-dim text-xs mt-1">
              {gcpResult.note}
            </div>
          </div>
        </div>
      </div>

      {/* XP Calculator */}
      <div className="poe-frame">
        <div className="poe-frame-header">
          <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
            Gem Leveling XP Calculator
          </h2>
        </div>
        <div className="poe-frame-body space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-poe-text-dim text-xs block mb-1.5">
                Current Level
              </label>
              <input
                type="number"
                min={1}
                max={21}
                value={currentLevel}
                onChange={(e) => setCurrentLevel(Math.max(1, Math.min(21, parseInt(e.target.value) || 1)))}
                className="stat-input w-full"
              />
            </div>
            <div>
              <label className="text-poe-text-dim text-xs block mb-1.5">
                Target Level
              </label>
              <input
                type="number"
                min={1}
                max={21}
                value={targetLevel}
                onChange={(e) => setTargetLevel(Math.max(1, Math.min(21, parseInt(e.target.value) || 1)))}
                className="stat-input w-full"
              />
            </div>
          </div>

          {/* Quick presets */}
          <div className="flex flex-wrap gap-2">
            <span className="text-poe-text-dim text-xs">Quick:</span>
            {[
              { label: "1 → 20", from: 1, to: 20 },
              { label: "1 → 21", from: 1, to: 21 },
              { label: "10 → 20", from: 10, to: 20 },
              { label: "15 → 20", from: 15, to: 20 },
            ].map((preset) => (
              <button
                key={preset.label}
                onClick={() => {
                  setCurrentLevel(preset.from);
                  setTargetLevel(preset.to);
                }}
                className="text-xs px-2 py-0.5 border border-poe-border text-poe-text-dim hover:border-poe-gold/40 hover:text-poe-gold transition-colors"
              >
                {preset.label}
              </button>
            ))}
          </div>

          {/* Result */}
          <div className="stat-card text-center">
            <div className="text-poe-gold font-[family-name:var(--font-heading)] text-3xl tracking-wide">
              {formatNumber(xpResult.xpNeeded)}
            </div>
            <div className="text-poe-text-dim text-xs mt-1">
              Experience needed (Level {currentLevel} → {targetLevel})
            </div>
          </div>

          {/* XP breakdown table */}
          {xpResult.xpNeeded > 0 && (
            <div className="overflow-x-auto -mx-5 px-5">
              <table className="results-table text-xs">
                <thead>
                  <tr>
                    <th>Level</th>
                    <th>Cumulative XP</th>
                    <th>XP to Next</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from(
                    { length: Math.min(targetLevel, 21) - Math.max(currentLevel, 1) + 1 },
                    (_, i) => Math.max(currentLevel, 1) + i
                  ).map((level) => {
                    const nextLevel = level + 1;
                    const currentXp = GEM_XP_TABLE[level] || 0;
                    const nextXp = GEM_XP_TABLE[nextLevel];
                    const xpToNext = nextXp ? nextXp - currentXp : null;
                    return (
                      <tr key={level}>
                        <td>{level}</td>
                        <td>{currentXp.toLocaleString()}</td>
                        <td>{xpToNext ? xpToNext.toLocaleString() : "—"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Quality Effects Reference */}
      <div className="poe-frame">
        <div className="poe-frame-header">
          <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
            Common Quality Effects
          </h2>
        </div>
        <div className="poe-frame-body">
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="results-table text-xs">
              <thead>
                <tr>
                  <th>Gem Type</th>
                  <th>Quality Bonus</th>
                  <th>Per 1%</th>
                </tr>
              </thead>
              <tbody>
                {QUALITY_CATEGORIES.map((cat) => (
                  <tr key={cat.label}>
                    <td>{cat.label}</td>
                    <td>{cat.effect}</td>
                    <td>{cat.perPercent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-poe-text-dim text-xs mt-3 leading-relaxed">
            Quality effects vary per gem. Check each gem&apos;s tooltip for its specific quality bonus.
            At 20% quality, most attack gems gain 10% increased attack speed, and most spell gems gain
            10% increased cast speed.
          </p>
        </div>
      </div>
    </div>
  );
}
