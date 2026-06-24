import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion-primitives";
import { CareersForm } from "@/components/CareersForm";
import { LOCATIONS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Little Cakes With Big Attitude team in Alexandria or Pineville, Louisiana. Apply online to work at a scratch bakery and coffee bar with, well, attitude.",
  alternates: { canonical: "/job-application" },
};

export default function CareersPage() {
  return (
    <main>
      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Careers", href: "/job-application" },
        ]}
        kicker="Now hiring"
        title="Come work with us."
        intro="We are a scratch bakery and full coffee bar with a sense of humor. If you take the work seriously but not yourself, we should talk."
      />

      <section className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 md:py-16">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <Reveal>
            <div className="space-y-6 text-muted lg:sticky lg:top-24">
              <p className="text-lg leading-relaxed">
                Both of our shops in Alexandria and Pineville are always looking
                for people who love good food, good coffee, and treating people
                right. Tell us a bit about yourself and what you would bring.
              </p>
              <div className="rounded-card border border-line bg-ink-2 p-6">
                <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
                  Where you would work
                </h2>
                <ul className="mt-4 space-y-4 text-sm">
                  {LOCATIONS.map((loc) => (
                    <li key={loc.id}>
                      <span className="block font-display text-base font-bold text-cream">
                        {loc.name}
                      </span>
                      <span className="text-muted">{loc.address}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-card border border-line bg-ink-2 p-7 md:p-9">
              <h2 className="font-display text-2xl font-bold tracking-tight text-cream">
                Apply now
              </h2>
              <p className="mt-2 text-sm text-muted">
                It takes about two minutes.
              </p>
              <div className="mt-7">
                <CareersForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
