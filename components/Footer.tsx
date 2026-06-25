import { InstagramLogo, FacebookLogo, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Wordmark } from "./Wordmark";
import { LOCATIONS, SOCIAL, NAV } from "@/lib/site";

const COMPANY = [
  { label: "About us", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Facility rental", href: "/facility-rental" },
  { label: "Careers", href: "/job-application" },
  { label: "Share the love", href: "/share-the-love" },
  { label: "Contact", href: "/#locations" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Little Cakes, Big Attitude. Made from scratch in Alexandria and
              Pineville, Louisiana.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid size-10 place-items-center rounded-full border border-line text-cream transition-colors hover:border-teal hover:text-teal"
              >
                <InstagramLogo weight="fill" className="size-5" />
              </a>
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid size-10 place-items-center rounded-full border border-line text-cream transition-colors hover:border-teal hover:text-teal"
              >
                <FacebookLogo weight="fill" className="size-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Explore">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {[...NAV, { label: "Build a box", href: "/build-a-box" }].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="inline-block py-1 text-sm text-muted transition-colors hover:text-cream">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {COMPANY.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="inline-block py-1 text-sm text-muted transition-colors hover:text-cream">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
              Shops
            </h3>
            <ul className="mt-4 space-y-5">
              {LOCATIONS.map((loc) => (
                <li key={loc.id} className="text-sm">
                  <a
                    href={`/locations/${loc.id}`}
                    className="group inline-flex items-start gap-1 font-semibold text-cream transition-colors hover:text-teal"
                  >
                    {loc.name}
                    <ArrowUpRight weight="bold" className="size-3.5 text-teal" />
                  </a>
                  <p className="mt-1 text-muted">{loc.address}</p>
                  <a href={loc.phoneHref} className="text-muted hover:text-cream">
                    {loc.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Little Cakes With Big Attitude. All rights reserved.</p>
          <p>Alexandria &amp; Pineville, Louisiana.</p>
        </div>
      </div>
    </footer>
  );
}
