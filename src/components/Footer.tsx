import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-poe-border bg-[#0a0906]">
      <div className="max-w-5xl mx-auto px-5 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-poe-gold text-xs tracking-[3px] uppercase mb-3">
              PoECalc.tools
            </h3>
            <p className="text-poe-text-dim leading-relaxed">
              Free crafting calculators for Path of Exile. Not affiliated with
              Grinding Gear Games.
            </p>
          </div>
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-poe-text-dim text-[10px] tracking-[2px] uppercase mb-3">
              Tools
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/vorici-calculator" className="poe-link text-sm">
                  Vorici Chromatic Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/timeless-jewel-calculator"
                  className="poe-link text-sm"
                >
                  Timeless Jewel Calculator
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-[family-name:var(--font-heading)] text-poe-text-dim text-[10px] tracking-[2px] uppercase mb-3">
              Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="poe-link text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="poe-link text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="poe-separator my-6" />
        <div className="text-center text-poe-text-dim text-xs space-y-1">
          <p>
            Path of Exile is a trademark of Grinding Gear Games. This site is
            not affiliated with or endorsed by Grinding Gear Games.
          </p>
          <p>
            &copy; {new Date().getFullYear()} PoECalc.tools
          </p>
        </div>
      </div>
    </footer>
  );
}
