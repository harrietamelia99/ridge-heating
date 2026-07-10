import { Reveal } from "./Reveal";

const posts = [
  {
    label: "On the job",
    caption: "Photo placeholder",
  },
  {
    label: "Smart controls",
    caption: "Photo placeholder",
  },
  {
    label: "Installs",
    caption: "Photo placeholder",
  },
];

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function Instagram() {
  return (
    <section
      id="instagram"
      className="hex-pattern relative overflow-hidden py-14 sm:py-20 md:py-28 lg:py-32"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(255,255,255,0.05),transparent_50%),linear-gradient(180deg,#000,#080808_50%,#000)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="font-display text-[11px] uppercase tracking-[0.28em] text-ridge-muted">
              Instagram
            </p>
            <h2 className="text-gradient mt-4 font-display text-2xl font-bold uppercase tracking-[0.06em] sm:text-3xl sm:tracking-[0.08em] md:text-5xl">
              Follow the work
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ridge-white/60 md:text-lg">
              Jobs, installs and day-to-day updates from across Bristol and the Southwest.
            </p>
          </div>
          <a
            href="https://www.instagram.com/ridge.heating/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex w-fit items-center gap-2 px-8 py-3 font-display text-[11px] font-semibold uppercase tracking-[0.18em]"
          >
            <InstagramIcon className="h-4 w-4" />
            @ridge.heating
          </a>
        </Reveal>

        <ul className="mt-10 grid grid-cols-3 gap-1.5 sm:mt-12 sm:gap-4 md:mt-14">
          {posts.map((post, i) => (
            <Reveal key={post.label} as="li" delay={i * 100} variant="scale">
              <a
                href="https://www.instagram.com/ridge.heating/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex aspect-square flex-col items-center justify-center gap-2 overflow-hidden border border-dashed border-white/20 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/[0.06] sm:gap-4"
              >
                <InstagramIcon className="h-6 w-6 text-ridge-white/35 transition group-hover:text-ridge-white/60 sm:h-9 sm:w-9" />
                <div className="px-1.5 text-center sm:px-3">
                  <p className="font-display text-[9px] uppercase tracking-[0.14em] text-ridge-white/70 sm:text-[11px] sm:tracking-[0.2em]">
                    {post.label}
                  </p>
                  <p className="mt-1 hidden text-[10px] text-ridge-muted sm:mt-2 sm:block sm:text-xs">
                    {post.caption}
                  </p>
                </div>
                <span className="absolute bottom-2 font-display text-[9px] uppercase tracking-[0.18em] text-ridge-white/30 transition group-hover:text-ridge-white/50 sm:bottom-4 sm:text-[10px]">
                  0{i + 1}
                </span>
              </a>
            </Reveal>
          ))}
        </ul>

        <p className="mt-6 text-center text-sm italic text-ridge-white/45 sm:mt-8">
          Sam, i will connect your instagram feed to here, so ignore this for now!
        </p>
      </div>
    </section>
  );
}
