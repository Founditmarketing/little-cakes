import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal, Magnetic } from "@/components/motion-primitives";
import { OrderButton } from "@/components/OrderButton";
import { MENU_CATEGORIES } from "@/lib/menu";
import { bakeryMenuLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "The full menu at Little Cakes With Big Attitude: cupcakes, cakes, cookies, breakfast, coffee, paleo and keto treats, ice cream and more. Alexandria and Pineville, Louisiana.",
  alternates: { canonical: "/menu" },
};

const CARDS = [
  ...MENU_CATEGORIES.map((c) => ({
    href: `/${c.slug}`,
    name: c.name,
    image: c.image,
    alt: c.imageAlt,
  })),
  {
    href: "/coffee",
    name: "Coffee & espresso bar",
    image: "/videos/coffee-poster.jpg",
    alt: "Iced latte in a branded teal Little Cakes sleeve",
  },
];

export default function MenuPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bakeryMenuLd()) }}
      />
      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Menu", href: "/menu" },
        ]}
        title="The whole case."
        intro="A scratch bakery and coffee shop in Alexandria and Pineville. Tap a category for flavors, ingredients, and prices."
      />

      <section className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-8 md:pb-32">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card, i) => (
            <Reveal key={card.href} delay={(i % 3) * 0.05}>
              <Link
                href={card.href}
                className="group relative block aspect-[4/3] overflow-hidden rounded-card border border-line"
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h2 className="font-display text-2xl font-bold tracking-tight text-cream">
                    {card.name}
                  </h2>
                  <span className="mt-2 block h-px w-12 origin-left scale-x-0 bg-teal transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Magnetic>
              <OrderButton />
            </Magnetic>
            <span className="text-sm text-faint">
              Tap any category for flavors and prices, or order ahead on Toast.
            </span>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
