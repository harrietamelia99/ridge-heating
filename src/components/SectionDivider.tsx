type SectionDividerProps = {
  /** Colour of the section above */
  from?: string;
  /** Colour of the section below */
  to?: string;
  /** Flip the diagonal direction */
  flip?: boolean;
  className?: string;
};

/**
 * Crisp diagonal join between two sections.
 * The destination side uses the same hex tile as the section below
 * so the pattern continues into the cut (no flat colour band).
 */
export function SectionDivider({
  from = "#000000",
  to = "#ffffff",
  flip = false,
  className = "",
}: SectionDividerProps) {
  const light = to.toLowerCase() === "#ffffff" || to.toLowerCase() === "#fff";

  // Slightly oversize the top colour so antialias hairlines can't show through
  const topPath = flip
    ? "M0 -2 H1440 L1440 100 L0 -2 Z"
    : "M0 -2 H1440 L1440 -2 L0 100 Z";

  return (
    <div
      className={`section-divider pointer-events-none relative z-[1] -mt-px h-12 w-full overflow-hidden sm:h-14 md:h-16 ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0" style={{ backgroundColor: to }} />
      <div
        className={`section-divider-hex absolute inset-0 ${
          light ? "section-divider-hex-light" : "section-divider-hex-dark"
        }`}
      />
      <svg
        className="absolute inset-0 block h-full w-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={topPath} fill={from} />
      </svg>
    </div>
  );
}
