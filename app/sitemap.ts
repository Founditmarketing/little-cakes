import type { MetadataRoute } from "next";
import { MENU_SLUGS } from "@/lib/menu";
import { LOCATIONS } from "@/lib/site";

const BASE = "https://www.littlecakeswithbigattitude.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/menu",
    "/coffee",
    "/build-a-box",
    "/about",
    "/faq",
    "/facility-rental",
    "/job-application",
    "/share-the-love",
    ...MENU_SLUGS.map((s) => `/${s}`),
    ...LOCATIONS.map((l) => `/locations/${l.id}`),
  ];
  return paths.map((p) => ({
    url: `${BASE}${p}`,
    changeFrequency: "weekly",
    priority:
      p === "/" ? 1 : p === "/coffee" || p === "/menu" || p.startsWith("/locations") ? 0.9 : 0.8,
  }));
}
