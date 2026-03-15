import type { Metadata } from "next";
import Link from "next/link";
import DpsCalculator from "@/components/DpsCalculator";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "PoE DPS Calculator - Path of Exile Damage Calculator (Free)",
  description:
    "Free PoE DPS calculator. Calculate your Path of Exile character's damage per second with base damage, attack speed, crit chance, and multiplier. Instant results.",
  keywords: [
    "poe dps calculator",
    "path of exile dps calculator",
    "poe damage calculator",
    "poe dps calc",
    "poe damage per second",
    "poe crit calculator",
    "path of exile damage",
  ],
  alternates: {
    canonical: "https://poecalc.tools/poe-dps-calculator",
  },
  openGraph: {
    title: "PoE DPS Calculator - Path of Exile Damage Calculator (Free)",
    description:
      "Free PoE DPS calculator. Calculate your Path of Exile character's damage per second with base damage, attack speed, crit chance, and multiplier. Instant results.",
    url: "https://poecalc.tools/poe-dps-calculator",
    type: "website",
  },
};

export default function PoeDpsCalculatorPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "PoE DPS Calculator" }]} />
      <div className="max-w-3xl mx-auto px-5 py-10">
        <div className="mb-8 animate-fade-in">
          <p className="font-[family-name:var(--font-heading)] text-poe-text-dim text-xs tracking-[4px] uppercase mb-3">
            Damage Tool
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-poe-gold tracking-wide mb-3">
            PoE DPS Calculator
          </h1>
          <hr className="poe-separator max-w-[200px] mb-4" />
          <p className="text-poe-text-dim text-[15px] leading-relaxed max-w-xl">
            Enter your weapon&apos;s base damage, attack speed, and critical
            strike stats to calculate your damage per second.
          </p>
        </div>

        <DpsCalculator />

        {/* SEO Content: PoE DPS Calculator Guide */}
        <section className="mt-12 space-y-8">
          <div className="poe-frame">
            <div className="poe-frame-header">
              <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
                How to Calculate DPS in Path of Exile
              </h2>
            </div>
            <div className="poe-frame-body space-y-5 text-sm text-poe-text-dim leading-relaxed">
              <p>
                Damage per second (DPS) is the single most important offensive metric in{" "}
                <strong className="text-poe-text-bright">Path of Exile</strong>. Whether you are
                evaluating a new weapon drop, comparing gear upgrades, or planning your build&apos;s
                damage scaling, understanding how DPS is calculated gives you a massive advantage.
                This <strong className="text-poe-text-bright">PoE DPS calculator</strong> breaks
                down the entire formula so you can see exactly where your damage comes from and how
                to improve it.
              </p>
              <p>
                The core DPS formula in Path of Exile is straightforward: take your average hit
                damage, multiply it by your attack speed, and then factor in critical strikes. Each
                of these components can be scaled independently through passive tree nodes, gear
                modifiers, support gems, and ascendancy bonuses. Let us walk through each step in
                detail.
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                Understanding Base Damage
              </h3>
              <p>
                Every attack in Path of Exile starts with a base damage range. For weapon-based
                attacks, this comes directly from your weapon&apos;s tooltip — the minimum and
                maximum physical (or elemental) damage values listed on the item. For spells, the
                base damage is defined by the skill gem&apos;s level and any added damage modifiers.
              </p>
              <p>
                The <strong className="text-poe-text-bright">average hit</strong> is calculated as:
              </p>
              <p className="text-center">
                <code className="font-[family-name:var(--font-mono)] text-poe-gold-light text-xs bg-[#0c0a08] px-2 py-1 border border-poe-border">
                  Average Hit = (Min Damage + Max Damage) / 2
                </code>
              </p>
              <p>
                For example, a weapon with 50-100 physical damage has an average hit of 75. This
                seems simple, but the distinction matters when comparing items. A weapon with 40-120
                damage also averages 80 — higher than the first weapon despite having a lower minimum.
                Always compare average damage rather than just the maximum when evaluating weapons.
              </p>
              <p>
                Flat added damage from gear, abyss jewels, and support gems is added directly to
                your base range before any percentage increases apply. This means flat damage is
                most effective on fast-attacking builds that hit many times per second, since each
                hit benefits from the added flat damage.
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                Attack Speed and Its Impact
              </h3>
              <p>
                Attack speed determines how many times per second your character swings, strikes, or
                fires. The <strong className="text-poe-text-bright">base DPS</strong> formula is:
              </p>
              <p className="text-center">
                <code className="font-[family-name:var(--font-mono)] text-poe-gold-light text-xs bg-[#0c0a08] px-2 py-1 border border-poe-border">
                  Base DPS = Average Hit x Attack Speed
                </code>
              </p>
              <p>
                A weapon with 75 average damage and 1.5 attacks per second produces 112.5 base DPS.
                Attack speed is a multiplicative scaling factor, which means a 10% increase in
                attack speed gives you exactly 10% more DPS (assuming no other changes). This makes
                attack speed one of the most efficient stats to scale, especially when you already
                have high flat damage from other sources.
              </p>
              <p>
                Different weapon types have different base attack speeds. Daggers and claws tend to
                be fast (1.5-1.6 attacks/sec) while two-handed maces and axes are slower (1.0-1.2
                attacks/sec). Slower weapons compensate with higher base damage ranges, so the base
                DPS often balances out. However, faster weapons benefit more from flat added damage,
                while slower weapons benefit more from percentage damage increases.
              </p>
              <p>
                Local attack speed modifiers on the weapon (like &quot;15% increased Attack
                Speed&quot;) multiply the weapon&apos;s base attack speed directly. Global attack
                speed from the passive tree or other gear is then applied on top. Understanding this
                distinction helps you evaluate weapon upgrades accurately — a local attack speed
                roll is generally more valuable than a global one of the same magnitude.
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                Critical Strike Mechanics
              </h3>
              <p>
                Critical strikes are one of the most powerful damage multipliers in Path of Exile.
                When a hit critically strikes, it deals bonus damage based on your critical strike
                multiplier. The effective DPS with crits is calculated using the{" "}
                <strong className="text-poe-text-bright">effective crit multiplier</strong>:
              </p>
              <p className="text-center">
                <code className="font-[family-name:var(--font-mono)] text-poe-gold-light text-xs bg-[#0c0a08] px-2 py-1 border border-poe-border">
                  Effective Crit Multi = 1 + (Crit Chance% x (Crit Multiplier% - 1))
                </code>
              </p>
              <p>
                Then the final DPS becomes:
              </p>
              <p className="text-center">
                <code className="font-[family-name:var(--font-mono)] text-poe-gold-light text-xs bg-[#0c0a08] px-2 py-1 border border-poe-border">
                  DPS with Crit = Base DPS x Effective Crit Multi
                </code>
              </p>
              <p>
                For example, with 5% crit chance and 150% crit multiplier, your effective crit
                multi is 1 + (0.05 x 0.5) = 1.025, giving a modest 2.5% DPS increase. But if you
                scale crit chance to 50% and crit multiplier to 400%, the effective crit multi
                becomes 1 + (0.5 x 3.0) = 2.5 — a massive 150% DPS increase over base damage.
              </p>
              <p>
                Path of Exile has a crit chance cap of 100% (achievable through various means) and
                no hard cap on crit multiplier, though most builds reach 400-500% with good gear.
                Critical strike chance on weapons is a local modifier and varies by weapon type —
                daggers and wands tend to have the highest base crit (6-7%), making them popular
                choices for crit-based builds.
              </p>
              <p>
                An important mechanic to understand is accuracy. In Path of Exile, critical strike
                confirmation uses a second accuracy check, meaning your effective crit chance is
                actually reduced if you do not have high accuracy. For melee and ranged attack
                builds, capping accuracy (or using the &quot;Hits can&apos;t be Evaded&quot;
                modifier) is essential for maximizing crit-based DPS.
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                Tips for Maximizing DPS
              </h3>
              <ul className="space-y-1.5 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">Balance flat and percentage damage</strong> —
                    stacking only one type gives diminishing returns. If you have lots of percentage
                    increases, adding flat damage is more effective, and vice versa.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">Scale attack speed efficiently</strong> —
                    attack speed is a pure multiplier. Even small gains compound with other damage
                    sources. Look for local attack speed rolls on weapons for the biggest impact.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">Invest in crit gradually</strong> — crit
                    builds need both high crit chance and high crit multiplier to shine. Going
                    half-crit is often worse than fully committing to either crit or non-crit.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">Use the right support gems</strong> —
                    support gems provide some of the largest damage multipliers in the game. Once
                    you have optimized your DPS, make sure your socket colors support your skill
                    gems using our{" "}
                    <Link href="/vorici-calculator" className="poe-link text-poe-gold">
                      Vorici Calculator
                    </Link>{" "}
                    to get the right colors as cheaply as possible.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">Do not ignore accuracy</strong> — for
                    attack builds, accuracy directly affects both your hit rate and critical strike
                    confirmation. Aim for at least 95% chance to hit, or use items and keystones
                    that guarantee hits.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">Consider damage conversion</strong> —
                    converting physical damage to elemental can let you double-dip on damage
                    modifiers. Physical-to-cold or physical-to-fire conversion builds can achieve
                    very high DPS by scaling both physical and elemental modifiers simultaneously.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span>
                    <strong className="text-poe-text-bright">Check your weapon DPS first</strong> —
                    your weapon is the single most important piece of gear for attack-based builds.
                    A weapon upgrade often provides more DPS than upgrading every other slot
                    combined. Use this calculator to compare weapon options before spending currency.
                  </span>
                </li>
              </ul>

              <hr className="poe-separator my-4" />

              <p>
                Understanding DPS calculation is essential for any serious Path of Exile player.
                Whether you are a new exile just starting out or a veteran min-maxing endgame gear,
                this calculator helps you make informed decisions about your build&apos;s offensive
                power. Pair it with our{" "}
                <Link href="/vorici-calculator" className="poe-link text-poe-gold">
                  Vorici Chromatic Calculator
                </Link>{" "}
                to ensure your gear has the right socket colors for your optimal skill setup, and
                you will be well on your way to dominating Wraeclast.
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
              name: "PoE DPS Calculator - Path of Exile Damage Calculator",
              url: "https://poecalc.tools/poe-dps-calculator",
              description:
                "Free PoE DPS calculator. Calculate your Path of Exile character's damage per second with base damage, attack speed, crit chance, and multiplier.",
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
