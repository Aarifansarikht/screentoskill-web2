import React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: React.ReactNode;
};

const base =
  "inline-flex items-center justify-center font-medium transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]";

const variantClass: Record<Variant, string> = {
  primary:
    "bg-[var(--color-brand)] hover:bg-[var(--color-brand-hover)] text-white shadow-sm shadow-emerald-500/15 hover:shadow-emerald-500/25 hover:-translate-y-0.5",
  secondary:
    "bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 border border-[var(--border)]",
  ghost:
    "bg-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800",
  outline:
    "bg-transparent border border-[var(--border)] text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800",
};

const sizeClass: Record<Size, string> = {
  sm: "px-3.5 py-1.5 text-xs rounded-full",
  md: "px-5 py-2 text-xs sm:text-sm rounded-full",
  lg: "px-6 py-3 text-sm rounded-xl",
};

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(base, variantClass[variant], sizeClass[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

type LinkButtonProps = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={cn(base, variantClass[variant], sizeClass[size], className)}
      {...props}
    >
      {children}
    </a>
  );
}

export const buttonStyles = (variant: Variant = "primary", size: Size = "md") =>
  cn(base, variantClass[variant], sizeClass[size]);
