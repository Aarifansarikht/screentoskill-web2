"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { HighlightUnderline } from "@/components/ui/HighlightUnderline";

const FAQ_ITEMS = [
  {
    q: "How does ScreenToSkill lock other mobile apps?",
    a: "ScreenToSkill uses standard device accessibility and device-management permissions. When a child attempts to tap YouTube, Roblox, lock screen layers activate instantly and prompt them to solve age-aligned MCQs before session approval.",
  },
  {
    q: "What happens if my child inputs an incorrect MCQ answer?",
    a: "The selected app remains closed. The system displays friendly clues and gives children opportunities to study the question and attempt again, converting mindless scrolling into active study training.",
  },
  {
    q: "Can I choose which school subjects to lock with?",
    a: "Absolutely! Parents have full dashboard access to adjust subject curriculum mixes. Choose from Math (Grade 1-6), Grammar, Science, Vocabulary, or logic puzzles to match their homework goals.",
  },
  {
    q: "Is there a limit on daily screen time awards?",
    a: "Yes. From the Master controls, parents can establish customized daily app session quotas (e.g. max 5 sessions of 15-minutes each), reinforcing high-performance limits.",
  },
  {
    q: "Does the app store child data or track location?",
    a: "Never. We enforce strict privacy guidelines. ScreenToSkill does not collect user telemetry or search histories. All progress logs are encrypted locally to preserve child safety.",
  },
] as const;

export default function FAQs() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Section id="faqs" tone="muted" bordered className="bg-slate-50/40 dark:bg-slate-950/40">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 relative flex justify-center max-w-sm mx-auto lg:max-w-none w-full">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[482/650] rounded-2xl overflow-hidden shadow-sm border border-[var(--border)] group">
              <div className="absolute inset-0 bg-[var(--color-brand)]/10 mix-blend-multiply transition-opacity group-hover:opacity-0" />
              <Image
                src="/Mobile-App-FAQ.webp"
                alt="Frequently Asked Questions ScreenToSkill"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover group-hover:scale-[1.01] transition-transform duration-500"
                referrerPolicy="no-referrer"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-2 bg-[var(--surface)] border border-[var(--border)] p-3.5 rounded-xl shadow-xs max-w-[160px] hidden sm:block">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[var(--color-brand)] font-bold block">
                PARENT TIP
              </span>
              <span className="text-[10.5px] text-slate-500 dark:text-slate-400 font-medium block mt-1">
                Start with simple math quizzes for instant child confidence!
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="text-left space-y-2.5">
              <Badge variant="brand">Questions &amp; Answers</Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-slate-50 tracking-tight">
                Frequently asked <HighlightUnderline>questions</HighlightUnderline>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-normal max-w-xl">
                Curious about childhood screen regulation, MCQs, or device
                remote setup? Find answers here.
              </p>
            </div>

            <div className="space-y-3">
              {FAQ_ITEMS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={faq.q}
                    className="bg-[var(--surface)] border border-[var(--border)] rounded-xl overflow-hidden shadow-2xs transition-all hover:shadow-xs"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      suppressHydrationWarning
                      className="w-full text-left px-4.5 py-3.5 flex justify-between items-center font-medium text-slate-800 dark:text-slate-100 hover:text-[var(--color-brand)] transition-colors"
                    >
                      <span className="text-xs sm:text-sm md:text-base font-medium">
                        {faq.q}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
                      )}
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-4.5 pb-4.5 pt-1 text-xs sm:text-[13px] font-normal text-slate-500 dark:text-slate-400 border-t border-[var(--border)] leading-relaxed text-left">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
