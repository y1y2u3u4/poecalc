import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeless Jewel Calculator - PoE Jewel Seed Finder",
  description:
    "Find the best Timeless Jewel seed for your Path of Exile build. Analyze Elegant Hubris, Militant Faith, Brutal Restraint, Lethal Pride, and Glorious Vanity transformations.",
  keywords: [
    "timeless jewel calculator",
    "poe timeless jewel",
    "elegant hubris calculator",
    "militant faith calculator",
    "path of exile jewel seed",
    "poe jewel finder",
    "timeless jewel seed",
  ],
  alternates: {
    canonical: "https://poecalc.tools/timeless-jewel-calculator",
  },
  openGraph: {
    title: "Timeless Jewel Calculator - PoE Jewel Seed Finder",
    description:
      "Find the best Timeless Jewel seed for your Path of Exile build. Coming soon to PoECalc.tools.",
    url: "https://poecalc.tools/timeless-jewel-calculator",
    type: "website",
  },
};

const JEWELS = [
  { name: "Elegant Hubris", faction: "Eternal Empire", color: "#af6025" },
  { name: "Militant Faith", faction: "Templars", color: "#c8b07a" },
  { name: "Brutal Restraint", faction: "Maraketh", color: "#2dc50e" },
  { name: "Lethal Pride", faction: "Karui", color: "#d02040" },
  { name: "Glorious Vanity", faction: "Vaal", color: "#4488ee" },
];

export default function TimelessJewelPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-10">
      <div className="mb-8 animate-fade-in">
        <p className="font-[family-name:var(--font-heading)] text-poe-text-dim text-xs tracking-[4px] uppercase mb-3">
          Build Optimization
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-poe-gold tracking-wide mb-3">
          Timeless Jewel Calculator
        </h1>
        <hr className="poe-separator max-w-[200px] mb-4" />
        <p className="text-poe-text-dim text-[15px] leading-relaxed max-w-xl">
          Find the optimal Timeless Jewel seed for your passive tree build.
        </p>
      </div>

      {/* Coming Soon */}
      <div className="poe-frame animate-fade-in-delay-1">
        <div className="poe-frame-header text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-poe-gold text-sm tracking-[4px] uppercase">
            In Development
          </h2>
        </div>
        <div className="poe-frame-body text-center space-y-6">
          <p className="text-poe-text-dim leading-relaxed max-w-md mx-auto">
            A comprehensive seed analyzer for all Timeless Jewel types. Preview
            node transformations. Find optimal placements.
          </p>

          {/* Jewel Types */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto text-left">
            {JEWELS.map((jewel) => (
              <div
                key={jewel.name}
                className="stat-card flex items-center gap-3"
              >
                <div
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{
                    backgroundColor: jewel.color,
                    boxShadow: `0 0 6px ${jewel.color}40`,
                  }}
                />
                <div>
                  <div className="text-poe-text-bright text-sm">
                    {jewel.name}
                  </div>
                  <div className="text-poe-text-dim text-xs">
                    {jewel.faction}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SEO Content */}
      <div className="poe-frame mt-6 animate-fade-in-delay-2">
        <div className="poe-frame-header">
          <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
            About Timeless Jewels
          </h2>
        </div>
        <div className="poe-frame-body space-y-4 text-sm text-poe-text-dim leading-relaxed">
          <p>
            Timeless Jewels are powerful unique jewels in Path of Exile that
            transform passive skill tree nodes within their radius. Each jewel
            has a seed number that determines exactly how nearby passives are
            modified.
          </p>
          <p>
            Finding the right seed can be the difference between a good build
            and a great one. The Timeless Jewel Calculator will help you search
            through thousands of possible seeds to find the perfect combination
            of transformed notables for your build.
          </p>
          <p>
            The five Timeless Jewel types each offer unique transformations:
            Elegant Hubris converts notables to new ones, Militant Faith adds
            devotion-related mods, Brutal Restraint adds dexterity-based
            modifiers, Lethal Pride adds strength-based bonuses, and Glorious
            Vanity corrupts nodes with chaos-themed modifications.
          </p>
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Timeless Jewel Calculator",
            url: "https://poecalc.tools/timeless-jewel-calculator",
            description:
              "Find the best Timeless Jewel seed for your Path of Exile build.",
            applicationCategory: "GameApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          }),
        }}
      />
    </div>
  );
}
