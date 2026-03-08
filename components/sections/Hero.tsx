"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, CheckCircle2 } from "lucide-react";
import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";

const MARQUEE_CITIES = [
  "Indore",
  "Jaipur",
  "Lucknow",
  "Surat",
  "Coimbatore",
  "Nagpur",
  "Vadodara",
  "Bhopal",
  "Patna",
  "Raipur",
  "Mysuru",
  "Visakhapatnam",
  "Madurai",
  "Amritsar",
  "Ranchi",
  "Dehradun",
  "Bhubaneswar",
  "Kochi",
  "Chandigarh",
  "Agra",
];

const STATS = [
  { value: "500+", label: "Startups", color: "text-white" },
  { value: "120+", label: "Investors", color: "text-white" },
  { value: "₹50Cr+", label: "Pipeline", color: "text-white" },
  { value: "200+", label: "Cities", color: "text-white" },
];

const CYCLING_WORDS = [
  "Top Investors.",
  "Angel Networks.",
  "Leading VCs.",
  "Deal-Makers.",
];

const NOTIFICATIONS = [
  {
    icon: "💰",
    text: "Bharat Angels sent an offer",
    sub: "₹1.2 Cr · Seed Round",
    color: "text-emerald-400",
    border: "border-emerald-500/20",
  },
  {
    icon: "👁️",
    text: "3 new investors viewing",
    sub: "KisanMart live pitch deck",
    color: "text-blue-400",
    border: "border-blue-500/20",
  },
  {
    icon: "🎉",
    text: "Shortlisted by KaroStartup",
    sub: "Shiksha360 joins Cohort 6",
    color: "text-[#f59e0b]",
    border: "border-[#f59e0b]/20",
  },
  {
    icon: "🤝",
    text: "Desh Capital interested",
    sub: "Follow-up meeting booked",
    color: "text-rose-400",
    border: "border-rose-500/20",
  },
];

function CyclingWord() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % CYCLING_WORDS.length),
      2500,
    );
    return () => clearInterval(t);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="text-[#f59e0b] inline-block"
      >
        {CYCLING_WORDS[index]}
      </motion.span>
    </AnimatePresence>
  );
}

function LivePitchCard() {
  const [progress, setProgress] = useState(42);
  const [notifIndex, setNotifIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setProgress((p) => (p >= 78 ? 42 : p + 1)),
      110,
    );
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    const t = setInterval(
      () => setNotifIndex((i) => (i + 1) % NOTIFICATIONS.length),
      2800,
    );
    return () => clearInterval(t);
  }, []);

  const notif = NOTIFICATIONS[notifIndex];

  return (
    <div className="w-full max-w-[380px] rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
      {/* title bar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.05]">
        <span className="section-label !text-white/30">Live Session #47</span>
        <div className="badge-live">
          <div className="badge-live-dot" />
          LIVE
        </div>
      </div>

      <div className="p-5 space-y-4">
        {/* startup info */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center text-lg shrink-0">
            🌾
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-white">
                KisanMart
              </span>
              <span className="mono-tag text-emerald-400/70">AgriTech</span>
            </div>
            <p className="text-xs text-white/30 mt-0.5">
              Indore, MP &middot; Seed Round &middot; ₹1.5 Cr ask
            </p>
          </div>
        </div>

        {/* progress */}
        <div>
          <div className="flex items-baseline justify-between mb-1.5">
            <span className="text-xs text-white/30">Investor interest</span>
            <span className="text-xs font-mono font-medium text-emerald-400">
              {progress}%
            </span>
          </div>
          <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #f59e0b, #22c55e)" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.15, ease: "linear" }}
            />
          </div>
        </div>

        {/* investor avatars */}
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1.5">
            {["RM", "PK", "AS", "SK"].map((init, idx) => (
              <div
                key={init}
                className="w-6 h-6 rounded-full border-2 border-[#07070a] flex items-center justify-center text-[8px] font-bold text-white"
                style={{
                  background: ["#f59e0b", "#3b82f6", "#10b981", "#ef4444"][idx],
                }}
              >
                {init}
              </div>
            ))}
            <div className="w-6 h-6 rounded-full border-2 border-[#07070a] bg-white/[0.08] flex items-center justify-center text-[8px] text-white/40">
              +8
            </div>
          </div>
          <span className="text-[11px] text-white/25">watching</span>
        </div>

        {/* notification feed */}
        <div className="h-px bg-white/[0.05]" />
        <AnimatePresence mode="wait">
          <motion.div
            key={notifIndex}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.25 }}
            className={`flex items-center gap-2.5 p-2.5 rounded-xl border ${notif.border} bg-white/[0.015]`}
          >
            <span className="text-sm leading-none">{notif.icon}</span>
            <div className="min-w-0">
              <p className={`text-[11px] font-medium ${notif.color}`}>
                {notif.text}
              </p>
              <p className="text-[11px] text-white/25 truncate">{notif.sub}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  return (
    <section className="relative bg-[#07070a] overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Warm ambient glow */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#f59e0b]/[0.03] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-rose-600/[0.02] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-32 lg:pt-40 pb-16">
        {/* Eyebrow */}
        <motion.div {...fade(0)} className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-white/50 tracking-wide">
              Accepting applications · 2026 cohort
            </span>
          </div>
        </motion.div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-16 xl:gap-20 items-start">
          {/* Left column */}
          <div>
            {/* Headline */}
            <motion.h1
              {...fade(0.05)}
              className="text-[clamp(2.5rem,7vw,6rem)] font-extrabold tracking-[-0.04em] leading-[0.9] text-white mb-8"
            >
              Where Bharat&rsquo;s
              <br />
              founders meet
              <br />
              <CyclingWord />
            </motion.h1>

            {/* Body copy */}
            <motion.p
              {...fade(0.12)}
              className="text-base sm:text-lg text-white/45 leading-relaxed max-w-md mb-10"
            >
              A pitch platform built for Tier-2 and Tier-3 founders who deserve
              a seat at the table. No gatekeeping, no fluff.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fade(0.18)}
              className="flex flex-wrap items-center gap-3 mb-16"
            >
              <button className="btn-primary">
                <Zap className="w-4 h-4" />
                Apply to Pitch
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="btn-secondary">Explore Startups</button>
            </motion.div>

            {/* Stats - compact row */}
            <motion.div {...fade(0.24)}>
              <div className="flex flex-wrap items-center gap-6">
                {STATS.map(({ value, label }, i) => (
                  <div key={label} className="flex items-center gap-5">
                    {i > 0 && (
                      <span className="hidden sm:block w-px h-8 bg-white/[0.08]" />
                    )}
                    <div>
                      <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                        {value}
                      </span>
                      <span className="block text-[11px] text-white/30 mt-0.5 font-medium uppercase tracking-wider">
                        {label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column: pitch card */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 1 }}
            animate={{ opacity: 1, y: 0, rotate: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hidden lg:block pt-8"
          >
            <LivePitchCard />

            <div className="mt-5 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-xs text-white/25">
                Last funded &mdash; ₹2 Cr by Bharat Angels, 4 days ago
              </span>
            </div>
          </motion.div>
        </div>

        {/* City marquee */}
        <motion.div {...fade(0.3)} className="mt-20">
          <div className="h-px bg-gradient-to-r from-white/[0.06] via-white/[0.08] to-transparent mb-6" />
          <p className="text-[11px] text-white/25 uppercase tracking-widest font-mono mb-4">
            Founders from 200+ cities
          </p>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#07070a] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#07070a] to-transparent z-10 pointer-events-none" />
            <Marquee speed={20} gradient={false}>
              {MARQUEE_CITIES.map((city) => (
                <span
                  key={city}
                  className="mx-5 text-sm text-white/15 hover:text-white/40 transition-colors cursor-default select-none"
                >
                  {city}
                </span>
              ))}
            </Marquee>
          </div>
        </motion.div>

        {/* Mobile pitch card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="lg:hidden mt-14 flex justify-start"
        >
          <LivePitchCard />
        </motion.div>
      </div>
    </section>
  );
}
