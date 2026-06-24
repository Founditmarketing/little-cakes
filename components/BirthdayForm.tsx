"use client";

import { useState, useRef, useEffect } from "react";
import { Confetti } from "@phosphor-icons/react/dist/ssr";

// TODO: wire submit to the real email/CRM endpoint (currently client-only).
export function BirthdayForm() {
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [done, setDone] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (done) successRef.current?.focus();
  }, [done]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setDone(true);
  }

  if (done) {
    return (
      <div
        ref={successRef}
        role="status"
        aria-live="polite"
        tabIndex={-1}
        className="flex items-center gap-3 rounded-2xl border border-teal/40 bg-teal/10 p-5 outline-none"
      >
        <Confetti weight="fill" className="size-6 shrink-0 text-teal" />
        <p className="text-[15px] text-cream">
          You&rsquo;re in. We&rsquo;ll see you on your birthday with something sweet.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="bday-email" className="text-sm font-medium text-cream">
          Email
        </label>
        <input
          id="bday-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="rounded-xl border border-line bg-ink-3 px-4 py-3 text-[15px] text-cream placeholder:text-muted focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/40"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="bday-date" className="text-sm font-medium text-cream">
          Birthday
        </label>
        <input
          id="bday-date"
          type="text"
          inputMode="numeric"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          placeholder="MM / DD"
          className="rounded-xl border border-line bg-ink-3 px-4 py-3 text-[15px] text-cream placeholder:text-muted focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/40"
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full rounded-full bg-teal px-6 py-3 text-[15px] font-semibold text-teal-ink transition-colors hover:bg-teal-bright active:scale-[0.99] sm:w-auto"
        >
          Claim my birthday treat
        </button>
        <p className="mt-2 text-xs text-faint">
          One email a month, plus a free treat on your birthday. No spam, promise.
        </p>
      </div>
    </form>
  );
}
