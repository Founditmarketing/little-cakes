import { Sparkle } from "@phosphor-icons/react/dist/ssr";
import { FLAVOR_WORDS } from "@/lib/site";

/** Endless flavor strip. Alternating filled / outlined display type.
    Pure CSS animation; freezes to a static readable row under reduced motion. */
export function Marquee() {
  const loop = [...FLAVOR_WORDS, ...FLAVOR_WORDS];
  return (
    <section
      aria-label="A few of our flavors"
      className="overflow-hidden border-y border-line bg-ink-2 py-7"
    >
      <div className="marquee-track flex w-max items-center gap-8" aria-hidden="true">
        {loop.map((word, i) => (
          <span key={i} className="flex items-center gap-8">
            <span
              className={`font-display text-3xl font-bold tracking-tight sm:text-5xl ${
                i % 2 ? "text-outline" : "text-cream"
              }`}
            >
              {word}
            </span>
            <Sparkle weight="fill" className="size-4 shrink-0 text-teal" />
          </span>
        ))}
      </div>
    </section>
  );
}
