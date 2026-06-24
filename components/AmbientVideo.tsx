"use client";

import { useRef, useEffect } from "react";
import { useReducedMotion } from "motion/react";
import { useMounted } from "./motion-primitives";

/** Ambient (muted, looping) background video. Plays only when scrolled into
    view, pauses when out, and never autoplays under reduced motion (the poster
    frame stays). Renders the same element on server and client (no hydration
    mismatch); playback is started imperatively from an effect. */
export function AmbientVideo({
  src,
  poster,
  posterAlt,
  className = "",
  eager = false,
}: {
  src: string;
  poster: string;
  posterAlt: string;
  className?: string;
  eager?: boolean;
}) {
  const reduce = useReducedMotion();
  const mounted = useMounted();
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v || reduce) return;
    if (!("IntersectionObserver" in window)) {
      v.play().catch(() => {});
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.15 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [reduce, mounted]);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      preload={eager ? "auto" : "none"}
      aria-label={posterAlt}
      tabIndex={-1}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
