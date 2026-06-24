import type { Metadata } from "next";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/motion-primitives";
import { Accordion } from "@/components/Accordion";
import { FacilityForm } from "@/components/FacilityForm";

export const metadata: Metadata = {
  title: "Facility Rental",
  description:
    "Rent the room at Little Cakes With Big Attitude for birthdays, showers, and meetings. Seats 45, cupcakes and coffee included. Alexandria, Louisiana.",
  alternates: { canonical: "/facility-rental" },
};

const PACKAGES = [
  { name: "The Daily Grind", window: "Mon to Thu, before 6PM", price: "$300", extra: "$25 / extra hour", note: "2-hour event", suits: "Best for daytime meetings and small get-togethers." },
  { name: "The Sweet Meet", window: "Mon to Thu, after 6PM", price: "$400", extra: "$35 / extra hour", note: "2-hour event, plus 1 hour decorating", suits: "Best for weeknight showers and birthday parties." },
  { name: "The Glorious Morning", window: "Fri to Sat, before 6PM", price: "$500", extra: "$45 / extra hour", note: "2-hour event, plus 1 hour decorating", suits: "Best for weekend brunches and baby showers." },
  { name: "Weekend Adjustment", window: "Fri to Sat, after 6PM", price: "$750", extra: "$55 / extra hour", note: "2-hour event, plus 1 hour decorating", suits: "Best for prime-time weekend celebrations." },
];

const INCLUDES = [
  "The front dining area and customer restrooms",
  "Our lobby tables and chairs",
  "Two dozen small cupcakes in the flavor of your choice",
  "Coffee and water",
  "Dessert plates, forks, napkins, and cups",
  "Staff to assist as needed",
];

const FAQS = [
  { question: "When is final payment due?", answer: "Final payment is due 72 hours prior to your event." },
  {
    question: "How many people does the room seat?",
    answer: "Our facility seats 45 people comfortably.",
  },
  {
    question: "Can I bring outside food or drinks?",
    answer:
      "We ask that all sweets, desserts, and non-alcoholic drinks be purchased through Little Cakes. You are welcome to bring in snacks or a meal from an outside source.",
  },
  {
    question: "Can I serve alcohol?",
    answer:
      "Yes, however our staff is not responsible for any alcoholic beverages. You must notify us in advance and sign a release form. Little Cakes does not claim liability for alcohol, and our staff cannot handle it at any point.",
  },
  {
    question: "What is the decoration policy?",
    answer:
      "All decorations must be approved by Little Cakes. Nothing may be hung from the walls, ceilings, or fixtures. Tabletop decorations are welcome. No tape of any kind on the wood floors.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "More than 72 hours out, your deposit is refunded as a Little Cakes gift card. Less than 72 hours out, we are unable to offer a refund since we have already committed staff to your event.",
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

export default function FacilityRentalPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Facility Rental", href: "/facility-rental" },
        ]}
        kicker="Events"
        title="Book the room."
        intro="Birthdays, showers, meetings, just-because Tuesdays. Take over our front room and let us handle the sweet stuff. Seats 45."
      />

      {/* Packages */}
      <section className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 md:py-20">
        <Reveal>
          <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight">
            Rental packages
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            Four windows, every one with cupcakes and coffee built in. Pick the
            day and time that fits your event.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.06}>
              <div className="flex h-full flex-col rounded-card border border-line bg-ink-2 p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-cream">
                    {p.name}
                  </h3>
                  <span className="shrink-0 font-display text-2xl font-extrabold text-teal">
                    {p.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted">{p.window}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{p.suits}</p>
                <div className="mt-4 border-t border-line pt-4 text-sm text-faint">
                  <p>{p.note}</p>
                  <p className="mt-1">{p.extra}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Inclusions */}
      <section className="border-y border-line bg-ink-2">
        <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 md:py-20">
          <Reveal>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight">
              Every rental includes
            </h2>
            <ul className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {INCLUDES.map((inc) => (
                <li key={inc} className="flex items-start gap-3 text-[15px] text-muted">
                  <Check weight="bold" className="mt-0.5 size-5 shrink-0 text-teal" />
                  {inc}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Request form + FAQs */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight">
                Request a date
              </h2>
              <p className="mt-3 max-w-md text-muted">
                Fill this out rather than calling, so every request gets reviewed
                in the order it comes in.
              </p>
              <div className="mt-8">
                <FacilityForm packages={PACKAGES.map((p) => p.name)} />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight">
                The fine print
              </h2>
              <div className="mt-8">
                <Accordion items={FAQS} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
