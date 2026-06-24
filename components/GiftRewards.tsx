import { Gift, Star } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./motion-primitives";
import { BirthdayForm } from "./BirthdayForm";
import { LOCATIONS } from "@/lib/site";

const GIFT_URL = LOCATIONS[0].giftUrl;
const REWARDS_URL = LOCATIONS[0].rewardsUrl;

export function GiftRewards() {
  return (
    <section id="gifts" className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 md:py-32">
      <h2 className="sr-only">Gifts and rewards</h2>
      <div className="grid gap-5 lg:grid-cols-2">
        {/* Gift cards */}
        <Reveal>
          <div className="flex h-full flex-col justify-between rounded-card border border-line bg-ink-2 p-8 md:p-10">
            <div>
              <Gift weight="fill" className="size-7 text-teal" />
              <h3 className="mt-5 font-display text-3xl font-bold tracking-tight text-cream">
                Give the gift of attitude.
              </h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted">
                Digital or physical gift cards, good at both shops. The easiest
                gift for the person who already has a favorite flavor.
              </p>
            </div>

            {/* Gift card brand object */}
            <div className="mt-8 flex items-center justify-between rounded-2xl bg-teal p-5 text-teal-ink">
              <span className="inline-flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="grid size-8 place-items-center rounded-[7px] bg-teal-ink"
                >
                  <span className="size-2.5 rounded-[3px] bg-teal" />
                </span>
                <span className="font-display text-lg font-extrabold tracking-tight">
                  little cakes
                </span>
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-70">
                Gift Card
              </span>
            </div>

            <a
              href={GIFT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center rounded-full border border-line px-6 py-3 text-[15px] font-semibold text-cream transition-colors hover:border-teal hover:text-teal"
            >
              Buy a gift card
            </a>
          </div>
        </Reveal>

        {/* Rewards + birthday club */}
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col gap-8 rounded-card border border-line bg-ink-2 p-8 md:p-10">
            <div>
              <Star weight="fill" className="size-7 text-teal" />
              <h3 className="mt-5 font-display text-3xl font-bold tracking-tight text-cream">
                Earn while you indulge.
              </h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted">
                Every order racks up points toward free treats. Join once, earn
                at both locations.
              </p>
              <a
                href={REWARDS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-fit items-center rounded-full bg-teal px-6 py-3 text-[15px] font-semibold text-teal-ink transition-colors hover:bg-teal-bright"
              >
                Join rewards
              </a>
            </div>

            <div className="border-t border-line pt-8">
              <h4 className="font-display text-xl font-bold tracking-tight text-cream">
                Birthday club
              </h4>
              <p className="mt-2 text-sm text-muted">
                Tell us when to celebrate you.
              </p>
              <div className="mt-5">
                <BirthdayForm />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
