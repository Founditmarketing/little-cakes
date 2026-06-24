import Link from "next/link";
import { SITE_URL } from "@/lib/schema";

/** Visible breadcrumb trail + BreadcrumbList JSON-LD. Last item is the current
    page (rendered as text, but its URL is still included in the schema). */
export function Breadcrumbs({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.href === "/" ? "" : it.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-faint">
          {items.map((it, i) => (
            <li key={it.href} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i < items.length - 1 ? (
                <Link href={it.href} className="transition-colors hover:text-cream">
                  {it.name}
                </Link>
              ) : (
                <span className="text-muted" aria-current="page">
                  {it.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
