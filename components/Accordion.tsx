"use client";

import { useState, useId } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus, Minus } from "@phosphor-icons/react/dist/ssr";

// Render an answer string, turning any 318.xxx.xxxx phone number into a
// tap-to-call link. The source string stays plain text for FAQPage JSON-LD.
function renderAnswer(text: string) {
  return text.split(/(\d{3}\.\d{3}\.\d{4})/g).map((part, i) => {
    if (/^\d{3}\.\d{3}\.\d{4}$/.test(part)) {
      return (
        <a
          key={i}
          href={`tel:+1${part.replace(/\D/g, "")}`}
          className="text-teal hover:text-teal-bright"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

export function Accordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const baseId = useId();

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        const triggerId = `${baseId}-trigger-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <div key={i} className="border-b border-line">
            <button
              id={triggerId}
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-display text-lg font-bold text-cream sm:text-xl">
                {item.question}
              </span>
              <span className="grid size-8 shrink-0 place-items-center rounded-full border border-line text-teal">
                {isOpen ? (
                  <Minus weight="bold" className="size-4" />
                ) : (
                  <Plus weight="bold" className="size-4" />
                )}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={reduce ? undefined : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 pr-8 leading-relaxed text-muted">
                    {renderAnswer(item.answer)}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
