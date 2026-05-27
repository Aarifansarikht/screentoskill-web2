import React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "brand" | "accent";
  icon?: React.ReactNode;
};

const variantClass: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default:
    "border border-[var(--border)] bg-[var(--surface-muted)] dark:bg-slate-900/60 text-slate-500 dark:text-slate-400",
  brand:
    "border border-[var(--border)] bg-emerald-50/70 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300",
  accent:
    "border border-[var(--border)] bg-white dark:bg-slate-900/60 text-slate-500 dark:text-slate-400",
};

export function Badge({
  className,
  variant = "default",
  icon,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center space-x-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase select-none",
        variantClass[variant],
        className,
      )}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </span>
  );
}
