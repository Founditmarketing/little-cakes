import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion-primitives";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "How Little Cakes With Big Attitude started: two strangers training for a triathlon who bonded over cupcakes and never looked back. Scratch baking in Alexandria and Pineville, LA.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
        kicker="Our story"
        title="Two strangers, a triathlon, and a lot of cupcakes."
        intro="We love what we do. Thanks to our Little Cakes fans, we are living the dream, committed to creating unexpected, gourmet treats using only the finest ingredients."
      />

      <section className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 md:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-card">
              <Image
                src="/photos/cupcake-teal-macro.jpg"
                alt="A chocolate cupcake with the signature teal buttercream swirl"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-[40%_45%]"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              <p>
                A shared love of sweet treats is responsible for the friendship
                that led to Little Cakes With Big Attitude. As two strangers
                training together for a triathlon, we distracted each other with
                talk of cupcakes during our long training sessions.
              </p>
              <p>
                We discovered a shared passion for baking, but there was no way
                we could have predicted where those conversations would lead.
                Before long, we had both given up our jobs to travel around
                Louisiana, delivering custom orders and selling our Little Cakes
                at markets and food shows.
              </p>
              <p className="text-cream">
                Thanks to our Little Cakes fans, who inspire all of our
                creations, we have the greatest jobs ever.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What we are now */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 md:py-20">
          <Reveal>
            <p className="kicker">Where we are now</p>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(1.75rem,4vw,3rem)] font-bold tracking-tight">
              Two shops, a full bakery case, and a real coffee bar.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              Those market tables turned into two storefronts in Alexandria and
              Pineville. Today we are a scratch bakery and a full coffee shop:
              cupcakes, cakes and cookies baked fresh daily, alongside iced
              lattes, cold brew, matcha and espresso pulled to order. Come for a
              cupcake, stay for the coffee, or build a morning out of both.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/coffee"
                className="inline-flex items-center rounded-full bg-teal px-6 py-3 text-[15px] font-semibold text-teal-ink transition-colors hover:bg-teal-bright"
              >
                Meet the coffee shop
              </Link>
              <Link
                href="/menu"
                className="inline-flex items-center rounded-full border border-line px-6 py-3 text-[15px] font-semibold text-cream transition-colors hover:border-teal hover:text-teal"
              >
                See the full menu
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-2 py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <p className="max-w-4xl font-display text-[clamp(2rem,5vw,3.75rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
              We want you to love our Little Cakes. And we want you to come back
              and see us, <span className="text-teal">again and again.</span>
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/menu"
                className="inline-flex items-center rounded-full bg-teal px-6 py-3 text-[15px] font-semibold text-teal-ink transition-colors hover:bg-teal-bright"
              >
                See the menu
              </Link>
              <Link
                href="/#locations"
                className="inline-flex items-center rounded-full border border-line px-6 py-3 text-[15px] font-semibold text-cream transition-colors hover:border-teal hover:text-teal"
              >
                Find a shop
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
