import { MountainLogo } from "./BrandMark";

const items = [
  "Gas Safe registered",
  "Emergency callouts",
  "Boiler servicing & repairs",
  "Landlord CP12s",
  "Heating installs",
  "Smart controls",
  "Bristol & the Southwest",
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="flex items-center">
          <span className="whitespace-nowrap px-6 font-display text-[11px] uppercase tracking-[0.28em] text-ridge-white/55 sm:px-8 sm:text-xs">
            {item}
          </span>
          <MountainLogo className="h-3 w-5 opacity-40" />
        </li>
      ))}
    </ul>
  );
}

export function Ticker() {
  return (
    <div className="ticker relative overflow-hidden border-y border-white/10 bg-black py-4 sm:py-5">
      <div className="ticker-track flex w-max">
        <Row />
        <Row hidden />
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent sm:w-32"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent sm:w-32"
        aria-hidden="true"
      />
    </div>
  );
}
