"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  { id: "1", quote: "Karo Pitch changed my life. I spent 6 months getting ignored by investors. Within 3 weeks on Karo Pitch, I had 4 interested backers and closed my seed round. The platform is built for founders like me from small towns.", author: "Rohit Verma", role: "Founder, KisanMart", location: "Indore, MP", initials: "RV", raised: "\u20B91.2Cr", color: "#f59e0b" },
  { id: "2", quote: "The problem with fundraising in India is the network gap. Karo Pitch eliminates that. Their curation of investors who genuinely care about tier-2 startups is unmatched. The pitch preparation workshops alone were worth it.", author: "Ananya Sharma", role: "Co-Founder, Shiksha360", location: "Jaipur, RJ", initials: "AS", raised: "\u20B980L", color: "#60a5fa" },
  { id: "3", quote: "I was skeptical about online pitch platforms. But Karo Pitch is different\u2014real investors, real conversations, real term sheets. Dr. Sunita Patel from India Growth Fund found us through Karo Pitch and led our round.", author: "Dr. Kavya Mishra", role: "Founder & CEO, HealthBharat", location: "Lucknow, UP", initials: "KM", raised: "\u20B92Cr", color: "#fb7185" },
  { id: "4", quote: "Three rejections made me feel like the problem was where I was from. Karo Pitch showed investors that Surat has world-class founders. The team\u2019s feedback loop between rejections was invaluable for refining our pitch.", author: "Pradeep Shah", role: "Founder, PayKaro", location: "Surat, GJ", initials: "PS", raised: "\u20B93.5Cr", color: "#34d399" },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);
  const t = TESTIMONIALS[active];

  return (
    <section className="py-28 bg-[#07070a] relative">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label mb-6"
        >
          Testimonials
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-4xl sm:text-5xl font-extrabold text-white mb-16 tracking-tight"
        >
          Founders <span className="text-[#f59e0b]">love us</span>
        </motion.h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            {/* Accent bar */}
            <div className="w-12 h-1 rounded-full mb-8" style={{ background: t.color }} />

            {/* Quote */}
            <blockquote className="text-xl sm:text-2xl lg:text-[1.75rem] text-white/70 leading-relaxed font-light mb-10 max-w-3xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Author info */}
            <div className="h-px bg-white/[0.05] mb-6" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-white text-base">{t.author}</p>
                  <p className="text-sm text-white/30">{t.role} &middot; {t.location}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-white/20 mb-0.5">Raised via Karo Pitch</p>
                <p className="text-lg font-bold text-[#f59e0b]">{t.raised}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex items-center gap-4 mt-12">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-white hover:border-white/20 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 bg-[#f59e0b]"
                    : "w-1.5 bg-white/10 hover:bg-white/20"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-white hover:border-white/20 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
