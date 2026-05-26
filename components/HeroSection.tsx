"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const MOCKUPS = [
  {
    src: "/mobile3.png",
    alt: "Parental Analytics App Screenshot",
    className: "hidden md:flex absolute w-[240px] h-[510px] z-10",
    style: {
      transform:
        "perspective(1200px) rotateY(15deg) scale(0.85) translateX(-150px)",
      transformStyle: "preserve-3d" as const,
    },
  },
  {
    src: "/mobile1.png",
    alt: "ScreenToSkill Challenge Interface Mockup",
    className: "relative z-20",
    style: {
      width: "clamp(160px, 36vw, 230px)",
      aspectRatio: "390/840",
      transform: "perspective(1200px) rotateY(0deg)",
    },
    priority: true,
    sizes: "(max-width: 640px) 160px, (max-width: 1024px) 190px, 230px",
  },
  {
    src: "/mobile2.png",
    alt: "Parent App Lock Filters Screen",
    className: "hidden lg:flex absolute w-[240px] h-[510px] z-10",
    style: {
      transform:
        "perspective(1200px) rotateY(-15deg) scale(0.85) translateX(130px)",
      transformStyle: "preserve-3d" as const,
    },
  },
];

const STATS = [
  {
    value: "100k+",
    label: "Active Families",
    desc: "Nurturing high-performance study habits and reducing device dependencies daily.",
  },
  {
    value: "5M+",
    label: "Correct MCQ Quests",
    desc: "Our comprehensive curriculum empowers core skill tracking dynamically.",
    green: true,
  },
  {
    value: "45+ Mins",
    label: "Saved Daily",
    desc: "Replaced addictive brain rot with constructive mental fitness workouts.",
    green: true,
  },
];

export default function HeroSection() {
  return (
    <>
      <section
        id="hero"
        className="relative pt-32 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 to-white"
      >
        <div
          className="absolute top-[15%] right-[-10%] w-[450px] h-[450px] rounded-full bg-emerald-250/15 blur-[120px] -z-10 pointer-events-none animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div className="absolute top-[35%] left-[-15%] w-[550px] h-[550px] rounded-full bg-indigo-200/10 blur-[130px] -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#E5E7EB] bg-emerald-50/60 text-[10px] sm:text-[11px] font-semibold text-emerald-800 backdrop-blur-sm shadow-2xs select-none">
                <span className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#22C55E]" />
                </span>
                <span className="font-mono tracking-wider font-bold uppercase">
                  ScreenToSkill Regulation
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-display font-bold tracking-tight text-slate-900 leading-[1.15] pt-0.5 text-center lg:text-left">
                Turn Screen Time <br className="hidden sm:inline" />
                Into Skill Time
              </h1>

              <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal text-center lg:text-left">
                Every app unlock becomes a learning opportunity for your child.
                ScreenToSkill transforms addictive scrolling into fun
                educational challenges like math, spelling, science, sounds, and
                memory games while helping parents build healthier screen habits
                for their children.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
                <a
                  href="#download"
                  className="group relative w-full sm:w-auto px-6 py-3 bg-[#22C55E] hover:bg-[#02bd78] text-white rounded-xl text-xs sm:text-sm font-medium shadow-sm shadow-emerald-500/15 hover:shadow-emerald-500/25 transition-all text-center cursor-pointer flex items-center justify-center space-x-2 min-w-[200px]"
                >
                  <span>Download App Free</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-2 pt-3 text-[11px] font-mono font-medium text-slate-400">
                <span className="text-amber-500 font-sans text-sm leading-none">
                  ★ ★ ★ ★ ★
                </span>
                <span>4.9 rating loved by 100k+ families</span>
              </div>
            </div>

            {/* Right Column: Mockups */}
            <div
              id="install-interactive"
              className="lg:col-span-6 flex justify-center items-center relative select-none min-h-[440px] sm:min-h-[560px] lg:min-h-[660px] py-6 sm:py-10 overflow-visible isolate"
            >
              <div className="absolute inset-x-0 inset-y-0 -z-30 pointer-events-none rounded-[3rem] overflow-hidden">
                <Image
                  src="/Mobile-App-Hero-BG.webp"
                  alt="Mobile App Hero BG"
                  fill
                  priority
                  className="object-cover scale-102 opacity-100 select-none animate-fade-in"
                  referrerPolicy="no-referrer"
                />
              </div>

              {[
                "absolute top-[8%] left-[-4%] w-[260px] h-[360px] rounded-[90px] bg-[#EDE9FE]/60 blur-[10px] -rotate-12 -z-20",
                "absolute bottom-[5%] left-[-15%] w-[290px] h-[300px] rounded-[110px] bg-[#D1F7EC]/60 blur-[8px] rotate-[35deg] -z-20",
                "absolute bottom-[-2%] right-[-8%] w-[280px] h-[280px] rounded-full bg-[#FAE2FF]/70 blur-[12px] -z-20",
                "absolute top-[18%] right-[-14%] w-[240px] h-[460px] rounded-[100px] bg-[#E1F7F1]/70 blur-[6px] rotate-[15deg] -z-20",
              ].map((cls, i) => (
                <div key={i} className={`${cls} pointer-events-none`} />
              ))}

              <div className="relative w-full flex justify-center items-center h-[300px] sm:h-[400px] lg:h-[460px] perspective-[1200px] overflow-visible">
                {MOCKUPS.map(
                  ({ src, alt, className, style, priority, sizes }) => (
                    <div
                      key={src}
                      className={`overflow-hidden flex flex-col transition-all duration-500 hover:scale-99 group ${className}`}
                      style={style}
                    >
                      <div className="relative w-full h-full overflow-hidden">
                        <Image
                          src={src}
                          alt={alt}
                          fill
                          priority={priority}
                          sizes={sizes ?? "185px"}
                          className="object-cover group-hover:scale-99 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none" />
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-y border-[#E5E7EB] bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {STATS.map(({ value, label, desc, green }) => (
              <div key={label} className="py-2.5 md:py-0">
                <span
                  className={`block text-2xl sm:text-3xl font-bold ${green ? "text-[#22C55E]" : "text-slate-800"}`}
                >
                  {value}
                </span>
                <span className="text-[10px] uppercase tracking-wider font-mono text-slate-400 font-bold block mt-1">
                  {label}
                </span>
                <p className="text-[11px] text-slate-400 max-w-xs mx-auto mt-1 font-normal leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
