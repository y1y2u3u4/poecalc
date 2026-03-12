"use client";

import { useState, useMemo } from "react";
import {
  calculateVorici,
  type SocketColor,
  type VoriciResult,
} from "@/lib/vorici";

const COLOR_CYCLE: SocketColor[] = ["R", "G", "B"];

function colorClassName(c: SocketColor | null): string {
  switch (c) {
    case "R":
      return "socket-red";
    case "G":
      return "socket-green";
    case "B":
      return "socket-blue";
    default:
      return "socket-none";
  }
}

function formatNumber(n: number): string {
  if (!isFinite(n)) return "N/A";
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1) + "K";
  return n.toFixed(1);
}

export default function VoriciCalculator() {
  const [numSockets, setNumSockets] = useState(6);
  const [strReq, setStrReq] = useState(0);
  const [dexReq, setDexReq] = useState(0);
  const [intReq, setIntReq] = useState(0);
  const [desiredColors, setDesiredColors] = useState<(SocketColor | null)[]>([
    null, null, null, null, null, null,
  ]);

  const toggleColor = (index: number) => {
    setDesiredColors((prev) => {
      const next = [...prev];
      const current = next[index];
      if (current === null) {
        next[index] = "R";
      } else {
        const currentIdx = COLOR_CYCLE.indexOf(current);
        const nextIdx = (currentIdx + 1) % COLOR_CYCLE.length;
        next[index] = COLOR_CYCLE[nextIdx];
      }
      return next;
    });
  };

  const activeColors = desiredColors
    .slice(0, numSockets)
    .filter((c): c is SocketColor => c !== null);

  const allSocketsSet = activeColors.length === numSockets;

  const result: VoriciResult | null = useMemo(() => {
    if (!allSocketsSet) return null;
    return calculateVorici({
      numSockets,
      strReq,
      dexReq,
      intReq,
      desiredColors: activeColors,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numSockets, strReq, dexReq, intReq, allSocketsSet, activeColors.join(",")]);

  return (
    <div className="space-y-6">
      {/* Item Settings */}
      <div className="poe-frame">
        <div className="poe-frame-header">
          <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
            Item Configuration
          </h2>
        </div>
        <div className="poe-frame-body space-y-6">
          {/* Sockets + Stats row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="stat-label text-poe-text-dim block mb-2">
                Sockets
              </label>
              <select
                value={numSockets}
                onChange={(e) => setNumSockets(Number(e.target.value))}
                className="w-full"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} Socket{n > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="stat-label text-poe-text-dim block mb-2">
                Stat Requirements
              </label>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="stat-label text-poe-red block mb-1">
                    STR
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={300}
                    value={strReq}
                    onChange={(e) =>
                      setStrReq(Math.max(0, Math.min(300, Number(e.target.value))))
                    }
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="stat-label text-poe-green block mb-1">
                    DEX
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={300}
                    value={dexReq}
                    onChange={(e) =>
                      setDexReq(Math.max(0, Math.min(300, Number(e.target.value))))
                    }
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="stat-label text-poe-blue block mb-1">
                    INT
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={300}
                    value={intReq}
                    onChange={(e) =>
                      setIntReq(Math.max(0, Math.min(300, Number(e.target.value))))
                    }
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Socket Colors */}
          <div>
            <label className="stat-label text-poe-text-dim block mb-3">
              Desired Colors
            </label>
            <div className="flex items-center gap-1.5 flex-wrap">
              {Array.from({ length: numSockets }).map((_, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => toggleColor(i)}
                    className={`socket-btn ${colorClassName(desiredColors[i] ?? null)}`}
                    aria-label={`Socket ${i + 1}: ${desiredColors[i] ?? "unset"}`}
                  >
                    <span>{desiredColors[i] ?? "?"}</span>
                  </button>
                  {i < numSockets - 1 && <div className="socket-link" />}
                </div>
              ))}
            </div>
            {!allSocketsSet && (
              <p className="text-poe-text-dim text-xs mt-3 italic">
                Click each socket to cycle through Red, Green, Blue.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="poe-frame animate-fade-in">
          <div className="poe-frame-header">
            <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
              Analysis
            </h2>
          </div>
          <div className="poe-frame-body space-y-6">
            {/* Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="stat-card">
                <div className="stat-label text-poe-text-dim text-[10px] mb-1">
                  Success Rate
                </div>
                <div className="text-poe-gold font-[family-name:var(--font-heading)] text-lg">
                  {(result.probability * 100).toFixed(4)}%
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-label text-poe-text-dim text-[10px] mb-1">
                  Avg. Chromes
                </div>
                <div className="text-poe-text-bright font-[family-name:var(--font-heading)] text-lg">
                  {formatNumber(result.avgChromes)}
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-label text-poe-text-dim text-[10px] mb-1">
                  90th Percentile
                </div>
                <div className="text-poe-text-bright font-[family-name:var(--font-heading)] text-lg">
                  {formatNumber(result.percentile90)}
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-label text-poe-text-dim text-[10px] mb-1">
                  99th Percentile
                </div>
                <div className="text-poe-text-bright font-[family-name:var(--font-heading)] text-lg">
                  {formatNumber(result.percentile99)}
                </div>
              </div>
            </div>

            {/* Method Comparison */}
            <div>
              <h3 className="stat-label text-poe-text-dim text-[10px] mb-3">
                Method Comparison
              </h3>
              <div className="overflow-x-auto -mx-5 px-5">
                <table className="results-table">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Avg. Cost</th>
                      <th className="hidden sm:table-cell">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.craftingMethods.map((method, i) => (
                      <tr
                        key={i}
                        className={method.isRecommended ? "recommended-row" : ""}
                      >
                        <td>
                          <span className="flex items-center gap-2">
                            <span>{method.name}</span>
                            {method.isRecommended && (
                              <span className="badge-recommended">Best</span>
                            )}
                          </span>
                        </td>
                        <td>{formatNumber(method.cost)}</td>
                        <td className="hidden sm:table-cell">
                          {method.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* How It Works */}
      <div className="poe-frame">
        <div className="poe-frame-header">
          <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
            How It Works
          </h2>
        </div>
        <div className="poe-frame-body space-y-4 text-sm text-poe-text-dim leading-relaxed">
          <p>
            In Path of Exile, item sockets can be colored{" "}
            <span className="text-poe-red font-semibold">Red</span>,{" "}
            <span className="text-poe-green font-semibold">Green</span>, or{" "}
            <span className="text-poe-blue font-semibold">Blue</span>. The
            probability of each color depends on the item&apos;s stat
            requirements:
          </p>
          <ul className="space-y-1.5 ml-4">
            <li className="flex items-start gap-2">
              <span className="text-poe-gold mt-0.5">&#8226;</span>
              <span>
                Higher <span className="text-poe-red">Strength</span> requirement
                increases <span className="text-poe-red">Red</span> socket chance
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-poe-gold mt-0.5">&#8226;</span>
              <span>
                Higher <span className="text-poe-green">Dexterity</span>{" "}
                requirement increases{" "}
                <span className="text-poe-green">Green</span> socket chance
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-poe-gold mt-0.5">&#8226;</span>
              <span>
                Higher <span className="text-poe-blue">Intelligence</span>{" "}
                requirement increases{" "}
                <span className="text-poe-blue">Blue</span> socket chance
              </span>
            </li>
          </ul>
          <hr className="poe-separator my-4" />
          <p>
            <span className="text-poe-text-bright">Probability formula:</span>{" "}
            For each socket, the chance of rolling a specific color is{" "}
            <code className="font-[family-name:var(--font-mono)] text-poe-gold-light text-xs bg-[#0c0a08] px-1.5 py-0.5 border border-poe-border">
              (requirement + 10) / (total_requirements + 30)
            </code>
            . If all requirements are 0, each color has an equal 1/3 chance.
          </p>
        </div>
      </div>
    </div>
  );
}
