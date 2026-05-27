import React from "react";

export function HighlightUnderline({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      <span className="relative z-10 font-bold">{children}</span>
      <svg
        className="absolute left-0 bottom-[-4px] w-full h-[8px] text-[var(--color-brand)] pointer-events-none"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 6 C 25 3, 75 7, 97 4"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
