"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag,
  Cpu,
  Factory,
  HeartPulse,
  Leaf,
  Wheat,
  Store,
  Globe2,
  ArrowRight,
} from "lucide-react";

const CATEGORIES = [
  {
    icon: ShoppingBag,
    label: "D2C Brands",
    desc: "Direct-to-consumer products with traction and a clear path to scale across India.",
    accent: "#f59e0b",
  },
  {
    icon: Cpu,
    label: "SaaS & Tech",
    desc: "B2B software, AI tools, or developer platforms riding India's SaaS wave.",
    accent: "#60a5fa",
  },
  {
    icon: Store,
    label: "MSMEs",
    desc: "Traditional businesses going digital, expanding operations, or seeking growth capital.",
    accent: "#fb923c",
  },
  {
    icon: Factory,
    label: "Manufacturing",
    desc: "Made-in-India stories from production units to supply chain innovators.",
    accent: "#a78bfa",
  },
  {
    icon: HeartPulse,
    label: "HealthTech",
    desc: "Affordable diagnostics, medical devices, and wellness platforms built for Bharat.",
    accent: "#fb7185",
  },
  {
    icon: Wheat,
    label: "AgriTech",
    desc: "Precision farming, kisan fintech, and farm-to-fork infrastructure.",
    accent: "#34d399",
  },
  {
    icon: Leaf,
    label: "CleanTech & EV",
    desc: "Renewables, EV infrastructure, and sustainability-first business models.",
    accent: "#2dd4bf",
  },
  {
    icon: Globe2,
    label: "Bharat-First",
    desc: "Products solving real problems for 800M people in Tier-2 and Tier-3 India.",
    accent: "#fbbf24",
  },
];

export default function WhoCanApply() {
  return (
    <section id="apply" className="py-24 lg:py-28 bg-[#07070a] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight mb-3"
          >
            Who can apply?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 text-base leading-relaxed"
          >
            Early-stage founders across sectors. A product, a few customers,
            and genuine ambition is all it takes.
          </motion.p>
        </div>

        {/* Category grid - asymmetric bento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {CATEGORIES.map(({ icon: Icon, label, desc, accent }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group relative p-6 rounded-2xl border border-white/[0.05] bg-white/[0.015] hover:bg-white/[0.03] transition-all duration-300 cursor-default ${
                i < 2 ? "lg:col-span-2" : ""
              }`}
            >
              {/* Accent line on top */}
              <div
                className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${accent}40, transparent)` }}
              />

              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300"
                style={{ background: `${accent}10` }}
              >
                <Icon className="w-5 h-5" style={{ color: accent }} />
              </div>
              <h3 className="text-white font-semibold text-sm mb-1.5 tracking-tight">{label}</h3>
              <p className="text-white/35 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-14">
          <div className="h-px bg-white/[0.05] mb-8" />
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
          >
            <div>
              <p className="text-white font-semibold text-base">Not sure if you fit?</p>
              <p className="text-white/25 text-sm mt-1">
                If you have a real business with real customers, apply anyway. We read every one.
              </p>
            </div>
            <button className="btn-primary flex-shrink-0">
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
