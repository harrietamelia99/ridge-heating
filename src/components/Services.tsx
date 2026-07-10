import Image from "next/image";
import { Reveal } from "./Reveal";

const services = [
  {
    title: "Gas appliance maintenance & repairs",
    description:
      "Servicing and repairs for boilers, cookers, hobs and fires, keeping your appliances safe, efficient and reliable.",
    image: "/stock-valves.jpg",
    imageAlt: "Heating valves and boiler controls",
  },
  {
    title: "Landlord safety certificates (CP12)",
    description:
      "Gas Safety Certificates for landlords and letting agents, clear paperwork, booked around your tenants, done to regulation.",
    image: "/stock-tools.jpg",
    imageAlt: "Professional gas engineer tools",
  },
  {
    title: "Heating system installation",
    description:
      "Full central heating installs and upgrades, boilers, cylinders and systems engineered for comfort and longevity.",
    image: "/stock-heating-system.jpg",
    imageAlt: "Central heating system installation",
  },
  {
    title: "Smart heating control installation",
    description:
      "Hive, Nest and modern thermostat installs so you control heat from your phone and cut wasted energy.",
    image: "/stock-thermostat.jpg",
    imageAlt: "Smart Nest thermostat",
  },
  {
    title: "Pipework & radiator installation",
    description:
      "New radiators, towel rails and pipework for renovations, extensions and full system refreshes.",
    image: "/stock-heater.jpg",
    imageAlt: "Modern radiator installation",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="section-light hex-pattern relative overflow-x-clip pb-14 pt-14 sm:pb-20 sm:pt-20 md:pb-28 md:pt-28 lg:pb-32 lg:pt-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-display text-[11px] uppercase tracking-[0.28em] text-ridge-ink-muted">
            What we do
          </p>
          <h2 className="text-ink-gradient mt-4 font-display text-2xl font-bold uppercase tracking-[0.06em] sm:text-3xl sm:tracking-[0.08em] md:text-5xl">
            Our services
          </h2>
          <p className="mt-5 text-base leading-relaxed text-black/55 md:text-lg">
            From routine servicing to full heating installs, specialist gas and heating work for
            homes, landlords and small commercial properties across the Southwest, anywhere within
            1-2 hours of Bristol. Emergency callouts available.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 md:mt-16 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} as="li" delay={i * 80} className="h-full">
              <div className="service-card-light group h-full overflow-x-clip">
                <div className="relative h-40 overflow-x-clip sm:h-48">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                <div className="p-5 sm:p-7 md:px-8 md:py-8">
                  <h3 className="font-display text-base font-semibold tracking-tight text-ridge-ink sm:text-lg md:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/55 sm:mt-3 md:text-[15px]">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={400} as="li" className="h-full sm:col-span-2 lg:col-span-1">
            <div className="glass-strong relative flex h-full min-h-[220px] flex-col justify-between overflow-x-clip p-5 sm:min-h-[280px] sm:p-8 md:p-10">
              <Image
                src="/stock-radiator.jpg"
                alt=""
                fill
                className="object-cover opacity-25 transition duration-700"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />
              <div className="relative z-10">
                <p className="font-display text-[11px] uppercase tracking-[0.22em] text-ridge-muted">
                  Not sure what you need?
                </p>
                <p className="mt-4 text-lg leading-snug text-ridge-white/85">
                  Book a free, no-obligation consultation and get clear advice on the right solution
                  for your home.
                </p>
              </div>
              <a
                href="#contact"
                className="btn-primary relative z-10 mt-8 inline-flex min-h-12 w-full items-center justify-center px-8 py-3 font-display text-[11px] font-semibold uppercase tracking-[0.18em] sm:w-fit"
              >
                Enquire Now
              </a>
            </div>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
