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
        <nav className="flex items-center gap-4 md:gap-6 text-[13px] flex-wrap">
          <Link href="/vorici-calculator" className="poe-link tracking-wide">
            Vorici Calc
          </Link>
          <Link href="/poe-dps-calculator" className="poe-link tracking-wide">
            DPS Calc
          </Link>
          <Link href="/poe-currency-calculator" className="poe-link tracking-wide">
            Currency
          </Link>
          <Link href="/poe-socket-guide" className="poe-link tracking-wide hidden md:inline">
            Socket Guide
          </Link>
          <Link href="/about" className="poe-link tracking-wide hidden md:inline">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
