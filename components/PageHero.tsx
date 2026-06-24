import type { ReactNode } from "react";
import { Reveal } from "./motion-primitives";
import { Breadcrumbs } from "./Breadcrumbs";

/** Consistent inner-page header on the dark canvas. Clears the fixed nav. */
export function PageHero({
  kicker,
  title,
  intro,
  breadcrumbs,
  children,
}: {
  kicker?: string;
  title: string;
  intro?: string;
  breadcrumbs?: { name: string; href: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pb-10 pt-28 sm:px-8 md:pb-14 md:pt-36">
      <Reveal>
        <div className="max-w-3xl">
          {breadcrumbs && (
            <div className="mb-6">
              <Breadcrumbs items={breadcrumbs} />
            </div>
          )}
          {kicker && <p className="kicker">{kicker}</p>}
          <h1 className="mt-4 font-display text-[clamp(2.75rem,7vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {intro}
            </p>
          )}
          {children}
        </div>
      </Reveal>
    </section>
  );
}
