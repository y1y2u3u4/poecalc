import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "About PoECalc.tools - Free Path of Exile calculator tools for crafting optimization.",
  alternates: {
    canonical: "https://poecalc.tools/about",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-10">
      <div className="mb-8 animate-fade-in">
        <h1 className="font-[family-name:var(--font-heading)] text-2xl text-poe-gold tracking-wide mb-3">
          About
        </h1>
        <hr className="poe-separator max-w-[120px]" />
      </div>

      <div className="poe-frame animate-fade-in-delay-1">
        <div className="poe-frame-body space-y-8 text-sm leading-relaxed">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-base tracking-wide mb-3">
              What is PoECalc.tools?
            </h2>
            <p className="text-poe-text-dim">
              A collection of free calculator tools for Path of Exile players.
              Built to help you make informed crafting decisions and save
              currency.
            </p>
          </div>

          <hr className="poe-separator" />

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-base tracking-wide mb-3">
              Tools
            </h2>
            <ul className="space-y-4">
              <li>
                <Link href="/vorici-calculator" className="poe-link text-poe-gold font-semibold">
                  Vorici Chromatic Calculator
                </Link>
                <p className="text-poe-text-dim mt-1">
                  Calculate the most cost-effective method to color your item
                  sockets. Compares Chromatic Orb spam with Crafting Bench
                  recipes.
                </p>
              </li>
              <li>
                <Link href="/timeless-jewel-calculator" className="poe-link text-poe-gold font-semibold">
                  Timeless Jewel Calculator
                </Link>
                <span className="text-poe-text-dim text-xs ml-2">(Coming Soon)</span>
                <p className="text-poe-text-dim mt-1">
                  Find the optimal Timeless Jewel seed for your passive tree
                  build. All five jewel types supported.
                </p>
              </li>
            </ul>
          </div>

          <hr className="poe-separator" />

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-base tracking-wide mb-3">
              Privacy &amp; Architecture
            </h2>
            <p className="text-poe-text-dim">
              All calculations run in your browser. No server, no database, no
              tracking. We use the exact probability formulas from Path of Exile
              for accurate estimates.
            </p>
          </div>

          <hr className="poe-separator" />

          <p className="text-poe-text-dim text-xs">
            PoECalc.tools is a fan-made tool and is not affiliated with or
            endorsed by Grinding Gear Games. Path of Exile is a registered
            trademark of Grinding Gear Games.
          </p>
        </div>
      </div>
    </div>
  );
}
