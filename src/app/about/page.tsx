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
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-poe-gold mb-6">
        About PoECalc.tools
      </h1>

      <div className="bg-poe-card border border-poe-border rounded-lg p-6 space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-poe-text mb-3">
            What is PoECalc.tools?
          </h2>
          <p className="text-poe-text-dim leading-relaxed">
            PoECalc.tools is a collection of free calculator tools designed
            specifically for Path of Exile players. Our goal is to help you make
            informed crafting decisions and save your hard-earned currency.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-poe-text mb-3">
            Our Tools
          </h2>
          <ul className="space-y-4">
            <li>
              <Link
                href="/vorici-calculator"
                className="text-poe-gold hover:text-poe-gold-light transition-colors font-semibold"
              >
                Vorici Chromatic Calculator
              </Link>
              <p className="text-poe-text-dim text-sm mt-1">
                Calculate the most cost-effective method to color your item
                sockets. Compares Chromatic Orb spam with Crafting Bench recipes
                to find the cheapest approach.
              </p>
            </li>
            <li>
              <Link
                href="/timeless-jewel-calculator"
                className="text-poe-gold hover:text-poe-gold-light transition-colors font-semibold"
              >
                Timeless Jewel Calculator
              </Link>
              <span className="text-poe-text-dim text-xs ml-2">
                (Coming Soon)
              </span>
              <p className="text-poe-text-dim text-sm mt-1">
                Find the optimal Timeless Jewel seed for your passive tree
                build. Analyze transformations across all five jewel types.
              </p>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-poe-text mb-3">
            How It Works
          </h2>
          <p className="text-poe-text-dim leading-relaxed">
            All calculations run entirely in your browser. There is no server,
            no database, and no tracking. We use the exact probability formulas
            from Path of Exile to provide accurate estimates for crafting costs.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-poe-text mb-3">
            Disclaimer
          </h2>
          <p className="text-poe-text-dim leading-relaxed text-sm">
            PoECalc.tools is a fan-made tool and is not affiliated with or
            endorsed by Grinding Gear Games. Path of Exile is a registered
            trademark of Grinding Gear Games. All game-related content and
            formulas are based on community research and may not be 100%
            accurate to the game&apos;s internal calculations.
          </p>
        </div>
      </div>
    </div>
  );
}
