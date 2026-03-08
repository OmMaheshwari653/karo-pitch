"use client";

import Tilt from "react-parallax-tilt";
import { MapPin, TrendingUp, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export interface Startup {
  id: string;
  name: string;
  tagline: string;
  category: string;
  location: string;
  stage: string;
  fundingTarget: string;
  raised: number;
  founderName: string;
  founderInitials: string;
  avatarColor: string;
  categoryColor: string;
  logo: string;
}

const categoryColors: Record<string, string> = {
  AgriTech: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  EdTech: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  FinTech: "bg-violet-500/15 text-violet-400 border-violet-500/20",
  HealthTech: "bg-rose-500/15 text-rose-400 border-rose-500/20",
  CleanTech: "bg-teal-500/15 text-teal-400 border-teal-500/20",
  LogiTech: "bg-amber-500/15 text-amber-400 border-amber-500/20",
  SaaS: "bg-indigo-500/15 text-indigo-400 border-indigo-500/20",
  RetailTech: "bg-pink-500/15 text-pink-400 border-pink-500/20",
};

export default function StartupCard({ startup }: { startup: Startup }) {
  const colorClass =
    categoryColors[startup.category] ||
    "bg-slate-500/15 text-slate-400 border-slate-500/20";

  return (
    <Tilt
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      glareEnable={true}
      glareMaxOpacity={0.06}
      glareColor="#f59e0b"
      glarePosition="all"
      glareBorderRadius="16px"
      transitionSpeed={400}
      className="rounded-2xl"
    >
      <motion.div
        className="rounded-2xl p-5 h-full flex flex-col gap-4 cursor-pointer group relative overflow-hidden bg-white/[0.02]"
        whileHover={{ borderColor: "rgba(245,158,11,0.2)" }}
        style={{ border: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* Header */}
        <div className="flex items-start justify-between relative z-10">
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-lg font-bold"
              style={{ background: startup.avatarColor }}
            >
              {startup.logo}
            </div>
            <div>
              <h3 className="font-semibold text-white text-sm leading-tight">
                {startup.name}
              </h3>
              <p className="text-xs text-white/25 mt-0.5 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {startup.location}
              </p>
            </div>
          </div>
          <div
            className={`text-xs font-medium px-2.5 py-1 rounded-full border ${colorClass}`}
          >
            {startup.category}
          </div>
        </div>

        {/* Tagline */}
        <p className="text-sm text-white/35 leading-relaxed relative z-10">
          {startup.tagline}
        </p>

        {/* Funding bar */}
        <div className="relative z-10">
          <div className="flex justify-between text-xs text-white/25 mb-1.5">
            <span className="flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-[#f59e0b]" />
              Seeking {startup.fundingTarget}
            </span>
            <span className="text-[#f59e0b] font-medium">
              {startup.raised}% raised
            </span>
          </div>
          <div className="h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #f59e0b, #34d399)" }}
              initial={{ width: 0 }}
              whileInView={{ width: `${startup.raised}%` }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-1 border-t border-white/[0.04] relative z-10">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
              style={{ background: startup.avatarColor }}
            >
              {startup.founderInitials}
            </div>
            <span className="text-xs text-white/30">{startup.founderName}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/20 bg-white/[0.04] px-2 py-0.5 rounded-full">
              {startup.stage}
            </span>
            <ArrowUpRight className="w-4 h-4 text-white/15 group-hover:text-[#f59e0b] transition-colors" />
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
}
