import type { Metadata } from "next";
import Link from "next/link";
import CurrencyCalculator from "@/components/CurrencyCalculator";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "PoE Currency Calculator - Path of Exile Exchange Rates",
  description:
    "Free PoE currency calculator with reference exchange rates. Convert Chaos Orbs, Exalted Orbs, Divine Orbs, and more. Path of Exile currency guide included.",
  keywords: [
    "poe currency calculator",
    "poe exchange rate",
    "chaos orb value",
    "divine orb price",
    "poe currency conversion",
    "path of exile currency",
    "exalted orb value",
  ],
  alternates: {
    canonical: "https://poecalc.tools/poe-currency-calculator",
  },
  openGraph: {
    title: "PoE Currency Calculator - Path of Exile Exchange Rates",
    description:
      "Free PoE currency calculator with reference exchange rates. Convert Chaos Orbs, Exalted Orbs, Divine Orbs, and more.",
    url: "https://poecalc.tools/poe-currency-calculator",
    type: "website",
  },
};

export default function PoeCurrencyCalculatorPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "PoE Currency Calculator" }]} />
      <div className="max-w-3xl mx-auto px-5 py-10">
        <div className="mb-8 animate-fade-in">
          <p className="font-[family-name:var(--font-heading)] text-poe-text-dim text-xs tracking-[4px] uppercase mb-3">
            Currency Tool
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-poe-gold tracking-wide mb-3">
            PoE Currency Calculator
          </h1>
          <hr className="poe-separator max-w-[200px] mb-4" />
          <p className="text-poe-text-dim text-[15px] leading-relaxed max-w-xl">
            Convert between Path of Exile currencies using reference exchange
            rates. Select your source and target currency, enter an amount, and
            see the conversion instantly.
          </p>
        </div>

        <CurrencyCalculator />

        {/* SEO Content: PoE Currency System Guide */}
        <section className="mt-12 space-y-8">
          <div className="poe-frame">
            <div className="poe-frame-header">
              <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
                PoE Currency System Explained
              </h2>
            </div>
            <div className="poe-frame-body space-y-5 text-sm text-poe-text-dim leading-relaxed">
              <p>
                Path of Exile takes a radically different approach to in-game
                economy compared to most ARPGs. Instead of gold coins, the game
                uses a{" "}
                <strong className="text-poe-text-bright">
                  barter-based currency system
                </strong>{" "}
                where every currency item also serves a functional crafting
                purpose. A Chaos Orb is not just a unit of value &mdash; it
                re-rolls all random modifiers on a rare item. An Exalted Orb
                adds a new random modifier. This dual nature of currency as both
                money and crafting material is what makes the PoE economy so
                deep and engaging.
              </p>
              <p>
                Understanding currency values is essential for efficient
                trading. Whether you are pricing items on the trade site,
                negotiating bulk deals, or simply deciding whether to use an orb
                or sell it, knowing the approximate exchange rates saves you
                time and prevents costly mistakes. This{" "}
                <strong className="text-poe-text-bright">
                  PoE currency calculator
                </strong>{" "}
                provides reference rates to help you make informed decisions,
                though actual market prices fluctuate based on league, supply,
                and demand.
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                Base Currency Orbs
              </h3>
              <p>
                The foundation of the PoE economy rests on common currency orbs
                that drop frequently and are consumed in large quantities for
                crafting. These form the &quot;small change&quot; of Wraeclast:
              </p>
              <ul className="space-y-1.5 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">
                      Chromatic Orbs
                    </strong>{" "}
                    &mdash; Re-colour sockets on an item. Roughly 12 Chromatics
                    trade for 1 Chaos Orb. If you need to optimize your chrome
                    spending, use our{" "}
                    <Link
                      href="/vorici-calculator"
                      className="poe-link text-poe-gold"
                    >
                      Chromatic Calculator
                    </Link>{" "}
                    to find the cheapest coloring method.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">
                      Jeweller&apos;s Orbs
                    </strong>{" "}
                    &mdash; Re-roll the number of sockets on an item. About 10
                    Jeweller&apos;s per Chaos Orb. You need roughly 350
                    Jeweller&apos;s on average to six-socket an item, or you can
                    use the Crafting Bench recipe for a guaranteed result at a
                    fixed cost.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">
                      Orbs of Fusing
                    </strong>{" "}
                    &mdash; Re-roll links between sockets. About 4 Fusings per
                    Chaos Orb. Six-linking an item takes roughly 1,200 Fusings
                    on average, making the Crafting Bench recipe of 1,500
                    Fusings a safer choice for risk-averse players.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">
                      Orbs of Alchemy
                    </strong>{" "}
                    &mdash; Upgrade a normal item to rare with random modifiers.
                    Valued at around 0.15 Chaos each. Commonly used on maps to
                    increase their quantity and rarity bonuses.
                  </span>
                </li>
              </ul>
              <p>
                These base currencies are the lifeblood of day-to-day crafting.
                Efficient players stockpile them through mapping and convert
                them upward when they accumulate enough for meaningful trades.
                Vendor recipes also provide a steady supply &mdash; for example,
                selling a full set of unidentified rare items yields 2 Chaos
                Orbs (the &quot;Chaos recipe&quot;).
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                High-Value Currency
              </h3>
              <p>
                At the top of the currency hierarchy sit the orbs that define
                the endgame economy:
              </p>
              <ul className="space-y-1.5 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">Chaos Orb</strong>{" "}
                    &mdash; The de facto standard currency unit. Re-rolls all
                    modifiers on a rare item. Most prices on trade sites are
                    listed in Chaos Orbs, making it the &quot;dollar&quot; of
                    Path of Exile.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">
                      Exalted Orb
                    </strong>{" "}
                    &mdash; Adds a new random modifier to a rare item. Worth
                    roughly 12 Chaos. Once the premium currency, its value has
                    decreased since the introduction of the Divine Orb rework.
                    Still valuable for certain crafting benchmarks.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">Divine Orb</strong>{" "}
                    &mdash; Re-rolls the values of all explicit modifiers within
                    their ranges. Currently the most valuable common currency at
                    roughly 150 Chaos Orbs. Used for high-end crafting and
                    meta-crafting bench recipes. Its importance skyrocketed after
                    the Lake of Kalandra expansion changed how modifier values
                    are re-rolled.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">
                      Mirror of Kalandra
                    </strong>{" "}
                    &mdash; The rarest and most valuable currency. Creates an
                    exact mirrored copy of a non-unique item. Worth thousands of
                    Divine Orbs. Most players will never find one naturally, and
                    those who do typically sell them for massive currency
                    stockpiles.
                  </span>
                </li>
              </ul>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                Useful Vendor Recipes for Currency
              </h3>
              <p>
                Vendor recipes are a reliable way to generate specific currencies
                without relying on drops or trades. Here are the most useful
                ones every exile should know:
              </p>
              <ul className="space-y-1.5 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">
                      Chaos Recipe
                    </strong>{" "}
                    &mdash; Sell a full set of rare items (each slot filled,
                    item level 60&ndash;74) to a vendor for 1 Chaos Orb
                    (identified) or 2 Chaos Orbs (unidentified). This is the
                    bread-and-butter recipe for early league currency generation.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">
                      Chromatic Recipe
                    </strong>{" "}
                    &mdash; Sell any item with linked red-green-blue sockets
                    (RGB) to receive a Chromatic Orb. Learn more in our{" "}
                    <Link
                      href="/chromatic-orb-recipe"
                      className="poe-link text-poe-gold"
                    >
                      Chromatic Orb Recipe guide
                    </Link>
                    .
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">
                      Jeweller&apos;s Recipe
                    </strong>{" "}
                    &mdash; Sell a six-socket item (not six-linked) for 7
                    Jeweller&apos;s Orbs. Six-socket items are common drops in
                    high-level maps, making this a steady income source. Always
                    pick up six-socket items during mapping.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">
                      GCP Recipe
                    </strong>{" "}
                    &mdash; Sell gems with a total of 40% combined quality to
                    receive 1 Gemcutter&apos;s Prism. Collect quality gems during
                    mapping and combine them for a nice bonus.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">
                      Divine Recipe
                    </strong>{" "}
                    &mdash; Sell a six-linked item to a vendor for a Divine Orb.
                    Given Divine Orbs&apos; current high value, this recipe is
                    extremely important. Never vendor a six-linked item without
                    claiming this recipe first.
                  </span>
                </li>
              </ul>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                Trading Tips for Path of Exile
              </h3>
              <p>
                Efficient trading is a core skill that separates casual players
                from those who amass serious wealth. Here are proven strategies
                for better trades:
              </p>
              <ul className="space-y-1.5 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">
                      Price check everything
                    </strong>{" "}
                    &mdash; Before listing or buying, check current rates on
                    poe.ninja or the official trade site. Prices fluctuate
                    significantly, especially in the first two weeks of a new
                    league when the economy is still stabilizing.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">
                      Buy in bulk
                    </strong>{" "}
                    &mdash; Many sellers offer better rates for bulk purchases.
                    If you need 500 Fusings, buying from a bulk seller is faster
                    and often cheaper per unit than buying small batches.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">
                      Convert up regularly
                    </strong>{" "}
                    &mdash; Do not hoard thousands of low-tier currencies. Convert
                    your Alterations, Jeweller&apos;s, and Chromatics into Chaos
                    regularly to keep your wealth liquid and ready for big
                    purchases.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">
                      Understand league timing
                    </strong>{" "}
                    &mdash; Currency values shift throughout a league. Divine
                    Orbs tend to be cheaper early and rise as more players reach
                    endgame crafting. Items used for popular builds spike in
                    price when build guides are published, then gradually fall.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">
                      Use currency tabs
                    </strong>{" "}
                    &mdash; The currency stash tab is one of the best
                    investments for organization. Keeping your currencies sorted
                    helps you track your wealth and respond quickly to trade
                    requests. The fragment and essence tabs are also worth
                    considering for serious players.
                  </span>
                </li>
              </ul>
              <p>
                Trading efficiently also means knowing when <em>not</em> to
                trade. Sometimes the best value from an Exalted Orb is
                slamming it onto a crafting project, and sometimes a Fusing is
                better spent attempting a six-link than sold for fractions of a
                Chaos. Understanding both the market value and the crafting
                value of each currency will help you maximize your returns in
                Path of Exile. Use tools like this currency calculator alongside
                the{" "}
                <Link
                  href="/vorici-calculator"
                  className="poe-link text-poe-gold"
                >
                  Chromatic Calculator
                </Link>{" "}
                to make data-driven decisions about your currency spending.
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
              "@type": "WebApplication",
              name: "PoE Currency Calculator - Path of Exile Exchange Rates",
              url: "https://poecalc.tools/poe-currency-calculator",
              description:
                "Free PoE currency calculator with reference exchange rates. Convert Chaos Orbs, Exalted Orbs, Divine Orbs, and more.",
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
    </>
  );
}
