"use client";

import { useState, useMemo } from "react";

interface Currency {
  name: string;
  chaosValue: number;
  icon: string;
}

const CURRENCIES: Currency[] = [
  { name: "Chaos Orb", chaosValue: 1, icon: "C" },
  { name: "Divine Orb", chaosValue: 150, icon: "D" },
  { name: "Exalted Orb", chaosValue: 12, icon: "Ex" },
  { name: "Vaal Orb", chaosValue: 1, icon: "V" },
  { name: "Chromatic Orb", chaosValue: 0.08, icon: "Ch" },
  { name: "Jeweller's Orb", chaosValue: 0.1, icon: "J" },
  { name: "Fusing Orb", chaosValue: 0.25, icon: "Fu" },
  { name: "Alchemy Orb", chaosValue: 0.15, icon: "Al" },
  { name: "Regal Orb", chaosValue: 1, icon: "Re" },
  { name: "Gemcutter's Prism", chaosValue: 1.5, icon: "GCP" },
  { name: "Blessed Orb", chaosValue: 0.5, icon: "Bl" },
];

function formatRate(value: number): string {
  if (value >= 1000) return value.toFixed(0);
  if (value >= 100) return value.toFixed(1);
  if (value >= 10) return value.toFixed(2);
  if (value >= 1) return value.toFixed(2);
  return value.toFixed(4);
}

export default function CurrencyCalculator() {
  const [sourceIndex, setSourceIndex] = useState(0);
  const [targetIndex, setTargetIndex] = useState(1);
  const [amount, setAmount] = useState<string>("1");

  const converted = useMemo(() => {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) return null;
    const source = CURRENCIES[sourceIndex];
    const target = CURRENCIES[targetIndex];
    const chaosEquivalent = numAmount * source.chaosValue;
    return chaosEquivalent / target.chaosValue;
  }, [sourceIndex, targetIndex, amount]);

  const swapCurrencies = () => {
    setSourceIndex(targetIndex);
    setTargetIndex(sourceIndex);
  };

  return (
    <div className="space-y-6">
      {/* Converter */}
      <div className="poe-frame">
        <div className="poe-frame-header">
          <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
            Currency Converter
          </h2>
        </div>
        <div className="poe-frame-body space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-end">
            {/* Source */}
            <div>
              <label className="stat-label text-poe-text-dim block mb-2">
                From
              </label>
              <select
                value={sourceIndex}
                onChange={(e) => setSourceIndex(Number(e.target.value))}
                className="w-full mb-3"
              >
                {CURRENCIES.map((c, i) => (
                  <option key={i} value={i}>
                    {c.name}
                  </option>
                ))}
              </select>
              <label className="stat-label text-poe-text-dim block mb-2">
                Amount
              </label>
              <input
                type="number"
                min={0}
                step="any"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full"
                placeholder="Enter amount"
              />
            </div>

            {/* Swap Button */}
            <div className="flex justify-center md:pb-2">
              <button
                type="button"
                onClick={swapCurrencies}
                className="w-10 h-10 border border-poe-border bg-[#0c0a08] text-poe-gold hover:text-poe-gold-light hover:border-poe-gold transition-colors flex items-center justify-center"
                aria-label="Swap currencies"
              >
                &#8644;
              </button>
            </div>

            {/* Target */}
            <div>
              <label className="stat-label text-poe-text-dim block mb-2">
                To
              </label>
              <select
                value={targetIndex}
                onChange={(e) => setTargetIndex(Number(e.target.value))}
                className="w-full mb-3"
              >
                {CURRENCIES.map((c, i) => (
                  <option key={i} value={i}>
                    {c.name}
                  </option>
                ))}
              </select>
              <label className="stat-label text-poe-text-dim block mb-2">
                Result
              </label>
              <div className="bg-[#0c0a08] border border-poe-border px-4 py-[10px] font-[family-name:var(--font-mono)] text-poe-gold-light text-[15px] min-h-[43px] flex items-center">
                {converted !== null ? formatRate(converted) : "--"}
              </div>
            </div>
          </div>

          <p className="text-poe-text-dim text-xs italic text-center">
            Rates are approximate reference values. Check{" "}
            <a
              href="https://poe.ninja"
              target="_blank"
              rel="noopener noreferrer"
              className="poe-link text-poe-gold"
            >
              poe.ninja
            </a>{" "}
            for live prices.
          </p>
        </div>
      </div>

      {/* Reference Rate Table */}
      <div className="poe-frame">
        <div className="poe-frame-header">
          <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
            Reference Exchange Rates
          </h2>
        </div>
        <div className="poe-frame-body">
          <p className="text-poe-text-dim text-xs mb-4 italic">
            Reference rates &mdash; actual prices vary by league
          </p>
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="results-table">
              <thead>
                <tr>
                  <th>Currency</th>
                  <th>Chaos Value</th>
                  <th className="hidden sm:table-cell">Per Chaos</th>
                </tr>
              </thead>
              <tbody>
                {CURRENCIES.filter((c) => c.name !== "Chaos Orb").map(
                  (currency, i) => (
                    <tr key={i}>
                      <td>
                        <span className="flex items-center gap-2">
                          <span className="inline-flex items-center justify-center w-7 h-7 bg-[#0c0a08] border border-poe-border font-[family-name:var(--font-heading)] text-poe-gold text-[10px]">
                            {currency.icon}
                          </span>
                          <span>{currency.name}</span>
                        </span>
                      </td>
                      <td>
                        {currency.chaosValue >= 1
                          ? `${currency.chaosValue} Chaos`
                          : `${currency.chaosValue} Chaos`}
                      </td>
                      <td className="hidden sm:table-cell">
                        {currency.chaosValue >= 1
                          ? `1 : ${currency.chaosValue}`
                          : `${formatRate(1 / currency.chaosValue)} per Chaos`}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
