// app/not-found.tsx
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function NotFound() {

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden flex flex-col items-center justify-center px-4">

      {/* Background blobs — same as HeroSection */}
      <div
        className="absolute top-[10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-emerald-200/20 blur-[120px] pointer-events-none animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div className="absolute bottom-[10%] left-[-15%] w-[550px] h-[550px] rounded-full bg-indigo-200/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-emerald-100/30 blur-[90px] pointer-events-none" />

      {/* Decorative grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#22C55E 1px, transparent 1px), linear-gradient(90deg, #22C55E 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">

        {/* Live badge — same style as hero */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#E5E7EB] bg-emerald-50/60 text-[10px] font-semibold text-emerald-800 backdrop-blur-sm shadow-2xs select-none mb-8">
          <span className="flex h-1.5 w-1.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#22C55E]" />
          </span>
          <span className="font-mono tracking-wider font-bold uppercase">
            Page Not Found
          </span>
        </div>

        {/* Giant 404 */}
        <div className="relative select-none mb-4">
          <span
            className="font-display font-bold text-[clamp(6rem,22vw,10rem)] leading-none text-transparent"
            style={{
              WebkitTextStroke: "2px #e2e8f0",
              letterSpacing: "-0.04em",
            }}
          >
            <span >404</span>
          </span>
          {/* Green underline accent */}
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-16 h-1 rounded-full bg-[#22C55E]" />
        </div>

        <h1 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-6 leading-snug">
          Looks like this page<br />took an unscheduled break
        </h1>

        <p className="text-xs sm:text-sm text-slate-400 mt-4 leading-relaxed max-w-sm font-normal">
          The page you're looking for doesn't exist — but your child's learning streak still can.
          Head back and keep building skills.
        </p>

      

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-10">
          <Link
            href="/"
            className="group relative w-full sm:w-auto px-6 py-3 bg-[#22C55E] hover:bg-[#02bd78] text-white rounded-xl text-xs sm:text-sm font-medium shadow-sm shadow-emerald-500/15 hover:shadow-emerald-500/25 transition-all text-center flex items-center justify-center space-x-2 min-w-[180px]"
          >
            <span>Back to Home</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

        
        </div>

        {/* Footer micro-text */}
        <p className="mt-10 text-[10px] font-mono text-slate-300 tracking-wider uppercase">
          ScreenToSkill · Screen Time Reimagined
        </p>
      </div>
    </main>
  );
}