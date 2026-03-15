import type { Metadata } from "next";
import VoriciCalculator from "@/components/VoriciCalculator";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "PoE Color Calculator - Vorici Chromatic Socket Color Tool",
  description:
    "Free PoE socket color calculator. Find the cheapest way to chrome your items — compare Chromatic Orb spam vs Crafting Bench in seconds. Exact probability math with 90th/99th percentile estimates.",
  keywords: [
    "poe color calculator",
    "poe socket color calculator",
    "poe chromatic calculator",
    "vorici calculator",
    "vorici calc",
    "poe socket calculator",
    "chromatic orb calculator",
    "poe crafting bench",
    "off-color sockets",
    "vorici chromatic calculator",
    "poe color calc",
    "color calculator poe",
  ],
  alternates: {
    canonical: "https://poecalc.tools/vorici-calculator",
  },
  openGraph: {
    title: "PoE Color Calculator - Vorici Chromatic Socket Color Tool",
    description:
      "Free PoE socket color calculator. Find the cheapest way to chrome your items — compare Chromatic Orb spam vs Crafting Bench in seconds.",
    url: "https://poecalc.tools/vorici-calculator",
    type: "website",
  },
};

export default function VoriciCalculatorPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Vorici Chromatic Calculator" }]} />
    <div className="max-w-3xl mx-auto px-5 py-10">
      <div className="mb-8 animate-fade-in">
        <p className="font-[family-name:var(--font-heading)] text-poe-text-dim text-xs tracking-[4px] uppercase mb-3">
          Crafting Tool
        </p>
        <h1 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-poe-gold tracking-wide mb-3">
          Vorici Chromatic Calculator
        </h1>
        <hr className="poe-separator max-w-[200px] mb-4" />
        <p className="text-poe-text-dim text-[15px] leading-relaxed max-w-xl">
          Enter your item&apos;s stat requirements and desired socket colors to
          find the cheapest crafting method.
        </p>
      </div>

      <VoriciCalculator />

      {/* SEO Content: PoE Color Calculator Guide */}
      <section className="mt-12 space-y-8">
        <div className="poe-frame">
          <div className="poe-frame-header">
            <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
              PoE Socket Color Calculator Guide
            </h2>
          </div>
          <div className="poe-frame-body space-y-5 text-sm text-poe-text-dim leading-relaxed">
            <p>
              This <strong className="text-poe-text-bright">PoE color calculator</strong> (also known as the Vorici calculator or
              chromatic calculator) helps you find the most cost-efficient way to roll desired socket colors on any
              Path of Exile item. Instead of blindly spamming Chromatic Orbs and hoping for the best, use this tool
              to see exactly how many chromes you&apos;ll need on average — and whether the Crafting Bench offers a
              cheaper alternative.
            </p>

            <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
              When to Use This PoE Chromatic Calculator
            </h3>
            <p>
              Off-color sockets are one of the biggest currency sinks in Path of Exile. If you need blue sockets on
              a pure Strength chest, or green sockets on an Energy Shield helmet, the odds are heavily stacked
              against you. This calculator shows you:
            </p>
            <ul className="space-y-1.5 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-poe-gold mt-0.5">&#8226;</span>
                <span><strong className="text-poe-text-bright">Expected Chromatic Orb cost</strong> — the average number of chromes to hit your desired colors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-poe-gold mt-0.5">&#8226;</span>
                <span><strong className="text-poe-text-bright">Worst-case scenarios</strong> — 90th and 99th percentile estimates so you can budget properly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-poe-gold mt-0.5">&#8226;</span>
                <span><strong className="text-poe-text-bright">Crafting Bench comparison</strong> — whether &quot;At least X color&quot; recipes save you currency</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-poe-gold mt-0.5">&#8226;</span>
                <span><strong className="text-poe-text-bright">Best method recommendation</strong> — the cheapest option highlighted automatically</span>
              </li>
            </ul>

            <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
              How PoE Socket Color Probability Works
            </h3>
            <p>
              Path of Exile uses a simple but effective formula for socket color rolls. Each socket is rolled
              independently using the item&apos;s attribute requirements. The formula is:
            </p>
            <p className="text-center">
              <code className="font-[family-name:var(--font-mono)] text-poe-gold-light text-xs bg-[#0c0a08] px-2 py-1 border border-poe-border">
                P(color) = (attribute + 10) / (STR + DEX + INT + 30)
              </code>
            </p>
            <p>
              For a pure STR item with 155 Strength requirement: red socket chance is (155+10)/(155+0+0+30) = 89.2%,
              while green and blue are each only 5.4%. Getting three off-color blue sockets on such an item would
              cost roughly 6,300 Chromatic Orbs on average — but the Crafting Bench recipe &quot;At least 3 Blue
              Sockets&quot; might be far cheaper.
            </p>

            <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
              Tips for Saving Chromatic Orbs
            </h3>
            <ul className="space-y-1.5 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-poe-gold mt-0.5">&#8226;</span>
                <span>Use items with lower stat requirements for easier off-coloring — item level matters less than attribute requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-poe-gold mt-0.5">&#8226;</span>
                <span>Hybrid items (STR/DEX, STR/INT, DEX/INT) give two favored colors, making two-color setups much cheaper</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-poe-gold mt-0.5">&#8226;</span>
                <span>Always check the Crafting Bench first — for 3+ off-colors, the bench recipe is almost always cheaper than spamming</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-poe-gold mt-0.5">&#8226;</span>
                <span>Consider the Jeweller&apos;s method: reduce sockets to the number of desired off-colors, craft bench colors, then re-socket</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "PoE Color Calculator - Vorici Chromatic Calculator",
            url: "https://poecalc.tools/vorici-calculator",
            description:
              "Free PoE socket color calculator. Find the cheapest way to roll desired socket colors on Path of Exile items.",
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
      {/* HowTo Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Calculate PoE Socket Color Costs",
            description:
              "Use the Vorici Chromatic Calculator to find the cheapest method for rolling desired socket colors on your Path of Exile items.",
            step: [
              {
                "@type": "HowToStep",
                name: "Enter stat requirements",
                text: "Enter your item's Strength, Dexterity, and Intelligence requirements from the item tooltip.",
              },
              {
                "@type": "HowToStep",
                name: "Select desired socket colors",
                text: "Click each socket to cycle through Red, Green, and Blue until you have your desired color combination.",
              },
              {
                "@type": "HowToStep",
                name: "Compare methods",
                text: "Review the results table comparing Chromatic Orb spam versus Crafting Bench recipes. The recommended (cheapest) method is highlighted.",
              },
            ],
          }),
        }}
      />
    </div>
    </>
  );
}
