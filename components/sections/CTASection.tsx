"use client";

import { motion } from "framer-motion";
import { Zap, ArrowRight, Users, TrendingUp } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-28 bg-[#07070a] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-6"
        >
          Ready to Start
        </motion.p>

        {/* Main row: headline left, buttons right */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 mb-10">
          <div className="lg:max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/[0.04] mb-5"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse-glow" />
              <span className="text-xs font-medium text-[#f59e0b]">
                Now accepting applications for 2026 cohort
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5"
            >
              Ready to pitch your{" "}
              <span className="text-[#f59e0b]">startup?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-lg text-white/35 leading-relaxed max-w-lg"
            >
              Join 500+ founders who refused to let geography be their ceiling.
              Your next big meeting is one pitch away.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0"
          >
            <button className="btn-primary text-base px-8 py-3.5">
              <Zap className="w-4 h-4" />
              Apply Now — It&apos;s Free
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="btn-secondary text-base px-8 py-3.5">
              <Users className="w-4 h-4 text-[#60a5fa]" />
              Become an Investor
            </button>
          </motion.div>
        </div>

        <div className="h-px bg-white/[0.05] mb-8" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8"
        >
          {[
            { icon: TrendingUp, label: "No upfront cost", color: "text-[#34d399]" },
            { icon: Zap, label: "48-hr review", color: "text-[#f59e0b]" },
            { icon: Users, label: "120+ active investors", color: "text-[#60a5fa]" },
          ].map(({ icon: Icon, label, color }) => (
            <div key={label} className="flex items-center gap-2 text-sm text-white/25">
              <Icon className={`w-4 h-4 ${color}`} />
              {label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
