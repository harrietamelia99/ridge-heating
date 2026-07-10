"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "left" | "right" | "scale";
  once?: boolean;
  as?: "div" | "li";
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  once = true,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  // Animation is off until mount — content stays visible for SSR / no-JS
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const vh = window.innerHeight || 0;
    const rect = el.getBoundingClientRect();
    const inView = rect.top < vh * 0.92 && rect.bottom > vh * 0.02;

    setArmed(true);
    setVisible(inView);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);

    const failsafe = window.setTimeout(() => setVisible(true), 600);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [once]);

  const style: CSSProperties | undefined = delay
    ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties)
    : undefined;

  const classes = [
    armed ? `reveal reveal-${variant}` : "",
    armed && visible ? "is-visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const setRef = (node: HTMLElement | null) => {
    ref.current = node;
  };

  if (as === "li") {
    return (
      <li ref={setRef} style={style} className={classes}>
        {children}
      </li>
    );
  }

  return (
    <div ref={setRef} style={style} className={classes}>
      {children}
    </div>
  );
}
