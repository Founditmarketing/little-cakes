/* ----------------------------------------------------------------------------
   Single source of truth for site content.
   NOTE: items marked TODO are placeholders pending real data from the owner
   (exact Toast Tab ordering URLs, EZCater URL, confirmed Pineville hours,
   exact map pins, a real ice-cream photo). Everything else is real.
   ---------------------------------------------------------------------------- */

export type Location = {
  id: "alexandria" | "pineville";
  name: string;
  address: string;
  mapUrl: string;
  phone: string;
  phoneHref: string;
  hours: string; // display string; keep in sync with /coffee JSON-LD openingHours
  orderUrl: string; // Toast Tab online ordering
  giftUrl: string; // Toast gift cards
  rewardsUrl: string; // Toast rewards signup
  geo?: { lat: number; lng: number }; // TODO: exact storefront pins from owner's GBP
  blurb?: string; // short location-specific line
};

export const LOCATIONS: Location[] = [
  {
    id: "alexandria",
    name: "Alexandria",
    address: "4120 Jackson St, Alexandria, LA 71303",
    mapUrl: "https://maps.google.com/?q=4120+Jackson+St+Alexandria+LA+71303",
    phone: "(318) 445-5226",
    phoneHref: "tel:+13184455226",
    hours: "Mon to Fri 7am to 6pm, Sat 9am to 1pm",
    blurb: "The original shop, on Jackson Street.",
    orderUrl: "https://order.toasttab.com/online/little-cakes-with-big-attitude",
    giftUrl: "https://www.toasttab.com/little-cakes-with-big-attitude/giftcards",
    rewardsUrl: "https://www.toasttab.com/little-cakes-with-big-attitude/rewardsSignup",
  },
  {
    id: "pineville",
    name: "Pineville",
    address: "2965A Monroe Hwy, Pineville, LA 71360",
    mapUrl: "https://maps.google.com/?q=2965A+Monroe+Hwy+Pineville+LA+71360",
    phone: "(318) 657-0155",
    phoneHref: "tel:+13186570155",
    hours: "Mon to Fri 7am to 6pm, Sat 9am to 1pm", // TODO confirm Pineville Saturday hours
    blurb: "On Monroe Highway in Pineville.",
    orderUrl: "https://order.toasttab.com/online/little-cakes-with-big-attitude-pineville-2965a-monroe-highway",
    giftUrl: "https://order.toasttab.com/egiftcards/little-cakes-with-big-attitude-pineville-2965a-monroe-highway",
    rewardsUrl: "https://www.toasttab.com/little-cakes-with-big-attitude-pineville-2965a-monroe-highway/rewardsSignup",
  },
];

export const SOCIAL = {
  instagram: "https://www.instagram.com/littlecakeswithbigattitude/",
  facebook: "https://www.facebook.com/littlecakeswithbigattitude/",
};

export const CATERING_URL = "https://www.ezcater.com/brand/pvt/little-cakes-with-big-attitude";

export const NAV = [
  { label: "Menu", href: "/menu" },
  { label: "Coffee", href: "/coffee" },
  { label: "Locations", href: "/#locations" },
  { label: "Catering", href: "/#catering" },
  { label: "Gift Card", href: "/#gifts" },
];

/* The recurring "cover story". Swap monthly. Image must be a clean (text-free) shot. */
export const FLAVOR_OF_MONTH = {
  name: "Key Lime",
  month: "June",
  image: "/photos/promo-key-lime.jpg",
  alt: "Key lime cupcake with key lime buttercream and crushed graham cracker topping",
  blurb:
    "Key lime cake layered with key lime buttercream, finished with a dusting of crushed graham cracker. Bright, tart, and impossible to put down.",
  note: "New flavor drops the first of every month.",
};

export const NEXT_FLAVOR = {
  name: "Strawberry",
  month: "July",
  blurb: "Fresh strawberry cake with strawberry cream cheese frosting.",
};

export type Category = {
  name: string;
  blurb: string;
  image: string;
  alt: string;
  href?: string;
  position?: string; // tailwind object-position utility for the cell crop
  video?: string; // optional ambient clip; image acts as its poster
};

/* Menu categories from the live site, mapped to the new hi-res photography.
   Ice Cream still uses a stand-in (TODO: real ice-cream shot from owner). */
export const CATEGORIES: Category[] = [
  {
    name: "Cupcakes",
    href: "/cupcakes",
    blurb: "The flagship. Sky-high swirls, scratch cake.",
    image: "/photos/cupcakes-array.jpg",
    alt: "An assortment of Little Cakes With Big Attitude cupcakes on dark stone, Alexandria LA bakery",
    position: "object-[50%_40%]",
  },
  {
    name: "Cakes",
    href: "/cakes",
    blurb: "Whole cakes and slices for the big days.",
    image: "/photos/choc pb cake.jpg",
    alt: "Chocolate peanut butter drip cake on a white cake stand",
    position: "object-center",
  },
  {
    name: "Cookies",
    href: "/cookies",
    blurb: "Thick, soft-centered, stacked.",
    image: "/photos/cookie-stack-hires.jpg",
    alt: "A tall stack of chocolate chip and M&M cookies with a teal sugar cookie at the base",
    position: "object-[45%_35%]",
  },
  {
    name: "Breakfast",
    href: "/breakfast-items",
    blurb: "Pop-Tarts, muffins, scones, and cinnamon rolls.",
    image: "/photos/breakfast-pastries.jpg",
    alt: "A sheet pan of frosted hand pies, muffins and a cinnamon roll",
    position: "object-[40%_30%]",
  },
  {
    name: "Coffee",
    blurb: "Iced lattes, cold brew, and the Monday deal.",
    image: "/photos/coffee-iced.jpg",
    alt: "Iced latte with cream swirling in, in a branded teal Little Cakes sleeve, coffee in Alexandria and Pineville LA",
    href: "/coffee",
    position: "object-[50%_28%]",
  },
  {
    name: "Paleo & Keto",
    href: "/paleoketo-treats",
    blurb: "Keto, diabetic friendly, and gluten-free with low net carbs per serving.",
    image: "/photos/keto-cheesecake.jpg",
    alt: "Keto and diabetic friendly gluten free cheesecakes with a caramel cupcake, low carb dessert Alexandria LA",
    position: "object-[35%_50%]",
  },
];
// Ice Cream lives on /menu and /ice-creams; kept off the home grid until a real
// ice-cream photo exists (the cupcake stand-in contradicted the label).

/* Drink lineup for the /coffee page. Real items from the live menu. */
export const COFFEE_DRINKS = [
  "Iced Latte",
  "Iced Coffee / Cold Brew",
  "Iced Macchiato",
  "Iced Matcha",
  "Matcha Refresher",
  "Frozen Coffee",
  "Iced Chai Latte",
  "Daily Brew",
  "Frozen Hot Chocolate",
];

/* Marquee of flavors - text only, used as a kinetic strip. */
export const FLAVOR_WORDS = [
  "Southern Pecan",
  "Wedding Cake",
  "Salted Caramel",
  "Triple Chocolate",
  "Red Velvet",
];

/* Real customer testimonials, from the live site's "Share the Love" page. */
export const REVIEWS = [
  {
    quote:
      "Hands down the best cupcakes ever. I have tried tons of different places and this one beats every other by a mile. The staff is so friendly too.",
    name: "Amy Uffman",
    where: "Baton Rouge, LA",
  },
  {
    quote:
      "Even when we celebrate out of town, my family insists on Little Cakes birthday cakes. Every family member has their favorite. We wouldn't go anywhere else.",
    name: "Lynn Wheelis",
    where: "Alexandria, LA",
  },
  {
    quote:
      "Such a great place for your any-time coffee, and the food is to die for. Love this place. The staff is amazing.",
    name: "Garrison Nichols",
    where: "Alexandria, LA",
  },
  {
    quote:
      "My favorite drink is the frozen hot chocolate and my favorite cupcake is wedding cake. I love visiting Little Cakes.",
    name: "Annie Beard",
    where: "Coppell, TX",
  },
  {
    quote:
      "I love coming here with my mom. You guys are the best, you make my day better. Never stop.",
    name: "Savanna Woods",
    where: "Louisiana",
  },
];
