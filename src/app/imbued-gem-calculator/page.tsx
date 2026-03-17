import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ImbueGemCalculator from "@/components/ImbueGemCalculator";

export const metadata: Metadata = {
  title: "PoE Imbued Gem Calculator - Gem Level & Quality Cost Tool (Free)",
  description:
    "Free PoE imbued gem calculator — estimate GCP costs, gem leveling XP, and quality breakpoints. Plan your gem progression efficiently with exact calculations. Updated 2026.",
  keywords: [
    "poe imbued gem calculator",
    "poe gem calculator",
    "poe gem quality calculator",
    "poe gem level calculator",
    "poe gcp calculator",
    "gem quality poe",
    "gemcutter prism calculator",
    "poe gem experience calculator",
    "poe gem leveling",
  ],
  alternates: {
    canonical: "https://poecalc.tools/imbued-gem-calculator",
  },
  openGraph: {
    title: "PoE Imbued Gem Calculator - Gem Level & Quality Cost Tool",
    description:
      "Free PoE imbued gem calculator — estimate GCP costs, gem leveling XP, and quality breakpoints for Path of Exile.",
    url: "https://poecalc.tools/imbued-gem-calculator",
    type: "website",
  },
};

export default function ImbueGemCalculatorPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Imbued Gem Calculator" }]} />
      <div className="max-w-3xl mx-auto px-5 py-10">
        <div className="mb-8 animate-fade-in">
          <p className="font-[family-name:var(--font-heading)] text-poe-text-dim text-xs tracking-[4px] uppercase mb-3">
            Crafting Tool
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-poe-gold tracking-wide mb-3">
            PoE Imbued Gem Calculator
          </h1>
          <hr className="poe-separator max-w-[200px] mb-4" />
          <p className="text-poe-text-dim text-[15px] leading-relaxed max-w-xl">
            Calculate Gemcutter&apos;s Prism costs for quality upgrades and
            estimate gem leveling experience requirements.
          </p>
        </div>

        <ImbueGemCalculator />

        {/* SEO Content */}
        <section className="mt-12 space-y-8">
          <div className="poe-frame">
            <div className="poe-frame-header">
              <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
                Understanding Gem Quality in Path of Exile
              </h2>
            </div>
            <div className="poe-frame-body space-y-5 text-sm text-poe-text-dim leading-relaxed">
              <p>
                In Path of Exile, every skill and support gem can have up to{" "}
                <strong className="text-poe-text-bright">20% quality</strong> (or 23% with certain
                crafting methods). Quality adds a bonus effect that varies by gem — it might increase
                damage, area of effect, attack speed, or other modifiers. Each{" "}
                <strong className="text-poe-text-bright">Gemcutter&apos;s Prism (GCP)</strong> adds
                1% quality to a gem, making GCPs a valuable and sometimes expensive currency.
              </p>
              <p>
                This calculator helps you plan your GCP spending by showing the exact cost to reach
                your target quality from any starting point. It also estimates experience requirements
                for gem leveling, so you can plan your gem progression efficiently.
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                Gem Quality Methods
              </h3>
              <ul className="space-y-1.5 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span><strong className="text-poe-text-bright">Gemcutter&apos;s Prism (GCP)</strong> — adds 1% quality per use, up to 20%. Most straightforward method.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span><strong className="text-poe-text-bright">Quality vendor recipe</strong> — sell a gem with 20% quality to a vendor to receive 1 GCP back. Sell gems totaling 40%+ quality for a GCP.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span><strong className="text-poe-text-bright">Hillock bench (Betrayal)</strong> — Hillock in Transportation safehouse can quality gems to 26% (or 28/30% at higher ranks).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span><strong className="text-poe-text-bright">Lens currency</strong> — Prime/Secondary/Anomalous Lenses modify gem quality type (Divergent, Anomalous, Phantasmal).</span>
                </li>
              </ul>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                GCP Cost Optimization Tips
              </h3>
              <p>
                Using GCPs on a level 1 gem is the most cost-effective approach because you only need
                the quality you want minus the gem&apos;s existing quality. A common strategy is to buy
                gems with some quality already on them from other players, reducing your GCP costs.
                The vendor recipe (selling gems totaling 40% quality for 1 GCP) is also useful for
                converting low-value quality gems into currency.
              </p>
              <p>
                For builds that require multiple 20% quality gems, planning your GCP budget is
                essential. This calculator shows the total cost at a glance, helping you prioritize
                which gems benefit most from quality upgrades. Need to color your sockets too? Try
                our{" "}
                <Link href="/poe-color-calculator" className="poe-link text-poe-gold">
                  PoE Color Calculator
                </Link>
                .
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                Gem Experience Requirements
              </h3>
              <p>
                Gems in Path of Exile level up as you earn experience. Each gem level requires
                progressively more experience, with level 20 gems requiring roughly 340 million
                total XP. The experience your gems receive is a percentage of the experience you
                earn, split among all equipped gems. Planning your leveling route and knowing how
                much XP remains can help you optimize your gem progression.
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
              name: "PoE Imbued Gem Calculator - Quality & Leveling Tool",
              url: "https://poecalc.tools/imbued-gem-calculator",
              description:
                "Free PoE gem calculator for quality costs and leveling XP estimates.",
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
                  name: "How many GCPs do I need for 20% gem quality in PoE?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Each Gemcutter's Prism (GCP) adds 1% quality. To reach 20% quality from 0%, you need 20 GCPs. If your gem already has some quality, subtract that from 20 to get the number of GCPs needed.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What does gem quality do in Path of Exile?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Gem quality adds a bonus effect specific to each gem. It might increase damage, area of effect, attack speed, duration, or other modifiers. The bonus scales linearly — 20% quality gives the maximum effect. Quality is one of the most cost-effective ways to boost your build's power.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much experience does a gem need to reach level 20?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A gem needs approximately 340 million total experience to reach level 20 from level 1. Experience is shared among all equipped gems proportionally. Higher map tiers and density give more XP, making mapping the most efficient way to level gems.",
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
