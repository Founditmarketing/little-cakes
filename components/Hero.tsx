"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "motion/react";
import { Magnetic, useMounted } from "./motion-primitives";
import { OrderButton } from "./OrderButton";

export function Hero() {
  const reduce = useReducedMotion();
  const mounted = useMounted();
  const animate = mounted && !reduce;
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOn, setVideoOn] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  // Play the hero clip while it is on screen; pause when scrolled past.
  useEffect(() => {
    if (!animate) return;
    const v = videoRef.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.1 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [animate]);

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100dvh] items-end overflow-hidden md:items-center"
    >
      {/* Media group (scroll parallax) */}
      <motion.div
        className="absolute inset-0"
        style={animate ? { y: mediaY } : undefined}
      >
        {/* Still base: the LCP image and the reduced-motion fallback */}
        <motion.div
          className="absolute inset-0"
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/photos/cupcake-salted-caramel.jpg"
            alt="A salted-caramel cupcake with a hand sprinkling sea salt cascading from above, dark and cinematic"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-[70%_60%] md:object-[78%_55%]"
          />
        </motion.div>

        {/* Live clip fades in over the still once it is playing */}
        {animate && (
          <video
            ref={videoRef}
            aria-hidden="true"
            muted
            loop
            playsInline
            preload="metadata"
            onPlaying={() => setVideoOn(true)}
            className={`absolute inset-0 h-full w-full object-cover object-[70%_60%] transition-opacity duration-1000 md:object-[78%_55%] ${
              videoOn ? "opacity-100" : "opacity-0"
            }`}
          >
            <source src="/videos/hero-cupcake.mp4" type="video/mp4" />
          </video>
        )}
      </motion.div>

      {/* Scrims. Mobile: darken only the bottom where the text sits, so the
          cupcake and falling salt stay clearly visible up top. Desktop: darken
          the left edge for the side-aligned headline. */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 via-40% to-transparent to-75% md:hidden" />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-ink via-ink/70 to-transparent md:block" />

      {/* Copy */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-[1400px] px-5 pb-20 pt-24 sm:px-8 md:pb-0"
      >
        <div className="max-w-4xl">
          <motion.h1
            variants={item}
            className="font-display text-[clamp(3rem,8vw,6.5rem)] font-extrabold leading-[0.9] tracking-[-0.03em]"
          >
            <span className="block">Little cakes.</span>
            <span className="block text-teal">Big attitude.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-md text-base leading-relaxed text-muted sm:mt-7 sm:text-lg"
          >
            Scratch-made cupcakes, cakes and cookies, plus a real coffee shop.
            Two shops in Alexandria and Pineville.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4"
          >
            <Magnetic>
              <OrderButton />
            </Magnetic>
            <a
              href="#range"
              className="inline-flex items-center rounded-full border border-line px-6 py-3 text-[15px] font-semibold text-cream transition-colors duration-200 hover:border-teal hover:text-teal"
            >
              See the menu
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
