"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Reveal, useMounted } from "./motion-primitives";

export function BigAttitude() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const animate = useMounted() && !reduce;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const xTop = useTransform(scrollYProgress, [0, 1], ["2%", "-18%"]);
  const xBottom = useTransform(scrollYProgress, [0, 1], ["-16%", "6%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ink-2 py-20 md:py-40"
    >
      {/* Counter-scrolling outlined type backdrop (kinetic scale-collision) */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-center gap-2 opacity-[0.06]">
        <motion.span
          aria-hidden="true"
          style={animate ? { x: xTop } : undefined}
          className="text-outline whitespace-nowrap font-display text-[20vw] font-extrabold leading-[0.85] tracking-[-0.04em]"
        >
          big attitude big attitude
        </motion.span>
        <motion.span
          aria-hidden="true"
          style={animate ? { x: xBottom } : undefined}
          className="text-outline whitespace-nowrap font-display text-[20vw] font-extrabold leading-[0.85] tracking-[-0.04em]"
        >
          big attitude big attitude
        </motion.span>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <h2 className="max-w-4xl font-display text-[clamp(2.5rem,6.5vw,5.5rem)] font-extrabold leading-[0.98] tracking-[-0.03em]">
            Baked from scratch.
            <br />
            Topped with <span className="text-teal">attitude.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            Every cupcake gets a hand-piped swirl. Every cookie gets a little too
            much personality. Every order gets our whole attitude, and a little
            extra frosting.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
