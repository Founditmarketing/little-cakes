/* ----------------------------------------------------------------------------
   Real menu, pulled from littlecakeswithbigattitude.com. Slugs match the live
   URLs (cupcakes, cakes, cookies, breakfast-items, ice-creams, paleoketo-treats,
   other) so existing SEO/equity carries over. Coffee lives on its own /coffee page.
   ---------------------------------------------------------------------------- */

export type MenuItem = { name: string; description?: string; price?: string };
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
      "Regular $3.30 each, $36.30 a dozen. Small (about three bites) $24.20 a dozen, by special order with a two-dozen minimum. Baked in a kitchen that handles nuts and dairy. For custom orders call 318.445.5226.",
    groups: [
      {
        heading: "Daily flavors",
        note: "Available every day",
        items: [
          { name: "Southern Pecan", description: "Butter pecan cake with coconut, cream cheese frosting, and a pecan half." },
          { name: "Red Velvet", description: "Southern chocolate cake, cream cheese frosting, and red velvet crumbles." },
          { name: "Wedding Cake", description: "White almond cake, butter cream frosting, and crystal sprinkles." },
          { name: "Vanilla Sea Salt Caramel", description: "Vanilla cake, cream cheese frosting, caramel drizzle, and cracked sea salt." },
          { name: "Plain Jane Vanilla", description: "Vanilla cake, butter cream frosting, and colored sprinkles." },
          { name: "Attitude Adjustment", description: "Vanilla cake, milk chocolate frosting, and colored sprinkles." },
          { name: "Turtle", description: "Chocolate cake, milk chocolate frosting, and chocolate flakes." },
          { name: "Triple Chocolate", description: "Chocolate cake, milk chocolate frosting, and chocolate sprinkles." },
          { name: "Chocolate with Butter Cream", description: "Chocolate cake, butter cream frosting, and chocolate sprinkles." },
          { name: "Chocolate with Cream Cheese", description: "Chocolate cake, cream cheese frosting, and chocolate sprinkles." },
          { name: "Chocolate Peanut Butter", description: "Chocolate cake with peanut butter frosting." },
        ],
      },
      {
        heading: "Flavor of the week",
        note: "On a rotating weekly schedule",
        items: [
          { name: "Cookies & Cream", description: "Vanilla cake with Oreo crumbles, butter cream frosting, and cookie pieces." },
          { name: "Raspberry", description: "Raspberry vanilla swirl cake, cream cheese frosting, and sugar crystals." },
          { name: "Chocolate Chip", description: "Vanilla and chocolate marbled cake, cream frosting, and chocolate chips." },
          { name: "Pralines 'n Cream", description: "Vanilla cake with pralines folded in, cream cheese frosting, and a praline piece." },
          { name: "Banana Caramel", description: "Banana cake, cream cheese frosting, a banana chip, and caramel drizzle." },
          { name: "Blueberry", description: "Blueberry vanilla swirl cake with cream cheese frosting." },
          { name: "Coconut", description: "Coconut cake, cream cheese frosting, and coconut flakes." },
          { name: "Lemon", description: "Lemon cake, lemon butter cream, and yellow sugar crystals." },
          { name: "Chocolate Chip Cookie Dough", description: "Vanilla cake with cookie dough baked in, milk chocolate frosting, and a cookie piece." },
        ],
      },
      {
        heading: "Flavor of the month",
        note: "One for every month, June through May",
        items: [
          { name: "Key Lime", description: "June. Key lime cake, key lime butter cream, and crushed graham cracker." },
          { name: "Strawberry", description: "July. Fresh strawberry cake with strawberry cream cheese frosting." },
          { name: "Caramel Butterscotch", description: "August. Brown sugar cake, caramel frosting, butterscotch drizzle, and a pinch of sea salt." },
          { name: "Caramel Apple", description: "September. Fresh apple cake, caramel frosting, dusted with cinnamon." },
          { name: "S'Mores", description: "October. Chocolate cupcake, marshmallow frosting, chocolate sauce, and graham crumbles." },
          { name: "Pumpkin", description: "November. Pumpkin spice cake, cream cheese frosting, dusted with cinnamon." },
          { name: "Chocolate Mint", description: "December. Chocolate cake, mint buttercream, and red and green sprinkles." },
          { name: "Snickers", description: "January. Chocolate cake, cream cheese frosting, peanuts, and caramel drizzle." },
          { name: "Petit Gateaux", description: "February. Vanilla cake swirled with cinnamon and pecans, cream cheese frosting, and Mardi Gras sugars." },
          { name: "Irish Cream", description: "March. Chocolate coffee cake with Baileys Irish Cream frosting." },
          { name: "Carrot Cake", description: "April. Cinnamon spice cake with carrots, raisins, and walnuts, with cream cheese frosting." },
          { name: "Blueberry Wedding Cake", description: "May. White almond cake with blueberries folded in, topped with butter cream." },
        ],
      },
    ],
  },
  {
    slug: "cakes",
    name: "Cakes",
    intro:
      "Any cupcake flavor we make, scaled up. Six or eight inch, baked fresh to order. Please allow 48 hours and call for details.",
    image: "/photos/chocolate-caramel-cakes.jpg",
    imageAlt: "Chocolate cakes with caramel drizzle on a wood board",
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
          { name: "Cookie Ice Cream Sandwich", description: "Ice cream of your choice between two cookies of your choice.", price: "$3.20" },
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
          { name: "Muffins", description: "Banana Nut, Blueberry, or Glorious Morning.", price: "$2.75" },
          { name: "Cinnamon Rolls", price: "$3.85" },
          { name: "Scones", description: "Blueberry, or Lemon with cream cheese.", price: "$3.00" },
          { name: "Savory Breakfast Sandwich", description: "Bacon, egg, and cheese on a croissant.", price: "$6.95" },
          { name: "Berry Yogurt Parfait", description: "Vanilla Greek yogurt, fresh berries, house-made granola, and a drizzle of honey. Pineville location only.", price: "$4.75" },
          { name: "Almond Croissant", description: "Croissant filled with almond cream, topped with sliced almonds and powdered sugar.", price: "$4.50" },
        ],
      },
    ],
  },
  {
    slug: "ice-creams",
    name: "Ice Cream",
    intro: "We proudly serve Blue Bell — by the scoop, a la mode, or blended into a Cupcake Shake.",
    image: "/photos/casual-cake-slice-fork.jpg", // TODO: real ice-cream photo from owner
    imageAlt: "A plated slice of cake with a fork at Little Cakes With Big Attitude in Central Louisiana",
    groups: [
      {
        items: [
          { name: "Cupcake a la Mode", description: "A cupcake and a scoop of ice cream.", price: "$4.40" },
          { name: "Ice Cream Cookie Sandwich", description: "Ice cream of your choice between two cookies.", price: "$3.52" },
          { name: "Ice Cream by the Scoop", description: "One scoop $1.35, two $2.75, three $5.25.", price: "from $1.35" },
        ],
      },
    ],
  },
  {
    slug: "paleoketo-treats",
    name: "Paleo & Keto",
    intro: "Big flavor, quietly low carb. Additional paleo options available by special order.",
    image: "/photos/keto-cheesecake.jpg",
    imageAlt: "Keto and diabetic-friendly gluten-free cheesecakes with a caramel cupcake",
    groups: [
      {
        heading: "Paleo",
        items: [
          { name: "Banana Nut Muffins", description: "Bananas, eggs, almond butter, coconut flour, walnuts, cinnamon, maple syrup, and coconut sugar.", price: "$3.00" },
          { name: "Bars", description: "Roasted almonds, walnuts, pecans, and sunflower seeds with almond butter, raw honey, and dried cranberries.", price: "$3.50" },
          { name: "Cookies", description: "Walnuts, dark chocolate chips, and coconut sugar. Comes two to a pack.", price: "$3.30" },
          { name: "Cookie Sandwich", description: "Two paleo cookies with paleo dark chocolate frosting.", price: "$3.85" },
          { name: "Cranberry Nut Crunch", description: "Roasted almonds, walnuts, pecans, pepitas, and coconut with raw honey, maple syrup, dried cranberries, and sea salt.", price: "$3.30" },
          { name: "Pecan Pie Nut Crunch", description: "Pecans, coconut, cinnamon, maple syrup, maple extract, and sea salt.", price: "$3.30" },
          { name: "Nut Crunch", description: "Roasted almonds, walnuts, pecans, pepitas, and coconut with raw honey, maple syrup, and sea salt.", price: "$3.30" },
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
    image: "/photos/chocolate-cupcake.jpg",
    imageAlt: "Chocolate treats at Little Cakes With Big Attitude",
    groups: [
      {
        items: [
          { name: "Brownies", description: "Turtle sea salt caramel.", price: "$3.03" },
          { name: "Cakeballs", price: "$1.38 each, $16.50 a dozen" },
          { name: "Brownie a la Mode", description: "A brownie with a scoop of ice cream.", price: "$4.13" },
          { name: "Gift Cards", description: "Available in any amount.", price: "Any amount" },
        ],
      },
    ],
  },
];

export const MENU_SLUGS = MENU_CATEGORIES.map((c) => c.slug);
