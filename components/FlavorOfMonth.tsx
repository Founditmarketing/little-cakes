import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./motion-primitives";
import { FLAVOR_OF_MONTH as f } from "@/lib/site";

export function FlavorOfMonth() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 md:py-32">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-card">
            <Image
              src={f.image}
              alt={f.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-[40%_45%]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <p className="kicker">{f.month}</p>
            <h2 className="mt-4 font-display text-[clamp(2.75rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
              {f.name}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              {f.blurb}
            </p>
            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
              <Link
                href="/cupcakes"
                className="inline-flex items-center rounded-full bg-teal px-6 py-3 text-[15px] font-semibold text-teal-ink transition-colors duration-200 hover:bg-teal-bright"
              >
                See the cupcakes
              </Link>
              <span className="text-sm text-faint">{f.note}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
