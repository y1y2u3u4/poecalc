import type { Metadata } from "next";
import Link from "next/link";
import VoriciCalculator from "@/components/VoriciCalculator";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "PoE Off-Color Calculator - Off-Color Socket Cost Estimator",
  description:
    "Free off-color socket calculator for Path of Exile. Find the cheapest way to get off-color sockets — compare Chromatic Orb spam, Crafting Bench, and Jeweller's method. Exact PoE probability math.",
  keywords: [
    "off color calculator",
    "off color sockets poe",
    "poe off color",
    "off color crafting poe",
    "off colour sockets",
    "poe wrong color sockets",
    "off color socket calculator",
  ],
  alternates: {
    canonical: "https://poecalc.tools/off-color-calculator",
  },
  openGraph: {
    title: "PoE Off-Color Calculator - Off-Color Socket Cost Estimator",
    description:
      "Free off-color socket calculator for Path of Exile. Find the cheapest way to get off-color sockets — compare Chromatic Orb spam, Crafting Bench, and Jeweller's method.",
    url: "https://poecalc.tools/off-color-calculator",
    type: "website",
  },
};

export default function OffColorCalculatorPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Off-Color Calculator" }]} />
      <div className="max-w-3xl mx-auto px-5 py-10">
        <div className="mb-8 animate-fade-in">
          <p className="font-[family-name:var(--font-heading)] text-poe-text-dim text-xs tracking-[4px] uppercase mb-3">
            Crafting Tool
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-poe-gold tracking-wide mb-3">
            PoE Off-Color Calculator
          </h1>
          <hr className="poe-separator max-w-[200px] mb-4" />
          <p className="text-poe-text-dim text-[15px] leading-relaxed max-w-xl">
            Find the cheapest way to roll off-color sockets on your Path of
            Exile items.
          </p>
        </div>

        <VoriciCalculator />

        {/* SEO Content: What Are Off-Color Sockets? */}
        <section className="mt-12 space-y-8">
          <div className="poe-frame">
            <div className="poe-frame-header">
              <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
                What Are Off-Color Sockets in Path of Exile?
              </h2>
            </div>
            <div className="poe-frame-body space-y-5 text-sm text-poe-text-dim leading-relaxed">
              <p>
                In Path of Exile, every piece of armour has attribute
                requirements that heavily influence the colors of its sockets.
                An{" "}
                <strong className="text-poe-text-bright">
                  off-color socket
                </strong>{" "}
                is any socket whose color does not match the item&apos;s primary
                attribute. For example, rolling{" "}
                <span className="text-poe-blue font-semibold">
                  Blue (Intelligence)
                </span>{" "}
                sockets on a pure{" "}
                <span className="text-poe-red font-semibold">
                  Strength body armour
                </span>{" "}
                is considered off-color because the item naturally favours{" "}
                <span className="text-poe-red font-semibold">Red</span>{" "}
                sockets.
              </p>
              <p>
                Similarly, getting{" "}
                <span className="text-poe-green font-semibold">
                  Green (Dexterity)
                </span>{" "}
                sockets on{" "}
                <span className="text-poe-blue font-semibold">
                  Intelligence-based gear
                </span>{" "}
                like an Energy Shield helmet is off-color. The higher the
                item&apos;s single-attribute requirement, the harder it becomes
                to roll sockets of a different color. A pure Strength chest with
                180 STR requirement has roughly an 89% chance per socket to roll
                Red, leaving only about 5.5% for Green and 5.5% for Blue.
              </p>
              <p>
                Players frequently need off-color sockets because skill gems
                require specific socket colors regardless of what item type you
                are wearing. A{" "}
                <span className="text-poe-blue font-semibold">
                  spell caster
                </span>{" "}
                who wants to use a high-armour Strength chest for its defensive
                stats will still need mostly Blue sockets for their Intelligence
                spell gems. This mismatch between item base type and gem colour
                requirements is one of the core crafting challenges in Path of
                Exile, and it is exactly the problem this off-color calculator
                solves.
              </p>
              <p>
                Understanding off-color probability is essential for planning
                your build budget. Without a calculator, you might waste
                thousands of Chromatic Orbs when a Crafting Bench recipe would
                have been far cheaper. Use the calculator above to enter your
                item&apos;s stat requirements and desired colors, and instantly
                see the most cost-efficient method.
              </p>
            </div>
          </div>

          {/* Three Methods for Off-Color Sockets */}
          <div className="poe-frame">
            <div className="poe-frame-header">
              <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
                How to Get Off-Color Sockets
              </h2>
            </div>
            <div className="poe-frame-body space-y-5 text-sm text-poe-text-dim leading-relaxed">
              <p>
                There are three main methods for obtaining off-color sockets in
                Path of Exile. Each method has its own strengths and ideal use
                cases. The best choice depends on how many off-colors you need
                and your item&apos;s attribute requirements.
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                Method 1 — Chromatic Orb Spam
              </h3>
              <p>
                The simplest approach is using Chromatic Orbs directly on your
                item. Each Chromatic Orb re-rolls all socket colors at once,
                with each socket independently determined by the item&apos;s
                attribute requirements. This method is cheap and effective for
                one or two off-color sockets, where the probability is still
                reasonable. However, the cost grows exponentially as you add
                more off-colors. Getting three off-colors on a pure attribute
                item might cost hundreds of chromes on average, and four or more
                off-colors can cost tens of thousands — making raw spamming
                impractical for extreme cases.
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                Method 2 — Crafting Bench Recipes
              </h3>
              <p>
                The Crafting Bench offers &quot;At least X [color]&quot;
                recipes, such as &quot;At least 3 Blue Sockets&quot; or
                &quot;At least 2 Green Sockets.&quot; These recipes have a fixed
                Chromatic Orb cost and guarantee the result. You always get at
                least the specified number of that color, with remaining sockets
                rolled according to normal probability. For three or more
                off-colors, the bench recipe is almost always cheaper than
                Chromatic Orb spam. The downside is that bench recipes have a
                maximum — typically up to &quot;At least 3&quot; of a single
                color — so they cannot solve every scenario.
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                Method 3 — The Jeweller&apos;s Method
              </h3>
              <p>
                The Jeweller&apos;s method (sometimes called the &quot;socket
                trick&quot;) is the most efficient technique for getting four or
                more off-color sockets on a six-socket item. Here is how it
                works step by step:
              </p>
              <ul className="space-y-1.5 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">Step 1:</strong>{" "}
                    Reduce the item to the number of sockets matching the
                    off-colors you need. For example, if you need 4 Blue sockets
                    on a STR item, reduce it to 2 sockets using Jeweller&apos;s
                    Orbs.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">Step 2:</strong>{" "}
                    Use the Crafting Bench to force those sockets to the desired
                    off-color (e.g., &quot;At least 2 Blue&quot;).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">Step 3:</strong>{" "}
                    Add sockets back one at a time using Jeweller&apos;s Orbs or
                    the Crafting Bench. Each new socket is rolled independently,
                    so on a STR item, newly added sockets will most likely be
                    Red — which is what you want for the remaining non-off-color
                    sockets.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">Step 4:</strong>{" "}
                    If a newly added socket rolls the wrong color, remove it and
                    try again. Repeat until all sockets are correct.
                  </span>
                </li>
              </ul>
              <p>
                This method is the go-to strategy for extreme off-coloring. It
                can save thousands of Chromatic Orbs compared to brute-force
                spamming, especially on six-socket items where you need four,
                five, or even all six sockets in an off-color. For a detailed
                breakdown using our chrome math, try our{" "}
                <Link
                  href="/vorici-calculator"
                  className="poe-link text-poe-gold"
                >
                  Vorici Chromatic Calculator
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Off-Color Cost Examples */}
          <div className="poe-frame">
            <div className="poe-frame-header">
              <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
                Off-Color Socket Cost Examples
              </h2>
            </div>
            <div className="poe-frame-body space-y-5 text-sm text-poe-text-dim leading-relaxed">
              <p>
                The following table shows estimated Chromatic Orb costs for
                common off-color scenarios on a pure Strength item (e.g., 155
                STR requirement, no DEX/INT). These are average costs — your
                actual results may be higher or lower due to probability.
              </p>
              <div className="overflow-x-auto -mx-5 px-5">
                <table className="results-table">
                  <thead>
                    <tr>
                      <th>Off-Colors</th>
                      <th>Avg. Chromes</th>
                      <th className="hidden sm:table-cell">
                        Recommended Method
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 off-color</td>
                      <td>~5</td>
                      <td className="hidden sm:table-cell">
                        Chromatic Orb spam
                      </td>
                    </tr>
                    <tr>
                      <td>2 off-colors</td>
                      <td>~30</td>
                      <td className="hidden sm:table-cell">
                        Chromatic Orb spam or Bench
                      </td>
                    </tr>
                    <tr>
                      <td>3 off-colors</td>
                      <td>~200-500</td>
                      <td className="hidden sm:table-cell">
                        Crafting Bench recipe
                      </td>
                    </tr>
                    <tr>
                      <td>4+ off-colors</td>
                      <td>~2,000+</td>
                      <td className="hidden sm:table-cell">
                        Jeweller&apos;s method
                      </td>
                    </tr>
                    <tr>
                      <td>5-6 off-colors</td>
                      <td>~10,000+</td>
                      <td className="hidden sm:table-cell">
                        Jeweller&apos;s method (essential)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                These are rough estimates for a pure attribute item. Hybrid
                items (like STR/INT gear) have much better odds because two
                colors are &quot;on-color.&quot; Enter your exact values in the
                calculator above for precise estimates tailored to your specific
                item.
              </p>
              <p>
                Need more Chromatic Orbs? Learn how to{" "}
                <Link
                  href="/chromatic-orb-recipe"
                  className="poe-link text-poe-gold"
                >
                  farm Chromatic Orbs efficiently
                </Link>{" "}
                using vendor recipes and other methods.
              </p>
            </div>
          </div>

          {/* Tips for Off-Color Crafting */}
          <div className="poe-frame">
            <div className="poe-frame-header">
              <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
                Tips for Cheaper Off-Color Sockets
              </h2>
            </div>
            <div className="poe-frame-body space-y-5 text-sm text-poe-text-dim leading-relaxed">
              <p>
                Off-color crafting can be one of the most expensive parts of
                gearing a character, but there are several strategies to
                minimize your costs. Here are the most important tips every
                exile should know.
              </p>

              <ul className="space-y-1.5 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">
                      Use low attribute requirement items when possible.
                    </strong>{" "}
                    The lower the stat requirements on an item, the closer each
                    color&apos;s probability gets to 33%. An item with only 50
                    STR requirement is far easier to off-color than one with 180
                    STR. If your build can handle slightly lower armour values,
                    choosing a lower-level base can save you a fortune in
                    Chromatic Orbs.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">
                      Hybrid items make two colors &quot;on-color.&quot;
                    </strong>{" "}
                    Items with split attribute requirements — like STR/INT
                    (Armour/Energy Shield), STR/DEX (Armour/Evasion), or DEX/INT
                    (Evasion/ES) bases — naturally roll two colors frequently.
                    If your build needs Red and Blue sockets, a STR/INT hybrid
                    base will roll both colors easily. This is one of the most
                    overlooked money-saving techniques in Path of Exile.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">
                      Always check the Crafting Bench first for 3+ off-colors.
                    </strong>{" "}
                    The fixed-cost bench recipes are almost always cheaper than
                    spamming Chromatic Orbs when you need three or more
                    off-color sockets. Compare the bench cost against the
                    calculator&apos;s average before committing your currency.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">
                      The Jeweller&apos;s method is essential for extreme cases.
                    </strong>{" "}
                    When you need four, five, or six off-color sockets on a pure
                    attribute item, the Jeweller&apos;s method is not optional
                    — it is the only practical approach. While it costs
                    Jeweller&apos;s Orbs in addition to Chromatics, the total
                    currency spent is dramatically lower than any other method.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">
                      Consider your build&apos;s flexibility.
                    </strong>{" "}
                    Sometimes swapping one gem for an alternative that uses a
                    different color can reduce the number of off-colors you need
                    by one, which can cut your crafting costs by 80% or more.
                    Always evaluate whether a small build adjustment can save
                    significant currency.
                  </span>
                </li>
              </ul>

              <p>
                For a complete overview of sockets, links, and coloring
                mechanics, read our{" "}
                <Link
                  href="/poe-socket-guide"
                  className="poe-link text-poe-gold"
                >
                  PoE Socket Guide
                </Link>
                . And for precise cost calculations, use the off-color
                calculator at the top of this page — it handles all the math so
                you do not have to.
              </p>
            </div>
          </div>
        </section>

        {/* JSON-LD: WebApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "PoE Off-Color Calculator - Off-Color Socket Cost Estimator",
              url: "https://poecalc.tools/off-color-calculator",
              description:
                "Free off-color socket calculator for Path of Exile. Find the cheapest way to get off-color sockets using Chromatic Orbs, Crafting Bench, or Jeweller's method.",
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
        {/* JSON-LD: FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What are off-color sockets in Path of Exile?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Off-color sockets are socket colors that don't match an item's primary attribute. For example, Blue (Intelligence) sockets on a Strength-based armour are off-color because the item naturally favours Red sockets. The higher the item's attribute requirement, the harder it is to roll off-color sockets.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the cheapest way to get off-color sockets?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "For 1-2 off-colors, Chromatic Orb spam is cheapest. For 3 off-colors, Crafting Bench recipes are usually more efficient. For 4+ off-colors, the Jeweller's method (reducing sockets, coloring with the bench, then adding sockets back) is by far the most cost-effective approach.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does the Jeweller's method work for off-coloring?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Jeweller's method involves reducing an item's sockets to a small number, using the Crafting Bench to force those sockets to your desired off-color, then adding sockets back one at a time. Each new socket rolls based on the item's attributes, so on a Strength item the new sockets will likely be Red. If a new socket rolls wrong, you remove and re-add it. This is the most efficient way to get 4-6 off-color sockets.",
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
