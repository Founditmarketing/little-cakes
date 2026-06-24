import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/PageHero";
import { Reveal, Magnetic } from "@/components/motion-primitives";
import { OrderButton } from "@/components/OrderButton";
import { MENU_CATEGORIES } from "@/lib/menu";
import { categoryMenuLd } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return MENU_CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = MENU_CATEGORIES.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: `${cat.name} Menu`,
    description: `${cat.name} at Little Cakes With Big Attitude in Alexandria and Pineville, Louisiana. ${cat.intro ?? ""}`.trim(),
    alternates: { canonical: `/${cat.slug}` },
    openGraph: {
      title: `${cat.name} | Little Cakes With Big Attitude`,
      images: [cat.image],
      type: "website",
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = MENU_CATEGORIES.find((c) => c.slug === category);
  if (!cat) notFound();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryMenuLd(cat)) }}
      />
      <PageHero
        title={cat.name}
        intro={cat.intro}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Menu", href: "/menu" },
          { name: cat.name, href: `/${cat.slug}` },
        ]}
      >
        <div className="mt-8">
          <Link
            href="/menu"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-cream"
          >
            <ArrowLeft weight="bold" className="size-4" /> All categories
          </Link>
        </div>
      </PageHero>

      {/* Category image band */}
      <section className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden rounded-card sm:aspect-[16/7]">
            <Image
              src={cat.image}
              alt={cat.imageAlt}
              fill
              sizes="(min-width: 1400px) 1340px, 92vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* Groups */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 md:py-24">
        <div className="flex flex-col gap-16">
          {cat.groups.map((group, gi) => (
            <Reveal key={gi}>
              <div>
                {group.heading ? (
                  <div className="mb-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line pb-4">
                    <h2 className="font-display text-2xl font-bold tracking-tight text-cream sm:text-3xl">
                      {group.heading}
                    </h2>
                    {group.note && (
                      <span className="text-sm text-faint">{group.note}</span>
                    )}
                  </div>
                ) : (
                  <h2 className="sr-only">{cat.name}</h2>
                )}
                <div className="grid gap-x-12 gap-y-7 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <div key={item.name}>
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="font-display text-lg font-bold tracking-tight text-cream">
                          {item.name}
                        </h3>
                        {item.price && (
                          <span className="shrink-0 font-mono text-sm text-teal">
                            {item.price}
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="mt-1.5 max-w-prose text-sm leading-relaxed text-muted">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {cat.pricingNote && (
          <Reveal>
            <p className="mt-14 max-w-2xl rounded-card border border-line bg-ink-2 p-6 text-sm leading-relaxed text-muted">
              {cat.pricingNote}
            </p>
          </Reveal>
        )}

        <Reveal>
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Magnetic>
              <OrderButton />
            </Magnetic>
            {cat.slug === "cupcakes" && (
              <Link
                href="/build-a-box"
                className="inline-flex items-center rounded-full border border-line px-6 py-3 text-[15px] font-semibold text-cream transition-colors hover:border-teal hover:text-teal"
              >
                Build your own dozen
              </Link>
            )}
            <span className="text-sm text-faint">
              Order ahead for pickup at either shop.
            </span>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 border-t border-line pt-10">
            <h2 className="font-display text-xl font-bold tracking-tight text-cream">
              Keep exploring
            </h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {MENU_CATEGORIES.filter((c) => c.slug !== cat.slug).map((c) => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:border-teal hover:text-teal"
                >
                  {c.name}
                </Link>
              ))}
              <Link
                href="/coffee"
                className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:border-teal hover:text-teal"
              >
                Coffee &amp; espresso bar
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
