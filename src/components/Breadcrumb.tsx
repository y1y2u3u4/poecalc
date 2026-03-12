import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://poecalc.tools" },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.label,
        ...(item.href ? { item: `https://poecalc.tools${item.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="max-w-3xl mx-auto px-5 pt-6 pb-0">
        <ol className="flex items-center gap-1.5 text-xs text-poe-text-dim">
          <li>
            <Link href="/" className="poe-link">
              Home
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              <span className="text-poe-gold/40">/</span>
              {item.href ? (
                <Link href={item.href} className="poe-link">
                  {item.label}
                </Link>
              ) : (
                <span className="text-poe-text-bright">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
