import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "PoE Socket Guide - Colors, Links & Crafting Explained",
  description:
    "Complete Path of Exile socket guide. Learn how socket colors work, linking mechanics, Jeweller's Orb, Fusing Orb, 6-link probability, and crafting bench recipes. Free guide for all players.",
  keywords: [
    "poe socket guide",
    "poe socket colors",
    "path of exile sockets",
    "poe socket linking",
    "poe 6 link",
    "jewellers orb poe",
    "fusing orb poe",
    "poe socket colors guide",
    "how to color sockets poe",
  ],
  alternates: {
    canonical: "https://poecalc.tools/poe-socket-guide",
  },
  openGraph: {
    title: "PoE Socket Guide - Colors, Links & Crafting Explained",
    description:
      "Complete Path of Exile socket guide. Learn how socket colors work, linking mechanics, Jeweller's Orb, Fusing Orb, 6-link probability, and crafting bench recipes.",
    url: "https://poecalc.tools/poe-socket-guide",
    type: "website",
  },
};

const faqItems = [
  {
    question: "How many sockets can an item have in Path of Exile?",
    answer:
      "The maximum number of sockets depends on the item type. Body armour and two-handed weapons can have up to 6 sockets. Helmets, gloves, boots, and shields can have up to 4 sockets. One-handed weapons can have up to 3 sockets. Rings, amulets, and belts cannot have sockets at all.",
  },
  {
    question: "What determines socket color in PoE?",
    answer:
      "Socket color is determined by the item's attribute requirements. Items requiring Strength favor red sockets, Dexterity favors green, and Intelligence favors blue. The exact probability formula is (attribute + 10) / (total attributes + 30). Items with no attribute requirements have equal chances for all three colors.",
  },
  {
    question: "How many Fusing Orbs does it take to 6-link an item?",
    answer:
      "On average, it takes approximately 1,000 to 1,500 Fusing Orbs to 6-link an item through random fusing. The Crafting Bench offers a guaranteed 6-link recipe for exactly 1,500 Fusing Orbs. Adding 20% quality to your item before fusing improves the linking chance and reduces the average cost.",
  },
  {
    question: "What item level do I need for 6 sockets?",
    answer:
      "You need an item level of at least 50 for 6 sockets, and the item must be a body armour or two-handed weapon. The item level requirements for each socket count are: ilvl 1 for 1 socket, ilvl 2 for 2 sockets, ilvl 25 for 3 sockets, ilvl 35 for 4 sockets, and ilvl 50 for 5 or 6 sockets.",
  },
  {
    question: "What is the Jeweller's Method for off-color sockets?",
    answer:
      "The Jeweller's Method is a cost-effective strategy for getting off-color sockets. You reduce the item's socket count to match the number of off-color sockets you need, use the Crafting Bench to force those colors cheaply, then use Jeweller's Orbs to add sockets back. The newly added sockets will roll their colors naturally, which are likely to be on-color for the item's attributes.",
  },
];

export default function PoeSocketGuidePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "PoE Socket Guide" }]} />
      <div className="max-w-3xl mx-auto px-5 py-10">
        <div className="mb-8 animate-fade-in">
          <p className="font-[family-name:var(--font-heading)] text-poe-text-dim text-xs tracking-[4px] uppercase mb-3">
            Crafting Guide
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-poe-gold tracking-wide mb-3">
            PoE Socket Guide
          </h1>
          <hr className="poe-separator max-w-[200px] mb-4" />
          <p className="text-poe-text-dim text-[15px] leading-relaxed max-w-xl">
            Everything you need to know about sockets in Path of Exile — colors,
            links, crafting methods, and cost-saving strategies.
          </p>
        </div>

        {/* Section 1: Socket Basics */}
        <section className="space-y-8">
          <div className="poe-frame">
            <div className="poe-frame-header">
              <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
                Socket Basics
              </h2>
            </div>
            <div className="poe-frame-body space-y-5 text-sm text-poe-text-dim leading-relaxed">
              <h2 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-base tracking-wide">
                Socket Basics in Path of Exile
              </h2>
              <p>
                Sockets are one of the most fundamental mechanics in Path of Exile. Every piece of equipment you find
                or craft can potentially have sockets, and these sockets are where you place your skill gems and
                support gems. Understanding how sockets work is essential for building any effective character, as the
                number and arrangement of your sockets directly determines which skills you can use and how powerful
                they become.
              </p>
              <p>
                The maximum number of sockets an item can have depends entirely on the item type. Not all gear slots
                are created equal when it comes to socket capacity:
              </p>
              <ul className="space-y-1.5 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span><strong className="text-poe-text-bright">Body Armour and Two-Handed Weapons</strong> — up to 6 sockets. These are the only item types that can achieve the coveted 6-link setup, making them the centerpiece of most builds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span><strong className="text-poe-text-bright">Helmets, Gloves, Boots, and Shields</strong> — up to 4 sockets. These slots are typically used for secondary skills, auras, movement skills, or Cast When Damage Taken setups.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span><strong className="text-poe-text-bright">One-Handed Weapons</strong> — up to 3 sockets. While limited in socket count, dual-wielding or using a weapon with a shield gives you flexibility across multiple gear pieces.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span><strong className="text-poe-text-bright">Rings, Amulets, and Belts</strong> — no sockets. These accessory slots provide stats and modifiers but do not support skill gems (with rare exceptions from unique items like Unset Rings).</span>
                </li>
              </ul>
              <p>
                When planning your build, always consider your total socket budget across all gear pieces. A typical
                endgame character has access to around 20 sockets total, and allocating them wisely between your main
                skill, auras, utility, and defensive setups is a key part of character optimization.
              </p>
            </div>
          </div>

          {/* Section 2: Socket Colors */}
          <div className="poe-frame">
            <div className="poe-frame-header">
              <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
                Socket Colors Explained
              </h2>
            </div>
            <div className="poe-frame-body space-y-5 text-sm text-poe-text-dim leading-relaxed">
              <h2 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-base tracking-wide">
                How Socket Colors Work
              </h2>
              <p>
                Every socket in Path of Exile has a color, and that color determines which type of skill gem can be
                placed in it. There are three primary socket colors, each tied to one of the game&apos;s core attributes:
              </p>
              <ul className="space-y-1.5 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span><span className="text-poe-red font-semibold">Red Sockets</span> — associated with <strong className="text-poe-text-bright">Strength (STR)</strong>. Red gems include melee attacks, warcries, and many physical damage skills. Items with high Strength requirements heavily favor red sockets.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span><span className="text-poe-green font-semibold">Green Sockets</span> — associated with <strong className="text-poe-text-bright">Dexterity (DEX)</strong>. Green gems cover bow skills, traps, evasion-based defenses, and projectile attacks. Evasion gear naturally rolls green sockets more often.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span><span className="text-poe-blue font-semibold">Blue Sockets</span> — associated with <strong className="text-poe-text-bright">Intelligence (INT)</strong>. Blue gems include spells, curses, minion skills, and energy shield mechanics. Energy Shield armor pieces strongly favor blue sockets.</span>
                </li>
              </ul>
              <p>
                In addition to the three primary colors, there are <strong className="text-poe-text-bright">White Sockets</strong> which
                accept any color gem. White sockets are rare and can be obtained through Vorici&apos;s crafting bench
                corruption outcomes or from specific unique items. They are highly valuable because they eliminate the
                need to worry about socket color constraints entirely.
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                The Socket Color Probability Formula
              </h3>
              <p>
                When you use a Chromatic Orb on an item, each socket&apos;s color is rolled independently using the
                item&apos;s attribute requirements. The formula that governs this probability is:
              </p>
              <p className="text-center">
                <code className="font-[family-name:var(--font-mono)] text-poe-gold-light text-xs bg-[#0c0a08] px-2 py-1 border border-poe-border">
                  P(color) = (attribute + 10) / (STR + DEX + INT + 30)
                </code>
              </p>
              <p>
                For example, a pure Strength item with 180 STR requirement has an 86% chance of rolling red on each
                socket, and only about 4.5% for green or blue. This is why getting off-color sockets on heavily
                weighted items can be extremely expensive. Calculate your exact socket color costs with
                our <Link href="/vorici-calculator" className="poe-link text-poe-gold">PoE Color Calculator</Link>.
              </p>
            </div>
          </div>

          {/* Section 3: Socket Links */}
          <div className="poe-frame">
            <div className="poe-frame-header">
              <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
                Socket Links
              </h2>
            </div>
            <div className="poe-frame-body space-y-5 text-sm text-poe-text-dim leading-relaxed">
              <h2 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-base tracking-wide">
                Socket Linking Mechanics
              </h2>
              <p>
                Sockets on an item can be linked together, and linked sockets are what allow support gems to enhance
                active skill gems. When two or more sockets are connected by a link (shown as a golden bar between
                them), any support gem placed in a linked socket will apply its effects to all active skill gems
                within the same link group. This is the foundation of PoE&apos;s skill system — a single active gem
                supported by five powerful support gems creates the devastating 6-link setups that define endgame builds.
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                Fusing Orb Mechanics
              </h3>
              <p>
                Orbs of Fusing are the primary currency used to reforge the links between sockets on an item. Each
                time you use a Fusing Orb, it randomly re-rolls all links on the item. The number of links you get
                is weighted — getting fewer links is much more common than getting many. A 4-link is relatively easy
                to achieve, while a 5-link requires some investment, and a 6-link is the ultimate goal that requires
                significant currency.
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                6-Link Probability and Cost
              </h3>
              <p>
                Achieving a 6-link is one of the most important milestones in Path of Exile. On average, it takes
                approximately <strong className="text-poe-text-bright">1,000 to 1,500 Fusing Orbs</strong> to
                6-link an item through random fusing. However, the variance is enormous — some players hit it in
                under 100 fusings, while others go well past 2,000. This unpredictability is why many players opt
                for the guaranteed alternative.
              </p>
              <p>
                The <strong className="text-poe-text-bright">Crafting Bench</strong> offers a guaranteed 6-link
                recipe that costs exactly <strong className="text-poe-text-bright">1,500 Fusing Orbs</strong>. While
                this is at the upper end of the average range, it eliminates all risk and guarantees your result. For
                expensive or hard-to-replace items, using the bench recipe is almost always the safer choice.
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                Quality Bonus for Linking
              </h3>
              <p>
                Adding <strong className="text-poe-text-bright">20% quality</strong> to your item before using Fusing
                Orbs significantly improves your chances of hitting more links. Quality can be added using Armourer&apos;s
                Scraps (for armour), Blacksmith&apos;s Whetstones (for weapons), or the Crafting Bench. Always quality
                your item to 20% before attempting to link it — this simple step can save you hundreds of Fusing Orbs
                on average.
              </p>
            </div>
          </div>

          {/* Section 4: Jeweller's Orb Guide */}
          <div className="poe-frame">
            <div className="poe-frame-header">
              <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
                Jeweller&apos;s Orb Guide
              </h2>
            </div>
            <div className="poe-frame-body space-y-5 text-sm text-poe-text-dim leading-relaxed">
              <h2 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-base tracking-wide">
                Adding Sockets with Jeweller&apos;s Orbs
              </h2>
              <p>
                Jeweller&apos;s Orbs are the currency used to re-roll the number of sockets on an item. Each use
                randomly changes the socket count, with lower numbers being more common than higher numbers. The
                maximum number of sockets you can roll is limited by both the item type and the item level.
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                Item Level Requirements for Socket Count
              </h3>
              <p>
                The item level (ilvl) of your gear determines how many sockets it can potentially have. Here are the
                minimum item level requirements for each socket count:
              </p>
              <ul className="space-y-1.5 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span><strong className="text-poe-text-bright">Item Level 1</strong> — 1 socket</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span><strong className="text-poe-text-bright">Item Level 2</strong> — up to 2 sockets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span><strong className="text-poe-text-bright">Item Level 25</strong> — up to 3 sockets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span><strong className="text-poe-text-bright">Item Level 35</strong> — up to 4 sockets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span><strong className="text-poe-text-bright">Item Level 50</strong> — up to 5 sockets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-poe-gold mt-0.5">&#8226;</span>
                  <span><strong className="text-poe-text-bright">Item Level 50+</strong> — up to 6 sockets (body armour and two-handed weapons only)</span>
                </li>
              </ul>
              <p>
                Remember that 6 sockets are only possible on body armour and two-handed weapons. Even if a helmet
                has item level 84, it can never have more than 4 sockets due to item type restrictions.
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                Quality and Crafting Bench Recipes
              </h3>
              <p>
                Just like with Fusing Orbs, adding <strong className="text-poe-text-bright">20% quality</strong> to
                your item before using Jeweller&apos;s Orbs increases the chance of rolling higher socket counts.
                This is a straightforward way to reduce your average Jeweller&apos;s Orb investment.
              </p>
              <p>
                The Crafting Bench also offers guaranteed socket count recipes. You can force a specific number of
                sockets on your item for a fixed Jeweller&apos;s Orb cost. While these recipes can be expensive
                (especially for 6 sockets), they eliminate the RNG element entirely. The 6-socket bench recipe
                costs 350 Jeweller&apos;s Orbs — a worthwhile investment if you want to avoid the frustration of
                repeatedly rolling 3 and 4 sockets on your endgame body armour.
              </p>
            </div>
          </div>

          {/* Section 5: Off-Color Socket Strategies */}
          <div className="poe-frame">
            <div className="poe-frame-header">
              <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
                Off-Color Socket Strategies
              </h2>
            </div>
            <div className="poe-frame-body space-y-5 text-sm text-poe-text-dim leading-relaxed">
              <h2 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-base tracking-wide">
                Getting Off-Color Sockets
              </h2>
              <p>
                Off-color sockets are sockets whose color does not match the item&apos;s primary attribute. For
                example, getting <span className="text-poe-blue font-semibold">blue sockets</span> on a pure
                Strength chest piece, or <span className="text-poe-red font-semibold">red sockets</span> on an
                Energy Shield helmet. These off-color sockets are essential for many builds that mix gem types
                across different gear, but they can be extremely expensive to obtain through brute-force
                Chromatic Orb spamming.
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                Method 1: Chromatic Orb Spam
              </h3>
              <p>
                The simplest approach is to repeatedly use Chromatic Orbs until you hit your desired color
                combination. This is cost-effective when you only need 1-2 off-color sockets, but the cost
                scales exponentially with each additional off-color. For a pure Strength item, getting one
                blue socket might cost around 15 Chromatic Orbs on average, but getting three blue sockets
                could cost over 6,000.
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                Method 2: Crafting Bench Recipes
              </h3>
              <p>
                The Crafting Bench offers &quot;At least X [color] sockets&quot; recipes for a fixed price.
                These guarantee a minimum number of sockets in a specific color, with the remaining sockets
                rolling randomly based on the item&apos;s attributes. For 3+ off-color sockets, the Crafting
                Bench is almost always cheaper than Chromatic spam.
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                Method 3: The Jeweller&apos;s Method
              </h3>
              <p>
                The Jeweller&apos;s Method is the most cost-effective technique for getting many off-color
                sockets. The strategy works as follows: first, reduce the item&apos;s socket count to match
                the number of off-color sockets you need. Then use the Crafting Bench to force those sockets
                to your desired color. Finally, use Jeweller&apos;s Orbs to add sockets back — the newly
                added sockets will roll their colors based on the item&apos;s attributes, which means they
                will naturally be on-color. This technique can save thousands of Chromatic Orbs for heavily
                off-color setups.
              </p>

              <h3 className="font-[family-name:var(--font-heading)] text-poe-text-bright text-[13px] tracking-wide pt-2">
                Choosing the Right Method
              </h3>
              <p>
                The most cost-effective method depends on how many off-color sockets you need and the item&apos;s
                attribute requirements. As a general rule: use Chromatic spam for 1-2 off-colors, the Crafting
                Bench for 3 off-colors, and the Jeweller&apos;s Method for 4+ off-colors. Use
                the <Link href="/off-color-calculator" className="poe-link text-poe-gold">Off-Color Calculator</Link> to
                find the cheapest method for your specific situation. You can also learn more
                about <Link href="/chromatic-orb-recipe" className="poe-link text-poe-gold">Chromatic Orb recipes</Link> and
                how to obtain them efficiently.
              </p>
            </div>
          </div>

          {/* Section 6: FAQ */}
          <div className="poe-frame">
            <div className="poe-frame-header">
              <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="poe-frame-body space-y-6 text-sm text-poe-text-dim leading-relaxed">
              {faqItems.map((faq, i) => (
                <div key={i}>
                  {i > 0 && <hr className="poe-separator mb-6" />}
                  <h3 className="text-poe-text-bright font-semibold mb-1">
                    {faq.question}
                  </h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* JSON-LD: Article */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "PoE Socket Guide - Colors, Links & Crafting Explained",
              description:
                "Complete Path of Exile socket guide covering socket colors, linking mechanics, Jeweller's Orbs, Fusing Orbs, and off-color socket strategies.",
              url: "https://poecalc.tools/poe-socket-guide",
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
                "@id": "https://poecalc.tools/poe-socket-guide",
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
              mainEntity: faqItems.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </>
  );
}
