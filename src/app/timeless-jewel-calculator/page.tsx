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

export default function TimelessJewelPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-poe-gold mb-2">
          Timeless Jewel Calculator
        </h1>
        <p className="text-poe-text-dim">
          Find the optimal Timeless Jewel seed for your passive tree build.
        </p>
      </div>

      {/* Coming Soon Card */}
      <div className="bg-poe-card border border-poe-border rounded-lg p-12 text-center">
        <div className="text-5xl mb-6">◆</div>
        <h2 className="text-2xl font-bold text-poe-gold mb-4">Coming Soon</h2>
        <p className="text-poe-text-dim max-w-lg mx-auto mb-8 leading-relaxed">
          We are building a comprehensive Timeless Jewel Calculator that will
          help you find the best jewel seed for your build. Analyze notable
          transformations for all five Timeless Jewel types:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
          {[
            { name: "Elegant Hubris", faction: "Eternal Empire" },
            { name: "Militant Faith", faction: "Templars" },
            { name: "Brutal Restraint", faction: "Maraketh" },
            { name: "Lethal Pride", faction: "Karui" },
            { name: "Glorious Vanity", faction: "Vaal" },
          ].map((jewel) => (
            <div
              key={jewel.name}
              className="bg-poe-highlight border border-poe-border rounded-lg p-4"
            >
              <div className="text-poe-gold-light text-sm font-semibold">
                {jewel.name}
              </div>
              <div className="text-poe-text-dim text-xs">{jewel.faction}</div>
            </div>
          ))}
        </div>

        {/* Email Signup Placeholder */}
        <div className="bg-poe-highlight border border-poe-border rounded-lg p-6 max-w-md mx-auto">
          <h3 className="text-poe-text font-semibold mb-2">Get Notified</h3>
          <p className="text-poe-text-dim text-sm mb-4">
            Be the first to know when the Timeless Jewel Calculator launches.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1"
              disabled
            />
            <button
              className="bg-poe-gold text-poe-bg px-4 py-2 rounded-md font-semibold text-sm opacity-50 cursor-not-allowed"
              disabled
            >
              Notify Me
            </button>
          </div>
          <p className="text-poe-text-dim text-xs mt-2">
            Email notifications coming soon.
          </p>
        </div>
      </div>

      {/* SEO Content */}
      <div className="bg-poe-card border border-poe-border rounded-lg p-6 mt-8">
        <h2 className="text-poe-gold text-lg font-bold mb-4">
          About Timeless Jewels in Path of Exile
        </h2>
        <div className="space-y-3 text-sm text-poe-text-dim leading-relaxed">
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
