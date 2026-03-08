"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import StartupCard, { Startup } from "@/components/ui/StartupCard";

const ALL_STARTUPS: Startup[] = [
  {
    id: "1",
    name: "KisanMart",
    tagline:
      "Connecting 2M+ farmers directly to urban buyers, eliminating middlemen and raising farm income by 40%.",
    category: "AgriTech",
    location: "Indore, MP",
    stage: "Pre-Series A",
    fundingTarget: "₹2Cr",
    raised: 65,
    founderName: "Rohit Verma",
    founderInitials: "RV",
    avatarColor: "linear-gradient(135deg, #10b981, #059669)",
    categoryColor: "emerald",
    logo: "🌾",
  },
  {
    id: "2",
    name: "Shiksha360",
    tagline:
      "AI-powered vernacular learning platform for Bharat. 500K+ students from rural India learning in 12 languages.",
    category: "EdTech",
    location: "Jaipur, RJ",
    stage: "Seed",
    fundingTarget: "₹1.5Cr",
    raised: 40,
    founderName: "Ananya Sharma",
    founderInitials: "AS",
    avatarColor: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
    categoryColor: "blue",
    logo: "📚",
  },
  {
    id: "3",
    name: "PayKaro",
    tagline:
      "Embedded finance for kirana stores. Instant credit, digital payments and accounting in one super app.",
    category: "FinTech",
    location: "Surat, GJ",
    stage: "Series A",
    fundingTarget: "₹5Cr",
    raised: 78,
    founderName: "Pradeep Shah",
    founderInitials: "PS",
    avatarColor: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
    categoryColor: "violet",
    logo: "💳",
  },
  {
    id: "4",
    name: "HealthBharat",
    tagline:
      "Telemedicine + diagnostic platform for tier-3 districts. 10-minute doctor consultations at ₹99.",
    category: "HealthTech",
    location: "Lucknow, UP",
    stage: "Pre-Series A",
    fundingTarget: "₹3Cr",
    raised: 52,
    founderName: "Dr. Kavya Mishra",
    founderInitials: "KM",
    avatarColor: "linear-gradient(135deg, #ef4444, #dc2626)",
    categoryColor: "rose",
    logo: "🏥",
  },
  {
    id: "5",
    name: "GreenWatt",
    tagline:
      "Modular solar microgrids for villages and small factories. Powering 200+ communities off-grid.",
    category: "CleanTech",
    location: "Coimbatore, TN",
    stage: "Seed",
    fundingTarget: "₹2.5Cr",
    raised: 30,
    founderName: "Suresh Babu",
    founderInitials: "SB",
    avatarColor: "linear-gradient(135deg, #14b8a6, #0d9488)",
    categoryColor: "teal",
    logo: "⚡",
  },
  {
    id: "6",
    name: "LogiRoute",
    tagline:
      "AI logistics optimization for last-mile delivery in tier-2 markets. 35% cost reduction proven.",
    category: "LogiTech",
    location: "Nagpur, MH",
    stage: "Series A",
    fundingTarget: "₹4Cr",
    raised: 85,
    founderName: "Vikram Joshi",
    founderInitials: "VJ",
    avatarColor: "linear-gradient(135deg, #f59e0b, #d97706)",
    categoryColor: "amber",
    logo: "🚛",
  },
];

const CATEGORIES = [
  "All",
  "AgriTech",
  "EdTech",
  "FinTech",
  "HealthTech",
  "CleanTech",
  "LogiTech",
  "SaaS",
];
const STAGES = ["All Stages", "Seed", "Pre-Series A", "Series A"];

export default function StartupDiscovery() {
  const [category, setCategory] = useState("All");
  const [stage, setStage] = useState("All Stages");
  const [search, setSearch] = useState("");

  const filtered = ALL_STARTUPS.filter((s) => {
    const matchCat = category === "All" || s.category === category;
    const matchStage = stage === "All Stages" || s.stage === stage;
    const matchSearch =
      search === "" ||
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.tagline.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchStage && matchSearch;
  });

  return (
    <section id="startups" className="py-24 lg:py-28 bg-[#07070a] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight"
        >
          Browse startups
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/40 max-w-md mb-10 text-sm leading-relaxed"
        >
          Vetted founders from across Bharat. Filter by category, stage,
          and find your next investment.
        </motion.p>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-3 mb-8"
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search startups..."
              className="w-full pl-11 pr-4 py-3 rounded-full border border-white/[0.06] bg-white/[0.02] text-sm text-white/80 placeholder-white/20 outline-none focus:border-[#f59e0b]/30 transition-colors"
            />
          </div>

          <div className="relative">
            <select
              value={stage}
              onChange={(e) => setStage(e.target.value)}
              className="appearance-none pl-4 pr-10 py-3 rounded-full border border-white/[0.06] bg-[#0f0f14] text-sm text-white/50 outline-none focus:border-[#f59e0b]/30 cursor-pointer"
            >
              {STAGES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25 pointer-events-none" />
          </div>
        </motion.div>

        {/* Category pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`text-sm px-4 py-1.5 rounded-full border transition-all duration-200 ${
                category === cat
                  ? "bg-[#f59e0b] border-[#f59e0b] text-[#07070a] font-semibold"
                  : "border-white/[0.06] bg-white/[0.02] text-white/30 hover:border-[#f59e0b]/30 hover:text-white/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filtered.map((startup, i) => (
              <motion.div
                key={startup.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.96 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <StartupCard startup={startup} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-white/25">No startups match your filters.</p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <button className="btn-secondary mx-auto flex items-center gap-2">
            View All 500+ Startups
            <ChevronDown className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
