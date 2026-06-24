import { LOCATIONS, SOCIAL, COFFEE_DRINKS, type Location } from "./site";
import { MENU_CATEGORIES, type MenuCategory } from "./menu";

export const SITE_URL = "https://www.littlecakeswithbigattitude.com";
const IMG = `${SITE_URL}/photos/coffee-iced.jpg`;

// Mon-Fri 7a-6p, Sat 9a-1p, Sunday closed. TODO: confirm Pineville Saturday.
export const HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "18:00",
  },
  { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "13:00" },
  // Sunday intentionally omitted — a missing day reads as closed. Encoding
  // 00:00–00:00 was being misread by some consumers as "open 24 hours".
];

const CUISINE = ["Coffee", "Espresso", "Cold Brew", "Cafe", "Bakery", "Dessert", "Cupcake"];
const KNOWS = [
  "Coffee", "Espresso", "Cold Brew", "Iced Latte", "Matcha", "Chai", "Frozen Coffee",
  "Cupcakes", "Scratch Bakery", "Cakes", "Cookies",
];
const AREA = ["Alexandria, LA", "Pineville, LA", "Central Louisiana", "Cenla"];

// Only attributes we can substantiate (seating per facility-rental, Toast pickup/ordering).
// TODO confirm with owner before adding Wi-Fi, wheelchair, outdoor seating, drive-thru.
const AMENITIES = [
  { "@type": "LocationFeatureSpecification", name: "Dine-in", value: true },
  { "@type": "LocationFeatureSpecification", name: "Takeout", value: true },
  { "@type": "LocationFeatureSpecification", name: "Online ordering", value: true },
];

export const COFFEE_MENU = {
  "@type": "Menu",
  name: "Coffee Menu",
  hasMenuSection: [
    {
      "@type": "MenuSection",
      name: "Coffee & Espresso",
      hasMenuItem: COFFEE_DRINKS.map((d) => ({ "@type": "MenuItem", name: d })),
    },
  ],
};

const bizId = (loc: Location) => `${SITE_URL}/locations/${loc.id}#business`;

function postalAddress(loc: Location) {
  const parts = loc.address.split(", ");
  const [region, postalCode] = (parts[2] ?? "").split(" ");
  return {
    "@type": "PostalAddress",
    streetAddress: parts[0],
    addressLocality: parts[1],
    addressRegion: region,
    postalCode,
    addressCountry: "US",
  };
}

/** A single shop, typed as BOTH a coffee shop and a bakery. */
export function locationNode(loc: Location) {
  return {
    "@type": ["CafeOrCoffeeShop", "Bakery"],
    "@id": bizId(loc),
    name: `Little Cakes With Big Attitude - ${loc.name}`,
    image: IMG,
    url: `${SITE_URL}/locations/${loc.id}`,
    telephone: loc.phoneHref.replace("tel:", ""),
    priceRange: "$",
    servesCuisine: CUISINE,
    knowsAbout: KNOWS,
    areaServed: AREA,
    amenityFeature: AMENITIES,
    address: postalAddress(loc),
    hasMap: loc.mapUrl,
    hasMenu: COFFEE_MENU,
    openingHoursSpecification: HOURS,
    sameAs: [SOCIAL.instagram, SOCIAL.facebook, loc.mapUrl, loc.orderUrl],
    // geo added when owner supplies exact storefront pins (loc.geo).
    ...(loc.geo
      ? { geo: { "@type": "GeoCoordinates", latitude: loc.geo.lat, longitude: loc.geo.lng } }
      : {}),
  };
}

/** Per-location page: the shop, standalone. */
export function singleLocationLd(loc: Location) {
  return { "@context": "https://schema.org", ...locationNode(loc) };
}

// ---- Bakery food menu schema -------------------------------------------------

function offerFor(price?: string) {
  if (!price) return {};
  const m = price.match(/\$(\d+(?:\.\d+)?)/);
  if (!m) return {};
  return { offers: { "@type": "Offer", price: m[1], priceCurrency: "USD" } };
}

function menuItems(cat: MenuCategory) {
  return cat.groups.flatMap((g) =>
    g.items.map((item) => ({
      "@type": "MenuItem",
      name: item.name,
      ...(item.description ? { description: item.description } : {}),
      ...offerFor(item.price),
    }))
  );
}

/** A single category as a Menu (for the category pages). */
export function categoryMenuLd(cat: MenuCategory) {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${cat.name} Menu`,
    hasMenuSection: {
      "@type": "MenuSection",
      name: cat.name,
      ...(cat.intro ? { description: cat.intro } : {}),
      hasMenuItem: menuItems(cat),
    },
  };
}

/** The whole bakery menu, sectioned by category (for the /menu index). */
export function bakeryMenuLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Little Cakes With Big Attitude Menu",
    hasMenuSection: MENU_CATEGORIES.map((cat) => ({
      "@type": "MenuSection",
      name: cat.name,
      ...(cat.intro ? { description: cat.intro } : {}),
      hasMenuItem: menuItems(cat),
    })),
  };
}

/** Homepage: the brand bakery + coffee shop, with both shops as departments. */
export function bakeryLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Bakery", "CafeOrCoffeeShop"],
    "@id": `${SITE_URL}#business`,
    name: "Little Cakes With Big Attitude",
    url: SITE_URL,
    image: IMG,
    description:
      "Scratch bakery and coffee shop in Alexandria and Pineville, Louisiana. Iced lattes, cold brew, espresso and matcha, plus cupcakes, cakes, cookies and breakfast.",
    priceRange: "$",
    servesCuisine: CUISINE,
    knowsAbout: KNOWS,
    areaServed: AREA,
    sameAs: [SOCIAL.instagram, SOCIAL.facebook],
    department: LOCATIONS.map(locationNode),
  };
}
