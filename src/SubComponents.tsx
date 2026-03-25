import type { ReactNode } from "react";
import { useInView } from "./Hooks";

interface SectionHeadingProps {
  number: string;
  label: string;
}

export function SectionHeading({ number, label }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="text-emerald-400 font-mono text-xs">{number}.</span>
      <h2
        className="font-bold text-lg text-white uppercase tracking-widest"
        style={{ fontFamily: "'Syne', sans-serif" }}
      >
        {label}
      </h2>
      <div className="flex-1 h-px bg-white/10" />
    </div>
  );
}

interface FadeSectionProps {
  children: ReactNode;
  delay?: number;
}

export function FadeSection({ children, delay = 0 }: FadeSectionProps) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
