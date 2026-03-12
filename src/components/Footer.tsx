import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-poe-border bg-poe-card/50 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-poe-gold font-bold mb-3">PoECalc.tools</h3>
            <p className="text-poe-text-dim text-sm leading-relaxed">
              Free Path of Exile calculator tools to help you craft more
              efficiently. Not affiliated with Grinding Gear Games.
            </p>
          </div>
          <div>
            <h4 className="text-poe-text font-semibold mb-3 text-sm">Tools</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/vorici-calculator"
                  className="text-poe-text-dim hover:text-poe-gold transition-colors"
                >
                  Vorici Chromatic Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/timeless-jewel-calculator"
                  className="text-poe-text-dim hover:text-poe-gold transition-colors"
                >
                  Timeless Jewel Calculator
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-poe-text font-semibold mb-3 text-sm">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-poe-text-dim hover:text-poe-gold transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-poe-text-dim hover:text-poe-gold transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-poe-border text-center text-poe-text-dim text-xs">
          <p>
            Path of Exile is a trademark of Grinding Gear Games. This site is
            not affiliated with or endorsed by Grinding Gear Games.
          </p>
          <p className="mt-1">
            &copy; {new Date().getFullYear()} PoECalc.tools. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
