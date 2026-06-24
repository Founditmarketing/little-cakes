"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, CaretDown } from "@phosphor-icons/react/dist/ssr";
import { LOCATIONS } from "@/lib/site";

/** Persistent, thumb-reachable Order CTA for mobile. Hidden on desktop and
    until the user scrolls past the hero; opens an upward shop chooser. */
export function MobileOrderBar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!show) setOpen(false);
  }, [show]);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
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

  return (
    <div
      ref={ref}
      className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mx-3 mb-2 overflow-hidden rounded-2xl border border-line bg-ink-2 p-1.5 shadow-2xl shadow-black/50"
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
                className="flex items-center justify-between gap-3 rounded-xl px-3 py-3.5 transition-colors active:bg-ink-3"
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

      <div className="border-t border-line bg-ink/90 px-3 pb-[calc(0.625rem+env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-xl">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="true"
          aria-expanded={open}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-teal py-4 text-base font-semibold text-teal-ink transition-transform active:scale-[0.99]"
        >
          Order now
          <CaretDown
            weight="bold"
            className={`size-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>
    </div>
  );
}
