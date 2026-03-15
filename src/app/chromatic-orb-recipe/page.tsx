import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Chromatic Orb Recipe & Guide - PoE Chrome Farming",
  description:
    "Complete guide to Chromatic Orb vendor recipes in Path of Exile. Learn how to farm chromes efficiently, vendor recipe details, drop rates, and smart spending strategies.",
  keywords: [
    "chromatic orb recipe",
    "poe chromatic orb",
    "chrome recipe poe",
    "chromatic orb vendor recipe",
    "poe chrome farming",
    "chromatic orb farming",
    "path of exile chromatic",
  ],
  alternates: {
    canonical: "https://poecalc.tools/chromatic-orb-recipe",
  },
  openGraph: {
    title: "Chromatic Orb Recipe & Guide - PoE Chrome Farming",
    description:
      "Complete guide to Chromatic Orb vendor recipes in Path of Exile. Learn how to farm chromes efficiently, vendor recipe details, drop rates, and smart spending strategies.",
    url: "https://poecalc.tools/chromatic-orb-recipe",
    type: "website",
  },
};

export default function ChromaticOrbRecipePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Chromatic Orb Recipe" }]} />
      <div className="max-w-3xl mx-auto px-5 py-10">
        <div className="mb-8 animate-fade-in">
          <p className="font-[family-name:var(--font-heading)] text-poe-text-dim text-xs tracking-[4px] uppercase mb-3">
            Currency Guide
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-poe-gold tracking-wide mb-3">
            Chromatic Orb Recipe &amp; Farming Guide
          </h1>
          <hr className="poe-separator max-w-[200px] mb-4" />
          <p className="text-poe-text-dim text-[15px] leading-relaxed max-w-xl">
            Everything you need to know about obtaining and spending Chromatic
            Orbs in Path of Exile — from the vendor recipe to efficient farming
            strategies.
          </p>
        </div>

        {/* Section 1: Vendor Recipe */}
        <section className="space-y-8">
          <div className="poe-frame animate-fade-in">
            <div className="poe-frame-header">
              <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
                Chromatic Orb Vendor Recipe
              </h2>
            </div>
            <div className="poe-frame-body space-y-5 text-sm text-poe-text-dim leading-relaxed">
              <p>
                The <strong className="text-poe-text-bright">Chromatic Orb vendor recipe</strong> is
                one of the most important and commonly used recipes in Path of Exile. It is simple,
                reliable, and works from the very first act all the way through endgame mapping. To
                execute the recipe, sell any item that has at least one{" "}
                <span className="text-poe-red font-semibold">Red</span>, one{" "}
                <span className="text-poe-green font-semibold">Green</span>, and one{" "}
                <span className="text-poe-blue font-semibold">Blue</span> socket{" "}
                <strong className="text-poe-text-bright">linked together</strong> to any NPC vendor.
                In return, you receive exactly one Chromatic Orb.
              </p>

              <p>
                The key requirement is that the three differently colored sockets must be connected by
                links — simply having R, G, and B sockets on the same item is not enough if they are
                not linked to each other. An item with three linked sockets where one is red, one is
                green, and one is blue (commonly called an &quot;RGB-linked&quot; item) will always
                yield a Chromatic Orb when vendored, regardless of the item&apos;s rarity, item level,
                or base type.
              </p>

              {/* Visual Recipe Display */}
              <div className="flex flex-col items-center py-6">
                <p className="font-[family-name:var(--font-heading)] text-poe-text-bright text-xs tracking-widest uppercase mb-4">
                  Vendor Recipe
                </p>
                <div className="flex items-center gap-2 mb-4">
                  {/* Red socket */}
                  <span className="w-8 h-8 rounded-full bg-radial-[ellipse_at_35%_30%] from-[#ff5070] to-[#7a1020] border-2 border-[#c41e3a] shadow-[0_0_8px_rgba(196,30,58,0.5)] flex items-center justify-center text-xs font-bold text-[#ffd0d0]">
                    R
                  </span>
                  {/* Link */}
                  <div className="socket-link" />
                  {/* Green socket */}
                  <span className="w-8 h-8 rounded-full bg-radial-[ellipse_at_35%_30%] from-[#60ff40] to-[#0a3504] border-2 border-[#2dc50e] shadow-[0_0_8px_rgba(45,197,14,0.5)] flex items-center justify-center text-xs font-bold text-[#d0ffd0]">
                    G
                  </span>
                  {/* Link */}
                  <div className="socket-link" />
                  {/* Blue socket */}
                  <span className="w-8 h-8 rounded-full bg-radial-[ellipse_at_35%_30%] from-[#70b0ff] to-[#0a2545] border-2 border-[#3088e0] shadow-[0_0_8px_rgba(48,136,224,0.5)] flex items-center justify-center text-xs font-bold text-[#d0e0ff]">
                    B
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-poe-gold font-[family-name:var(--font-heading)] text-lg">&darr;</span>
                </div>
                <p className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-wide mt-2">
                  = 1 Chromatic Orb
                </p>
              </div>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                Key Tips for the Chromatic Orb Recipe
              </h3>
              <ul className="space-y-1.5 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">Any rarity works</strong> — normal (white),
                    magic (blue), rare (yellow), and even unique items all qualify for the recipe. You
                    do not need to identify items before vendoring them.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">Item level does not matter</strong> — a
                    level 1 item with RGB-linked sockets gives the same Chromatic Orb as a level 86 item.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">Look for 3-socket items</strong> — small
                    items like gloves, boots, and helmets frequently drop with exactly three linked
                    sockets in RGB, making them ideal for this recipe. They also take up less inventory
                    space.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">Configure your loot filter</strong> — a
                    good loot filter (like NeverSink or FilterBlade) can highlight RGB-linked items so
                    you never miss them during mapping. Most filters show these with a specific border
                    color or minimap icon.
                  </span>
                </li>
              </ul>

              <p>
                Over the course of a league, the Chromatic Orb vendor recipe is a steady source of
                currency. Many experienced players pick up every RGB-linked item they see during maps,
                accumulating hundreds of Chromatic Orbs per session without any extra effort. Since
                chromes are always in demand for socket coloring, this recipe essentially turns
                otherwise worthless ground loot into usable currency.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: How to Farm */}
        <section className="mt-8 space-y-8">
          <div className="poe-frame animate-fade-in">
            <div className="poe-frame-header">
              <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
                How to Farm Chromatic Orbs Efficiently
              </h2>
            </div>
            <div className="poe-frame-body space-y-5 text-sm text-poe-text-dim leading-relaxed">
              <p>
                Chromatic Orbs are one of the most frequently used currencies in Path of Exile, and
                running out of them mid-league is a common frustration. Fortunately, there are
                multiple reliable methods for building up your chrome supply. Here is a comprehensive
                breakdown of every farming strategy available.
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                Vendor Recipe Farming
              </h3>
              <p>
                The vendor recipe described above is by far the most consistent method for acquiring
                Chromatic Orbs. During regular mapping, you will encounter dozens of RGB-linked items
                per map. The trick is to set up your loot filter properly so these items are clearly
                visible without cluttering your screen. Most community loot filters like NeverSink
                already include RGB highlighting at lower strictness levels. At higher strictness
                settings, you may need to add a custom rule to keep showing RGB items.
              </p>
              <p>
                When farming with the vendor recipe in mind, prioritize smaller items —{" "}
                <strong className="text-poe-text-bright">gloves, boots, and helmets</strong> take up
                less inventory space than body armour or two-handed weapons, allowing you to carry more
                per inventory trip. Some players even use a dedicated &quot;dump tab&quot; in their
                stash to collect RGB items throughout a play session, then vendor them all at once.
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                Direct Drops
              </h3>
              <p>
                Chromatic Orbs drop directly from slain monsters, though less frequently than more
                common currencies like Orbs of Transmutation or Orbs of Alteration. You can increase
                your chrome drop rate by running maps with higher monster quantity and pack size.
                Strongboxes are another excellent source — Arcanist&apos;s Strongboxes in particular
                can drop multiple currency items at once, including Chromatic Orbs. Currency chests
                in the Azurite Mine (Delve) are also reliable, especially at deeper depths where
                currency rewards scale upward.
              </p>
              <p>
                League mechanics that generate large quantities of monsters — such as Delirium,
                Breach, and Legion encounters — naturally increase the total number of currency drops
                per map, making them solid strategies for passive chrome accumulation alongside your
                primary farming goals.
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                Buying from Vendors
              </h3>
              <p>
                Yeena, the NPC vendor in Act 2&apos;s Forest Encampment, sells Chromatic Orbs in
                exchange for other currency. While her stock is limited and refreshes periodically,
                this can be a convenient source early in a league when you need just a few chromes
                for your leveling gear. The exchange rate is typically not favorable for bulk
                acquisition, so this method works best as a supplement rather than a primary farming
                strategy.
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                Trading
              </h3>
              <p>
                For players who need large quantities of Chromatic Orbs quickly, the trade market is
                the most efficient option. You can buy chromes in bulk from other players using Chaos
                Orbs on the official{" "}
                <strong className="text-poe-text-bright">Path of Exile trade site</strong> or
                third-party tools like poe.trade and Awakened PoE Trade. The exchange rate fluctuates
                throughout a league but generally falls in the range of 8 to 16 Chromatic Orbs per
                Chaos Orb. Buying in bulk (100+ at a time) often gets you a better rate, as sellers
                prefer larger transactions.
              </p>
              <p>
                If you have surplus Jeweller&apos;s Orbs, you can also convert them to Chromatic Orbs
                at a favorable rate through vendor exchanges or direct player trading. This is
                especially useful if you&apos;ve been farming content that heavily rewards
                Jeweller&apos;s Orbs, such as six-socket item farming.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: When to Spend vs Save */}
        <section className="mt-8 space-y-8">
          <div className="poe-frame animate-fade-in">
            <div className="poe-frame-header">
              <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
                When to Spend vs Save Chromatic Orbs
              </h2>
            </div>
            <div className="poe-frame-body space-y-5 text-sm text-poe-text-dim leading-relaxed">
              <p>
                <strong className="text-poe-text-bright">Smart Chromatic Orb spending</strong> is the
                difference between a smooth league start and a frustrating currency drain. The key
                principle is simple: the more off-color sockets you need, the more expensive chromatic
                spam becomes — and the more likely the Crafting Bench is the better option.
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                When Chromatic Spam Is Fine
              </h3>
              <p>
                If you need socket colors that match your item&apos;s attribute requirements — for
                example, <span className="text-poe-red font-semibold">red</span> sockets on a
                Strength-based chest — chromatic spam is perfectly fine. The odds are in your favor,
                and you will typically hit the desired combination within a handful of attempts. For
                one or two off-color sockets on an item with mixed attribute requirements (like a
                STR/DEX helmet needing one{" "}
                <span className="text-poe-blue font-semibold">blue</span> socket), chromatic spam
                is also usually the cheapest method.
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                When to Use the Crafting Bench
              </h3>
              <p>
                The Crafting Bench becomes essential when you need three or more off-color sockets.
                The &quot;At least X [Color] Sockets&quot; recipes guarantee a minimum number of a
                specific color, and while they cost both Chromatic Orbs and Vaal Orbs, they are
                almost always cheaper than the expected cost of hitting multiple off-colors through
                random spam. The more extreme the off-coloring (like four{" "}
                <span className="text-poe-blue font-semibold">blue</span> sockets on a pure Strength
                item), the more currency the Crafting Bench saves you.
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                The Jeweller&apos;s Method
              </h3>
              <p>
                For the most extreme off-coloring scenarios, there is the Jeweller&apos;s method
                (sometimes called the &quot;Vorici trick&quot;). The idea is to reduce the item&apos;s
                sockets to the number of off-colors you need, use the Crafting Bench to force those
                colors, then re-socket the item back to the full number of sockets. Each time you add
                a socket, it rolls independently, and on-color sockets are far more likely. This
                multi-step process can save thousands of Chromatic Orbs on heavily off-color setups.
              </p>

              <div className="bg-[#141210] border border-poe-border p-4 mt-4">
                <p className="text-poe-text-bright text-sm font-semibold mb-2">
                  Calculate Before You Spend
                </p>
                <p>
                  Use our{" "}
                  <Link
                    href="/vorici-calculator"
                    className="poe-link text-poe-gold font-semibold"
                  >
                    Vorici Chromatic Calculator
                  </Link>{" "}
                  to find the cheapest method before spending any chromes. Enter your item&apos;s stat
                  requirements and desired colors, and the calculator will compare chromatic spam
                  against every Crafting Bench recipe — showing you the average cost, 90th percentile,
                  and 99th percentile estimates.
                </p>
              </div>

              <p>
                Understanding socket color mechanics is also crucial for effective spending. Read our{" "}
                <Link
                  href="/poe-socket-guide"
                  className="poe-link text-poe-gold font-semibold"
                >
                  PoE Socket Guide
                </Link>{" "}
                for a deep dive into how attribute requirements affect socket color probabilities, and
                check the{" "}
                <Link
                  href="/off-color-calculator"
                  className="poe-link text-poe-gold font-semibold"
                >
                  Off-Color Calculator
                </Link>{" "}
                for specialized off-color crafting scenarios.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: FAQ */}
        <section className="mt-8 space-y-8">
          <div className="poe-frame animate-fade-in">
            <div className="poe-frame-header">
              <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
                Chromatic Orb FAQ
              </h2>
            </div>
            <div className="poe-frame-body space-y-6 text-sm text-poe-text-dim leading-relaxed">
              <div>
                <h3 className="text-poe-text-bright font-semibold mb-1">
                  What is the Chromatic Orb vendor recipe in Path of Exile?
                </h3>
                <p>
                  The Chromatic Orb vendor recipe requires you to sell an item with at least one{" "}
                  <span className="text-poe-red font-semibold">Red</span>, one{" "}
                  <span className="text-poe-green font-semibold">Green</span>, and one{" "}
                  <span className="text-poe-blue font-semibold">Blue</span> socket linked together
                  (RGB-linked) to any NPC vendor. You receive one Chromatic Orb in return. The
                  item&apos;s rarity, item level, and base type do not matter — any RGB-linked item
                  works.
                </p>
              </div>
              <hr className="poe-separator" />
              <div>
                <h3 className="text-poe-text-bright font-semibold mb-1">
                  How many Chromatic Orbs does the vendor recipe give?
                </h3>
                <p>
                  The vendor recipe always gives exactly one Chromatic Orb per item vendored. There is
                  no way to increase this yield — selling a six-link RGB item still gives only one
                  chrome. The recipe is valuable because of the sheer volume of qualifying items you
                  encounter during normal gameplay rather than per-item returns.
                </p>
              </div>
              <hr className="poe-separator" />
              <div>
                <h3 className="text-poe-text-bright font-semibold mb-1">
                  What is the fastest way to farm Chromatic Orbs?
                </h3>
                <p>
                  The fastest method combines multiple approaches: pick up every RGB-linked item you
                  see during mapping (using a loot filter that highlights them), run maps with high
                  monster quantity and pack size for direct drops, and supplement with bulk trading
                  when needed. League mechanics like Delirium, Breach, and Legion that spawn large
                  numbers of monsters also help accumulate chromes passively. For large quantities,
                  bulk buying through the trade site is the most time-efficient option.
                </p>
              </div>
              <hr className="poe-separator" />
              <div>
                <h3 className="text-poe-text-bright font-semibold mb-1">
                  Should I spam Chromatic Orbs or use the Crafting Bench?
                </h3>
                <p>
                  It depends on how many off-color sockets you need. For on-color or one off-color
                  socket, chromatic spam is usually cheapest. For two or more off-colors, check the
                  Crafting Bench recipes — they guarantee a minimum number of a specific color for a
                  fixed cost. For extreme off-coloring (3+ off-colors on a pure attribute item), the
                  Crafting Bench or the Jeweller&apos;s method will save you significantly more
                  currency. Use the{" "}
                  <Link
                    href="/vorici-calculator"
                    className="poe-link text-poe-gold font-semibold"
                  >
                    Vorici Chromatic Calculator
                  </Link>{" "}
                  to compare all methods before spending.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* JSON-LD Article */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "Chromatic Orb Recipe & Guide - PoE Chrome Farming",
              description:
                "Complete guide to Chromatic Orb vendor recipes in Path of Exile. Learn how to farm chromes efficiently, vendor recipe details, drop rates, and smart spending strategies.",
              url: "https://poecalc.tools/chromatic-orb-recipe",
              author: {
                "@type": "Organization",
                name: "PoE Calculator Tools",
                url: "https://poecalc.tools",
              },
              publisher: {
                "@type": "Organization",
                name: "PoE Calculator Tools",
                url: "https://poecalc.tools",
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://poecalc.tools/chromatic-orb-recipe",
              },
            }),
          }}
        />
        {/* JSON-LD FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is the Chromatic Orb vendor recipe in Path of Exile?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Chromatic Orb vendor recipe requires you to sell an item with at least one Red, one Green, and one Blue socket linked together (RGB-linked) to any NPC vendor. You receive one Chromatic Orb in return. The item's rarity, item level, and base type do not matter.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How many Chromatic Orbs does the vendor recipe give?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The vendor recipe always gives exactly one Chromatic Orb per item vendored. There is no way to increase this yield. The recipe is valuable because of the sheer volume of qualifying items you encounter during normal gameplay.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the fastest way to farm Chromatic Orbs?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The fastest method combines picking up RGB-linked items during mapping, running maps with high monster quantity for direct drops, and bulk trading when needed. League mechanics like Delirium, Breach, and Legion also help accumulate chromes passively.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Should I spam Chromatic Orbs or use the Crafting Bench?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "For on-color or one off-color socket, chromatic spam is usually cheapest. For two or more off-colors, check the Crafting Bench recipes. For extreme off-coloring (3+ off-colors), the Crafting Bench or Jeweller's method saves significantly more currency.",
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
