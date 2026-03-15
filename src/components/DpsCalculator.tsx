"use client";

import { useState, useMemo } from "react";

interface DpsResult {
  averageHit: number;
  baseDps: number;
  effectiveCritMulti: number;
  dpsWithCrit: number;
}

function formatNumber(n: number): string {
  if (!isFinite(n)) return "N/A";
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(2) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(2) + "K";
  return n.toFixed(2);
}

export default function DpsCalculator() {
  const [minDamage, setMinDamage] = useState(50);
  const [maxDamage, setMaxDamage] = useState(100);
  const [attackSpeed, setAttackSpeed] = useState(1.5);
  const [critChance, setCritChance] = useState(5);
  const [critMultiplier, setCritMultiplier] = useState(150);

  const result: DpsResult = useMemo(() => {
    const averageHit = (minDamage + maxDamage) / 2;
    const baseDps = averageHit * attackSpeed;
    const effectiveCritMulti =
      1 + (critChance / 100) * (critMultiplier / 100 - 1);
    const dpsWithCrit = baseDps * effectiveCritMulti;

    return { averageHit, baseDps, effectiveCritMulti, dpsWithCrit };
  }, [minDamage, maxDamage, attackSpeed, critChance, critMultiplier]);

  return (
    <div className="space-y-6">
      {/* Input Configuration */}
      <div className="poe-frame">
        <div className="poe-frame-header">
          <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
            Damage Configuration
          </h2>
        </div>
        <div className="poe-frame-body space-y-6">
          {/* Base Damage Row */}
          <div>
            <label className="stat-label text-poe-text-dim block mb-2">
              Base Damage
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="stat-label text-poe-text-dim text-[10px] block mb-1">
                  Min Damage
                </label>
                <input
                  type="number"
                  min={0}
                  value={minDamage}
                  onChange={(e) =>
                    setMinDamage(Math.max(0, Number(e.target.value)))
                  }
                  className="w-full"
                />
              </div>
              <div>
                <label className="stat-label text-poe-text-dim text-[10px] block mb-1">
                  Max Damage
                </label>
                <input
                  type="number"
                  min={0}
                  value={maxDamage}
                  onChange={(e) =>
                    setMaxDamage(Math.max(0, Number(e.target.value)))
                  }
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Attack Speed and Crit Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="stat-label text-poe-text-dim text-[10px] block mb-1">
                Attack Speed (attacks/sec)
              </label>
              <input
                type="number"
                min={0.1}
                step={0.01}
                value={attackSpeed}
                onChange={(e) =>
                  setAttackSpeed(Math.max(0.01, Number(e.target.value)))
                }
                className="w-full"
              />
            </div>
            <div>
              <label className="stat-label text-poe-text-dim text-[10px] block mb-1">
                Crit Chance (%)
              </label>
              <input
                type="number"
                min={0}
                max={100}
                step={0.1}
                value={critChance}
                onChange={(e) =>
                  setCritChance(
                    Math.max(0, Math.min(100, Number(e.target.value)))
                  )
                }
                className="w-full"
              />
            </div>
            <div>
              <label className="stat-label text-poe-text-dim text-[10px] block mb-1">
                Crit Multiplier (%)
              </label>
              <input
                type="number"
                min={100}
                step={1}
                value={critMultiplier}
                onChange={(e) =>
                  setCritMultiplier(Math.max(100, Number(e.target.value)))
                }
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="poe-frame animate-fade-in">
        <div className="poe-frame-header">
          <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
            DPS Results
          </h2>
        </div>
        <div className="poe-frame-body space-y-6">
          {/* Stat Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="stat-card">
              <div className="stat-label text-poe-text-dim text-[10px] mb-1">
                Average Hit
              </div>
              <div className="text-poe-text-bright font-[family-name:var(--font-heading)] text-lg">
                {formatNumber(result.averageHit)}
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-label text-poe-text-dim text-[10px] mb-1">
                Base DPS
              </div>
              <div className="text-poe-text-bright font-[family-name:var(--font-heading)] text-lg">
                {formatNumber(result.baseDps)}
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-label text-poe-text-dim text-[10px] mb-1">
                Effective Crit Multi
              </div>
              <div className="text-poe-text-bright font-[family-name:var(--font-heading)] text-lg">
                {result.effectiveCritMulti.toFixed(4)}x
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-label text-poe-text-dim text-[10px] mb-1">
                DPS with Crit
              </div>
              <div className="text-poe-gold font-[family-name:var(--font-heading)] text-lg">
                {formatNumber(result.dpsWithCrit)}
              </div>
            </div>
          </div>

          {/* Formula Breakdown */}
          <div>
            <h3 className="stat-label text-poe-text-dim text-[10px] mb-3">
              Calculation Breakdown
            </h3>
            <div className="space-y-2 text-sm text-poe-text-dim">
              <div className="flex justify-between items-center py-1.5 border-b border-poe-border/40">
                <span>Average Hit</span>
                <code className="font-[family-name:var(--font-mono)] text-poe-gold-light text-xs">
                  ({minDamage} + {maxDamage}) / 2 = {result.averageHit.toFixed(2)}
                </code>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-poe-border/40">
                <span>Base DPS</span>
                <code className="font-[family-name:var(--font-mono)] text-poe-gold-light text-xs">
                  {result.averageHit.toFixed(2)} x {attackSpeed} = {result.baseDps.toFixed(2)}
                </code>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-poe-border/40">
                <span>Effective Crit Multi</span>
                <code className="font-[family-name:var(--font-mono)] text-poe-gold-light text-xs">
                  1 + ({critChance}% x ({critMultiplier}% - 1)) = {result.effectiveCritMulti.toFixed(4)}x
                </code>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-poe-text-bright font-semibold">DPS with Crit</span>
                <code className="font-[family-name:var(--font-mono)] text-poe-gold text-xs font-semibold">
                  {result.baseDps.toFixed(2)} x {result.effectiveCritMulti.toFixed(4)} = {result.dpsWithCrit.toFixed(2)}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
