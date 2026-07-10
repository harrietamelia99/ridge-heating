"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BrandMark } from "./BrandMark";

const links = [
  { href: "/#services", label: "Services", id: "services" },
  { href: "/#why-us", label: "Why Us", id: "why-us" },
  { href: "/#about", label: "About", id: "about" },
  { href: "/#work", label: "Work", id: "work" },
  { href: "/#testimonials", label: "Reviews", id: "testimonials" },
  { href: "/#faq", label: "FAQ", id: "faq" },
  { href: "/#contact", label: "Contact", id: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(`/#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-2.5 pt-[max(0.5rem,env(safe-area-inset-top))] sm:px-3 md:px-5 md:pt-4">
        {/* Mobile: subtle top scrim so nav stays readable over the hero photo */}
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/70 via-black/35 to-transparent transition-opacity duration-500 lg:hidden ${
            scrolled || open ? "opacity-90" : "opacity-100"
          }`}
          aria-hidden="true"
        />
        <div
          className={`pointer-events-auto relative mx-auto max-w-7xl transition-[filter] duration-500 ${
            scrolled || open
              ? "[filter:drop-shadow(0_12px_28px_rgba(0,0,0,0.4))]"
              : "[filter:drop-shadow(0_8px_22px_rgba(0,0,0,0.3))]"
          }`}
        >
          <div
            className={`hex flex items-center justify-between gap-2 px-4 py-2 transition-all duration-500 sm:px-6 md:gap-3 md:px-7 md:py-2.5 ${
              scrolled || open
                ? "bg-black/92 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-2xl"
                : "bg-gradient-to-b from-black/45 to-black/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md lg:bg-white/[0.07] lg:from-transparent lg:to-transparent lg:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] lg:backdrop-blur-xl"
            }`}
          >
          <Link
            href="/"
            className="relative z-50 min-w-0 shrink px-0.5 py-1 transition hover:opacity-80"
            aria-label="Ridge Heating home"
            onClick={() => setOpen(false)}
          >
            <BrandMark size="sm" />
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            {links.map((link) => {
              const isActive = active === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 font-display text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 ${
                    isActive
                      ? "text-ridge-white underline decoration-white decoration-1 underline-offset-[6px]"
                      : "text-ridge-white/65 hover:text-ridge-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="tel:01172510726"
              className="hex-sm bg-white/[0.06] px-6 py-2.5 font-display text-[12px] tracking-[0.06em] text-ridge-white/80 transition hover:bg-white/10 hover:text-ridge-white"
            >
              0117 251 0726
            </a>
            <Link
              href="/#contact"
              className="btn-primary px-6 py-2.5 font-display text-[11px] font-semibold uppercase tracking-[0.16em]"
            >
              Enquire Now
            </Link>
          </div>

          <button
            type="button"
            className="hex-sm relative z-50 flex h-11 w-12 shrink-0 items-center justify-center bg-white/[0.08] transition hover:bg-white/10 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-4 flex-col gap-1.5">
              <span
                className={`h-px w-full bg-ridge-white transition duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-full bg-ridge-white transition duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-px w-full bg-ridge-white transition duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/95 backdrop-blur-2xl transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <nav
          className={`relative flex h-dvh max-h-dvh flex-col px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-[max(5rem,calc(env(safe-area-inset-top)+4.25rem))] transition duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Mobile"
        >
          <div className="flex min-h-0 flex-1 flex-col gap-1.5 overflow-y-auto overscroll-contain py-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`glass glass-flat min-h-12 px-5 py-3.5 font-display text-base font-semibold uppercase tracking-[0.12em] text-ridge-white transition ${
                  active === link.href ? "bg-white/10" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-3 flex shrink-0 flex-col gap-2 border-t border-white/10 pt-3">
            <a
              href="tel:01172510726"
              className="glass glass-flat min-h-12 px-5 py-3.5 text-center font-display text-sm tracking-[0.06em] text-ridge-white/80"
            >
              0117 251 0726
            </a>
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="btn-primary min-h-12 px-5 py-3.5 text-center font-display text-sm font-semibold uppercase tracking-[0.14em]"
            >
              Enquire Now
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
