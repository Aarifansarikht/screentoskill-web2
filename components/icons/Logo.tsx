import React from "react";

export function LogoSvg({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {[11, 24, 37, 50, 63, 76, 89].map((x, i) => {
        const inset = Math.abs(50 - x) * 13 / 39;
        const y1 = 24 - (inset * 0);
        const len = [24, 17, 10, 4, 10, 17, 24][i];
        return (
          <line
            key={x}
            x1={x}
            y1={len}
            x2={x}
            y2={100 - len}
            stroke="currentColor"
            strokeWidth="6.5"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export function LogoMark({ size = "md" }: { size?: "sm" | "md" }) {
  const box = size === "sm" ? "w-9 h-9" : "w-10 h-10";
  const icon = size === "sm" ? "w-5 h-5" : "w-5.5 h-5.5";
  return (
    <div
      className={`${box} rounded-xl bg-[var(--color-brand)] flex items-center justify-center shadow-md shadow-emerald-500/10 shrink-0`}
    >
      <LogoSvg className={`${icon} text-white`} />
    </div>
  );
}

export function LogoWordmark({ size = "md" }: { size?: "sm" | "md" }) {
  const text = size === "sm" ? "text-xl" : "text-2xl";
  return (
    <span
      className={`${text} font-display font-black tracking-tight text-slate-900 dark:text-slate-50 leading-none`}
    >
      Screen<span className="text-[var(--color-brand)]">ToSkill</span>
    </span>
  );
}
