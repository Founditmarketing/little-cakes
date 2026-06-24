import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./motion-primitives";
import { AmbientVideo } from "./AmbientVideo";

export function CoffeeTeaser() {
  return (
    <section id="coffee" className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 md:py-32">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <Reveal>
          <div>
            <p className="kicker">Yes, we&rsquo;re a coffee shop too</p>
            <h2 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.75rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
              A coffee shop with the same big attitude.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Real espresso, cold brew, and iced lattes pulled fresh at our
              coffee shops in Alexandria and Pineville. You came for the cupcake.
              Stay for the coffee.
            </p>

            <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-teal/40 bg-teal/10 py-2 pl-2 pr-5">
              <span className="rounded-full bg-teal px-3 py-1 text-xs font-bold uppercase tracking-wide text-teal-ink">
                Monday deal
              </span>
              <span className="text-sm text-cream">$1 off large iced lattes</span>
            </div>

            <div className="mt-9">
              <Link
                href="/coffee"
                className="group inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-[15px] font-semibold text-teal-ink transition-colors duration-200 hover:bg-teal-bright"
              >
                See the full coffee menu
                <ArrowRight
                  weight="bold"
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Live pour */}
        <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-card lg:ml-auto">
          <AmbientVideo
            src="/videos/coffee.mp4"
            poster="/videos/coffee-poster.jpg"
            posterAlt="Iced latte with cream pouring in, branded teal Little Cakes With Big Attitude sleeve, coffee in Alexandria and Pineville Louisiana"
            className="absolute inset-0 h-full w-full object-cover object-[50%_35%]"
          />
        </div>
      </div>
    </section>
  );
}
