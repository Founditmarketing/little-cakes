import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/motion-primitives";
import { AmbientVideo } from "@/components/AmbientVideo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LOCATIONS, SOCIAL, COFFEE_DRINKS, REVIEWS } from "@/lib/site";
import { COFFEE_MENU, locationNode, SITE_URL } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Coffee Shop in Alexandria & Pineville LA | Iced Lattes & Cold Brew",
  },
  description:
    "Little Cakes is a local coffee shop and scratch bakery in Alexandria & Pineville, LA. Iced lattes, cold brew, matcha, espresso and frozen coffee. Mondays: $1 off large iced lattes.",
  alternates: { canonical: "/coffee" },
  openGraph: {
    title: "Coffee Shop in Alexandria & Pineville LA | Little Cakes With Big Attitude",
    description:
      "A local coffee shop and scratch bakery in Alexandria & Pineville, LA. Iced lattes, cold brew, matcha and espresso. Mondays: $1 off large iced lattes.",
    images: ["/photos/coffee-iced.jpg"],
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "@id": `${SITE_URL}#coffee`,
  name: "Little Cakes With Big Attitude",
  url: `${SITE_URL}/coffee`,
  description:
    "Coffee shop and scratch bakery serving iced lattes, cold brew, espresso, matcha and frozen coffee, plus scratch cupcakes, cookies and cakes, in Alexandria and Pineville, Louisiana. Mondays: $1 off large iced lattes.",
  image: `${SITE_URL}/photos/coffee-iced.jpg`,
  priceRange: "$",
  servesCuisine: ["Coffee", "Espresso", "Cold Brew", "Cafe", "Bakery", "Dessert"],
  sameAs: [SOCIAL.instagram, SOCIAL.facebook],
  hasMenu: COFFEE_MENU,
  makesOffer: {
    "@type": "Offer",
    name: "Monday $1 off large iced lattes",
    description:
      "$1 off any large iced latte every Monday at both Alexandria and Pineville locations.",
    availability: "https://schema.org/InStock",
  },
  department: LOCATIONS.map(locationNode),
};

export default function CoffeePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero split */}
      <section className="mx-auto max-w-[1400px] px-5 pb-20 pt-32 sm:px-8 md:pb-28 md:pt-40">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <div className="mb-6">
                <Breadcrumbs
                  items={[
                    { name: "Home", href: "/" },
                    { name: "Coffee", href: "/coffee" },
                  ]}
                />
              </div>
              <p className="kicker">Coffee Shop</p>
              <h1 className="mt-4 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-extrabold leading-[0.92] tracking-[-0.03em]">
                The coffee shop with the same big attitude.
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
                You came for the cupcake. Stay for the cup. We pull real
                espresso, brew it daily, and shake it over ice like it owes us
                money. Iced lattes, cold brew, frozen coffee, chai and matcha,
                made fresh at our coffee shop in Alexandria and our coffee shop
                in Pineville.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {LOCATIONS.map((loc) => (
                  <a
                    key={loc.id}
                    href={loc.orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-teal px-6 py-3 text-[15px] font-semibold text-teal-ink transition-colors hover:bg-teal-bright"
                  >
                    Order at {loc.name}
                    <ArrowUpRight weight="bold" className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-card lg:ml-auto">
              <AmbientVideo
                src="/videos/coffee.mp4"
                poster="/videos/coffee-poster.jpg"
                posterAlt="Iced latte with cream pouring in, branded teal Little Cakes With Big Attitude sleeve, coffee shop in Alexandria and Pineville Louisiana"
                eager
                className="absolute inset-0 h-full w-full object-cover object-[50%_35%]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Monday deal band */}
      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between md:py-16">
          <div>
            <span className="rounded-full bg-teal px-3 py-1 text-xs font-bold uppercase tracking-wide text-teal-ink">
              Monday deal
            </span>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[0.98] tracking-[-0.03em]">
              Monday: $1 off large iced lattes.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-muted">
            Mondays are rude. We fixed it. Every Monday you get a dollar off any
            large iced latte. No app, no points, no membership card buried in
            your glovebox. Same deal at both shops.
          </p>
        </div>
      </section>

      {/* The cold stuff + drink lineup */}
      <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 md:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-display text-[clamp(2.25rem,5.5vw,4rem)] font-extrabold leading-[0.97] tracking-[-0.03em]">
              The cold stuff that built our reputation.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              Cold brew steeped slow so it drinks smooth, not bitter. The iced
              latte that started a fan club. Sub oat or almond milk, add a syrup,
              make it yours. We are little, but the flavor is not.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {COFFEE_DRINKS.map((drink) => (
              <li
                key={drink}
                className="rounded-2xl border border-line bg-ink-2 px-5 py-5 font-display text-lg font-bold tracking-tight text-cream"
              >
                {drink}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Bottled drinks */}
      <section className="border-t border-line bg-ink-2">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 md:py-28">
          <Reveal>
            <div className="max-w-2xl">
              <span className="rounded-full bg-teal px-3 py-1 text-xs font-bold uppercase tracking-wide text-teal-ink">
                New
              </span>
              <h2 className="mt-4 font-display text-[clamp(2.25rem,5.5vw,4rem)] font-extrabold leading-[0.97] tracking-[-0.03em]">
                Bottled drinks, ready to go.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
                Same flavors you love, sealed and ready when you are. Grab one on your way out — or stock up.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { name: "Bottled Latte", description: "Our house iced latte, sealed fresh." },
                { name: "Bottled Iced Chai", description: "Spiced chai, ready to drink." },
                { name: "Bottled Matcha", description: "Smooth matcha, bottled to go." },
              ].map((item) => (
                <li
                  key={item.name}
                  className="rounded-2xl border border-teal/30 bg-ink px-6 py-6"
                >
                  <p className="font-display text-xl font-bold tracking-tight text-cream">
                    {item.name}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Coffee and cake */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 md:py-28">
          <Reveal>
            <h2 className="max-w-3xl font-display text-[clamp(2.25rem,5.5vw,4rem)] font-extrabold leading-[0.97] tracking-[-0.03em]">
              Coffee and cake. Obviously.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              We were always going to put coffee next to a cupcake. Grab an iced
              latte and a teal-swirl cupcake, or a cold brew and a stack of
              cookies. Order ahead so it is waiting when you are.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/menu"
                className="inline-flex items-center rounded-full bg-teal px-6 py-3 text-[15px] font-semibold text-teal-ink transition-colors hover:bg-teal-bright"
              >
                See the full menu
              </Link>
              <Link
                href="/cupcakes"
                className="inline-flex items-center rounded-full border border-line px-6 py-3 text-[15px] font-semibold text-cream transition-colors hover:border-teal hover:text-teal"
              >
                Grab a cupcake too
              </Link>
              <Link
                href="/#catering"
                className="inline-flex items-center rounded-full border border-line px-6 py-3 text-[15px] font-semibold text-cream transition-colors hover:border-teal hover:text-teal"
              >
                Coffee for your event
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Coffee regulars */}
      <section className="border-t border-line bg-ink-2">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 md:py-24">
          <Reveal>
            <p className="kicker">Coffee regulars</p>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight">
              People drive across town for this cup.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[REVIEWS[2], REVIEWS[3]].map((r, i) => (
              <Reveal key={r.name} delay={0.08 * i}>
                <figure className="flex h-full flex-col rounded-card border border-line bg-ink p-8">
                  <blockquote className="font-display text-xl leading-snug text-cream sm:text-2xl">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 text-sm text-muted">
                    <span className="font-semibold text-cream">{r.name}</span>
                    {" · "}
                    {r.where}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <Link
              href="/share-the-love"
              className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-teal hover:text-teal-bright"
            >
              Read more love from our regulars
              <ArrowUpRight weight="bold" className="size-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Find us */}
      <section className="mx-auto max-w-[1400px] px-5 pb-28 sm:px-8">
        <Reveal>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight">
            Two coffee shops in Central Louisiana.
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {LOCATIONS.map((loc, i) => (
            <Reveal key={loc.id} delay={0.08 * i}>
              <div className="flex h-full flex-col rounded-card border border-line bg-ink-2 p-8">
                <h3 className="font-display text-2xl font-bold tracking-tight text-cream">
                  <Link href={`/locations/${loc.id}`} className="transition-colors hover:text-teal">
                    {loc.name} coffee shop
                  </Link>
                </h3>
                <div className="mt-4 flex items-start gap-3 text-[15px] text-muted">
                  <MapPin weight="fill" className="mt-0.5 size-5 shrink-0 text-teal" />
                  <span>
                    {loc.address}
                    <br />
                    {loc.hours}
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={loc.orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-teal-ink transition-colors hover:bg-teal-bright"
                  >
                    Order at {loc.name}
                    <ArrowUpRight weight="bold" className="size-4" />
                  </a>
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:border-teal hover:text-teal"
                  >
                    Directions
                  </a>
                </div>
                <Link
                  href={`/locations/${loc.id}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-teal hover:text-teal-bright"
                >
                  Hours, map &amp; more for {loc.name}
                  <ArrowUpRight weight="bold" className="size-3.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15}>
          <p className="mt-8 text-sm text-faint">
            See all hours and details on the{" "}
            <Link href="/#locations" className="text-teal hover:text-teal-bright">
              locations page
            </Link>
            .
          </p>
        </Reveal>
      </section>
    </main>
  );
}
