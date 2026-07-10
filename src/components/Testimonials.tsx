import { Reveal } from "./Reveal";

const reviews = [
  {
    name: "Shu",
    location: "Bristol",
    date: "5 May 2026",
    title: "Annual boiler check",
    quote: "Professional service provided and done it in a good timing.",
  },
  {
    name: "Stephanie",
    location: "Bristol",
    date: "20 Apr 2026",
    title: "Remove gas hob, install electric hob",
    quote:
      "Removed gas hob and capped the gas supply, fitted an electric hob as we are getting a heat pump installed.",
  },
  {
    name: "MyBuilder user",
    location: "Bristol",
    date: "1 Apr 2026",
    title: "Gas fire removal",
    quote:
      "Quick response. Old gas fire removal, capping of 2 gas outlets and safety checks all completed within an hour. Professional.",
  },
  {
    name: "Avril",
    location: "Bristol",
    date: "2026",
    title: "Thermostat",
    quote:
      "Sam was very helpful and provided me with a very easy to use new thermostat for my boiler. A very well mannered young man.",
  },
  {
    name: "MyBuilder user",
    location: "Bristol",
    date: "2026",
    title: "Re-position an external gas pipe",
    quote: "Re-position an external gas pipe externally, 2-3m. Job completed professionally.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="h-3.5 w-3.5 fill-ridge-ink sm:h-4 sm:w-4"
          aria-hidden="true"
        >
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.52L10 14.27l-4.94 2.46.94-5.52-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-light hex-pattern relative overflow-x-clip pb-14 pt-14 sm:pb-20 sm:pt-20 md:pb-28 md:pt-28 lg:pb-32 lg:pt-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="font-display text-[11px] uppercase tracking-[0.28em] text-ridge-ink-muted">
            Customer reviews
          </p>
          <h2 className="text-ink-gradient mt-4 font-display text-2xl font-bold uppercase tracking-[0.06em] sm:text-3xl sm:tracking-[0.08em] md:text-5xl">
            Reviews
          </h2>
          <p className="mt-5 text-base leading-relaxed text-black/55 md:text-lg">
            What customers say about working with Ridge Heating.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 md:mt-16 lg:grid-cols-3">
          {reviews.map((item, i) => (
            <Reveal
              key={`${item.name}-${item.title}-${item.date}`}
              as="li"
              delay={i * 70}
              className="h-full"
            >
              <article className="glass-light-strong group flex h-full flex-col p-5 sm:p-6 md:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <Stars />
                  <p className="font-display text-[10px] uppercase tracking-[0.16em] text-ridge-ink-muted">
                    {item.date}
                  </p>
                </div>
                <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-ridge-ink sm:text-lg">
                  {item.title}
                </h3>
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-black/60 sm:text-[15px]">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <p className="mt-6 border-t border-black/10 pt-4 font-display text-sm text-ridge-ink">
                  {item.name}
                  <span className="text-ridge-ink-muted"> · {item.location}</span>
                </p>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={200}>
          <p className="mt-6 text-xs leading-relaxed text-ridge-ink-muted sm:mt-8 sm:text-sm">
            These reviews are from{" "}
            <a
              href="https://www.mybuilder.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-ridge-ink transition hover:opacity-70"
            >
              MyBuilder
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
