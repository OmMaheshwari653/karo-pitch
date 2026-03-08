"use client";

import { motion } from "framer-motion";
import { ExternalLink, TrendingUp } from "lucide-react";

export interface Investor {
  id: string;
  name: string;
  firm: string;
  role: string;
  focus: string[];
  totalDeals: number;
  portfolioSize: string;
  initials: string;
  avatarGradient: string;
  location: string;
}

export default function InvestorCard({ investor }: { investor: Investor }) {
  return (
    <motion.div
      className="glass rounded-2xl p-6 flex flex-col gap-4 cursor-pointer group relative overflow-hidden"
      whileHover={{ y: -6, borderColor: "rgba(139,92,246,0.3)" }}
      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl pointer-events-none" />

      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Header */}
      <div className="flex items-start gap-4 relative z-10">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold text-white flex-shrink-0"
          style={{ background: investor.avatarGradient }}
        >
          {investor.initials}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-slate-100 text-base leading-tight">
            {investor.name}
          </h3>
          <p className="text-sm text-violet-400 font-medium mt-0.5">
            {investor.firm}
          </p>
          <p className="text-xs text-slate-500 mt-0.5">{investor.role}</p>
        </div>
        <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-violet-400 transition-colors flex-shrink-0" />
      </div>

      {/* Focus areas */}
      <div className="flex flex-wrap gap-1.5 relative z-10">
        {investor.focus.map((f) => (
          <span
            key={f}
            className="text-xs bg-white/5 border border-white/8 text-slate-400 px-2.5 py-1 rounded-lg"
          >
            {f}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/5 relative z-10">
        <div>
          <p className="text-xs text-slate-600 mb-1">Portfolio Size</p>
          <p className="text-sm font-semibold text-slate-200">
            {investor.portfolioSize}
          </p>
        </div>
        <div>
          <p className="text-xs text-slate-600 mb-1">Total Deals</p>
          <p className="text-sm font-semibold text-slate-200 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            {investor.totalDeals}+
          </p>
        </div>
      </div>
    </motion.div>
  );
}
