import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import TimelessJewelCalculator from "@/components/TimelessJewelCalculator";
import { TIMELESS_JEWELS, seedCount } from "@/lib/timeless";

const TITLE = "PoE Timeless Jewel Calculator — Seed Checker & Trade Search";
const DESCRIPTION =
  "Free Path of Exile timeless jewel calculator: check any Glorious Vanity, Lethal Pride, Brutal Restraint, Militant Faith, Elegant Hubris or Heroic Tragedy seed, see every conqueror keystone, and open an exact-seed trade search in one click.";
const URL = "https://poecalc.tools/timeless-jewel-calculator";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "poe timeless jewel calculator",
    "timeless jewel calculator",
    "poe timeless jewel",
    "timeless jewel seed",
    "glorious vanity seed",
    "militant faith calculator",
    "elegant hubris calculator",
    "lethal pride seed",
    "timeless jewel trade search",
  ],
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "website" },
};

const FAQ = [
  {
    q: "What does a PoE timeless jewel calculator do?",
    a: "It takes the jewel type, conqueror and seed number from your Timeless Jewel and tells you whether that seed can exist, which keystone the conqueror grants, and lets you search the official trade site for that exact seed. To see how a seed rewrites each notable around a specific socket, load the jewel in Path of Building Community, which has a built-in timeless jewel search.",
  },
  {
    q: "Where is the seed on a Timeless Jewel?",
    a: "The seed is the number in the jewel's first mod line, for example \"Bathed in the blood of 1234 sacrificed in the name of Doryani\". 1234 is the seed and Doryani is the conqueror.",
  },
  {
    q: "What are the seed ranges for each Timeless Jewel?",
    a: TIMELESS_JEWELS.map(
      (j) =>
        `${j.name}: ${j.seedMin.toLocaleString("en-US")}–${j.seedMax.toLocaleString("en-US")}${j.seedStep > 1 ? ` in steps of ${j.seedStep}` : ""}`,
    ).join("; ") + ".",
  },
  {
    q: "Does the conqueror change the seed's notables?",
    a: "No. For the classic conquerors the seed alone decides how notables and small passives are transformed. The conqueror only decides which keystone replaces keystones in the radius. That's why searching trade with \"Any conqueror\" finds more copies of the seed you want.",
  },
  {
    q: "Which Timeless Jewel is best?",
    a: "Glorious Vanity has the highest ceiling because it replaces notables outright, but finding a perfect seed is expensive. Militant Faith is the budget favourite for aura, minion and Devotion builds. Lethal Pride is popular with strength melee builds for the extra Karui notable mods. Elegant Hubris is used when you want to trade small passive stats for strong Eternal notables.",
  },
];

export default function TimelessJewelPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Timeless Jewel Calculator" }]} />
      <div className="max-w-3xl mx-auto px-5 py-10">
        <div className="mb-6 animate-fade-in">
          <p className="font-[family-name:var(--font-heading)] text-poe-text-dim text-xs tracking-[4px] uppercase mb-3">
            Build Optimization
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-poe-gold tracking-wide mb-3">
            PoE Timeless Jewel Calculator
          </h1>
          <hr className="poe-separator max-w-[200px] mb-4" />
          <p className="text-poe-text-dim text-[15px] leading-relaxed max-w-xl">
            Check a Timeless Jewel seed, see the conqueror&apos;s keystone, and jump straight to an exact-seed trade
            search. All six jewels, current league, free.
          </p>
        </div>

        <TimelessJewelCalculator />

        {/* Seed ranges */}
        <section className="poe-frame mt-6 animate-fade-in-delay-2">
          <div className="poe-frame-header">
            <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
              Timeless Jewel Seed Ranges
            </h2>
          </div>
          <div className="poe-frame-body overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-poe-text-dim text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-2 pr-3 font-normal">Jewel</th>
                  <th className="py-2 pr-3 font-normal">Seed range</th>
                  <th className="py-2 font-normal text-right">Seeds</th>
                </tr>
              </thead>
              <tbody>
                {TIMELESS_JEWELS.map((j) => (
                  <tr key={j.id} className="border-t border-poe-border">
                    <td className="py-2 pr-3 text-poe-text-bright">
                      <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ backgroundColor: j.color }} />
                      {j.name}
                    </td>
                    <td className="py-2 pr-3 font-[family-name:var(--font-mono)] text-[13px]">
                      {j.seedMin.toLocaleString("en-US")}–{j.seedMax.toLocaleString("en-US")}
                      {j.seedStep > 1 && <span className="text-poe-text-dim"> (step {j.seedStep})</span>}
                    </td>
                    <td className="py-2 text-right font-[family-name:var(--font-mono)] text-[13px]">
                      {seedCount(j).toLocaleString("en-US")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Conquerors & keystones */}
        <section className="poe-frame mt-6">
          <div className="poe-frame-header">
            <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
              Conquerors &amp; Keystones
            </h2>
          </div>
          <div className="poe-frame-body grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TIMELESS_JEWELS.filter((j) => j.conquerors.some((c) => c.keystone)).map((j) => (
              <div key={j.id} className="stat-card">
                <h3 className="text-sm mb-2" style={{ color: j.color }}>
                  {j.name} <span className="text-poe-text-dim text-xs">· {j.faction}</span>
                </h3>
                <ul className="space-y-1 text-[13px]">
                  {j.conquerors
                    .filter((c) => c.keystone)
                    .map((c) => (
                      <li key={c.name} className="flex justify-between gap-3">
                        <span className="text-poe-text-bright">{c.name}</span>
                        <span className="text-poe-text-dim text-right">{c.keystone}</span>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* How to */}
        <section className="poe-frame mt-6">
          <div className="poe-frame-header">
            <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
              How to Find a Good Timeless Jewel Seed
            </h2>
          </div>
          <div className="poe-frame-body text-sm text-poe-text-dim leading-relaxed">
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                Pick the jewel socket on your passive tree. The radius covers notables that the seed will rewrite, so
                sockets near the notables your build already takes are best.
              </li>
              <li>
                In Path of Building Community, socket a Timeless Jewel and use its timeless jewel search to rank seeds
                for that socket by the stats you weight.
              </li>
              <li>
                Paste the seed above. The calculator confirms it&apos;s a real roll and builds a trade search for that
                seed across every conqueror, sorted by price.
              </li>
              <li>
                Not attached to a keystone? Leave the conqueror on &ldquo;Any&rdquo;. It usually finds a cheaper copy
                of the same seed.
              </li>
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="poe-frame mt-6">
          <div className="poe-frame-header">
            <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-sm tracking-widest uppercase">
              Timeless Jewel FAQ
            </h2>
          </div>
          <div className="poe-frame-body space-y-5">
            {FAQ.map((f) => (
              <div key={f.q}>
                <h3 className="text-poe-text-bright text-[15px] mb-1">{f.q}</h3>
                <p className="text-sm text-poe-text-dim leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebApplication",
                name: "PoE Timeless Jewel Calculator",
                url: URL,
                description: DESCRIPTION,
                applicationCategory: "GameApplication",
                operatingSystem: "Any",
                offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: FAQ.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
            ]),
          }}
        />
      </div>
    </>
  );
}
