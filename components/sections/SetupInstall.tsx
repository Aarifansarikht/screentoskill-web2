"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HighlightUnderline } from "@/components/ui/HighlightUnderline";

export default function WatchSetup() {
  const [playing, setPlaying] = useState(false);

  return (
    <Section
      id="watch-setup"
      tone="muted"
      bordered
      className="relative bg-slate-50/20 dark:bg-slate-950/40 overflow-hidden"
    >
      {/* Dot grid — same as HowItWorks */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#22C55E_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-[0.08]" />

      {/* Ambient glows */}
      <div className="absolute top-[15%] left-[8%] w-[280px] h-[280px] rounded-md bg-[var(--color-brand)]/15 blur-[90px] -z-10 animate-pulse [animation-duration:8s]" />
      <div className="absolute bottom-[10%] right-[8%] w-[320px] h-[320px] rounded-md bg-emerald-400/20 dark:bg-emerald-500/10 blur-[100px] -z-10 animate-pulse [animation-duration:11s]" />

      <Container className="relative">
        <SectionHeading
          className="mx-auto mb-12 sm:mb-16"
          eyebrow={<Badge variant="brand">Video Walkthrough</Badge>}
          title={
            <>
              See it in <HighlightUnderline>action</HighlightUnderline>
            </>
          }
          description="Watch how to set up the app in under 3 minutes — from install to your first learning overlay."
        />

        {/* Full-width video card */}
        <div className="relative mx-auto max-w-5xl">
          {/* Outer glow frame */}
          <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-[var(--color-brand)]/25 via-emerald-300/10 to-indigo-500/15 blur-3xl -z-10" />

          <div
            className="relative rounded-[28px] overflow-hidden border border-slate-200/80 dark:border-slate-700/60 shadow-2xl shadow-slate-900/10 dark:shadow-black/40 bg-slate-900 cursor-pointer group"
            onClick={() => !playing && setPlaying(true)}
          >
            {!playing ? (
              <>
                {/* Thumbnail */}
                <div className="relative w-full aspect-video">
                  <Image
                    src="/images/thumbnail.png"
                    alt="App setup walkthrough video"
                    fill
                    sizes="(max-width: 1280px) 100vw, 1024px"
                    className="object-cover"
                    priority
                  />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/20 to-slate-900/10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-transparent to-slate-950/30" />

                  {/* Subtle scanline */}
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(0,0,0,0.025)_3px,rgba(0,0,0,0.025)_4px)] pointer-events-none" />

                  {/* Center play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <span className="absolute inset-0 rounded-full bg-[var(--color-brand)]/40 animate-ping [animation-duration:2s]" />
                      <span className="absolute -inset-3 rounded-full bg-[var(--color-brand)]/15 animate-ping [animation-duration:2.6s] [animation-delay:0.3s]" />
                      <span className="absolute -inset-6 rounded-full bg-[var(--color-brand)]/8 animate-ping [animation-duration:3.2s] [animation-delay:0.6s]" />
                      <button
                        aria-label="Play setup video"
                        className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[var(--color-brand)] text-white flex items-center justify-center shadow-2xl shadow-emerald-500/50 group-hover:scale-110 group-hover:bg-emerald-500 transition-all duration-300"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-8 h-8 sm:w-9 sm:h-9 translate-x-0.5"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Bottom bar */}
                  <div className="absolute bottom-0 inset-x-0 px-6 sm:px-8 py-5 sm:py-6 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-white font-display font-bold text-lg sm:text-2xl leading-tight drop-shadow-md">
                        Full Setup Walkthrough
                      </p>
                      <p className="text-white/55 text-sm mt-1 font-normal">
                        3 min · Install → permissions → first learning lock
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-3 py-1.5 rounded-full uppercase tracking-widest">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                        Watch Now
                      </span>
                    </div>
                  </div>

                  {/* Top-left badge */}
                  <div className="absolute top-5 left-6 flex items-center gap-2">
                    <span className="text-[10px] font-mono font-black text-[var(--color-brand)] bg-white/90 dark:bg-slate-950/80 border border-emerald-200/80 dark:border-emerald-500/30 px-2.5 py-1 rounded-md uppercase tracking-widest shadow-sm">
                      Setup Guide
                    </span>
                    <span className="text-[10px] font-mono font-bold text-white/70 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md uppercase tracking-wider">
                      3:00
                    </span>
                  </div>
                </div>
              </>
            ) : (
              /* ── Replace the src with your real YouTube embed URL ── */
              <div className="w-full aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Q3EwM7qIDRk?autoplay=1&rel=0&modestbranding=1"
                  title="App Setup Walkthrough"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>

        
        </div>
      </Container>
    </Section>
  );
}
