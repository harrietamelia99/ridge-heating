import { Reveal } from "./Reveal";

const reasons = [
  {
    stat: "Gas Safe",
    label: "registered engineer",
    title: "Qualified & insured",
    body: "Fully qualified gas work with the paperwork and insurance to match, so you know the job is done safely and to standard.",
  },
  {
    stat: "0",
    label: "hidden fees",
    title: "Clear, honest pricing",
    body: "Upfront quotes before work begins. No surprise charges. What we agree is what you pay.",
  },
  {
    stat: "1:1",
    label: "owner-operated",
    title: "You deal with us directly",
    body: "No call centres, no subcontractors. Independent and local. The person you speak to is the person on the job.",
  },
  {
    stat: "1-2hr",
    label: "from Bristol",
    title: "Southwest coverage",
    body: "Based in Bristol and covering the whole Southwest, anywhere within about 1-2 hours. Planned installs, landlord certificates and emergency callouts.",
  },
];

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="hex-pattern relative overflow-x-clip pb-14 pt-14 sm:pb-20 sm:pt-20 md:pb-28 md:pt-28 lg:pb-32 lg:pt-32"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,rgba(255,255,255,0.05),transparent_50%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal variant="left" className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-display text-[11px] uppercase tracking-[0.28em] text-ridge-muted">
              Why Ridge
            </p>
            <h2 className="text-gradient mt-4 font-display text-2xl font-bold uppercase tracking-[0.06em] sm:text-3xl sm:tracking-[0.08em] md:text-5xl">
              Heating you can actually rely on
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ridge-white/60 md:text-lg">
              Built on turning up when we say we will, diagnosing accurately, and finishing quality
              work at a fair price. Safe solutions, engineered to last.
            </p>
          </Reveal>

          <ul className="space-y-4">
            {reasons.map((item, i) => (
              <Reveal
                key={item.title}
                as="li"
                delay={i * 90}
                variant="right"
                className="glass-strong grid gap-3 p-4 sm:grid-cols-[140px_1fr] sm:gap-10 sm:p-6 md:p-8"
              >
                <div>
                  <p className="text-gradient font-display text-3xl font-bold tracking-tight">
                    {item.stat}
                  </p>
                  <p className="mt-1 font-display text-[10px] uppercase tracking-[0.2em] text-ridge-muted">
                    {item.label}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ridge-white/55 sm:mt-3 sm:text-[15px]">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
