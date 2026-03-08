"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface Investor {
  id: string;
  name: string;
  firm: string;
  role: string;
  focus: string[];
  totalDeals: number;
  portfolioSize: string;
  initials: string;
  avatarColor: string;
  location: string;
}

const INVESTORS: Investor[] = [
  { id: "1", name: "Rajiv Mehta", firm: "Bharat Angels Network", role: "General Partner", focus: ["AgriTech", "EdTech", "Rural SaaS"], totalDeals: 34, portfolioSize: "₹120Cr", initials: "RM", avatarColor: "#f59e0b", location: "Mumbai" },
  { id: "2", name: "Priya Kapoor", firm: "Tier2 Ventures", role: "Managing Partner", focus: ["FinTech", "HealthTech", "D2C"], totalDeals: 22, portfolioSize: "₹80Cr", initials: "PK", avatarColor: "#fb7185", location: "Bangalore" },
  { id: "3", name: "Arjun Singh", firm: "Desh Capital", role: "Founding Partner", focus: ["CleanTech", "LogiTech", "AgriTech"], totalDeals: 18, portfolioSize: "₹60Cr", initials: "AS", avatarColor: "#34d399", location: "Delhi" },
  { id: "4", name: "Sunita Patel", firm: "India Growth Fund", role: "Venture Partner", focus: ["EdTech", "SaaS", "RetailTech"], totalDeals: 29, portfolioSize: "₹200Cr", initials: "SP", avatarColor: "#60a5fa", location: "Ahmedabad" },
  { id: "5", name: "Karthik Raman", firm: "South Ventures", role: "Angel Investor", focus: ["HealthTech", "CleanTech", "AI/ML"], totalDeals: 15, portfolioSize: "₹45Cr", initials: "KR", avatarColor: "#a78bfa", location: "Chennai" },
  { id: "6", name: "Neha Joshi", firm: "Uday Fund", role: "Investment Director", focus: ["FinTech", "InsurTech", "WealthTech"], totalDeals: 26, portfolioSize: "₹150Cr", initials: "NJ", avatarColor: "#2dd4bf", location: "Pune" },
];

export default function InvestorsSection() {
  return (
    <section id="investors" className="py-24 lg:py-28 bg-[#0a0a0f] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight mb-3"
        >
          The investor network
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-white/40 text-sm leading-relaxed max-w-md mb-12"
        >
          120+ investors actively deploying into startups from Tier-2 and Tier-3 cities.
          Real check-writers, not just advisors.
        </motion.p>

        {/* Investor cards grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {INVESTORS.map((investor, i) => (
            <motion.div
              key={investor.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.06 * i }}
              className="group p-5 rounded-2xl border border-white/[0.05] bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: investor.avatarColor }}
                >
                  <span className="text-[11px] font-bold text-white leading-none">
                    {investor.initials}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white truncate">{investor.name}</p>
                  <p className="text-[12px] text-white/25 truncate">{investor.role}, {investor.firm}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {investor.focus.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02] text-white/30">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/[0.04]">
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-xs text-white/20 block">Portfolio</span>
                    <span className="text-sm font-semibold text-white/60">{investor.portfolioSize}</span>
                  </div>
                  <div>
                    <span className="text-xs text-white/20 block">Deals</span>
                    <span className="text-sm font-semibold text-white/60">{investor.totalDeals}</span>
                  </div>
                </div>
                <span className="text-xs text-white/20">{investor.location}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10"
        >
          <button className="btn-secondary flex items-center gap-2">
            View All 120+ Investors
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
