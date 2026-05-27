"use client";

import React from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

type Permission = {
  number: number;
  badge: string;
  title: string;
  mockTitle: string;
  mockBadge: string;
  mockServiceName: string;
  mockServiceState: string;
  mockOtherName: string;
  mockOtherState: string;
  explainHTML: React.ReactNode;
  footerLeft: string;
  footerRight: string;
  delay: string;
};

const PERMISSIONS: Permission[] = [
  {
    number: 1,
    badge: "STEP 01 • ACCESSIBILITY",
    title: "App Accessibility",
    mockTitle: "Settings > Accessibility",
    mockBadge: "ALLOW SCREENSHOT GUIDE",
    mockServiceName: "ScreenToSkill Service",
    mockServiceState: "Enabled • ON",
    mockOtherName: "Other Services",
    mockOtherState: "Disabled",
    explainHTML: (
      <>
        Set{" "}
        <strong className="text-slate-800 dark:text-slate-100 font-bold">ScreenToSkill</strong>{" "}
        utility to{" "}
        <strong className="text-[var(--color-brand)] font-bold">{"'Enabled'"}</strong>{" "}
        within Accessibility Settings. This allows instant launcher interception
        to intercept restricted social screens in under 10 milliseconds.
      </>
    ),
    footerLeft: "SYSTEM MONITOR INTERFACE",
    footerRight: "STEP 1 COMPLETE ✓",
    delay: "0s",
  },
  {
    number: 2,
    badge: "STEP 02 • SYSTEM OVERLAY",
    title: "Overlay on App",
    mockTitle: "Settings > Draw Over Apps",
    mockBadge: "ALLOWED TARGET",
    mockServiceName: "ScreenToSkill Overlay",
    mockServiceState: "Allowed • ON",
    mockOtherName: "Roblox Games",
    mockOtherState: "Not Allowed",
    explainHTML: (
      <>
        Permit{" "}
        <strong className="text-slate-800 dark:text-slate-100 font-bold">ScreenToSkill</strong>{" "}
        to{" "}
        <strong className="text-[var(--color-brand)] font-bold">{"'Draw over other apps'"}</strong>
        . This ensures the customized gamified quiz popup displays instantly on
        top of addictive games.
      </>
    ),
    footerLeft: "QUIZ LAYERING PERMISSION",
    footerRight: "STEP 2 COMPLETE ✓",
    delay: "1.5s",
  },
  {
    number: 3,
    badge: "STEP 03 • USAGE STATISTICS",
    title: "Usage Permissions",
    mockTitle: "Settings > Usage Stats API",
    mockBadge: "TRACKING ENABLED",
    mockServiceName: "ScreenToSkill Usage",
    mockServiceState: "Allowed • ON",
    mockOtherName: "Default Web Browsers",
    mockOtherState: "Allowed",
    explainHTML: (
      <>
        Configure{" "}
        <strong className="text-slate-800 dark:text-slate-100 font-bold">ScreenToSkill</strong>{" "}
        to{" "}
        <strong className="text-[var(--color-brand)] font-bold">{"'Allow Usage Tracking'"}</strong>
        . This permits our software to calculate cumulative screen time metrics
        and trigger block layers accurately.
      </>
    ),
    footerLeft: "AUTOMATED DRILLDOWN REC",
    footerRight: "STEP 3 COMPLETE ✓",
    delay: "3s",
  },
];

function PermissionCard({ p }: { p: Permission }) {
  return (
    <div className="group relative bg-[#FAFCFC]/90 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/90 dark:border-slate-700 hover:border-[var(--color-brand)]/40 rounded-[1.8rem] sm:rounded-[2.2rem] p-5 sm:p-7 transition-all duration-300 flex flex-col justify-between min-h-[380px] sm:min-h-[460px] overflow-visible">
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(#475569_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-[0.15] pointer-events-none -z-10 rounded-[1.8rem] sm:rounded-[2.2rem]" />

      <div
        className="absolute -top-3.5 -left-3.5 sm:-top-5 sm:-left-5 w-8.5 h-8.5 sm:w-11 sm:h-11 rounded-full bg-[var(--color-brand)] text-white flex items-center justify-center font-display font-black text-sm sm:text-lg shadow-lg shadow-emerald-500/30 z-20 select-none animate-bounce"
        style={{ animationDuration: "6s", animationDelay: p.delay }}
      >
        {p.number}
      </div>

      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="px-3 py-1 rounded-full bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/40 dark:border-slate-700/40 text-[9.5px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider select-none">
            {p.badge}
          </div>
          <span className="text-[10px] text-[var(--color-brand)] font-black font-mono tracking-wider">
            REQUIRED
          </span>
        </div>

        <div className="h-[135px] sm:h-[155px] w-full bg-slate-900 dark:bg-slate-950 border border-slate-800 dark:border-slate-800 rounded-2xl relative overflow-hidden flex flex-col p-3.5 mb-6 shadow-inner">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
            <span className="text-[9.5px] text-slate-400 font-bold uppercase font-mono tracking-widest flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] animate-pulse" />
              {p.mockTitle}
            </span>
            <span className="text-[8.5px] font-bold px-1.5 py-0.2 rounded bg-emerald-500/10 text-[var(--color-brand)]">
              {p.mockBadge}
            </span>
          </div>

          <div className="space-y-2 text-left text-[9px] font-semibold">
            <div className="bg-slate-800/25 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-[var(--color-brand)] rounded flex items-center justify-center text-[10px] text-white font-bold leading-none">
                  {p.mockServiceName.charAt(0)}
                </div>
                <span className="text-white">{p.mockServiceName}</span>
              </div>
              <span className="text-[var(--color-brand)] font-bold">{p.mockServiceState}</span>
            </div>

            <div className="bg-slate-800/10 p-2 rounded-lg border border-slate-900/40 flex items-center justify-between opacity-55">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-slate-700 rounded flex items-center justify-center text-[10px] text-white font-bold leading-none">
                  {p.mockOtherName.charAt(0)}
                </div>
                <span className="text-slate-300">{p.mockOtherName}</span>
              </div>
              <span className="text-slate-500">{p.mockOtherState}</span>
            </div>
          </div>
        </div>

        <div className="text-left">
          <h3 className="font-display font-black text-slate-900 dark:text-slate-50 text-[17px] sm:text-[18px] leading-tight flex items-center gap-2">
            {p.title}
          </h3>
          <p className="text-[12.5px] text-slate-500 dark:text-slate-400 mt-2 font-semibold leading-relaxed">
            {p.explainHTML}
          </p>
        </div>
      </div>

      <div className="border-t border-[var(--border)] pt-3.5 mt-5 flex items-center justify-between">
        <span className="text-[9.5px] text-slate-400 dark:text-slate-500 font-bold tracking-wider uppercase font-mono">
          {p.footerLeft}
        </span>
        <span className="text-[10px] text-[var(--color-brand)] font-black font-mono">
          {p.footerRight}
        </span>
      </div>
    </div>
  );
}

export default function MandatoryPermissions() {
  return (
    <Section
      id="mandatory-permissions"
      tone="elevated"
      bordered
      className="py-24 sm:py-32"
      padded={false}
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,rgba(0,208,132,0.03),transparent)] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[350px] h-[350px] rounded-full bg-emerald-500/5 blur-[90px] -z-10 animate-pulse [animation-duration:12s]" />

      <Container>
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-500/20 bg-emerald-50 dark:bg-emerald-500/10 text-[11px] font-mono font-extrabold text-[var(--color-brand)] tracking-wider uppercase select-none">
            <span>Configuration Steps</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-display font-black text-slate-900 dark:text-slate-50 tracking-tight leading-tight">
            Mandatory{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand)] to-emerald-600">
              System Permissions
            </span>
          </h2>

          <p className="text-base text-slate-500 dark:text-slate-400 font-semibold leading-relaxed max-w-xl mx-auto">
            Follow these simple device setup steps to unlock seamless,
            uninterrupted parental locking and instant gamified quizzing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-4">
          {PERMISSIONS.map((p) => (
            <PermissionCard key={p.number} p={p} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
