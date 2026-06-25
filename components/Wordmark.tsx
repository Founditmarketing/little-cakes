import Image from "next/image";

/* SVG feColorMatrix approach:
   - Forces all opaque pixels to #20BDCC (r=0.125 g=0.741 b=0.800)
   - Alpha = 3 − R − G − B  →  white pixels → alpha 0 (transparent),
     dark/colored pixels → alpha ≥ 1 (clamped to 1, fully opaque) */
export function Wordmark({ className, imageClassName }: { className?: string; imageClassName?: string }) {
  return (
    <span className={`inline-flex items-center ${className ?? ""}`}>
      <Image
        src="/photos/little cakes logo.jpg"
        alt="Little Cakes With Big Attitude"
        width={110}
        height={40}
        className={`object-contain ${imageClassName ?? ""}`}
        style={{ filter: "url(#lc-logo-filter)" }}
      />
    </span>
  );
}
