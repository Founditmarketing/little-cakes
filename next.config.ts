import path from "path";
import type { NextConfig } from "next";

// Static media is versioned by filename whenever it changes (project rule:
// never regenerate an asset in place), so it is safe to cache immutably.
const IMMUTABLE = "public, max-age=31536000, immutable";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    // WebP keeps optimization fast in dev and is well-supported in production.
    // (AVIF adds heavy encode cost for marginal gain; enable later if desired.)
    formats: ["image/webp"],
    // Our source photos are filename-versioned, so cache optimized variants
    // hard (v16's default minimumCacheTTL is only 4 hours).
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      { source: "/videos/:path*", headers: [{ key: "Cache-Control", value: IMMUTABLE }] },
      { source: "/photos/:path*", headers: [{ key: "Cache-Control", value: IMMUTABLE }] },
    ];
  },
};

export default nextConfig;
