"use client";

import React from "react";
import { Brain, ShieldCheck, Activity, Zap, Clock } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { HighlightUnderline } from "@/components/ui/HighlightUnderline";

type Impact = {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
};

const IMPACTS: Impact[] = [
  {
    icon: <Brain className="w-5 h-5 text-indigo-500" />,
    title: "Active Learning",
    description:
      "Kids answer questions, identify images, and complete learning challenges instead of spending all their time on passive entertainment.",
    stat: "100+",
    statLabel: "Learning Activities",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-[var(--color-brand)]" />,
    title: "Balanced Screen Time",
    description:
      "Entertainment time is unlocked through completed learning tasks, encouraging a healthy balance between fun and education.",
    stat: "1 App",
    statLabel: "Learn & Earn",
  },
  {
    icon: <Zap className="w-5 h-5 text-amber-500" />,
    title: "Age-Based Challenges",
    description:
      "Learning activities are tailored for different age groups, from simple image recognition for young children to advanced subjects for teens.",
    stat: "3+",
    statLabel: "Age Groups",
  },
];

export default function BrainDevelopmentImpact() {
  return (
    <Section id="brain-impact" tone="elevated" bordered>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-50/30 dark:bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <Badge icon={<Activity className="w-3.5 h-3.5 text-indigo-500" />}>
              Learning Through Play
            </Badge>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-slate-50 tracking-tight leading-tight">
              Helping Kids Use Screen Time{" "}
              <HighlightUnderline>Better</HighlightUnderline>
            </h2>

            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
              ScreenToSkill turns screen time into a learning experience.
              Children complete fun image-based quizzes and learning challenges
              to earn their entertainment time, helping them build knowledge
              while enjoying technology.
            </p>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-[var(--border)] rounded-xl space-y-1.5">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-indigo-500" />
                <span className="text-[10px] font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Recommended Daily Usage
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                Children can complete short learning sessions every day at their
                own pace. Regular participation helps create positive learning
                habits and encourages productive screen use.
              </p>
            </div>
          </div>

          {/* Right Cards Stack */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {IMPACTS.map((item) => (
              <div
                key={item.title}
                className="group relative bg-[var(--surface)] border border-[var(--border)] hover:border-slate-200/60 dark:hover:border-slate-700 p-5 rounded-xl hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-lg group-hover:bg-indigo-50/50 dark:group-hover:bg-indigo-500/10 transition-colors shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-1 text-left">
                    <h3 className="font-display font-bold text-slate-900 dark:text-slate-50 text-sm sm:text-base">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="sm:text-right w-full sm:w-auto mt-2 sm:mt-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-[var(--border)] flex sm:flex-col justify-between items-center sm:items-end shrink-0">
                  <span className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-slate-50 leading-none">
                    {item.stat}
                  </span>
                  <span className="text-[9px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block sm:mt-1">
                    {item.statLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
