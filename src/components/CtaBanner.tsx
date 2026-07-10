import Image from "next/image";
import { Reveal } from "./Reveal";

export function CtaBanner() {
  return (
    <section className="hex-pattern grain relative overflow-x-clip pb-16 pt-16 sm:pb-20 sm:pt-20 md:pb-28 md:pt-28">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/stock-pipes-metal.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/88 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,255,255,0.08),transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-5 md:px-8">
        <Reveal variant="scale" className="overflow-visible">
          <div className="glass-strong hover-glow mx-auto overflow-hidden px-5 py-8 transition duration-500 sm:overflow-visible sm:px-10 sm:py-12 md:px-14 md:py-16 lg:px-16">
            <p className="font-display text-[10px] uppercase tracking-[0.22em] text-ridge-muted sm:text-[11px] sm:tracking-[0.28em]">
              Available now · Emergency callouts
            </p>
            <h2 className="text-gradient mt-4 font-display text-[1.45rem] font-bold uppercase leading-[1.15] tracking-[0.04em] sm:mt-5 sm:text-3xl sm:tracking-[0.05em] md:text-4xl md:tracking-[0.06em] lg:text-[2.75rem] lg:tracking-[0.07em]">
              Need a gas engineer?
              <br />
              We&apos;re ready when you&nbsp;are.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-ridge-white/60 sm:mt-6 sm:text-base md:text-lg">
              Book a free consultation or call for an emergency, covering the Southwest within 1-2
              hours of Bristol. Installs, repairs, CP12s or smart controls.
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <a
                href="#contact"
                className="btn-primary min-h-12 w-full px-8 py-3.5 text-center font-display text-[12px] font-semibold uppercase tracking-[0.18em] sm:w-auto sm:px-10"
              >
                Enquire Now
              </a>
              <a
                href="tel:01172510726"
                className="link-underline min-h-11 py-3 text-center font-display text-[13px] tracking-[0.08em] text-ridge-white/70 transition hover:text-ridge-white"
              >
                or call 0117 251 0726
              </a>
            </div>
            <p className="mt-8 font-display text-[10px] uppercase tracking-[0.2em] text-ridge-muted">
              Free quotes · Emergency callouts · Guaranteed workmanship
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
