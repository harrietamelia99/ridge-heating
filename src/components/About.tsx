import Image from "next/image";
import { MountainLogo } from "./BrandMark";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="about"
      className="section-light hex-pattern relative overflow-x-clip pb-14 pt-14 sm:pb-20 sm:pt-20 md:pb-28 md:pt-28 lg:pb-32 lg:pt-32"
    >
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-4 sm:gap-14 sm:px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal variant="left" className="relative mx-auto w-full max-w-full sm:max-w-md lg:max-w-none">
          <div className="glass-light-strong img-zoom relative aspect-[4/5] max-h-[420px] w-full overflow-hidden bg-ridge-black sm:max-h-none">
            <Image
              src="/hero-engineer-boiler.png"
              alt="Gas engineer working on a boiler"
              fill
              className="object-cover object-[60%_20%]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="glass glass-flat absolute bottom-4 left-4 right-4 flex items-center gap-3 px-4 py-3 sm:bottom-6 sm:left-6 sm:right-6 sm:px-5">
              <MountainLogo className="h-7 w-12 shrink-0" />
              <p className="min-w-0 font-display text-[11px] uppercase tracking-[0.16em] text-ridge-white/80 sm:text-xs sm:tracking-[0.22em]">
                Independent · Southwest
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal variant="right" delay={120}>
          <p className="font-display text-[11px] uppercase tracking-[0.28em] text-ridge-ink-muted">
            About us
          </p>
          <h2 className="text-ink-gradient mt-4 font-display text-2xl font-bold uppercase tracking-[0.06em] sm:text-3xl sm:tracking-[0.08em] md:text-5xl">
            Your local gas engineer, done right
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-black/60 sm:mt-8 sm:space-y-5 sm:text-base md:text-lg">
            <p>
              Ridge Heating is an independent plumbing and heating service run by a Gas Safe
              engineer based in Bristol. We cover the whole Southwest, anywhere within about 1-2
              hours of Bristol, and offer emergency callouts when you need us most.
            </p>
            <p>
              From boiler installs and CP12 certificates to smart controls and radiator pipework,
              every job gets the same care, whether it&apos;s a single repair or a full system
              upgrade. We leave your home as clean as we found it.
            </p>
          </div>
          <p className="mt-6 border-l-2 border-black/25 pl-4 font-display text-sm italic leading-relaxed text-black/70 sm:mt-8 sm:pl-5 md:text-base">
            plumber / gas engineer · bristol / southwest
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-2 sm:mt-10 sm:gap-3">
            {["Owner-operated", "Emergency callouts", "1-2 hrs from Bristol"].map((label) => (
              <span
                key={label}
                className="glass-light px-3 py-2 font-display text-[10px] uppercase tracking-[0.12em] text-ridge-ink-muted transition hover:text-ridge-ink sm:px-5 sm:text-[11px] sm:tracking-[0.16em]"
              >
                {label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
