import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./motion-primitives";
import { OrderButton } from "./OrderButton";

const STATS = ["4g net carbs", "Gluten free", "Diabetic friendly"];

export function KetoFeature() {
  return (
    <section id="keto" className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 md:py-32">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-card">
            <Image
              src="/photos/keto-cheesecake.jpg"
              alt="Keto and diabetic friendly gluten free cheesecakes with a caramel cupcake, low carb dessert in Alexandria Louisiana"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-[35%_50%]"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <h2 className="font-display text-[clamp(2.25rem,5.5vw,4.25rem)] font-extrabold leading-[0.97] tracking-[-0.03em]">
              Big flavor, quietly low carb.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Keto, diabetic-friendly, gluten-free cheesecake with just 4g net
              carbs a serving. Proof that low carb does not have to mean low
              attitude. Made fresh daily, never an afterthought.
            </p>

            <ul className="mt-7 flex flex-wrap gap-2.5">
              {STATS.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-line bg-ink-2 px-4 py-1.5 text-sm font-medium text-cream"
                >
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <OrderButton />
              <Link
                href="/paleoketo-treats"
                className="inline-flex items-center rounded-full border border-line px-6 py-3 text-[15px] font-semibold text-cream transition-colors hover:border-teal hover:text-teal"
              >
                See the keto lineup
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
