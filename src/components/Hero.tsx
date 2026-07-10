import Image from "next/image";
import { MountainLogo } from "./BrandMark";

const heroImage = {
  src: "/hero-engineer-boiler.png",
  alt: "Ridge Heating gas engineer working on a boiler in branded workwear",
};

export function Hero() {
  return (
    <section id="top" className="grain relative overflow-x-clip lg:min-h-[100svh]">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(255,255,255,0.05),transparent_45%),linear-gradient(180deg,#050505_0%,#000_55%,#080808_100%)]"
        aria-hidden="true"
      />
      <div
        className="orb orb-a pointer-events-none -left-[18%] top-[10%] hidden h-[50vw] max-h-[300px] w-[50vw] max-w-[300px] sm:block md:max-h-[380px] md:max-w-[380px]"
        aria-hidden="true"
      />

      {/* Mobile: tall full-bleed photo from the top edge (sits behind the nav) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[min(68svh,560px)] overflow-hidden lg:hidden">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          className="object-cover object-[78%_38%] opacity-[0.72]"
          sizes="100vw"
        />
        {/* Soften under the nav */}
        <div
          className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/65 via-black/30 to-transparent"
          aria-hidden="true"
        />
        {/* Fade into copy below */}
        <div
          className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black via-black/80 to-transparent sm:h-56"
          aria-hidden="true"
        />
      </div>

      {/* Desktop: bleed off the right edge, stay inside the hero */}
      <div className="absolute inset-y-0 right-0 z-0 hidden w-[min(64vw,960px)] overflow-hidden lg:block">
        <div className="hero-media relative h-full w-full">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            className="object-cover object-[88%_18%] opacity-[0.78]"
            sizes="64vw"
          />
          <div className="hero-media-fade absolute inset-0" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15" />
          <div
            className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-black via-black/70 to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 pb-12 pt-[min(50svh,420px)] sm:px-5 sm:pb-16 sm:pt-[min(52svh,460px)] md:px-8 md:pb-20 lg:min-h-[100svh] lg:items-stretch lg:justify-center lg:pt-28 lg:pb-28">
        <div className="animate-fade-up flex w-full max-w-xl flex-col items-center text-center lg:max-w-[34rem] lg:items-start lg:text-left xl:max-w-xl">
          <div className="inline-flex max-w-full items-center justify-center gap-2 py-1 lg:justify-start">
            <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            <p className="font-display text-[10px] uppercase leading-snug tracking-[0.14em] text-ridge-white/75 sm:text-[11px] sm:tracking-[0.24em] md:text-xs">
              <span className="sm:hidden">Gas Safe · Bristol &amp; Southwest</span>
              <span className="hidden sm:inline">Emergency callouts · Bristol &amp; Southwest</span>
            </p>
          </div>

          <div className="animate-fade-up delay-1 mt-5 flex flex-col items-center gap-2.5 sm:mt-8 sm:gap-4 md:mt-10 lg:items-start">
            <MountainLogo className="h-12 w-[5.5rem] sm:h-14 sm:w-24 md:h-16 md:w-28" priority />
            <h1 className="text-gradient font-display text-[1.65rem] font-bold uppercase leading-[1.05] tracking-[0.1em] sm:text-3xl sm:tracking-[0.16em] md:text-5xl md:tracking-[0.2em]">
              Ridge Heating
            </h1>
          </div>

          <p className="animate-fade-up delay-2 text-gradient mt-3 max-w-md font-display text-[10px] font-light uppercase tracking-[0.18em] sm:mt-5 sm:text-[11px] sm:tracking-[0.32em] md:text-sm md:tracking-[0.36em]">
            Safe solutions, engineered to last
          </p>

          <p className="animate-fade-up delay-3 mt-4 max-w-md text-[15px] leading-relaxed text-ridge-white/65 sm:mt-6 sm:text-base md:text-lg">
            Independent gas engineer covering anywhere within 1-2 hours of Bristol: boilers,
            heating systems, CP12s and smart controls. Emergency callouts available.
          </p>

          <div className="animate-fade-up delay-4 mt-7 flex w-full flex-col items-center gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:justify-center sm:gap-x-8 lg:justify-start">
            <a
              href="#contact"
              className="btn-primary min-h-12 w-full px-8 py-3.5 text-center font-display text-[12px] font-semibold uppercase tracking-[0.16em] sm:w-auto sm:px-10 sm:tracking-[0.18em]"
            >
              Enquire Now
            </a>
            <a
              href="tel:01172510726"
              className="btn-ghost min-h-11 w-full py-3 text-center font-display text-[12px] font-semibold uppercase tracking-[0.14em] sm:w-auto sm:tracking-[0.18em]"
            >
              Call 0117 251 0726
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
