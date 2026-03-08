"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const KAROSTARTUP_STATS = [
  { value: "5+", label: "Years", accent: "#f59e0b" },
  { value: "5K+", label: "Stories", accent: "#34d399" },
  { value: "1M+", label: "Founders", accent: "#fb7185" },
  { value: "28", label: "States", accent: "#60a5fa" },
];

const PILLARS = [
  {
    number: "01",
    title: "Structured Pitch Access",
    desc: "Founders go through a curated process — apply, get shortlisted, and pitch in a closed-room format directly to active investors.",
  },
  {
    number: "02",
    title: "Bharat-First Approach",
    desc: "We go where metros don't. Karo Pitch actively scouts and supports founders from Tier-2 and Tier-3 cities across India.",
  },
  {
    number: "03",
    title: "Built on Community",
    desc: "Backed by KaroStartup — India's largest startup storytelling platform with a community of over 1 million entrepreneurs.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-[#07070a] py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Opening statement - no label, just lead with the insight */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 mb-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white leading-[1.1] tracking-tight">
              <span className="block text-[clamp(1.8rem,4.5vw,3rem)] font-bold">
                Great startups exist everywhere.
              </span>
              <span className="block text-[clamp(1.2rem,3vw,1.75rem)] font-normal text-white/35 mt-3">
                Funding access doesn&apos;t.
              </span>
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-end"
          >
            <p className="text-base sm:text-lg font-light leading-relaxed text-white/45 mb-4">
              After five years documenting India&apos;s startup ecosystem
              through KaroStartup, we kept seeing the same gap: founders with
              real businesses and real traction, but zero access to investors.
            </p>
            <p className="text-sm text-white/30 leading-relaxed">
              Karo Pitch is our fix. A structured platform where geography
              doesn&apos;t decide who gets funded.
            </p>
          </motion.div>
        </div>

        {/* KaroStartup stats - compact inline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
            </div>
            <span className="text-xs font-medium text-white/25 uppercase tracking-wider">
              Backed by KaroStartup
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            {KAROSTARTUP_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-baseline gap-2"
              >
                <span
                  className="text-3xl sm:text-4xl font-bold tracking-tight"
                  style={{ color: stat.accent }}
                >
                  {stat.value}
                </span>
                <span className="text-xs text-white/30 uppercase tracking-wider font-medium">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6">
            <a
              href="https://karostartup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-white/60 font-medium transition-colors group"
            >
              karostartup.com
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Pillars - simpler, no giant background numbers */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="h-px bg-white/[0.05] mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="text-xs font-mono text-white/15 tracking-wider">
                {pillar.number}
              </span>
              <h3 className="text-base font-semibold text-white mb-2 mt-1 tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-sm text-white/35 leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
