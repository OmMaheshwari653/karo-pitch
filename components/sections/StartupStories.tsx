"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, BookOpen } from "lucide-react";

const STORIES = [
  { id: "1", startup: "KisanMart", logo: "\uD83C\uDF3E", founder: "Rohit Verma", founderInitials: "RV", title: "How a Farmer\u2019s Son Built a \u20B910Cr AgriTech from Indore", excerpt: "Growing up watching his father struggle with middlemen, Rohit built KisanMart to directly connect 50,000 farmers to buyers. Here\u2019s the full journey from \u20B90 to \u20B910Cr ARR.", category: "AgriTech", readTime: "8 min", tag: "Founder Story" },
  { id: "2", startup: "Shiksha360", logo: "\uD83D\uDCDA", founder: "Ananya Sharma", founderInitials: "AS", title: "Teaching 500K Rural Students With No English Content", excerpt: "Ananya cracked the vernacular EdTech puzzle that Byju\u2019s and Unacademy couldn\u2019t. Her insight from Rajasthan classrooms changed how they build the product completely.", category: "EdTech", readTime: "6 min", tag: "Product Insight" },
  { id: "3", startup: "PayKaro", logo: "\uD83D\uDCB3", founder: "Pradeep Shah", founderInitials: "PS", title: "We Got 3 No\u2019s Before Bharat Angels Said Yes", excerpt: "Pradeep shares the unfiltered story of pitching to 20+ investors, what went wrong, how Karo Pitch helped refine the narrative, and the moment everything clicked.", category: "FinTech", readTime: "10 min", tag: "Fundraising" },
  { id: "4", startup: "GreenWatt", logo: "\u26A1", founder: "Suresh Babu", founderInitials: "SB", title: "Powering 200 Villages in Tamil Nadu with \u20B91Cr Raised", excerpt: "Suresh proves you don\u2019t need a Silicon Valley network to solve India\u2019s energy problem. A bootstrapped journey from Coimbatore that is now attracting global climate tech funds.", category: "CleanTech", readTime: "7 min", tag: "Impact Story" },
  { id: "5", startup: "HealthBharat", logo: "\uD83C\uDFE5", founder: "Dr. Kavya Mishra", founderInitials: "KM", title: "Doctor in a Tier-3 Town: A Case for Rural Healthtech", excerpt: "Dr. Kavya gave up a city hospital salary to bring affordable diagnostics to UP\u2019s smallest towns. How she built HealthBharat\u2019s 10-minute consultation at \u20B999.", category: "HealthTech", readTime: "9 min", tag: "Founder Story" },
  { id: "6", startup: "LogiRoute", logo: "\uD83D\uDE9B", founder: "Vikram Joshi", founderInitials: "VJ", title: "Cracking Last-Mile Delivery in India\u2019s Heartland", excerpt: "Vikram turned his failed logistics company into a data goldmine. How he pivoted LogiRoute into an AI-first platform that delivers 35% cost savings to e-commerce players.", category: "LogiTech", readTime: "5 min", tag: "Product Insight" },
];

export default function StartupStories() {
  const featured = STORIES[0];
  const rest = STORIES.slice(1);

  return (
    <section id="stories" className="py-24 lg:py-28 bg-[#0a0a0f] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight"
        >
          From the founders
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/40 max-w-md mb-12 text-sm leading-relaxed"
        >
          Real journeys from Tier-2 and Tier-3 founders. Honest, unfiltered, and
          worth your time.
        </motion.p>

        {/* Featured story */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-7 sm:p-10 mb-4 cursor-pointer group rounded-2xl border border-white/[0.05] bg-white/[0.015] hover:bg-white/[0.03] transition-all duration-300"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="lg:max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#f59e0b]/20 text-[#f59e0b]/70 bg-[#f59e0b]/[0.05]">
                  {featured.tag}
                </span>
                <span className="text-xs text-white/20 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {featured.readTime}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-3 group-hover:text-[#f59e0b] transition-colors">
                {featured.title}
              </h3>
              <p className="text-base text-white/35 leading-relaxed mb-5">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-xs font-semibold text-white/40">
                  {featured.founderInitials}
                </div>
                <span className="text-sm text-white/30">{featured.founder}</span>
                <span className="text-white/10">&middot;</span>
                <span className="text-sm text-white/20">{featured.category}</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-4xl">
                {featured.logo}
              </div>
            </div>
          </div>
        </motion.article>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {rest.map((story, i) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="p-6 cursor-pointer group flex flex-col rounded-2xl border border-white/[0.05] bg-white/[0.015] hover:bg-white/[0.03] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="mono-tag">{story.tag}</span>
                <span className="text-xs text-white/20 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {story.readTime}
                </span>
              </div>

              <h3 className="text-base font-semibold text-white/80 leading-snug mb-2 group-hover:text-white transition-colors">
                {story.title}
              </h3>

              <p className="text-sm text-white/25 leading-relaxed flex-1 mb-5">
                {story.excerpt}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/[0.04]">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-xs font-semibold text-white/30">
                    {story.founderInitials}
                  </div>
                  <span className="text-xs text-white/25">{story.founder}</span>
                  <span className="text-white/10">&middot;</span>
                  <span className="text-xs text-white/20">{story.category}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-white/10 group-hover:text-[#f59e0b] group-hover:translate-x-0.5 transition-all" />
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <button className="btn-secondary flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Browse All Stories
          </button>
        </motion.div>
      </div>
    </section>
  );
}
