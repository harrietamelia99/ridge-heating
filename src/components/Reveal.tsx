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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);

    // Failsafe: never leave content invisible if the observer misses
    const failsafe = window.setTimeout(() => setVisible(true), 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [once]);

  const style: CSSProperties | undefined = delay
    ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties)
    : undefined;

  const classes = `reveal reveal-${variant} ${visible ? "is-visible" : ""} ${className}`;
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
