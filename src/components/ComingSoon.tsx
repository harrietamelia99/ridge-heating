import { MountainLogo } from "./BrandMark";

export function ComingSoon() {
  return (
    <main className="hex-pattern relative flex min-h-svh flex-col overflow-x-clip">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.07),transparent_55%),linear-gradient(180deg,#050505_0%,#000_45%,#0a0a0a_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-5 py-16 text-center sm:px-8 sm:py-20">
        <div className="animate-fade-up flex flex-col items-center gap-3 sm:gap-4">
          <MountainLogo className="h-14 w-[6.5rem] sm:h-16 sm:w-28" priority />
          <p className="font-display text-2xl font-bold uppercase tracking-[0.14em] text-ridge-white sm:text-3xl sm:tracking-[0.18em] md:text-4xl">
            Ridge Heating
          </p>
        </div>

        <div className="animate-fade-up delay-1 mt-10 h-px w-16 bg-white/25 sm:mt-12" aria-hidden="true" />

        <p className="animate-fade-up delay-2 mt-8 font-display text-[11px] uppercase tracking-[0.32em] text-ridge-muted sm:text-xs">
          Coming soon
        </p>

        <p className="animate-fade-up delay-3 mt-5 max-w-md text-base leading-relaxed text-ridge-white/60 sm:mt-6 sm:text-lg">
          Our new website is nearly ready. For boilers, heating, CP12s and emergency callouts,
          get in touch now.
        </p>

        <div className="animate-fade-up delay-4 mt-10 flex w-full max-w-sm flex-col gap-3 sm:mt-12 sm:max-w-none sm:flex-row sm:justify-center sm:gap-x-8">
          <a
            href="tel:01172510726"
            className="btn-primary min-h-12 w-full px-8 py-3.5 text-center font-display text-[12px] font-semibold uppercase tracking-[0.16em] sm:w-auto sm:px-10"
          >
            Call 0117 251 0726
          </a>
          <a
            href="mailto:response@ridgeheating.co.uk"
            className="btn-ghost min-h-11 w-full py-3 text-center font-display text-[12px] font-semibold uppercase tracking-[0.14em] sm:w-auto"
          >
            Email us
          </a>
        </div>
      </div>

      <p className="relative z-10 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center font-display text-[10px] uppercase tracking-[0.2em] text-ridge-white/30">
        Bristol · Southwest · Gas Safe
      </p>
    </main>
  );
}
