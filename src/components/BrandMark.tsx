import Image from "next/image";

type MountainLogoProps = {
  className?: string;
  /** Kept for compatibility; the PNG includes the ridge line. */
  showLine?: boolean;
  priority?: boolean;
};

export function MountainLogo({ className = "w-16 h-10", priority = false }: MountainLogoProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      <Image
        src="/logo-icon.png"
        alt=""
        fill
        priority={priority}
        className="object-contain object-center"
        sizes="(max-width: 768px) 96px, 160px"
        aria-hidden="true"
      />
    </span>
  );
}

export function BrandMark({
  size = "md",
  stacked = false,
}: {
  size?: "sm" | "md" | "lg";
  stacked?: boolean;
}) {
  const logoSize =
    size === "sm"
      ? "h-7 w-12 sm:h-8 sm:w-14"
      : size === "lg"
        ? "h-14 w-24 md:h-20 md:w-32"
        : "h-8 w-12";
  const textSize =
    size === "sm"
      ? "text-[13px] tracking-[0.12em] sm:text-[15px] sm:tracking-[0.16em]"
      : size === "lg"
        ? "text-3xl md:text-5xl tracking-[0.2em]"
        : "text-base tracking-[0.18em]";

  if (stacked) {
    return (
      <div className="flex flex-col items-center gap-3 text-ridge-white">
        <MountainLogo className={logoSize} />
        <span className={`font-display font-bold uppercase ${textSize}`}>Ridge Heating</span>
      </div>
    );
  }

  return (
    <div className="flex min-w-0 items-center gap-2 text-ridge-white sm:gap-3">
      <MountainLogo className={`${logoSize} shrink-0`} />
      <span className={`truncate font-display font-bold uppercase ${textSize}`}>Ridge Heating</span>
    </div>
  );
}
