"use client";

import { motion } from "framer-motion";
import { FileText, CheckCircle2, Video, Banknote } from "lucide-react";

const STEPS = [
  {
    num: "01",
    icon: <FileText className="w-5 h-5" />,
    title: "Apply with Your Pitch Deck",
    description:
      "Submit your startup profile, pitch deck, and key metrics through our streamlined application form. Our team reviews every application within 48 hours.",
    accent: "#f59e0b",
  },
  {
    num: "02",
    icon: <CheckCircle2 className="w-5 h-5" />,
    title: "Get Shortlisted",
    description:
      "Our expert panel of ex-founders and investors evaluates your submission. Top 10% get shortlisted for the next round. You receive detailed feedback regardless of outcome.",
    accent: "#34d399",
  },
  {
    num: "03",
    icon: <Video className="w-5 h-5" />,
    title: "Pitch Live to Investors",
    description:
      "Join a curated virtual or in-person pitch session with 5-15 relevant investors. Karo Pitch matches you with investors specifically interested in your sector and stage.",
    accent: "#60a5fa",
  },
  {
    num: "04",
    icon: <Banknote className="w-5 h-5" />,
    title: "Raise Funding",
    description:
      "Close your round with interested investors. Karo Pitch facilitates introductions, due diligence support, and term sheet negotiations to get you to a yes faster.",
    accent: "#fb7185",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-28 relative bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight mb-3">
            How it works
          </h2>
          <p className="text-white/35 text-base max-w-md leading-relaxed">
            From pitch deck to term sheet in four steps.
            Transparent. Founder-first.
          </p>
        </motion.div>

        {/* Steps - cleaner layout */}
        <div>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-8 py-8 md:py-10 border-t border-white/[0.06] items-start">
                {/* Step number + icon */}
                <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${step.accent}12`, color: step.accent }}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-white tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/40 leading-relaxed text-sm max-w-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/[0.06]" />
        </div>
      </div>
    </section>
  );
}
