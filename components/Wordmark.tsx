/** Text-based wordmark lockup. Stand-in until the real SVG logo arrives.
    The rounded teal square echoes the brand's existing icon mark. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <span
        aria-hidden="true"
        className="grid h-9 w-9 place-items-center rounded-[8px] bg-teal"
      >
        <span className="h-3 w-3 rounded-[3px] bg-ink" />
      </span>
      <span className="leading-none">
        <span className="block font-display text-lg font-extrabold tracking-tight text-cream">
          little cakes
        </span>
        <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-[0.2em] text-faint">
          with big attitude
        </span>
      </span>
    </span>
  );
}
