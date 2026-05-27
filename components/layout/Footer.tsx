"use client";

import React from "react";
import Link from "next/link";
import { LogoMark, LogoWordmark } from "@/components/icons/Logo";
import { Container } from "@/components/ui/Container";
import { FOOTER_COLUMNS } from "@/lib/constants";

const SOCIAL = [
  {
    label: "Facebook",
    href: "#facebook",
    path: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z",
  },
  {
    label: "X Twitter",
    href: "#twitter",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
] as const;

export default function Footer() {
  return (
    <footer
      id="main-footer"
      className="relative bg-[var(--surface)] border-t border-[var(--border)] pt-16 pb-12 text-sm overflow-hidden"
    >
      <div className="absolute bottom-[20%] left-[-5%] w-[350px] h-[350px] rounded-full bg-[var(--color-brand)]/5 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] right-[-5%] w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[90px] pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-12 gap-8 lg:gap-12 pb-12">
          {/* Brand column */}
          <div className="col-span-12 md:col-span-5 lg:col-span-4 text-left space-y-4">
            <div>
              <Link
                href="/"
                className="flex items-center space-x-2.5 mb-3.5 hover:opacity-95 transition-all cursor-pointer"
              >
                <LogoMark size="sm" />
                <LogoWordmark />
              </Link>
              <p className="text-[13px] text-slate-400 dark:text-slate-500 font-semibold leading-relaxed max-w-sm">
                Educational Screen Time Solutions at Your Fingertips.
              </p>
            </div>

            <div className="border-t border-dashed border-[var(--border)] w-full max-w-xs pt-1" />

            <div className="flex items-center space-x-2 py-0.5 select-none font-sans">
              <div className="flex text-amber-400 space-x-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 fill-current shrink-0"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="text-[12px] font-bold text-slate-400 dark:text-slate-500 tracking-wide font-mono">
                4.9 <span className="text-slate-300 dark:text-slate-600 font-light mx-1">|</span> 14 Reviews
              </span>
            </div>

            <div className="border-t border-dashed border-[var(--border)] w-full max-w-xs pb-1" />
          </div>

          {/* Link columns */}
          <div className="col-span-12 md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title} className="space-y-4 text-left">
                <span className="block text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase font-mono">
                  {col.title}
                </span>
                <ul className="space-y-3 text-xs sm:text-sm font-normal text-slate-600 dark:text-slate-400 font-sans">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={`hover:text-[var(--color-brand)] transition-colors block ${
                          link.emphasized
                            ? "font-semibold text-[var(--color-brand)]"
                            : ""
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs font-normal text-slate-400 dark:text-slate-500 text-center sm:text-left leading-relaxed">
            &copy; {new Date().getFullYear()} ScreenToSkill. All rights reserved.
          </div>

          <div className="flex items-center space-x-2.5 select-none">
            {SOCIAL.map(({ label, href, path }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-xl border border-[var(--border)] hover:border-[var(--color-brand)] hover:bg-emerald-50/50 dark:hover:bg-emerald-500/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-[var(--color-brand)] transition-all cursor-pointer hover:scale-[1.02]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d={path} />
                </svg>
              </a>
            ))}

            <a
              href="#instagram"
              aria-label="Instagram"
              className="w-9 h-9 rounded-xl border border-[var(--border)] hover:border-[var(--color-brand)] hover:bg-emerald-50/50 dark:hover:bg-emerald-500/10 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-[var(--color-brand)] transition-all cursor-pointer hover:scale-[1.02]"
            >
              <svg
                className="w-4 h-4 stroke-current stroke-2 fill-none"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
