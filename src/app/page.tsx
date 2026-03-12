import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PoE Calculator Tools - Free Path of Exile Calculators",
  description:
    "Free Path of Exile calculator tools including Vorici Chromatic Calculator and Timeless Jewel Calculator. Find the cheapest crafting methods for your PoE items.",
  alternates: {
    canonical: "https://poecalc.tools",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-poe-gold/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 pt-20 pb-16 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-poe-gold">Path of Exile</span>{" "}
            <span className="text-poe-text">Calculator Tools</span>
          </h1>
          <p className="text-poe-text-dim text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Free, accurate calculators to help you craft smarter in Path of
            Exile. Save your currency by finding the most efficient crafting
            methods.
          </p>

          {/* Tool Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Vorici Calculator Card */}
            <Link
              href="/vorici-calculator"
              className="group bg-poe-card border border-poe-border rounded-lg p-8 text-left hover:border-poe-gold/50 transition-all duration-200 hover:shadow-lg hover:shadow-poe-gold/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-poe-red via-poe-green to-poe-blue flex items-center justify-center text-white font-bold text-sm">
                  RGB
                </div>
                <h2 className="text-xl font-bold text-poe-text group-hover:text-poe-gold transition-colors">
                  Vorici Chromatic Calculator
                </h2>
              </div>
              <p className="text-poe-text-dim text-sm leading-relaxed mb-4">
                Calculate the cheapest way to get the socket colors you need.
                Compare Chromatic Orb spam vs Crafting Bench recipes to find the
                optimal method for your item.
              </p>
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="socket-btn socket-red"
                  style={{ width: 24, height: 24, fontSize: 10 }}
                >
                  R
                </div>
                <div
                  className="socket-btn socket-green"
                  style={{ width: 24, height: 24, fontSize: 10 }}
                >
                  G
                </div>
                <div
                  className="socket-btn socket-blue"
                  style={{ width: 24, height: 24, fontSize: 10 }}
                >
                  B
                </div>
              </div>
              <div className="text-poe-gold text-sm font-semibold group-hover:translate-x-1 transition-transform">
                Open Calculator →
              </div>
            </Link>

            {/* Timeless Jewel Card */}
            <Link
              href="/timeless-jewel-calculator"
              className="group bg-poe-card border border-poe-border rounded-lg p-8 text-left hover:border-poe-gold/50 transition-all duration-200 hover:shadow-lg hover:shadow-poe-gold/5 relative"
            >
              <div className="absolute top-4 right-4 bg-poe-gold/20 text-poe-gold text-xs font-semibold px-2 py-1 rounded">
                Coming Soon
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white text-lg">
                  ◆
                </div>
                <h2 className="text-xl font-bold text-poe-text group-hover:text-poe-gold transition-colors">
                  Timeless Jewel Calculator
                </h2>
              </div>
              <p className="text-poe-text-dim text-sm leading-relaxed mb-4">
                Find the best Timeless Jewel seed for your passive tree. Analyze
                notable transformations and find optimal jewel placements for
                your build.
              </p>
              <div className="text-poe-gold text-sm font-semibold group-hover:translate-x-1 transition-transform">
                Learn More →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center text-poe-text mb-12">
          Why Use <span className="text-poe-gold">PoECalc.tools</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl mb-3">&#9889;</div>
            <h3 className="text-poe-text font-semibold mb-2">
              Instant Results
            </h3>
            <p className="text-poe-text-dim text-sm">
              All calculations happen client-side. No loading, no waiting, no
              server needed.
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">&#127919;</div>
            <h3 className="text-poe-text font-semibold mb-2">
              Accurate Math
            </h3>
            <p className="text-poe-text-dim text-sm">
              Uses the exact probability formulas from Path of Exile to give you
              precise cost estimates.
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">&#128176;</div>
            <h3 className="text-poe-text font-semibold mb-2">Save Currency</h3>
            <p className="text-poe-text-dim text-sm">
              Compare different crafting methods to find the cheapest option and
              stop wasting Chromatic Orbs.
            </p>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "PoE Calculator Tools",
            url: "https://poecalc.tools",
            description:
              "Free Path of Exile calculator tools for crafting optimization.",
          }),
        }}
      />
    </>
  );
}
