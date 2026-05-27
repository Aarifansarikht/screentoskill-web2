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
    title: "Active Cognitive Engagement",
    description:
      "Replaces passive dopamine-scrolling loops with active critical thinking problems. Promotes growth of synaptic density in the prefrontal cortex.",
    stat: "+40%",
    statLabel: "Focus Retention",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-[var(--color-brand)]" />,
    title: "Healthy Dopamine Regulation",
    description:
      "Delayed-gratification cycles reward accomplishments at set milestones, reducing screen dependence and irritability behaviors.",
    stat: "-35%",
    statLabel: "Screen Irritability",
  },
  {
    icon: <Zap className="w-5 h-5 text-amber-500" />,
    title: "Adaptive Learning Agility",
    description:
      "Personalized neural-pacing paths adjust to correct errors on the fly. Concepts stick through multi-sensory association games.",
    stat: "2.5x",
    statLabel: "Concept Mastery",
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
              Scientific Foundation
            </Badge>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-slate-50 tracking-tight leading-tight">
              A Healthy Path to{" "}
              <HighlightUnderline>Digital Balance</HighlightUnderline>
            </h2>

            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
              Passive video stream consumption stunts verbal memory growth.
              ScreenToSkill reverses this effect by transforming screen sessions
              into active mental exercises verified by neurodevelopment research.
            </p>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border border-[var(--border)] rounded-xl space-y-1.5">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-indigo-500" />
                <span className="text-[10px] font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Recommended Daily Usage
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                Just 20-30 minutes of interactive play replacement yields
                significant improvements in task switching & cognitive focus
                compared to passive cartoon streaming.
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
