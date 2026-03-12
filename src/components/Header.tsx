import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-poe-border bg-poe-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-poe-gold font-bold text-lg hover:text-poe-gold-light transition-colors"
        >
          PoECalc.tools
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/vorici-calculator"
            className="text-poe-text-dim hover:text-poe-text transition-colors"
          >
            Vorici Calculator
          </Link>
          <Link
            href="/timeless-jewel-calculator"
            className="text-poe-text-dim hover:text-poe-text transition-colors"
          >
            Timeless Jewel
          </Link>
          <Link
            href="/about"
            className="text-poe-text-dim hover:text-poe-text transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
