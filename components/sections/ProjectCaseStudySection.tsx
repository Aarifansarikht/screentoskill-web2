"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight, Award } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HighlightUnderline } from "@/components/ui/HighlightUnderline";
import { buttonStyles } from "@/components/ui/Button";

const STATS = [
  { value: "72%", label: "Less Screen Time", emphasis: false },
  { value: "94%", label: "Fewer Screen Tantrums", emphasis: false },
  { value: "92%", label: "Better Learning Focus", emphasis: true },
];

export default function ProjectCaseStudySection() {
  return (
    <Section
      id="case-study-teaser"
      tone="elevated"
      bordered
      className="text-slate-800 dark:text-slate-200"
    >
      <div className="absolute top-[20%] left-[-15%] w-[420px] h-[420px] rounded-full bg-[var(--color-brand)]/5 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] right-[-10%] w-[380px] h-[380px] rounded-full bg-[var(--color-brand)]/5 blur-[90px] pointer-events-none -z-10" />

      <Container>
        <SectionHeading
          className="mx-auto mb-10 sm:mb-14"
          eyebrow={
            <Badge
              variant="brand"
              icon={
                <Sparkles className="w-3.5 h-3.5 text-[var(--color-brand)] mr-1" />
              }
            >
              Real Parent Results
            </Badge>
          }
          title={
            <>
              See How{" "}
              <HighlightUnderline>
                ScreenToSkill Helps Kids Learn
              </HighlightUnderline>
            </>
          }
          description="See how children spend less time on screens and more time learning through fun questions and challenges."
        />

        <div className="bg-[#FAFCFC]/70 dark:bg-slate-900/40 border border-[var(--border)] rounded-2xl p-5 sm:p-8 lg:p-10 relative overflow-hidden shadow-xs hover:shadow-sm transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 text-left space-y-5">
              <div className="inline-flex items-center space-x-2.5">
                <span className="text-[10px] font-mono font-bold text-[var(--color-brand)] uppercase tracking-wider bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-0.5 rounded">
                  100,000+ Children
                </span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold">
                  •
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold font-mono uppercase tracking-wider">
                  Ages 3-10 Years
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-slate-50 leading-tight">
                Turning Screen Time Into Learning Time
              </h3>

              <p className="text-[#5C6E7F] dark:text-slate-400 text-xs sm:text-sm font-normal leading-relaxed">
                Instead of simply blocking apps, ScreenToSkill asks children fun
                learning questions before they can continue using YouTube,
                games, or other apps. This helps children learn new things while
                reducing unnecessary screen time.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-1">
                {STATS.map((s, i) => (
                  <div
                    key={s.label}
                    className={`space-y-1 ${i > 0 ? "border-l border-[var(--border)] pl-4" : ""}`}
                  >
                    <span
                      className={`block text-xl sm:text-2xl font-display font-bold leading-none ${
                        s.emphasis
                          ? "text-[var(--color-brand)]"
                          : "text-slate-800 dark:text-slate-100"
                      }`}
                    >
                      {s.value}
                    </span>
                    <span className="block text-[8.5px] uppercase font-mono font-bold tracking-wider text-slate-400 dark:text-slate-500">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/case-study"
                  className={`${buttonStyles("primary", "md")} group space-x-2 font-bold`}
                >
                  <span>Explore Deep Case Study Report</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative max-w-md mx-auto lg:max-w-none w-full">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xs border border-[var(--border)]">
                <Image
                  src="/case.webp"
                  alt="Pre-school learning study image"
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute top-3 right-3 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md py-1 px-2.5 rounded border border-[var(--border)] flex items-center space-x-1.5 shadow-2xs select-none">
                  <Award className="w-3.5 h-3.5 text-[var(--color-brand)]" />
                  <span className="text-[9px] font-bold text-slate-800 dark:text-slate-100">
                    Parent Approved
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
