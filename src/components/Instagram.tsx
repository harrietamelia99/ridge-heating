import Image from "next/image";
import { Reveal } from "./Reveal";

const posts = [
  {
    label: "On the job",
    image: "/stock-engineer-work.jpg",
  },
  {
    label: "Pipework",
    image: "/stock-pipework.jpg",
  },
  {
    label: "Repairs",
    image: "/stock-cabinet.jpg",
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
      className="hex-pattern relative overflow-hidden pb-4 pt-14 sm:pb-6 sm:pt-20 md:pb-8 md:pt-28 lg:pt-32"
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
                className="img-wipe group relative block aspect-square overflow-hidden border border-white/10 transition duration-300 hover:-translate-y-1 hover:border-white/30"
              >
                <Image
                  src={post.image}
                  alt={post.label}
                  fill
                  sizes="(min-width: 768px) 33vw, 33vw"
                  className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-2 sm:p-4">
                  <p className="font-display text-[9px] uppercase tracking-[0.14em] text-ridge-white sm:text-[11px] sm:tracking-[0.2em]">
                    {post.label}
                  </p>
                  <InstagramIcon className="h-4 w-4 shrink-0 text-ridge-white/70 sm:h-5 sm:w-5" />
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
