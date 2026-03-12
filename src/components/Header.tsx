import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#0a0906]/95 backdrop-blur-sm border-b border-poe-border">
      <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-[family-name:var(--font-heading)] text-poe-gold text-base tracking-widest uppercase hover:text-poe-gold-bright transition-colors"
        >
          PoECalc
          <span className="text-poe-text-dim">.tools</span>
        </Link>
        <nav className="flex items-center gap-8 text-[13px]">
          <Link href="/vorici-calculator" className="poe-link tracking-wide">
            Vorici Calculator
          </Link>
          <Link
            href="/timeless-jewel-calculator"
            className="poe-link tracking-wide"
          >
            Timeless Jewel
          </Link>
          <Link href="/about" className="poe-link tracking-wide">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
