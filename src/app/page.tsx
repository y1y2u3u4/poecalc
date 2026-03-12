import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PoE Calculator Tools - Free Path of Exile Calculators",
  description:
    "Free Path of Exile calculator tools including Vorici Chromatic Calculator and Timeless Jewel Calculator. Find the cheapest crafting methods for your PoE items.",
  alternates: {
    canonical: "https://poecalc.tools",
  },
};

function ChromaticIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className="shrink-0"
    >
      <circle cx="16" cy="18" r="8" fill="#7a1020" stroke="#c41e3a" strokeWidth="1.5" />
      <circle cx="16" cy="18" r="4" fill="url(#redGem)" />
      <circle cx="32" cy="18" r="8" fill="#0a3504" stroke="#2dc50e" strokeWidth="1.5" />
      <circle cx="32" cy="18" r="4" fill="url(#greenGem)" />
      <circle cx="24" cy="32" r="8" fill="#0a2545" stroke="#3088e0" strokeWidth="1.5" />
      <circle cx="24" cy="32" r="4" fill="url(#blueGem)" />
      {/* Links between sockets */}
      <line x1="22" y1="20" x2="28" y2="20" stroke="#5c4a35" strokeWidth="2" />
      <line x1="18" y1="24" x2="22" y2="30" stroke="#5c4a35" strokeWidth="2" />
      <line x1="30" y1="24" x2="26" y2="30" stroke="#5c4a35" strokeWidth="2" />
      <defs>
        <radialGradient id="redGem" cx="0.35" cy="0.3">
          <stop offset="0%" stopColor="#ff5070" />
          <stop offset="100%" stopColor="#c41e3a" />
        </radialGradient>
        <radialGradient id="greenGem" cx="0.35" cy="0.3">
          <stop offset="0%" stopColor="#60ff40" />
          <stop offset="100%" stopColor="#2dc50e" />
        </radialGradient>
        <radialGradient id="blueGem" cx="0.35" cy="0.3">
          <stop offset="0%" stopColor="#70b0ff" />
          <stop offset="100%" stopColor="#3088e0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function JewelIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M24 4L40 16L36 40H12L8 16L24 4Z"
        fill="#1a1510"
        stroke="#af6025"
        strokeWidth="1.5"
      />
      <path
        d="M24 10L34 19L31 36H17L14 19L24 10Z"
        fill="url(#jewelGrad)"
        opacity="0.6"
      />
      <circle cx="24" cy="24" r="4" fill="#af6025" opacity="0.4" />
      <defs>
        <linearGradient id="jewelGrad" x1="24" y1="10" x2="24" y2="36">
          <stop offset="0%" stopColor="#af6025" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#af6025" stopOpacity="0.05" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Atmospheric background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1008] via-transparent to-transparent opacity-60 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-radial-[ellipse_at_center] from-[#af6025]/8 to-transparent pointer-events-none" />

        <div className="max-w-5xl mx-auto px-5 pt-24 pb-20 relative">
          <div className="text-center mb-16 animate-fade-in">
            <p className="font-[family-name:var(--font-heading)] text-poe-text-dim text-xs tracking-[6px] uppercase mb-5">
              Exile&apos;s Crafting Companion
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl tracking-wide mb-5">
              <span className="text-poe-gold">Calculator</span>{" "}
              <span className="text-poe-text-bright">Tools</span>
            </h1>
            <hr className="poe-separator max-w-xs mx-auto mb-5" />
            <p className="text-poe-text-dim text-[15px] max-w-lg mx-auto leading-relaxed">
              Find the most efficient crafting methods. Stop wasting currency on
              bad odds. Every chromatic counts.
            </p>
          </div>

          {/* Tool Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {/* Vorici Calculator */}
            <Link
              href="/vorici-calculator"
              className="group poe-frame hover:border-poe-gold/40 transition-all duration-300 animate-fade-in-delay-1"
            >
              <div className="poe-frame-header flex items-center gap-4">
                <ChromaticIcon />
                <div>
                  <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-[15px] tracking-wide group-hover:text-poe-gold-bright transition-colors">
                    Vorici Chromatic Calculator
                  </h2>
                  <p className="text-poe-text-dim text-xs mt-0.5">
                    Socket Color Optimization
                  </p>
                </div>
              </div>
              <div className="poe-frame-body">
                <p className="text-poe-text-dim text-sm leading-relaxed mb-4">
                  Compare Chromatic Orb spam against Crafting Bench recipes.
                  Probability distributions with 90th and 99th percentile
                  estimates.
                </p>
                <div className="flex items-center gap-1.5 mb-4">
                  <span className="w-5 h-5 rounded-full bg-radial-[ellipse_at_35%_30%] from-[#ff5070] to-[#7a1020] border border-[#c41e3a] shadow-[0_0_6px_rgba(196,30,58,0.4)]" />
                  <span className="w-2 h-0.5 bg-[#3a2e1f] rounded-full" />
                  <span className="w-5 h-5 rounded-full bg-radial-[ellipse_at_35%_30%] from-[#60ff40] to-[#0a3504] border border-[#2dc50e] shadow-[0_0_6px_rgba(45,197,14,0.4)]" />
                  <span className="w-2 h-0.5 bg-[#3a2e1f] rounded-full" />
                  <span className="w-5 h-5 rounded-full bg-radial-[ellipse_at_35%_30%] from-[#70b0ff] to-[#0a2545] border border-[#3088e0] shadow-[0_0_6px_rgba(48,136,224,0.4)]" />
                </div>
                <span className="text-poe-gold text-xs font-[family-name:var(--font-heading)] tracking-widest uppercase group-hover:tracking-[4px] transition-all">
                  Open Calculator
                </span>
              </div>
            </Link>

            {/* Timeless Jewel */}
            <Link
              href="/timeless-jewel-calculator"
              className="group poe-frame hover:border-poe-gold/40 transition-all duration-300 relative animate-fade-in-delay-2"
            >
              <div className="absolute top-3 right-4 font-[family-name:var(--font-heading)] text-[9px] tracking-[2px] uppercase text-poe-gold/60 border border-poe-gold/20 px-2 py-0.5">
                Soon
              </div>
              <div className="poe-frame-header flex items-center gap-4">
                <JewelIcon />
                <div>
                  <h2 className="font-[family-name:var(--font-heading)] text-poe-gold-light text-[15px] tracking-wide group-hover:text-poe-gold-bright transition-colors">
                    Timeless Jewel Calculator
                  </h2>
                  <p className="text-poe-text-dim text-xs mt-0.5">
                    Seed &amp; Node Analysis
                  </p>
                </div>
              </div>
              <div className="poe-frame-body">
                <p className="text-poe-text-dim text-sm leading-relaxed mb-4">
                  Search all jewel seeds, preview node transformations, and find
                  the optimal placement for your build. All six jewel types
                  supported.
                </p>
                <span className="text-poe-gold/60 text-xs font-[family-name:var(--font-heading)] tracking-widest uppercase">
                  Coming Soon
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why section — minimal, no emojis */}
      <section className="max-w-3xl mx-auto px-5 py-16 animate-fade-in-delay-3">
        <hr className="poe-separator mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="text-poe-gold font-[family-name:var(--font-heading)] text-xs tracking-[3px] uppercase mb-3">
              Client-Side
            </div>
            <p className="text-poe-text-dim text-sm leading-relaxed">
              All math runs in your browser. No servers, no delays, no data
              sent anywhere.
            </p>
          </div>
          <div>
            <div className="text-poe-gold font-[family-name:var(--font-heading)] text-xs tracking-[3px] uppercase mb-3">
              Exact Formulas
            </div>
            <p className="text-poe-text-dim text-sm leading-relaxed">
              Uses the actual PoE probability model with multinomial
              distribution and percentile estimates.
            </p>
          </div>
          <div>
            <div className="text-poe-gold font-[family-name:var(--font-heading)] text-xs tracking-[3px] uppercase mb-3">
              Save Currency
            </div>
            <p className="text-poe-text-dim text-sm leading-relaxed">
              Know the cheapest method before spending a single chromatic.
              Compare every option at a glance.
            </p>
          </div>
        </div>
        <hr className="poe-separator mt-12" />
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "PoE Calculator Tools",
            url: "https://poecalc.tools",
            description:
              "Free Path of Exile calculator tools for crafting optimization.",
          }),
        }}
      />
    </>
  );
}
