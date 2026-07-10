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

      {/* Desktop: bleed off the right edge, stay inside the hero */}
      <div className="absolute inset-y-0 right-0 z-0 hidden w-[min(64vw,960px)] overflow-hidden lg:block">
        <div className="hero-media relative h-full w-full">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            className="object-cover object-[88%_18%]"
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

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-4 pb-12 pt-[5.5rem] sm:px-5 sm:pb-16 sm:pt-28 md:px-8 md:pb-20 md:pt-32 lg:min-h-[100svh] lg:justify-center lg:py-28">
        {/* Mobile: full-bleed portrait band */}
        <div className="animate-fade-up relative -mx-4 mb-7 aspect-[4/3] max-h-[280px] overflow-hidden sm:-mx-5 sm:mb-10 sm:aspect-[16/11] sm:max-h-[380px] md:-mx-8 md:max-h-[420px] lg:hidden">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            className="object-cover object-[85%_15%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        </div>

        <div className="animate-fade-up flex w-full max-w-xl flex-col items-start text-left lg:max-w-[34rem] xl:max-w-xl">
          <div className="inline-flex max-w-full items-center gap-2 py-1">
            <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            <p className="font-display text-[10px] uppercase leading-snug tracking-[0.14em] text-ridge-white/75 sm:text-[11px] sm:tracking-[0.24em] md:text-xs">
              <span className="sm:hidden">Gas Safe · Bristol &amp; Southwest</span>
              <span className="hidden sm:inline">Emergency callouts · Bristol &amp; Southwest</span>
            </p>
          </div>

          <div className="animate-fade-up delay-1 mt-5 flex flex-col items-start gap-2.5 sm:mt-8 sm:gap-4 md:mt-10">
            <MountainLogo className="h-12 w-[5.5rem] sm:h-14 sm:w-24 md:h-16 md:w-28" priority />
            <h1 className="text-gradient font-display text-[1.65rem] font-bold uppercase leading-[1.05] tracking-[0.1em] sm:text-3xl sm:tracking-[0.16em] md:text-5xl md:tracking-[0.2em]">
              Ridge Heating
            </h1>
          </div>

          <p className="animate-fade-up delay-2 text-gradient mt-3 max-w-md font-display text-[10px] font-light uppercase tracking-[0.18em] sm:mt-5 sm:text-[11px] sm:tracking-[0.32em] md:text-sm md:tracking-[0.36em]">
            Safe solutions, engineered to last
          </p>

          <p className="animate-fade-up delay-3 mt-4 max-w-md text-[15px] leading-relaxed text-ridge-white/65 sm:mt-6 sm:text-base md:text-lg">
            Independent gas engineer covering anywhere within 1–2 hours of Bristol — boilers,
            heating systems, CP12s and smart controls. Emergency callouts available.
          </p>

          <div className="animate-fade-up delay-4 mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:items-center sm:gap-x-8">
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
