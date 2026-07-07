/* ----------------------------------------------------------------------------
   Real menu, pulled from littlecakeswithbigattitude.com. Slugs match the live
   URLs (cupcakes, cakes, cookies, breakfast-items, ice-creams, paleoketo-treats,
   other) so existing SEO/equity carries over. Coffee lives on its own /coffee page.
   ---------------------------------------------------------------------------- */

export type MenuItem = { name: string; description?: string; price?: string; current?: boolean; image?: string };
export type MenuGroup = { heading?: string; note?: string; items: MenuItem[] };

export type MenuCategory = {
  slug: string;
  name: string;
  intro?: string;
  image: string;
  imageAlt: string;
  groups: MenuGroup[];
  pricingNote?: string;
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    slug: "cupcakes",
    name: "Cupcakes",
    intro:
      "The flagship. Eleven flavors every single day, nine more on a weekly rotation, and one star for every month of the year.",
    image: "/photos/cupcakes-array.jpg",
    imageAlt: "An assortment of Little Cakes cupcakes on dark stone",
    pricingNote:
      "Single $3.45 · Four-pack $13.65 · Half-dozen $20.50 · Dozen $37.55. Small (about three bites) by special order with a two-dozen minimum. Baked in a kitchen that handles nuts and dairy. For custom orders call 318.445.5226.",
    groups: [
      {
        heading: "Daily flavors",
        note: "Available every day",
        items: [
          { name: "Southern Pecan", description: "Butter pecan cake with coconut, cream cheese frosting, and a pecan half.", image: "/photos/Southern Pecan.jpg" },
          { name: "Red Velvet", description: "Southern chocolate cake, cream cheese frosting, and red velvet crumbles.", image: "/photos/Red Velvet.jpg" },
          { name: "Wedding Cake", description: "White almond cake, butter cream frosting, and crystal sprinkles.", image: "/photos/Wedding Cake.jpg" },
          { name: "Vanilla Sea Salt Caramel", description: "Vanilla cake, cream cheese frosting, caramel drizzle, and cracked sea salt.", image: "/photos/Vanilla Sea Salt Caramel.jpg" },
          { name: "Plain Jane Vanilla", description: "Vanilla cake, butter cream frosting, and colored sprinkles.", image: "/photos/Plain Jane Vanilla.jpg" },
          { name: "Attitude Adjustment", description: "Vanilla cake, milk chocolate frosting, and colored sprinkles.", image: "/photos/Attitude Adjustment.jpg" },
          { name: "Turtle", description: "Chocolate cake, milk chocolate frosting, and chocolate flakes.", image: "/photos/Turtle.jpg" },
          { name: "Triple Chocolate", description: "Chocolate cake, milk chocolate frosting, and chocolate sprinkles.", image: "/photos/Triple Chocolate.jpg" },
          { name: "Chocolate with Butter Cream", description: "Chocolate cake, butter cream frosting, and chocolate sprinkles.", image: "/photos/Chocolate with Butter Cream.jpg" },
          { name: "Chocolate with Cream Cheese", description: "Chocolate cake, cream cheese frosting, and chocolate sprinkles.", image: "/photos/Chocolate with Cream Cheese.jpg" },
          { name: "Chocolate Peanut Butter", description: "Chocolate cake with peanut butter frosting.", image: "/photos/Chocolate Peanut Butter.jpg" },
        ],
      },
      {
        heading: "Flavor of the week",
        note: "On a rotating weekly schedule",
        items: [
          { name: "Lemon", description: "Lemon cake with lemon butter cream and yellow sugar crystals.", image: "/photos/Lemon.jpg" },
          { name: "Chocolate Chip Cookie Dough", description: "Vanilla cake with baked cookie dough, chocolate frosting, and cookie pieces.", image: "/photos/Chocolate Chip Cookie Dough .jpg" },
          { name: "Cookies & Cream", description: "Vanilla cake and Oreo crumbles with butter cream frosting and Oreo pieces.", image: "/photos/Cookies & Cream.jpg" },
          { name: "Raspberry", description: "Raspberry vanilla swirl cake with cream cheese frosting and sugar crystals.", image: "/photos/Raspberry.jpg" },
          { name: "Chocolate Chip", description: "Vanilla and chocolate marbled cake with cream cheese frosting and chocolate chips.", image: "/photos/Chocolate Chip.jpg" },
          { name: "Pralines 'n Cream", description: "Vanilla cake with pralines, cream cheese frosting, and praline pieces.", image: "/photos/Pralines 'n Cream.jpg" },
          { name: "Banana Caramel", description: "Banana cake with cream cheese frosting and a banana chip drizzled with caramel.", image: "/photos/Banana Caramel.jpg" },
          { name: "Blueberry", description: "Blueberry vanilla swirl cake with cream cheese frosting and a fresh blueberry.", image: "/photos/Blueberry.jpg" },
          { name: "Coconut", description: "Coconut cake with cream cheese frosting and coconut flakes.", image: "/photos/Coconut.jpg" },
        ],
      },
      {
        heading: "Flavor of the month",
        note: "One for every month",
        items: [
          { name: "Snickers", description: "January. Chocolate cake, cream cheese frosting, peanuts, and caramel drizzle.", image: "/photos/Snickers.jpg" },
          { name: "Petit Gateaux", description: "February. Vanilla cake swirled with cinnamon and pecans, cream cheese frosting, and Mardi Gras sugars.", image: "/photos/Petit Gateaux.jpg" },
          { name: "Irish Cream", description: "March. Chocolate coffee cake with Baileys Irish Cream frosting.", image: "/photos/Irish Cream.jpg" },
          { name: "Carrot Cake", description: "April. Cinnamon spice cake with carrots, raisins, and walnuts, with cream cheese frosting.", image: "/photos/Carrot Cake.jpg" },
          { name: "Blueberry Wedding Cake", description: "May. White almond cake with blueberries folded in, topped with butter cream.", image: "/photos/Blueberry Wedding Cake.jpg" },
          { name: "Key Lime", description: "June. Key lime cake, key lime butter cream, and crushed graham cracker.", image: "/photos/Key Lime.jpg" },
          { name: "Strawberry", description: "July. Fresh strawberry cake with strawberry cream cheese frosting.", image: "/photos/Strawberry.jpg" },
          { name: "Caramel Butterscotch", description: "August. Brown sugar cake, caramel frosting, butterscotch drizzle, and a pinch of sea salt." },
          { name: "Caramel Apple", description: "September. Fresh apple cake, caramel frosting, dusted with cinnamon.", image: "/photos/Caramel Apple.jpg" },
          { name: "S'Mores", description: "October. Chocolate cupcake, marshmallow frosting, chocolate sauce, and graham crumbles.", image: "/photos/S'Mores.jpg" },
          { name: "Pumpkin", description: "November. Pumpkin spice cake, cream cheese frosting, dusted with cinnamon.", image: "/photos/Pumpkin.jpg" },
          { name: "Chocolate Mint", description: "December. Chocolate cake, mint buttercream, and red and green sprinkles.", image: "/photos/Chocolate Mint.jpg" },
        ],
      },
    ],
  },
  {
    slug: "cakes",
    name: "Cakes",
    intro:
      "Any cupcake flavor we make, scaled up. Six or eight inch, baked fresh to order. Please allow 48 hours and call for details.",
    image: "/photos/choc pb cake.jpg",
    imageAlt: "Chocolate peanut butter drip cake on a white cake stand",
    pricingNote: "Custom cakes are made to order in any flavor we offer as a cupcake. Call 318.445.5226 for pricing and details. Please allow 48 hours.",
    groups: [
      {
        heading: "Made to order",
        note: "48 hours notice, any cupcake flavor",
        items: [
          { name: "6 Inch Cake", description: "Serves roughly 6 to 8. A sweet centerpiece for a smaller celebration.", price: "Starts at $35.00" },
          { name: "8 Inch Cake", description: "Serves roughly 12 to 16. For a full table, a party, or leftovers worth fighting over.", price: "Starts at $55.00" },
        ],
      },
    ],
  },
  {
    slug: "cookies",
    name: "Cookies",
    intro: "Thick, soft-centered, and stackable. Build a sandwich if you are feeling ambitious.",
    image: "/photos/cookie-stack-hires.jpg",
    imageAlt: "A stack of cookies with a teal sugar cookie at the base",
    groups: [
      {
        heading: "Individual cookies",
        note: "$0.95 each, $11.00 a dozen",
        items: [
          { name: "Chocolate Chip" },
          { name: "Coconut Pecan" },
          { name: "Lemon" },
          { name: "M&M" },
          { name: "Oatmeal Raisin" },
          { name: "Sugar" },
          { name: "White Chocolate Macadamia" },
          { name: "Peanut Butter" },
        ],
      },
      {
        heading: "Sandwiches",
        items: [
          { name: "Cookie Sandwich", description: "Frosting of your choice between two cookies of your choice.", price: "$3.03" },
        ],
      },
    ],
  },
  {
    slug: "breakfast-items",
    name: "Breakfast",
    intro: "Something for the morning, before the day gets loud.",
    image: "/photos/breakfast-pastries.jpg",
    imageAlt: "A sheet pan of frosted hand pies, muffins, and a cinnamon roll",
    groups: [
      {
        items: [
          { name: "Sweet Pop-Tarts", description: "Apple, Blueberry, Chocolate, King Cake, or Strawberry.", price: "$3.30" },
          { name: "Savory Pop-Tart", description: "Bacon, Egg, and Cheese or Sausage, Egg, and Cheese.", price: "$3.30" },
          { name: "Muffins", description: "Banana Nut, Blueberry, or Glorious Morning.", price: "$2.75" },
          { name: "Cinnamon Rolls", price: "$3.85" },
          { name: "Blueberry Lemon with Cream Cheese", description: "A blueberry lemon scone with cream cheese.", price: "$3.00" },
        ],
      },
    ],
  },
  {
    slug: "ice-creams",
    name: "Ice Cream",
    intro: "We proudly serve Blue Bell — by the scoop.",
    image: "/photos/ice cream.jpg",
    imageAlt: "Ice cream at Little Cakes With Big Attitude in Central Louisiana",
    groups: [
      {
        items: [
          { name: "One Scoop", price: "$1.35" },
          { name: "Two Scoop", price: "$2.75" },
        ],
      },
    ],
  },
  {
    slug: "paleoketo-treats",
    name: "Paleo & Keto",
    intro: "Big flavor, quietly low carb. Additional paleo options available by special order.",
    image: "/photos/paleo grouping.jpg",
    imageAlt: "A grouping of paleo treats at Little Cakes With Big Attitude",
    groups: [
      {
        heading: "Paleo",
        items: [
          { name: "Banana Nut Muffins", description: "Bananas, eggs, almond butter, coconut flour, walnuts, cinnamon, maple syrup, and coconut sugar.", price: "$3.00" },
          { name: "Bars", description: "Roasted almonds, walnuts, pecans, and sunflower seeds with almond butter, raw honey, and dried cranberries.", price: "$3.50" },
          { name: "Cookies", description: "Walnuts, dark chocolate chips, and coconut sugar. Comes two to a pack.", price: "$3.30" },
          { name: "Cookie Sandwich", description: "Two paleo cookies with paleo dark chocolate frosting.", price: "$3.85" },
        ],
      },
      {
        heading: "Keto",
        items: [
          { name: "Keto Cheesecake", description: "Single serving. Almond flour, pecans, xylitol, cream cheese, sour cream, butter, and cinnamon.", price: "$4.65" },
          { name: "Keto Vanilla Sea Salt Caramel Cupcake", description: "Cream cheese frosting. Almond flour, eggs, butter, Swerve, coconut flour, heavy whipping cream, and sea salt.", price: "$3.50" },
        ],
      },
    ],
  },
  {
    slug: "other",
    name: "Other",
    intro: "Ask about our sampler platters, breakfast platters, and gift box options.",
    image: "/photos/brownies.jpg",
    imageAlt: "Turtle brownie and sea salt caramel brownie at Little Cakes With Big Attitude",
    groups: [
      {
        items: [
          { name: "Turtle Brownie", price: "$3.03" },
          { name: "Sea Salt Caramel Brownie", price: "$3.03" },
          { name: "Brownie Bites", description: "Two-dozen minimum.", price: "$3.03" },
          { name: "Brownie a la Mode", description: "A brownie with a scoop of ice cream.", price: "$4.13" },
          { name: "Gift Cards", description: "Available in any amount.", price: "Any amount" },
        ],
      },
    ],
  },
];

export const MENU_SLUGS = MENU_CATEGORIES.map((c) => c.slug);

// Weekly rotation order — update this list to change the sequence.
// Week 0 is anchored to Monday 2026-06-01 (Lemon). Add or remove flavors here;
// the modulo keeps the index in bounds automatically.
export const WEEKLY_ROTATION = [
  "Lemon",
  "Chocolate Chip Cookie Dough",
  "Cookies & Cream",
  "Raspberry",
  "Chocolate Chip",
  "Pralines 'n Cream",
  "Banana Caramel",
  "Blueberry",
  "Coconut",
] as const;

const ANCHOR_MS = Date.UTC(2026, 5, 1); // Monday 2026-06-01 = index 0 (Lemon)
const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;

export function currentWeeklyFlavor(): string {
  const w = Math.floor((Date.now() - ANCHOR_MS) / MS_PER_WEEK);
  const i = ((w % WEEKLY_ROTATION.length) + WEEKLY_ROTATION.length) % WEEKLY_ROTATION.length;
  return WEEKLY_ROTATION[i];
}
