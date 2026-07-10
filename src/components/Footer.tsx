import Link from "next/link";
import { BrandMark } from "./BrandMark";

const quickLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

const serviceLinks = [
  "Gas appliance maintenance & repairs",
  "Landlord safety certificates (CP12)",
  "Heating system installation",
  "Smart heating controls",
  "Pipework & radiators",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-ridge-black pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-12 sm:pt-16">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.04),transparent_45%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 sm:gap-12 sm:px-5 md:grid-cols-2 md:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="md:col-span-2 lg:col-span-1">
          <BrandMark size="sm" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ridge-white/50">
            Independent gas engineer based in Bristol. Covering the whole Southwest within 1-2
            hours. Emergency callouts available.
          </p>
          <div className="mt-6 space-y-2 text-sm text-ridge-white/70">
            <a href="tel:01172510726" className="block min-h-11 py-2 transition hover:text-ridge-white sm:min-h-0 sm:py-0">
              0117 251 0726
            </a>
            <a
              href="mailto:response@ridgeheating.co.uk"
              className="block break-all transition hover:text-ridge-white"
            >
              response@ridgeheating.co.uk
            </a>
            <p>Bristol · Southwest · Emergency callouts</p>
          </div>
        </div>

        <div>
          <p className="font-display text-[10px] uppercase tracking-[0.22em] text-ridge-muted">
            Quick links
          </p>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ridge-white/60 transition hover:text-ridge-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-[10px] uppercase tracking-[0.22em] text-ridge-muted">
            Our services
          </p>
          <ul className="mt-5 space-y-3">
            {serviceLinks.map((label) => (
              <li key={label}>
                <Link
                  href="/#services"
                  className="text-sm text-ridge-white/60 transition hover:text-ridge-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-[10px] uppercase tracking-[0.22em] text-ridge-muted">
            Follow
          </p>
          <a
            href="https://www.instagram.com/ridge.heating/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block text-sm text-ridge-white/60 transition hover:text-ridge-white"
          >
            Instagram · @ridge.heating
          </a>
          <p className="mt-8 font-display text-[10px] uppercase tracking-[0.2em] text-ridge-muted">
            Safe solutions, engineered to last
          </p>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-10 flex max-w-7xl flex-col gap-5 border-t border-white/10 px-4 pt-6 sm:mt-14 sm:px-5 sm:pt-8 md:px-8">
        <div className="flex flex-col gap-3 text-xs text-ridge-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Ridge Heating. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link href="/privacy" className="transition hover:text-ridge-white">
              Privacy policy
            </Link>
            <p>www.ridgeheating.co.uk</p>
          </div>
        </div>

        <a
          href="https://www.collectivstudio.uk/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex min-h-11 w-full items-center justify-center px-6 py-3 text-center font-display text-[11px] font-semibold uppercase tracking-[0.16em] sm:w-fit"
        >
          Website by Collectiv Studio
        </a>
      </div>
    </footer>
  );
}
