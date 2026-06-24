"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal, Magnetic } from "./motion-primitives";
import { OrderButton } from "./OrderButton";
import { AmbientVideo } from "./AmbientVideo";
import { CATEGORIES } from "@/lib/site";

// Asymmetric gallery: 6 categories, 6 cells, no empty tiles.
const LAYOUT = [
  "lg:col-span-3 min-h-[300px] lg:min-h-[440px]", // Cupcakes
  "lg:col-span-3 min-h-[300px] lg:min-h-[440px]", // Cakes
  "lg:col-span-2 min-h-[260px] lg:min-h-[300px]", // Cookies
  "lg:col-span-2 min-h-[260px] lg:min-h-[300px]", // Breakfast
  "lg:col-span-2 min-h-[260px] lg:min-h-[300px]", // Coffee
  "sm:col-span-2 lg:col-span-6 min-h-[300px] lg:min-h-[360px]", // Paleo & Keto (full-width finisher)
];

export function TheRange() {
  const [hovered, setHovered] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <section id="range" className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 md:py-32">
      <Reveal>
        <div className="max-w-2xl">
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.75rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
            The whole case.
          </h2>
          <p className="mt-5 text-lg text-muted">
            Seven kinds of trouble, made fresh daily.
          </p>
        </div>
      </Reveal>

      <div
        className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6"
        onMouseLeave={() => setHovered(null)}
      >
        {CATEGORIES.map((cat, i) => {
          const dim =
            hovered !== null && hovered !== i
              ? "opacity-55 grayscale-[0.35]"
              : "opacity-100";
          const cellClass = `group relative block h-full overflow-hidden rounded-card border border-line transition-[opacity,filter] duration-300 ${dim}`;

          const mediaClass = `object-cover ${cat.position ?? "object-center"} transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]`;
          const inner = (
            <>
              {cat.video ? (
                <AmbientVideo
                  src={cat.video}
                  poster={cat.image}
                  posterAlt={cat.alt}
                  className={`absolute inset-0 h-full w-full ${mediaClass}`}
                />
              ) : (
                <Image
                  src={cat.image}
                  alt={cat.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className={mediaClass}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              {cat.href && (
                <span className="absolute right-4 top-4 rounded-full bg-teal/90 px-3 py-1 text-xs font-semibold text-teal-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View
                </span>
              )}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-2xl font-bold tracking-tight text-cream">
                  {cat.name}
                </h3>
                <span className="mt-2 block h-px w-12 origin-left scale-x-0 bg-teal transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                <p className="mt-2 text-sm text-muted">{cat.blurb}</p>
              </div>
            </>
          );

          return (
            <motion.div
              key={cat.name}
              className={LAYOUT[i]}
              onMouseEnter={() => setHovered(i)}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: reduce ? 0 : i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {cat.href ? (
                <Link href={cat.href} className={cellClass} aria-label={`${cat.name} menu`}>
                  {inner}
                </Link>
              ) : (
                <div className={cellClass}>{inner}</div>
              )}
            </motion.div>
          );
        })}
      </div>

      <Reveal delay={0.15}>
        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Magnetic>
            <OrderButton />
          </Magnetic>
          <Link
            href="/build-a-box"
            className="inline-flex items-center rounded-full border border-line px-6 py-3 text-[15px] font-semibold text-cream transition-colors hover:border-teal hover:text-teal"
          >
            Build your own dozen
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
