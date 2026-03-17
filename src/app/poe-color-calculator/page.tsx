import type { Metadata } from "next";
import VoriciCalculator from "@/components/VoriciCalculator";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PoE Color Calculator - Socket Color Cost & Probability Tool (Free)",
  description:
    "Free PoE color calculator — find the cheapest way to color your sockets in 3 seconds. Compare Chromatic Orb spam vs Crafting Bench with exact probability math. Updated 2026.",
  keywords: [
    "poe color calculator",
    "poe color calc",
    "color calculator poe",
    "poe socket color calculator",
    "socket color calculator poe",
    "poe chromatic calculator",
    "poe socket calculator",
    "chromatic orb calculator",
    "poe crafting bench colors",
  ],
  alternates: {
    canonical: "https://poecalc.tools/poe-color-calculator",
  },
  openGraph: {
    title: "PoE Color Calculator - Socket Color Cost & Probability Tool",
    description:
      "Free PoE color calculator — find the cheapest socket coloring method in seconds. Exact probability math with 90th/99th percentile estimates.",
    url: "https://poecalc.tools/poe-color-calculator",
    type: "website",
  },
};

export default function PoeColorCalculatorPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "PoE Color Calculator" }]} />
      <div className="max-w-3xl mx-auto px-5 py-10">
        <div className="mb-8 animate-fade-in">
          <p className="font-[family-name:var(--font-heading)] text-poe-text-dim text-xs tracking-[4px] uppercase mb-3">
            Crafting Tool
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-poe-gold tracking-wide mb-3">
            PoE Color Calculator
          </h1>
          <hr className="poe-separator max-w-[200px] mb-4" />
          <p className="text-poe-text-dim text-[15px] leading-relaxed max-w-xl">
            Enter your item&apos;s stat requirements and desired socket colors.
            Instantly see the cheapest crafting method — Chromatic Orb spam or
            Crafting Bench.
          </p>
        </div>

        <VoriciCalculator />

        {/* SEO Content */}
        <section className="mt-12 space-y-8">
          <div className="poe-frame">
            <div className="poe-frame-header">
              <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
                How the PoE Color Calculator Works
              </h2>
            </div>
            <div className="poe-frame-body space-y-5 text-sm text-poe-text-dim leading-relaxed">
              <p>
                This <strong className="text-poe-text-bright">PoE color calculator</strong> uses
                Path of Exile&apos;s exact socket color probability formula to find the most
                cost-efficient way to roll your desired socket colors. Whether you call it a
                chromatic calculator, socket color calculator, or Vorici calculator — the math
                is the same.
              </p>
              <p>
                Simply enter your item&apos;s Strength, Dexterity, and Intelligence requirements,
                then click each socket to set your desired colors. The calculator instantly compares:
              </p>
              <ul className="space-y-1.5 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span><strong className="text-poe-text-bright">Chromatic Orb spam</strong> — average cost, plus 90th and 99th percentile worst-case estimates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span><strong className="text-poe-text-bright">Crafting Bench recipes</strong> — fixed-cost &quot;At least X color&quot; options with guaranteed results</span>
                </li>
              </ul>
              <p>
                The cheapest method is highlighted automatically. No guesswork, no wasted currency.
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                PoE Socket Color Probability Formula
              </h3>
              <p>
                Path of Exile rolls each socket color independently based on the item&apos;s
                attribute requirements. The exact formula is:
              </p>
              <p className="text-center">
                <code className="font-[family-name:var(--font-mono)] text-poe-gold-light text-xs bg-[#0c0a08] px-2 py-1 border border-poe-border">
                  P(color) = (attribute + 10) / (STR + DEX + INT + 30)
                </code>
              </p>
              <p>
                An item with no stat requirements gives each color an equal 33.3% chance. A pure
                Strength item with 155 STR has an 89.2% chance for red, and only 5.4% each for
                green and blue — making off-color sockets expensive to obtain.
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                When to Use Crafting Bench vs. Chromatic Orbs
              </h3>
              <ul className="space-y-1.5 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span><strong className="text-poe-text-bright">1-2 off-colors:</strong> Chromatic Orb spam is usually cheapest</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span><strong className="text-poe-text-bright">3 off-colors:</strong> Crafting Bench is almost always cheaper</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span><strong className="text-poe-text-bright">4+ off-colors:</strong> Use the <Link href="/off-color-calculator" className="poe-link text-poe-gold">Jeweller&apos;s method</Link> for dramatic savings</span>
                </li>
              </ul>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                Save Currency with Smart Color Crafting
              </h3>
              <p>
                Hybrid items (STR/DEX, STR/INT, DEX/INT) are dramatically cheaper to color because
                two colors are &quot;on-color.&quot; Items with lower stat requirements are also
                easier to off-color. Before spending a single Chromatic Orb, run your setup through
                this calculator. You might find a{" "}
                <Link href="/chromatic-orb-recipe" className="poe-link text-poe-gold">
                  chromatic orb recipe
                </Link>{" "}
                approach saves you thousands of chromes.
              </p>
            </div>
          </div>
        </section>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "PoE Color Calculator - Socket Color Cost Tool",
              url: "https://poecalc.tools/poe-color-calculator",
              description:
                "Free PoE socket color calculator. Find the cheapest way to color sockets using exact probability math.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How do I calculate socket color costs in PoE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Enter your item's Strength, Dexterity, and Intelligence requirements into the PoE color calculator, then select your desired socket colors. The tool compares Chromatic Orb spam vs Crafting Bench recipes and shows the cheapest method with exact probability math.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Chromatic Orb spam or Crafting Bench cheaper for socket colors?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "For 1-2 off-color sockets, Chromatic Orb spam is usually cheapest. For 3+ off-colors, the Crafting Bench fixed-cost recipe is almost always more efficient. Use the calculator to compare exact costs for your specific item.",
                  },
                },
              ],
            }),
          }}
        />
      </div>
    </>
  );
}
