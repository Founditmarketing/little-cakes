"use client";

import { useState, useRef, useEffect } from "react";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { LOCATIONS } from "@/lib/site";

const FIELD =
  "rounded-xl border border-line bg-ink-3 px-4 py-3 text-[15px] text-cream placeholder:text-muted focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/40";
const LABEL = "text-sm font-medium text-cream";

// TODO: wire submit to their JotForm (form id 231635514971155) or email/ATS.
export function CareersForm() {
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
          Thanks for applying. We will review your application and reach out if it
          looks like a fit.
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
          <label htmlFor="c-first" className={LABEL}>First name</label>
          <input id="c-first" required className={FIELD} placeholder="First" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="c-last" className={LABEL}>Last name</label>
          <input id="c-last" required className={FIELD} placeholder="Last" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="c-email" className={LABEL}>Email</label>
          <input id="c-email" type="email" required className={FIELD} placeholder="you@email.com" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="c-phone" className={LABEL}>Phone</label>
          <input id="c-phone" type="tel" required className={FIELD} placeholder="(318) 555-0123" />
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="c-location" className={LABEL}>Which shop?</label>
          <select id="c-location" required className={FIELD} defaultValue="">
            <option value="" disabled>Choose a location</option>
            {LOCATIONS.map((loc) => (
              <option key={loc.id} value={loc.name}>{loc.name}</option>
            ))}
            <option value="either">Either location</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="c-why" className={LABEL}>What qualifies you for this position?</label>
        <textarea id="c-why" rows={5} required className={FIELD} placeholder="Tell us a little about you and why you'd be a great fit." />
      </div>
      <p className="text-xs text-faint">
        Have your resume handy. We will ask for it once we are in touch.
      </p>
      <div>
        <button
          type="submit"
          className="rounded-full bg-teal px-6 py-3 text-[15px] font-semibold text-teal-ink transition-colors hover:bg-teal-bright active:scale-[0.99]"
        >
          Apply
        </button>
      </div>
    </form>
  );
}
