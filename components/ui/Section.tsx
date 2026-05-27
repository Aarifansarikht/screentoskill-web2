import React from "react";
import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  /** Section background tone. Maps to theme tokens. */
  tone?: "default" | "elevated" | "subtle" | "muted";
  /** Apply standard vertical padding rhythm. */
  padded?: boolean;
  /** Apply bottom border separating sections. */
  bordered?: boolean;
};

const toneClass: Record<NonNullable<SectionProps["tone"]>, string> = {
  default: "bg-[var(--background)]",
  elevated: "bg-[var(--surface)]",
  subtle: "bg-[var(--background-subtle)]",
  muted: "bg-[var(--surface-muted)]",
};

export function Section({
  className,
  tone = "default",
  padded = true,
  bordered = false,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        toneClass[tone],
        padded && "py-14 sm:py-20 lg:py-24",
        bordered && "border-b border-[var(--border)]",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
