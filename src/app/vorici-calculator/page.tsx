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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-poe-gold mb-2">
          Vorici Chromatic Calculator
        </h1>
        <p className="text-poe-text-dim">
          Find the cheapest method to get your desired socket colors. Enter your
          item&apos;s stat requirements and desired colors to compare crafting
          methods.
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
