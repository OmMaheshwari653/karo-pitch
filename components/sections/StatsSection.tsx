"use client";

import { motion } from "framer-motion";
import AnimatedNumber from "@/components/ui/AnimatedNumber";

const STATS = [
  { end: 5000, suffix: "+", label: "Startup Stories Published", sublabel: "From every Indian state", accent: "#f59e0b" },
  { end: 1, suffix: "M+", label: "Founders Reached", sublabel: "Monthly active readers", accent: "#34d399" },
  { end: 200, suffix: "+", label: "Investors in Network", sublabel: "Active deal-makers", accent: "#60a5fa" },
  { end: 28, suffix: " States", label: "Pan-India Coverage", sublabel: "All Union Territories too", accent: "#fb7185" },
];

export default function StatsSection() {
  return (
    <section className="py-28 relative bg-[#07070a]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-6"
        >
          By the Numbers
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-4xl sm:text-5xl font-extrabold text-white mb-20 tracking-tight"
        >
          Building India&apos;s largest{" "}
          <span className="text-[#f59e0b]">startup ecosystem</span>
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {STATS.map(({ end, suffix, label, sublabel, accent }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`py-6 ${
                i < STATS.length - 1 ? "lg:border-r border-white/[0.04]" : ""
              } ${i > 0 ? "lg:pl-8" : ""} ${
                i < 2 ? "border-b lg:border-b-0 border-white/[0.04] pb-8 lg:pb-6" : "pt-8 lg:pt-6"
              } ${i === 0 || i === 2 ? "pr-6 border-r border-white/[0.04] lg:border-r" : "pl-6 lg:pl-8"}`}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-2 tracking-tight" style={{ color: accent }}>
                <AnimatedNumber end={end} suffix={suffix} duration={2.5} />
              </div>
              <p className="text-sm font-medium text-white/50 mb-0.5">{label}</p>
              <p className="text-xs text-white/20">{sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
