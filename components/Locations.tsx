import Link from "next/link";
import { MapPin, Phone, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./motion-primitives";
import { LOCATIONS } from "@/lib/site";

export function Locations() {
  return (
    <section id="locations" className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 md:py-32">
      <Reveal>
        <p className="kicker">Visit</p>
        <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.5rem,6vw,4.75rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
          Two shops in Central Louisiana.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {LOCATIONS.map((loc, i) => (
          <Reveal key={loc.id} delay={0.08 * i}>
            <div className="flex h-full flex-col rounded-card border border-line bg-ink-2 p-8 transition-colors hover:border-teal/40">
              <h3 className="font-display text-3xl font-bold tracking-tight text-cream">
                {loc.name}
              </h3>

              <dl className="mt-6 space-y-3 text-[15px]">
                <div className="flex items-start gap-3">
                  <MapPin weight="fill" className="mt-0.5 size-5 shrink-0 text-teal" />
                  <dt className="sr-only">Address</dt>
                  <dd className="text-muted">{loc.address}</dd>
                </div>
                <div className="flex items-start gap-3">
                  <Phone weight="fill" className="mt-0.5 size-5 shrink-0 text-teal" />
                  <dt className="sr-only">Phone and hours</dt>
                  <dd className="text-muted">
                    <a href={loc.phoneHref} className="hover:text-cream">
                      {loc.phone}
                    </a>
                    <span className="mx-2 text-line">/</span>
                    {loc.hours}
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap gap-3 pt-2">
                <a
                  href={loc.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-teal-ink transition-colors hover:bg-teal-bright"
                >
                  Order from {loc.name}
                  <ArrowUpRight weight="bold" className="size-4" />
                </a>
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:border-teal hover:text-teal"
                >
                  Directions
                </a>
                <Link
                  href={`/locations/${loc.id}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:border-teal hover:text-teal"
                >
                  Store details
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
