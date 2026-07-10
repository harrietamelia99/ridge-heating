import { Reveal } from "./Reveal";

const workItems = [
  {
    number: "01",
    title: "On the job",
    body: "Responsive callouts and careful on-site work, tidy, thorough and finished properly.",
    span: "md:col-span-2",
  },
  {
    number: "02",
    title: "Smart controls",
    body: "Hive, Nest and modern thermostat installs for heat you can manage from your phone.",
    span: "",
  },
  {
    number: "03",
    title: "Radiators",
    body: "New radiators, towel rails and balanced systems that heat evenly through the home.",
    span: "",
  },
  {
    number: "04",
    title: "Heating systems",
    body: "Full installs and upgrades, boilers, cylinders and pipework engineered to last.",
    span: "md:col-span-2",
  },
];

export function Gallery() {
  return (
    <section
      id="work"
      className="hex-pattern relative overflow-x-clip pb-14 pt-14 sm:pb-20 sm:pt-20 md:pb-28 md:pt-28 lg:pb-32 lg:pt-32"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(255,255,255,0.05),transparent_50%),linear-gradient(180deg,#000,#0a0a0a_40%,#000)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-display text-[11px] uppercase tracking-[0.28em] text-ridge-muted">
              Our work
            </p>
            <h2 className="text-gradient mt-4 font-display text-2xl font-bold uppercase tracking-[0.06em] sm:text-3xl sm:tracking-[0.08em] md:text-5xl">
              Heating done properly
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ridge-white/60 md:text-lg">
              From smart controls and radiators to full system installs, clean, professional work
              across Bristol and the Southwest.
            </p>
          </div>
          <a
            href="https://www.instagram.com/ridge.heating/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex w-fit px-8 py-3 font-display text-[11px] font-semibold uppercase tracking-[0.18em]"
          >
            @ridge.heating
          </a>
        </Reveal>

        <ul className="mt-10 grid gap-3 sm:mt-12 sm:gap-4 md:mt-14 md:grid-cols-4">
          {workItems.map((item, i) => (
            <Reveal
              key={item.title}
              as="li"
              delay={i * 90}
              variant="scale"
              className={`glass group relative h-full overflow-x-clip p-5 sm:p-7 md:min-h-[220px] md:p-8 ${item.span}`}
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/[0.04] blur-2xl transition duration-500 group-hover:scale-125 group-hover:bg-white/[0.12]"
                aria-hidden="true"
              />
              <p className="font-display text-[11px] uppercase tracking-[0.22em] text-ridge-muted transition group-hover:text-ridge-white/70">
                {item.number}
              </p>
              <h3 className="mt-4 font-display text-xl font-semibold uppercase tracking-[0.06em] text-ridge-white sm:mt-6 sm:text-2xl md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ridge-white/55 md:text-[15px]">
                {item.body}
              </p>
            </Reveal>
          ))}
          <Reveal
            as="li"
            delay={360}
            variant="scale"
            className="md:col-span-2 md:min-h-[220px]"
          >
            <div className="glass-strong group relative flex h-full flex-col justify-between overflow-x-clip p-5 sm:p-7 md:p-8">
              <div>
                <p className="font-display text-[11px] uppercase tracking-[0.22em] text-ridge-muted">
                  Ready when you are
                </p>
                <h3 className="mt-4 font-display text-xl font-semibold uppercase tracking-[0.06em] text-ridge-white sm:mt-6 sm:text-2xl md:text-3xl">
                  Need work done?
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ridge-white/55 md:text-[15px]">
                  Book a free consultation or call for an emergency across Bristol and the Southwest.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="btn-primary inline-flex min-h-12 w-full items-center justify-center px-8 py-3 font-display text-[11px] font-semibold uppercase tracking-[0.18em] sm:w-fit"
                >
                  Enquire Now
                </a>
                <a
                  href="tel:01172510726"
                  className="min-h-11 py-2 text-center font-display text-[12px] tracking-[0.08em] text-ridge-white/65 transition hover:text-ridge-white sm:text-left"
                >
                  0117 251 0726
                </a>
              </div>
            </div>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
