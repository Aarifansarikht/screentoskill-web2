"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { LogoMark, LogoWordmark } from "@/components/icons/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LinkButton } from "@/components/ui/Button";
import { BRAND, NAV_ITEMS, type NavItem } from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionNavigation = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (pathname === "/") {
      document.querySelector(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      router.push(`/${sectionId}`);
    }
  };

  const handleNavClick = (item: NavItem) => {
    if (item.kind === "section") handleSectionNavigation(item.id);
    else setMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <header
        id="navbar"
        className={`mx-auto max-w-7xl w-full rounded-full transition-all duration-300 pointer-events-auto border ${
          isScrolled
            ? "bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border-slate-200/50 dark:border-slate-700/50 py-2.5 px-6 shadow-lg shadow-slate-900/5"
            : "bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border-white/20 dark:border-slate-700/30 py-3.5 px-6 shadow-xs"
        }`}
      >
        <div className="w-full flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2.5 hover:opacity-95 transition-all cursor-pointer"
          >
            <LogoMark />
            <LogoWordmark />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7 text-[13px] font-semibold text-slate-500 dark:text-slate-400">
            {NAV_ITEMS.map((item) =>
              item.kind === "page" ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ),
            )}
          </nav>

          {/* Right cluster: theme toggle + CTA + mobile toggle */}
          <div className="flex items-center space-x-2">
            <ThemeToggle className="hidden sm:inline-flex" />

            <LinkButton
              href={BRAND.appStoreLink}
              target="_blank"
              rel="noreferrer"
              size="md"
              className="hidden md:inline-flex"
            >
              Download App
            </LinkButton>

            {/* Mobile Menu Icon */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen((v) => !v)}
              suppressHydrationWarning
              className="md:hidden p-2.5 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white border border-[var(--border)] transition-all cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", bounce: 0, duration: 0.45 }}
              className="fixed inset-0 w-full h-[100dvh] bg-white/99 dark:bg-slate-950/99 backdrop-blur-3xl z-[99999] p-6 flex flex-col justify-between overflow-y-auto"
            >
              {/* Top */}
              <div className="flex items-center justify-between w-full pb-6 border-b border-[var(--border)]">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-2.5 hover:opacity-95 transition-all cursor-pointer"
                >
                  <LogoMark size="sm" />
                  <LogoWordmark size="sm" />
                </Link>

                <div className="flex items-center space-x-2">
                  <ThemeToggle />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200/80 dark:hover:bg-slate-700 border border-[var(--border)] text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white transition-all cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Nav Links */}
              <div className="my-auto py-8 flex flex-col space-y-5">
                {NAV_ITEMS.map((item, idx) => {
                  const number = String(idx + 1).padStart(2, "0");
                  const inner = (
                    <span className="flex items-center space-x-3">
                      <span className="text-[10px] font-mono font-medium text-[var(--color-brand)]">
                        {number} 
                      </span>
                      <span>{item.label}</span>
                    </span>
                  );
                  const className =
                    "group flex items-baseline justify-between py-1.5 border-b border-[var(--border)] text-left text-slate-800 dark:text-slate-100 hover:text-[var(--color-brand)] dark:hover:text-[var(--color-brand)] transition-all text-base sm:text-lg font-display font-medium";
                  const arrow = (
                    <ArrowUpRight className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-[var(--color-brand)] transition-colors" />
                  );
                  return item.kind === "page" ? (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={className}
                    >
                      {inner}
                      {arrow}
                    </Link>
                  ) : (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick(item)}
                      className={className}
                    >
                      {inner}
                      {arrow}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
