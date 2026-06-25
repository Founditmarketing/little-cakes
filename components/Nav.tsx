"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { List, X, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { NAV, LOCATIONS } from "@/lib/site";
import { Wordmark } from "./Wordmark";
import { OrderButton } from "./OrderButton";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll + manage focus while the mobile dialog is open.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      hamburgerRef.current?.focus();
    };
  }, [open]);

  function onOverlayKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Escape") {
      setOpen(false);
      return;
    }
    if (e.key !== "Tab" || !overlayRef.current) return;
    const focusables = Array.from(
      overlayRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      )
    ).filter((el) => el.offsetParent !== null);
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "border-b border-line bg-ink/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 sm:px-8">
          <a href="#top" aria-label="Little Cakes With Big Attitude home">
            <Wordmark imageClassName="translate-y-[72px]" />
          </a>

          <div className="hidden items-center gap-9 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted transition-colors hover:text-cream"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <OrderButton align="right" />
          </div>

          <button
            ref={hamburgerRef}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
            className="grid size-11 place-items-center rounded-full border border-line text-cream lg:hidden"
          >
            <List weight="bold" className="size-5" />
          </button>
        </nav>
      </header>

      {/* Rendered as a sibling of the header so the header's backdrop-filter
          can't trap this fixed overlay in a 72px containing block. */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={overlayRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            onKeyDown={onOverlayKeyDown}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[70] flex flex-col bg-ink px-5 pt-5 lg:hidden"
          >
            <div className="flex h-[72px] items-center justify-between">
              <Wordmark imageClassName="translate-y-[72px]" />
              <button
                ref={closeRef}
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid size-11 place-items-center rounded-full border border-line text-cream"
              >
                <X weight="bold" className="size-5" />
              </button>
            </div>
            <div className="mt-8 flex flex-col gap-2">
              {NAV.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={reduce ? false : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1 }}
                  className="font-display text-4xl font-bold tracking-tight text-cream"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
            <div className="mt-auto pb-10 pt-8">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
                Order ahead
              </p>
              <div className="flex flex-col gap-3">
                {LOCATIONS.map((loc) => (
                  <a
                    key={loc.id}
                    href={loc.orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl bg-teal px-5 py-4 text-teal-ink"
                  >
                    <span className="font-display text-lg font-bold">{loc.name}</span>
                    <ArrowUpRight weight="bold" className="size-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
