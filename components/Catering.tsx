import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./motion-primitives";
import { CATERING_URL } from "@/lib/site";

export function Catering() {
  return (
    <section id="catering" className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 md:py-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-card border border-line">
          {/* Backdrop assortment */}
          <div className="relative min-h-[520px] md:min-h-[560px]">
            <Image
              src="/photos/cookies-board.jpg"
              alt="Cookies and a bowl of trail mix on a rustic wood board, dessert platters for catering in Central Louisiana"
              fill
              sizes="(min-width: 768px) 90vw, 100vw"
              className="object-cover object-[55%_45%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10 md:bg-gradient-to-r md:from-ink md:via-ink/70 md:to-transparent" />
          </div>

          {/* Overlapping content panel */}
          <div className="absolute inset-0 flex items-end md:items-center">
            <div className="w-full p-6 sm:p-10 md:max-w-xl md:p-14">
              <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
                Cater the whole thing.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
                Office mornings, birthdays, weddings, just-because Tuesdays. We
                box it, platter it, and deliver it. Or take over our dining room
                and let us handle the rest.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={CATERING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-teal px-6 py-3 text-[15px] font-semibold text-teal-ink transition-colors hover:bg-teal-bright"
                >
                  Start a catering order
                  <ArrowUpRight weight="bold" className="size-4" />
                </a>
                <Link
                  href="/facility-rental"
                  className="inline-flex items-center rounded-full border border-line px-6 py-3 text-[15px] font-semibold text-cream transition-colors hover:border-teal hover:text-teal"
                >
                  Book a facility rental
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
