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
 * Crisp diagonal join between two sections — solid fills only,
 * so nothing from the section above can show through the cut.
 */
export function SectionDivider({
  from = "#000000",
  to = "#ffffff",
  flip = false,
  className = "",
}: SectionDividerProps) {
  // Slightly oversize the top colour so antialias hairlines can't show through
  const topPath = flip
    ? "M0 -2 H1440 L1440 100 L0 -2 Z"
    : "M0 -2 H1440 L1440 -2 L0 100 Z";

  return (
    <div
      className={`pointer-events-none relative z-[1] -mt-px h-12 w-full overflow-hidden sm:h-14 md:h-16 ${className}`}
      aria-hidden="true"
    >
      <svg
        className="block h-full w-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1440" height="100" fill={to} />
        <path d={topPath} fill={from} />
      </svg>
    </div>
  );
}
