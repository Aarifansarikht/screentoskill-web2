"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import {
  CheckCircle2,
  Quote,
  Star,
  Users,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HighlightUnderline } from "@/components/ui/HighlightUnderline";

interface CaseStudy {
  name: string;
  age: number;
  cohort: string;
  badge: string;
  title: string;
  description: string;
  quote: string;
  reviewer: string;
  reviewerInitials: string;
  reviewerColor: string;
  reviewerStatus: string;
  observationTag: string;
  observationText: string;
  image: string;
  metric: { label: string; value: string };
}

const SLIDES: CaseStudy[] = [
  {
    name: "Leo",
    age: 3,
    cohort: "CASE COHORT 01 • ACTIVE MIND",
    badge: "TODDLER ADAPTATION",
    title: "Leo's Early Preschool Transition",
    description:
      "Leo swapped passive video autoplay loops for interactive audio matching and sensory discovery milestones. Resolving the daily toddler screen-friction problem gracefully.",
    quote:
      "Leo would scream whenever we tried taking away his tablet. With ScreenToSkill, there are no tantrums because he sees the locked screen as an interactive game challenge. He eagerly taps on sound clues and animal pairs, and is incredibly proud when he unlocks his content.",
    reviewer: "Clara M.",
    reviewerInitials: "CM",
    reviewerColor: "from-violet-500 to-fuchsia-500",
    reviewerStatus: "Verified Parent",
    observationTag: "Teacher Observation Details",
    observationText:
      "Leo demonstrated improved cognitive focus, swapping over-stimulating cartoon screens for sensory matching mechanics. Restored organic bedtime routines and interactive speech mimicry.",
    image: "/childlearn.jpg",
    metric: { label: "Tantrum drop", value: "−92%" },
  },
  {
    name: "Mia",
    age: 5,
    cohort: "CASE COHORT 02 • CORE INTUITION",
    badge: "PRESCHOOL COHORT",
    title: "Mia's Self-Regulation Triumph",
    description:
      "Instead of default high-frequency video scrolling, Mia learned basic logic sequences and counting milestones natively, proudly earning minor game rewards at scheduled times.",
    quote:
      "I watched Mia shift entirely from passive watching channels into active math and count puzzles. It aligns school-prep milestones so intuitively that we noticed her vocabulary skyrocket in weeks. It teaches self-regulation early and proud.",
    reviewer: "Jacob R.",
    reviewerInitials: "JR",
    reviewerColor: "from-sky-500 to-cyan-500",
    reviewerStatus: "Verified Educator",
    observationTag: "Independent Progress Tracking",
    observationText:
      "Helps children map focus intervals to content availability naturally. ScreenToSkill locks convert idle scrolling into a predictable pattern where active learning equals rewarded outcomes.",
    image: "/case2.jpg",
    metric: { label: "Vocab uplift", value: "+38%" },
  },
  {
    name: "Aanya",
    age: 8,
    cohort: "CASE COHORT 03 • SCHOLAR LOOP",
    badge: "ELEMENTARY FOCUS",
    title: "Aanya's Homework Habit Reset",
    description:
      "Aanya was glued to short-form video apps every evening. After two weeks on ScreenToSkill, she was solving multiplication chains and spelling sets before even opening YouTube.",
    quote:
      "We no longer fight at 7pm. Aanya now actually races through her quiz to unlock 20 minutes — and her teacher noticed she's answering faster in class this term. The app turned screen time into prep time without us having to police anything.",
    reviewer: "Priya S.",
    reviewerInitials: "PS",
    reviewerColor: "from-emerald-500 to-teal-500",
    reviewerStatus: "Verified Parent",
    observationTag: "School Progress Note",
    observationText:
      "Multiplication recall improved measurably within three weeks. Aanya self-initiates quiz sessions to unlock Roblox time, reducing evening parent-supervision conflicts to near zero.",
    image: "/childanalytics.jpg",
    metric: { label: "Math accuracy", value: "+41%" },
  },
  {
    name: "Ethan",
    age: 12,
    cohort: "CASE COHORT 04 • DEEP FOCUS",
    badge: "MIDDLE SCHOOL",
    title: "Ethan's Pre-Gaming Algebra Streak",
    description:
      "Ethan used to spend 4+ hours daily on competitive gaming. ScreenToSkill repositioned algebra and science MCQs as the gateway — and his streak now stretches across the whole school week.",
    quote:
      "I genuinely didn't expect a 12-year-old to choose math drills over Fortnite, but the streak mechanic is incredibly addictive — in a good way. His grades crept up a full letter this semester and the dinnertime arguments are gone.",
    reviewer: "Marcus T.",
    reviewerInitials: "MT",
    reviewerColor: "from-amber-500 to-orange-500",
    reviewerStatus: "Verified Parent",
    observationTag: "Academic Streak Log",
    observationText:
      "31-day consecutive streak across algebra and physics MCQs. Self-reported gaming intent dropped by 22% in favor of quiz-driven unlocks. Teacher-reported attention span up notably in math periods.",
    image: "/kidscreen.jpg",
    metric: { label: "Grade uplift", value: "+1 letter" },
  },
];

function ReviewerAvatar({ initials, gradient }: { initials: string; gradient: string }) {
  return (
    <div
      className={`w-9 h-9 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-[11px] font-display font-bold shadow-md shrink-0`}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

function SlideCard({ slide, sizes = "(max-width: 1024px) 100vw, 35vw" }: { slide: CaseStudy; sizes?: string }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      {/* Image column */}
      <div className="lg:col-span-5 relative group max-w-md mx-auto lg:max-w-none w-full">
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-800 shadow-lg shadow-slate-900/5 dark:shadow-black/30 border border-[var(--border)]">
          <Image
            src={slide.image}
            alt={`${slide.name} learning with ScreenToSkill`}
            fill
            sizes={sizes}
            className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />

          {/* Top-right metric pill */}
          <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-[var(--border)] shadow-sm flex items-center space-x-1.5 select-none">
            <span className="text-[10px] font-mono font-bold text-[var(--color-brand)] uppercase tracking-wider">
              {slide.metric.value}
            </span>
            <span className="text-[9px] font-mono font-medium text-slate-500 dark:text-slate-400 uppercase">
              {slide.metric.label}
            </span>
          </div>

          {/* Bottom info bar */}
          <div className="absolute bottom-4 left-4 right-4 p-3 backdrop-blur-md bg-white/95 dark:bg-slate-900/90 border border-[var(--border)] rounded-xl flex items-center space-x-3 shadow-lg">
            <div className="w-9 h-9 rounded-lg bg-[var(--color-brand)]/10 flex items-center justify-center text-[var(--color-brand)] shrink-0">
              <CheckCircle2 className="w-4.5 h-4.5" />
            </div>
            <div className="min-w-0">
              <span className="block text-[9px] font-mono font-bold text-[var(--color-brand)] uppercase tracking-wider leading-none">
                {slide.badge}
              </span>
              <span className="block text-[12px] font-display font-bold text-slate-900 dark:text-slate-50 mt-1 truncate">
                {slide.name} • Age {slide.age}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content column */}
      <div className="lg:col-span-7 space-y-5 text-left">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-emerald-50 dark:bg-emerald-500/10 text-[9px] font-mono font-bold text-[var(--color-brand)] tracking-wider select-none uppercase">
            <span>{slide.cohort}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-slate-50 leading-tight">
            {slide.title}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-normal leading-relaxed">
            {slide.description}
          </p>
        </div>

        {/* Quote */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-5 relative space-y-3 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 text-[var(--color-brand)] fill-[var(--color-brand)]"
                />
              ))}
            </div>
            <Quote className="w-7 h-7 text-emerald-100/60 dark:text-emerald-500/30 shrink-0" />
          </div>

          <p className="text-slate-600 dark:text-slate-300 italic text-xs sm:text-sm font-normal leading-relaxed">
            &ldquo;{slide.quote}&rdquo;
          </p>

          <div className="border-t border-[var(--border)] pt-3 flex items-center justify-between gap-3">
            <div className="flex items-center space-x-2.5 min-w-0">
              <ReviewerAvatar initials={slide.reviewerInitials} gradient={slide.reviewerColor} />
              <div className="min-w-0">
                <span className="block text-[12px] font-display font-bold text-slate-900 dark:text-slate-50 leading-tight truncate">
                  {slide.reviewer}
                </span>
                <span className="block text-[9px] font-mono font-bold text-[var(--color-brand)] uppercase tracking-wider">
                  {slide.reviewerStatus}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Observation card */}
        <div className="bg-emerald-50/40 dark:bg-emerald-500/5 border border-[var(--border)] rounded-2xl p-4 space-y-1 shadow-sm">
          <span className="block text-[9px] font-mono font-bold text-[var(--color-brand)] uppercase tracking-wider">
            {slide.observationTag}
          </span>
          <p className="text-xs text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            {slide.observationText}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ParentAnalytics() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const togglePause = () => {
    if (!swiperRef.current) return;
    if (isPaused) swiperRef.current.autoplay.start();
    else swiperRef.current.autoplay.stop();
    setIsPaused((v) => !v);
  };

  return (
    <Section
      id="parent-portal"
      tone="muted"
      bordered
      className="bg-[#FAFCFC]/85 dark:bg-slate-950/40 text-slate-800 dark:text-slate-200"
    >
      <div className="absolute top-[25%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[var(--color-brand)]/5 blur-[110px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-slate-100/40 dark:bg-slate-800/40 blur-[90px] pointer-events-none -z-10" />

      <Container>
        <SectionHeading
          className="mx-auto mb-10 sm:mb-14"
          eyebrow={
            <Badge
              variant="brand"
              icon={<Users className="w-3.5 h-3.5 text-[var(--color-brand)]" />}
            >
              Digital Balance Case Studies
            </Badge>
          }
          title={
            <>
              Child Case Studies:{" "}
              <HighlightUnderline>Real Progress</HighlightUnderline> Stories
            </>
          }
          description="Observe genuine screen-time transformation. Toddlers, preschoolers and pre-teens swapping passive stimulation for cognitive playful challenges. No invasive tracking — just healthy family balance."
        />

        <div className="relative">
          <Swiper
            modules={[Autoplay, EffectFade, Pagination]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={550}
            autoplay={{ delay: 6500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop
            onSwiper={(s) => (swiperRef.current = s)}
            onSlideChange={(s) => setActiveIndex(s.realIndex)}
            className="!overflow-visible"
          >
            {SLIDES.map((slide) => (
              <SwiperSlide key={slide.name}>
                <SlideCard slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controls bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8 pt-6 border-t border-[var(--border)]">
            {/* Pagination + count */}
            <div className="flex items-center gap-4">
              <div className="flex items-center space-x-1.5">
                {SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => swiperRef.current?.slideToLoop(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] ${
                      activeIndex === idx
                        ? "w-8 bg-[var(--color-brand)]"
                        : "w-1.5 bg-slate-300 dark:bg-slate-600 hover:bg-[var(--color-brand)]/50"
                    }`}
                  />
                ))}
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 select-none">
                {String(activeIndex + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
              </span>
            </div>

            {/* Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={togglePause}
                aria-label={isPaused ? "Resume autoplay" : "Pause autoplay"}
                className="w-9 h-9 rounded-lg bg-[var(--surface)] text-slate-600 dark:text-slate-300 hover:text-[var(--color-brand)] border border-[var(--border)] flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
              >
                {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              </button>
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="Previous slide"
                className="w-9 h-9 rounded-lg bg-[var(--surface)] text-slate-700 dark:text-slate-200 hover:text-[var(--color-brand)] border border-[var(--border)] flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-4.5 h-4.5" />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="Next slide"
                className="w-9 h-9 rounded-lg bg-[var(--surface)] text-slate-700 dark:text-slate-200 hover:text-[var(--color-brand)] border border-[var(--border)] flex items-center justify-center transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
