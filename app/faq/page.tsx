import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion-primitives";
import { Accordion } from "@/components/Accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about ordering, custom cakes, allergies, gluten-free and paleo options, shipping, and more at Little Cakes With Big Attitude in Alexandria and Pineville, LA.",
  alternates: { canonical: "/faq" },
};

const FAQS = [
  {
    question: "Is Little Cakes a coffee shop?",
    answer:
      "Yes. We are a full coffee shop and a scratch bakery under one roof. We pull real espresso and serve iced lattes, cold brew, iced macchiato, matcha, chai, frozen coffee and a daily brew, plus our signature Cupcake Shake, at both our Alexandria and Pineville locations.",
  },
  {
    question: "Do you have a coffee shop in Pineville and Alexandria?",
    answer:
      "Both. Our Alexandria coffee shop is at 4120 Jackson St and our Pineville coffee shop is at 2965A Monroe Hwy. Each one serves the full coffee menu alongside the bakery, with online ordering on Toast.",
  },
  {
    question: "What is the Monday coffee deal?",
    answer:
      "Every Monday you get $1 off any large iced latte, at both shops. No app, no points, no membership card. Just ask.",
  },
  {
    question: "How long will my cupcakes stay fresh?",
    answer:
      "We bake fresh every day, so we encourage you to enjoy your Little Cakes the day you buy them for the freshest product possible. If you are saving them for later, keep them in an airtight container.",
  },
  {
    question: "Do you sell smaller cupcakes?",
    answer:
      "Yes. Our small size is about three bites. There is a two-dozen minimum and we ask for 24 hours notice. For a daily flavor there is a minimum of six of each flavor; for a flavor not offered that week or month, a two-dozen minimum of each.",
  },
  {
    question: "Can I place an order in advance?",
    answer:
      "Absolutely. Look over the cupcake menu to decide what you would like, then call the store during business hours (318.445.5226) to place it. We do not take orders by text or social media, so every order comes out right. Custom orders need 48 hours notice and must be pre-paid.",
  },
  {
    question: "Do you ship cupcakes?",
    answer:
      "To keep them fresh, we do not ship our cupcakes. We do offer a cupcake in a jar that you are welcome to ship yourself.",
  },
  {
    question: "If I have a food allergy, can I eat Little Cakes?",
    answer:
      "We are not a nut-free bakery. We bake with flour, dairy, sugar, peanuts, walnuts, pecans, and almonds every day. If you have an allergy, please err on the side of caution.",
  },
  {
    question: "Do you have any gluten-free or sugar-free options?",
    answer:
      "We offer a paleo line of treats that are gluten-free. For coffee, we have plenty of sugar-free syrups you can substitute.",
  },
  {
    question: "Can I order a flavor that is not available that week or month?",
    answer:
      "Yes. We will bake a weekly or monthly flavor that is off the rotation with 24 hours notice and a minimum of one dozen regular or two dozen small.",
  },
  {
    question: "Can you write a message or custom logo on my cupcakes?",
    answer:
      "We offer a fondant topper that can be customized for cupcakes and cookies for an additional charge. Please call for details.",
  },
  {
    question: "Can I change the frosting color on my cupcakes?",
    answer:
      "We can tint our buttercream to your liking. A $3 charge covers cupcake frosting colors and writing or borders on cakes. A $5 charge covers colors to cover custom cakes other than white, turquoise, or chocolate. Please bring a color swatch for specific colors.",
  },
  {
    question: "How late can I cancel a custom order?",
    answer:
      "Cancel no later than 48 hours in advance to receive a refund as store credit. After that, we are already preparing batter and frosting for the next day's bake and cannot issue a credit.",
  },
  {
    question: "How do I make sure my favorite flavor does not sell out?",
    answer:
      "Call ahead, place your order, and pre-pay. We will have it boxed and ready for you when you arrive.",
  },
  {
    question: "Do you make cupcakes or cakes for weddings?",
    answer:
      "We do not make traditional tiered wedding cakes, but we offer cupcakes and stand rental for your day. A small six-inch round can sit on the top tier with cupcakes of your choice below, giving guests more flavor options. It is an affordable, crowd-pleasing option. Call or stop by to talk it through.",
  },
  {
    question: "Can I order my favorite cupcake flavor as a cake?",
    answer:
      "Absolutely. We offer two sizes: a six-inch round starting at $35 and an eight-inch round starting at $55. We ask for at least 48 hours notice because we bake to order to ensure freshness.",
  },
  {
    question: "What is a Cupcake Shake?",
    answer:
      "Our signature Cupcake Shake blends a cupcake flavor of your choice with three scoops of Blue Bell ice cream. Top it with our homemade whipped cream.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FaqPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq" },
        ]}
        kicker="Good to know"
        title="Questions, answered."
        intro="Ordering, custom cakes, allergies, the good stuff. If your question is not here, just call or come by."
      />

      <section className="mx-auto max-w-3xl px-5 pb-16 sm:px-8 md:pb-24">
        <Reveal>
          <Accordion items={FAQS} />
        </Reveal>
        <Reveal>
          <div className="mt-12 rounded-card border border-line bg-ink-2 p-6 text-[15px] text-muted">
            Still curious? Call Alexandria at{" "}
            <a href="tel:+13184455226" className="text-teal hover:text-teal-bright">
              318.445.5226
            </a>{" "}
            or Pineville at{" "}
            <a href="tel:+13186570155" className="text-teal hover:text-teal-bright">
              318.657.0155
            </a>
            , see the full{" "}
            <Link href="/menu" className="text-teal hover:text-teal-bright">
              menu
            </Link>{" "}
            and{" "}
            <Link href="/coffee" className="text-teal hover:text-teal-bright">
              coffee shop
            </Link>
            , or find both shops on the{" "}
            <Link href="/#locations" className="text-teal hover:text-teal-bright">
              locations
            </Link>{" "}
            section.
          </div>
        </Reveal>
      </section>
    </main>
  );
}
