"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import SearchCommandPalette from "./SearchCommandPalette";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Investors", href: "#investors" },
  { label: "Startups", href: "#startups" },
  { label: "Stories", href: "#stories" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const openPalette = useCallback(() => setPaletteOpen(true), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        openPalette();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openPalette]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "py-2.5"
            : "bg-transparent py-5"
        )}
        style={
          scrolled
            ? {
                background: "rgba(7, 7, 10, 0.92)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
              }
            : undefined
        }
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 mr-4 flex-shrink-0 group">
            <div className="w-8 h-8 rounded-full bg-[#f59e0b] flex items-center justify-center">
              <span className="text-[#07070a] font-extrabold text-sm leading-none">K</span>
            </div>
            <span className="font-bold text-white text-[15px] tracking-tight">
              Karo<span className="text-[#f59e0b]">Pitch</span>
            </span>
          </a>

          {/* Nav Links - center */}
          <nav className="hidden lg:flex items-center gap-1 mx-auto">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "relative text-[13px] px-4 py-2 rounded-full transition-all duration-200 whitespace-nowrap font-medium",
                    isActive
                      ? "text-[#07070a] bg-[#f59e0b]"
                      : "text-white/50 hover:text-white/90"
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3 ml-auto lg:ml-0 flex-shrink-0">
            {/* Search */}
            <button
              onClick={openPalette}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/8 text-white/40 hover:text-white/70 hover:border-white/15 transition-all text-[13px]"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">Search</span>
              <kbd className="text-[9px] text-white/25 bg-white/5 px-1.5 py-0.5 rounded font-mono hidden xl:inline">
                /K
              </kbd>
            </button>

            <button
              className={cn(
                "hidden sm:inline-flex text-[13px] px-4 py-2 rounded-full transition-all duration-200 font-medium",
                "text-white/50 hover:text-white"
              )}
            >
              Login
            </button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary !text-[13px] !py-2 !px-5"
            >
              Apply to Pitch
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/8 transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileOpen ? "x" : "menu"}
                  initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  transition={{ duration: 0.18 }}
                >
                  {mobileOpen ? (
                    <X className="w-5 h-5 text-white/80" />
                  ) : (
                    <Menu className="w-5 h-5 text-white/80" />
                  )}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
              style={{
                background: "rgba(7, 7, 10, 0.97)",
                backdropFilter: "blur(24px)",
              }}
            >
              <div className="max-w-7xl mx-auto px-5 py-5 flex flex-col gap-1">
                <button
                  onClick={() => { openPalette(); setMobileOpen(false); }}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/8 mb-3 w-full text-left"
                >
                  <Search className="w-4 h-4 text-white/40" />
                  <span className="text-sm text-white/40">Search...</span>
                </button>

                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={cn(
                      "text-sm px-4 py-3 rounded-xl transition-all font-medium",
                      activeSection === link.href.slice(1)
                        ? "bg-[#f59e0b]/10 text-[#f59e0b]"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    )}
                  >
                    {link.label}
                  </motion.a>
                ))}

                <div className="flex gap-2 mt-4 pt-4 border-t border-white/8">
                  <button className="flex-1 text-sm text-white/60 py-3 rounded-xl bg-white/5 hover:bg-white/8 transition-all font-medium">
                    Login
                  </button>
                  <button className="flex-1 btn-primary text-sm !py-3">
                    Apply to Pitch
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {paletteOpen && (
          <SearchCommandPalette
            isOpen={paletteOpen}
            onClose={() => setPaletteOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
