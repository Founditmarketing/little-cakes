import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion-primitives";
import { BoxBuilder } from "@/components/BoxBuilder";

const GOES_WITH = [
  { name: "Coffee & espresso bar", href: "/coffee" },
  { name: "Full menu", href: "/menu" },
  { name: "Catering", href: "/#catering" },
];

export const metadata: Metadata = {
  title: "Build Your Dozen",
  description:
    "Build your dream box of a dozen Little Cakes cupcakes, then order online or call it in. Alexandria and Pineville, Louisiana.",
  alternates: { canonical: "/build-a-box" },
};

export default function BuildABoxPage() {
  return (
    <main>
      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Build a Box", href: "/build-a-box" },
        ]}
        kicker="Build a box"
        title="Build your dream dozen."
        intro="Mix and match twelve of your favorites, watch the box fill up, then copy it and order. The fun part is yours, the baking is ours."
      />

      <section className="mx-auto max-w-[1400px] px-5 pb-20 sm:px-8 md:pb-28">
        <BoxBuilder />

        <Reveal>
          <div className="mt-16 border-t border-line pt-10">
            <h2 className="font-display text-xl font-bold tracking-tight text-cream">
              Goes great with
            </h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {GOES_WITH.map((g) => (
                <Link
                  key={g.href}
                  href={g.href}
                  className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:border-teal hover:text-teal"
                >
                  {g.name}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
