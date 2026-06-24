"use client";

import { useState, useRef, useEffect, useId } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, CaretDown } from "@phosphor-icons/react/dist/ssr";
import { LOCATIONS } from "@/lib/site";

/** Location-aware ordering. "Order now" never dead-ends: it asks which shop. */
export function OrderButton({
  variant = "primary",
  label = "Order now",
  align = "left",
  className = "",
}: {
  variant?: "primary" | "ghost";
  label?: string;
  align?: "left" | "right";
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const wrap = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const base =
    "group inline-flex items-center gap-2 rounded-full font-semibold transition-[transform,background-color] duration-200 active:scale-[0.97]";
  const styles =
    variant === "primary"
      ? "bg-teal text-teal-ink px-6 py-3 text-[15px] hover:bg-teal-bright"
      : "border border-line text-cream px-6 py-3 text-[15px] hover:border-teal hover:text-teal";

  return (
    <div ref={wrap} className={`relative ${className}`}>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className={`${base} ${styles}`}
      >
        {label}
        <CaretDown
          weight="bold"
          className={`size-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            aria-label="Choose a shop to order from"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute top-[calc(100%+10px)] z-50 w-72 overflow-hidden rounded-2xl border border-line bg-ink-2 p-1.5 shadow-2xl shadow-black/50 ${
              align === "right" ? "right-0" : "left-0"
            }`}
          >
            <p className="px-3 pb-1.5 pt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
              Pick your shop
            </p>
            {LOCATIONS.map((loc) => (
              <a
                key={loc.id}
                href={loc.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-ink-3"
              >
                <span>
                  <span className="block font-display text-base font-bold text-cream">
                    {loc.name}
                  </span>
                  <span className="block text-xs text-muted">{loc.hours}</span>
                </span>
                <ArrowUpRight weight="bold" className="size-5 shrink-0 text-teal" />
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
