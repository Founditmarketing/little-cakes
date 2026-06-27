'use client';

import Image from "next/image";
import { WEEKLY_ROTATION } from "@/lib/menu";
import type { MenuItem } from "@/lib/menu";
import { useMemo } from "react";

const ANCHOR_MS = new Date("2026-06-01T00:00:00Z").getTime();
const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;

function currentWeeklyFlavor(): string {
  const w = Math.floor((Date.now() - ANCHOR_MS) / MS_PER_WEEK);
  const n = WEEKLY_ROTATION.length;
  return WEEKLY_ROTATION[((w % n) + n) % n];
}

export function WeeklyFlavorGroup({ items }: { items: MenuItem[] }) {
  const thisWeek = useMemo(() => currentWeeklyFlavor(), []);

  return (
    <div className="grid gap-x-12 gap-y-7 sm:grid-cols-2">
      {items.map((item) => {
        const isCurrent = item.name === thisWeek;
        return (
          <div
            key={item.name}
            className={`transition-opacity duration-300 ${!isCurrent ? "opacity-35" : ""}`}
          >
            {item.image && (
              <div className="relative mb-3 aspect-square overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 640px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
            )}
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-lg font-bold tracking-tight text-cream">
                {item.name}
                {isCurrent && (
                  <span className="ml-2 align-middle rounded-full bg-teal px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wider text-teal-ink">
                    This week
                  </span>
                )}
              </h3>
            </div>
            {item.description && (
              <p className="mt-1.5 max-w-prose text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
