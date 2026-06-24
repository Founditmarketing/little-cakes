"use client";

import { useState, useRef, useEffect } from "react";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

const FIELD =
  "rounded-xl border border-line bg-ink-3 px-4 py-3 text-[15px] text-cream placeholder:text-muted focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/40";
const LABEL = "text-sm font-medium text-cream";

// TODO: wire submit to a real endpoint / their JotForm / email.
export function FacilityForm({ packages }: { packages: string[] }) {
  const [done, setDone] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (done) successRef.current?.focus();
  }, [done]);

  if (done) {
    return (
      <div
        ref={successRef}
        role="status"
        aria-live="polite"
        tabIndex={-1}
        className="flex items-start gap-3 rounded-card border border-teal/40 bg-teal/10 p-6 outline-none"
      >
        <CheckCircle weight="fill" className="mt-0.5 size-6 shrink-0 text-teal" />
        <p className="text-[15px] leading-relaxed text-cream">
          Thank you. We will get back to you soon to confirm availability. Your
          date is not held until our team reaches out and a deposit is received.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="grid gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="f-name" className={LABEL}>Name</label>
          <input id="f-name" required className={FIELD} placeholder="Your name" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="f-email" className={LABEL}>Email</label>
          <input id="f-email" type="email" required className={FIELD} placeholder="you@email.com" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="f-phone" className={LABEL}>Phone</label>
          <input id="f-phone" type="tel" required className={FIELD} placeholder="(318) 555-0123" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="f-date" className={LABEL}>Event date</label>
          <input id="f-date" type="date" className={`${FIELD} [color-scheme:dark]`} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="f-package" className={LABEL}>Package</label>
          <select id="f-package" className={FIELD} defaultValue="">
            <option value="" disabled>Choose a package</option>
            {packages.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="f-count" className={LABEL}>Estimated headcount</label>
          <input id="f-count" type="number" min="1" max="45" className={FIELD} placeholder="Up to 45" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="f-msg" className={LABEL}>Tell us about your event</label>
        <textarea id="f-msg" rows={4} className={FIELD} placeholder="Birthday, shower, meeting, just because..." />
      </div>
      <p className="text-xs leading-relaxed text-faint">
        Submitting this form does not guarantee availability. Your date is
        confirmed once a member of our team reaches out and a deposit of half the
        rental has been received.
      </p>
      <div>
        <button
          type="submit"
          className="rounded-full bg-teal px-6 py-3 text-[15px] font-semibold text-teal-ink transition-colors hover:bg-teal-bright active:scale-[0.99]"
        >
          Request this date
        </button>
      </div>
    </form>
  );
}
