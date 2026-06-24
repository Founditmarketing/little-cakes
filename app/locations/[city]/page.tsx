import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, Clock, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion-primitives";
import { LOCATIONS } from "@/lib/site";
import { MENU_CATEGORIES } from "@/lib/menu";
import { singleLocationLd } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ city: l.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const loc = LOCATIONS.find((l) => l.id === city);
  if (!loc) return {};
  return {
    title: {
      absolute: `Coffee Shop & Bakery in ${loc.name}, LA | Little Cakes With Big Attitude`,
    },
    description: `Little Cakes With Big Attitude is a coffee shop and scratch bakery in ${loc.name}, LA at ${loc.address.split(",")[0]}. Iced lattes, cold brew, cupcakes and cookies. Order ahead or stop by.`,
    alternates: { canonical: `/locations/${loc.id}` },
    openGraph: {
      title: `Coffee Shop & Bakery in ${loc.name}, LA | Little Cakes With Big Attitude`,
      images: ["/photos/coffee-iced.jpg"],
      type: "website",
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const loc = LOCATIONS.find((l) => l.id === city);
  if (!loc) notFound();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(singleLocationLd(loc)) }}
      />

      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: loc.name, href: `/locations/${loc.id}` },
        ]}
        kicker="Visit"
        title={`Your ${loc.name} coffee shop.`}
        intro={`A coffee shop and scratch bakery in ${loc.name}, LA. Iced lattes, cold brew, matcha and frozen coffee, plus scratch cupcakes, cakes and cookies. Order ahead for pickup or just come say hey.`}
      />

      <section className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 md:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Details */}
          <Reveal>
            <div className="rounded-card border border-line bg-ink-2 p-8">
              {loc.blurb && <p className="mb-6 text-muted">{loc.blurb}</p>}
              <dl className="space-y-5 text-[15px]">
                <div className="flex items-start gap-3">
                  <MapPin weight="fill" className="mt-0.5 size-5 shrink-0 text-teal" />
                  <div>
                    <dt className="sr-only">Address</dt>
                    <dd className="text-cream">{loc.address}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock weight="fill" className="mt-0.5 size-5 shrink-0 text-teal" />
                  <div>
                    <dt className="sr-only">Hours</dt>
                    <dd className="text-muted">{loc.hours}, Sunday closed</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone weight="fill" className="mt-0.5 size-5 shrink-0 text-teal" />
                  <div>
                    <dt className="sr-only">Phone</dt>
                    <dd>
                      <a href={loc.phoneHref} className="text-muted hover:text-cream">
                        {loc.phone}
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={loc.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-teal px-6 py-3 text-[15px] font-semibold text-teal-ink transition-colors hover:bg-teal-bright"
                >
                  Order ahead
                  <ArrowUpRight weight="bold" className="size-4" />
                </a>
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-line px-6 py-3 text-[15px] font-semibold text-cream transition-colors hover:border-teal hover:text-teal"
                >
                  Directions
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <a href={loc.giftUrl} target="_blank" rel="noopener noreferrer" className="text-teal hover:text-teal-bright">
                  Gift cards
                </a>
                <a href={loc.rewardsUrl} target="_blank" rel="noopener noreferrer" className="text-teal hover:text-teal-bright">
                  Rewards
                </a>
                <Link href="/#catering" className="text-teal hover:text-teal-bright">
                  Catering
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-card border border-line">
              <iframe
                title={`Map to Little Cakes With Big Attitude in ${loc.name}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(loc.address)}&output=embed`}
                loading="lazy"
                className="aspect-[4/3] w-full grayscale-[0.3]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Coffee-shop angle */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 md:py-20">
          <Reveal>
            <h2 className="max-w-3xl font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight">
              Cold brew, lattes, and the Monday deal.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Our {loc.name} coffee shop pulls real espresso and brews cold brew
              daily: iced lattes, iced macchiato, matcha, chai and frozen coffee,
              plus the Monday $1 off any large iced latte. Grab a cupcake to go
              with your cup.
            </p>
            <div className="mt-7">
              <Link
                href="/coffee"
                className="inline-flex items-center rounded-full bg-teal px-6 py-3 text-[15px] font-semibold text-teal-ink transition-colors hover:bg-teal-bright"
              >
                See the {loc.name} coffee menu
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What's here */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 md:py-20">
          <Reveal>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight">
              What you will find here
            </h2>
            <div className="mt-7 flex flex-wrap gap-3">
              {MENU_CATEGORIES.map((c) => (
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
                Coffee shop
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
