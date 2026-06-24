import { Reveal } from "./motion-primitives";
import { REVIEWS } from "@/lib/site";

export function Proof() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <h2 className="max-w-2xl font-display text-[clamp(2.5rem,6vw,4.75rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
            Don&rsquo;t take our word for it.
          </h2>
        </Reveal>
      </div>

      {/* Horizontal scroll-snap quote row */}
      <Reveal delay={0.1}>
        <div
          role="region"
          aria-label="Customer reviews, scrollable"
          tabIndex={0}
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 outline-none focus-visible:ring-2 focus-visible:ring-teal sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="flex w-[300px] shrink-0 snap-start flex-col justify-between rounded-card border border-line bg-ink-2 p-7 sm:w-[380px]"
            >
              <blockquote className="font-display text-2xl font-medium leading-snug tracking-tight text-cream">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 text-sm">
                <span className="font-semibold text-cream">{r.name}</span>
                <span className="text-faint"> / {r.where}</span>
              </figcaption>
            </figure>
          ))}
          {/* trailing spacer so last card can fully snap on wide screens */}
          <div className="w-1 shrink-0" aria-hidden="true" />
        </div>
      </Reveal>
    </section>
  );
}
