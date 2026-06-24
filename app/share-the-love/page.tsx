import type { Metadata } from "next";
import Link from "next/link";
import { InstagramLogo, FacebookLogo } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion-primitives";
import { REVIEWS, SOCIAL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Share the Love",
  description:
    "Kind words from Little Cakes With Big Attitude customers across Louisiana and beyond. Cupcakes, cakes, coffee and cookies in Alexandria and Pineville, LA.",
  alternates: { canonical: "/share-the-love" },
};

export default function ShareTheLovePage() {
  return (
    <main>
      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Share the Love", href: "/share-the-love" },
        ]}
        kicker="Reviews"
        title="Kind words from kind people."
        intro="We would not be here without our Little Cakes fans. Here is some of the love they have sent our way about the cupcakes, the cakes, and the coffee."
      />

      <section className="mx-auto max-w-[1400px] px-5 pb-16 sm:px-8 md:pb-24">
        <Reveal>
          <div className="columns-1 gap-5 sm:columns-2">
            {REVIEWS.map((r) => (
              <figure
                key={r.name}
                className="mb-5 break-inside-avoid rounded-card border border-line bg-ink-2 p-7"
              >
                <blockquote className="font-display text-xl font-medium leading-snug tracking-tight text-cream">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold text-cream">{r.name}</span>
                  <span className="text-faint"> / {r.where}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 flex flex-col items-start gap-4 rounded-card border border-line bg-ink-2 p-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-display text-xl font-bold text-cream">
              Got a Little Cakes story? We would love to hear it.
            </p>
            <div className="flex gap-3">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-teal-ink transition-colors hover:bg-teal-bright"
              >
                <InstagramLogo weight="fill" className="size-4" /> Tag us
              </a>
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:border-teal hover:text-teal"
              >
                <FacebookLogo weight="fill" className="size-4" /> Review us
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-8 text-sm text-faint">
            New here? Meet the{" "}
            <Link href="/coffee" className="text-teal hover:text-teal-bright">
              coffee shop
            </Link>{" "}
            or browse the full{" "}
            <Link href="/menu" className="text-teal hover:text-teal-bright">
              menu
            </Link>
            .
          </p>
        </Reveal>
      </section>
    </main>
  );
}
