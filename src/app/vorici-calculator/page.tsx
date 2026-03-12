import type { Metadata } from "next";
import VoriciCalculator from "@/components/VoriciCalculator";

export const metadata: Metadata = {
  title: "Vorici Chromatic Calculator - PoE Socket Color Calculator",
  description:
    "Calculate the cheapest way to get desired socket colors on your Path of Exile items. Compare Chromatic Orb spam vs Crafting Bench recipes. Supports all socket counts and stat requirements.",
  keywords: [
    "vorici calculator",
    "poe chromatic calculator",
    "path of exile socket colors",
    "chromatic orb calculator",
    "poe crafting bench",
    "off-color sockets",
    "vorici chromatic calculator",
    "poe socket calculator",
  ],
  alternates: {
    canonical: "https://poecalc.tools/vorici-calculator",
  },
  openGraph: {
    title: "Vorici Chromatic Calculator - PoE Socket Color Calculator",
    description:
      "Calculate the cheapest way to get desired socket colors on your Path of Exile items. Compare crafting methods instantly.",
    url: "https://poecalc.tools/vorici-calculator",
    type: "website",
  },
};

export default function VoriciCalculatorPage() {
  return (
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

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Vorici Chromatic Calculator",
            url: "https://poecalc.tools/vorici-calculator",
            description:
              "Calculate the cheapest way to get desired socket colors on Path of Exile items.",
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
