"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X, Copy, Check, ArrowUpRight, Phone } from "@phosphor-icons/react/dist/ssr";
import { LOCATIONS } from "@/lib/site";

const BOX_SIZE = 12;

// Confetti burst is purely decorative, so it uses a fixed brand palette
// rather than tying to a specific flavor photo.
const BURST_COLORS = ["#1cbcca", "#f0e7d4", "#cf9446", "#c5453b", "#efe6d4", "#5b3a29"];

// Daily flavors only (lib/menu.ts "Daily flavors" group), matched to the
// same photos used on the cupcakes menu page.
const FLAVORS: { name: string; image: string }[] = [
  { name: "Southern Pecan", image: "/photos/Southern Pecan.jpg" },
  { name: "Red Velvet", image: "/photos/Red Velvet.jpg" },
  { name: "Wedding Cake", image: "/photos/Wedding Cake.jpg" },
  { name: "Vanilla Sea Salt Caramel", image: "/photos/Vanilla Sea Salt Caramel.jpg" },
  { name: "Plain Jane Vanilla", image: "/photos/Plain Jane Vanilla.jpg" },
  { name: "Attitude Adjustment", image: "/photos/Attitude Adjustment.jpg" },
  { name: "Turtle", image: "/photos/Turtle.jpg" },
  { name: "Triple Chocolate", image: "/photos/Triple Chocolate.jpg" },
  { name: "Chocolate with Butter Cream", image: "/photos/Chocolate with Butter Cream.jpg" },
  { name: "Chocolate with Cream Cheese", image: "/photos/Chocolate with Cream Cheese.jpg" },
  { name: "Chocolate Peanut Butter", image: "/photos/Chocolate Peanut Butter.jpg" },
];

const imageOf = (name: string) =>
  FLAVORS.find((f) => f.name === name)?.image ?? FLAVORS[0].image;

export function BoxBuilder() {
  const [box, setBox] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const reduce = useReducedMotion();
  const full = box.length === BOX_SIZE;

  function add(name: string) {
    setBox((b) => (b.length < BOX_SIZE ? [...b, name] : b));
  }
  function removeAt(i: number) {
    setBox((b) => b.filter((_, idx) => idx !== i));
    setCopied(false);
  }

  function copyDozen() {
    const counts = box.reduce<Record<string, number>>((acc, n) => {
      acc[n] = (acc[n] ?? 0) + 1;
      return acc;
    }, {});
    const list = Object.entries(counts)
      .map(([n, c]) => `${c}x ${n}`)
      .join(", ");
    navigator.clipboard
      ?.writeText(`My Little Cakes dozen: ${list}`)
      .then(() => setCopied(true))
      .catch(() => {});
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12">
      {/* The box */}
      <div className="lg:sticky lg:top-24 lg:self-start">
        <div
          className={`relative rounded-card border bg-ink-2 p-5 transition-colors duration-500 sm:p-6 ${
            full ? "border-teal" : "border-line"
          }`}
        >
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="font-display text-xl font-bold tracking-tight text-cream">
              Your dozen
            </h2>
            <span className="font-mono text-sm text-teal">
              {box.length} / {BOX_SIZE}
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2.5">
            {Array.from({ length: BOX_SIZE }).map((_, i) => {
              const name = box[i];
              return (
                <div
                  key={i}
                  className={`relative grid aspect-square place-items-center rounded-xl ${
                    name ? "bg-ink-3" : "border border-dashed border-line"
                  }`}
                >
                  <AnimatePresence>
                    {name && (
                      <motion.button
                        type="button"
                        onClick={() => removeAt(i)}
                        aria-label={`Remove ${name}`}
                        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.4, y: -6 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.4 }}
                        transition={{ type: "spring", stiffness: 320, damping: 20 }}
                        className="group relative size-full overflow-hidden rounded-xl"
                      >
                        <Image
                          src={imageOf(name)}
                          alt={name}
                          fill
                          sizes="120px"
                          className="object-cover"
                        />
                        <span className="absolute inset-0 grid place-items-center bg-ink/70 opacity-0 transition-opacity group-hover:opacity-100">
                          <X weight="bold" className="size-4 text-cream" />
                        </span>
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Celebration burst */}
          <AnimatePresence>
            {full && !reduce && (
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-card">
                {Array.from({ length: 18 }).map((_, i) => {
                  const a = (i / 18) * Math.PI * 2;
                  return (
                    <motion.span
                      key={i}
                      className="absolute left-1/2 top-1/2 size-1.5 rounded-full"
                      style={{ background: BURST_COLORS[i % BURST_COLORS.length] }}
                      initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                      animate={{
                        opacity: 0,
                        x: Math.cos(a) * 130,
                        y: Math.sin(a) * 90,
                        scale: 0.4,
                      }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                    />
                  );
                })}
              </div>
            )}
          </AnimatePresence>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            {box.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  setBox([]);
                  setCopied(false);
                }}
                className="text-sm font-medium text-faint transition-colors hover:text-cream"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* When full: order / copy */}
        <AnimatePresence>
          {full && (
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4 rounded-card border border-teal/40 bg-teal/10 p-5"
            >
              <p className="font-display text-lg font-bold text-cream">
                That is a beautiful dozen.
              </p>
              <p className="mt-1 text-sm text-muted">
                Copy your list, then call your shop to place it — custom dozens
                are made to order with 48 hours notice. Prefer the standard
                menu? You can start an order online on Toast.
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={copyDozen}
                  className="inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-teal-ink transition-colors hover:bg-teal-bright"
                >
                  {copied ? (
                    <>
                      <Check weight="bold" className="size-4" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy weight="bold" className="size-4" /> Copy my dozen
                    </>
                  )}
                </button>
                {LOCATIONS.map((loc) => (
                  <a
                    key={loc.id}
                    href={loc.phoneHref}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:border-teal hover:text-teal"
                  >
                    <Phone weight="fill" className="size-4 text-teal" />
                    Call {loc.name}
                  </a>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm">
                {LOCATIONS.map((loc) => (
                  <a
                    key={loc.id}
                    href={loc.orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-teal hover:text-teal-bright"
                  >
                    Order online at {loc.name}
                    <ArrowUpRight weight="bold" className="size-3.5" />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Flavor picker */}
      <div>
        <h2 className="font-display text-2xl font-bold tracking-tight text-cream">
          Tap to add. Twelve makes a dozen.
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {FLAVORS.map((f) => (
            <button
              key={f.name}
              type="button"
              onClick={() => add(f.name)}
              disabled={full}
              className="flex items-center gap-3 rounded-2xl border border-line bg-ink-2 px-4 py-3 text-left transition-colors hover:border-teal/50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <span className="relative size-11 shrink-0 overflow-hidden rounded-full">
                <Image src={f.image} alt={f.name} fill sizes="44px" className="object-cover" />
              </span>
              <span className="text-[15px] font-medium text-cream">{f.name}</span>
            </button>
          ))}
        </div>
        <p className="mt-5 text-sm text-faint">
          Want a flavor that is not here? We bake weekly and monthly flavors too.
          Call{" "}
          <a href="tel:+13184455226" className="text-teal hover:text-teal-bright">
            318.445.5226
          </a>
          .
        </p>
      </div>
    </div>
  );
}
