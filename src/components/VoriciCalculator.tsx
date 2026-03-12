"use client";

import { useState, useMemo } from "react";
import {
  calculateVorici,
  type SocketColor,
  type VoriciResult,
} from "@/lib/vorici";

const COLOR_CYCLE: SocketColor[] = ["R", "G", "B"];

function colorLabel(c: SocketColor): string {
  switch (c) {
    case "R":
      return "R";
    case "G":
      return "G";
    case "B":
      return "B";
  }
}

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
    null,
    null,
    null,
    null,
    null,
    null,
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
  }, [numSockets, strReq, dexReq, intReq, allSocketsSet, activeColors.join(",")]);

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <div className="bg-poe-card border border-poe-border rounded-lg p-6">
        <h2 className="text-poe-gold text-lg font-bold mb-6">Item Settings</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Number of Sockets */}
          <div>
            <label className="block text-sm text-poe-text-dim mb-2">
              Number of Sockets
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

          {/* Stat Requirements */}
          <div>
            <label className="block text-sm text-poe-text-dim mb-2">
              Stat Requirements
            </label>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-xs text-poe-red mb-1 font-semibold">
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
                <label className="block text-xs text-poe-green mb-1 font-semibold">
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
                <label className="block text-xs text-poe-blue mb-1 font-semibold">
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

        {/* Desired Socket Colors */}
        <div className="mt-6">
          <label className="block text-sm text-poe-text-dim mb-3">
            Desired Socket Colors{" "}
            <span className="text-xs">(click to cycle R → G → B)</span>
          </label>
          <div className="flex gap-3 flex-wrap">
            {Array.from({ length: numSockets }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => toggleColor(i)}
                className={`socket-btn ${colorClassName(desiredColors[i] ?? null)}`}
                aria-label={`Socket ${i + 1}: ${desiredColors[i] ?? "unset"}`}
              >
                {desiredColors[i] ? colorLabel(desiredColors[i]!) : "?"}
              </button>
            ))}
          </div>
          {!allSocketsSet && (
            <p className="text-poe-text-dim text-xs mt-2">
              Click each socket to set its desired color.
            </p>
          )}
        </div>
      </div>

      {/* Results Section */}
      {result && (
        <div className="bg-poe-card border border-poe-border rounded-lg p-6">
          <h2 className="text-poe-gold text-lg font-bold mb-4">Results</h2>

          {/* Probability Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
            <div className="bg-poe-highlight rounded-lg p-4 border border-poe-border">
              <div className="text-poe-text-dim text-xs mb-1">
                Success Rate
              </div>
              <div className="text-poe-gold text-xl font-bold">
                {(result.probability * 100).toFixed(4)}%
              </div>
            </div>
            <div className="bg-poe-highlight rounded-lg p-4 border border-poe-border">
              <div className="text-poe-text-dim text-xs mb-1">
                Avg. Chromes
              </div>
              <div className="text-poe-text text-xl font-bold">
                {formatNumber(result.avgChromes)}
              </div>
            </div>
            <div className="bg-poe-highlight rounded-lg p-4 border border-poe-border">
              <div className="text-poe-text-dim text-xs mb-1">
                90th Percentile
              </div>
              <div className="text-poe-text text-xl font-bold">
                {formatNumber(result.percentile90)}
              </div>
            </div>
            <div className="bg-poe-highlight rounded-lg p-4 border border-poe-border">
              <div className="text-poe-text-dim text-xs mb-1">
                99th Percentile
              </div>
              <div className="text-poe-text text-xl font-bold">
                {formatNumber(result.percentile99)}
              </div>
            </div>
          </div>

          {/* Method Comparison Table */}
          <h3 className="text-poe-text font-semibold mb-3">
            Method Comparison
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-poe-border">
                  <th className="text-left py-3 px-4 text-poe-text-dim font-medium">
                    Method
                  </th>
                  <th className="text-right py-3 px-4 text-poe-text-dim font-medium">
                    Avg. Cost (Chromes)
                  </th>
                  <th className="text-left py-3 px-4 text-poe-text-dim font-medium hidden sm:table-cell">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {result.craftingMethods.map((method, i) => (
                  <tr
                    key={i}
                    className={`border-b border-poe-border/50 ${
                      method.isRecommended ? "bg-poe-gold/5" : ""
                    }`}
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <span className="text-poe-text">{method.name}</span>
                        {method.isRecommended && (
                          <span className="badge-recommended">Best</span>
                        )}
                      </div>
                    </td>
                    <td className="text-right py-3 px-4 font-mono text-poe-gold-light">
                      {formatNumber(method.cost)}
                    </td>
                    <td className="py-3 px-4 text-poe-text-dim text-xs hidden sm:table-cell">
                      {method.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* How It Works Section */}
      <div className="bg-poe-card border border-poe-border rounded-lg p-6">
        <h2 className="text-poe-gold text-lg font-bold mb-4">How It Works</h2>
        <div className="space-y-4 text-sm text-poe-text-dim leading-relaxed">
          <p>
            In Path of Exile, item sockets can be colored{" "}
            <span className="text-poe-red font-semibold">Red</span>,{" "}
            <span className="text-poe-green font-semibold">Green</span>, or{" "}
            <span className="text-poe-blue font-semibold">Blue</span>. The
            probability of each color depends on the item&apos;s stat
            requirements:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>
              Higher <span className="text-poe-red">Strength</span> requirement
              = more likely to roll{" "}
              <span className="text-poe-red">Red</span> sockets
            </li>
            <li>
              Higher <span className="text-poe-green">Dexterity</span>{" "}
              requirement = more likely to roll{" "}
              <span className="text-poe-green">Green</span> sockets
            </li>
            <li>
              Higher <span className="text-poe-blue">Intelligence</span>{" "}
              requirement = more likely to roll{" "}
              <span className="text-poe-blue">Blue</span> sockets
            </li>
          </ul>
          <p>
            This calculator compares Chromatic Orb spam versus Crafting Bench
            recipes to find the cheapest method to get your desired socket
            colors. Off-color sockets (e.g., Blue on a Strength item) are much
            harder and more expensive to obtain.
          </p>
          <p>
            <strong className="text-poe-text">Probability formula:</strong> For
            each socket, the chance of rolling a specific color is{" "}
            <code className="bg-poe-highlight px-1 rounded text-poe-gold-light">
              (requirement + 10) / (total_requirements + 30)
            </code>
            . If all requirements are 0, each color has an equal 1/3 chance.
          </p>
        </div>
      </div>
    </div>
  );
}
