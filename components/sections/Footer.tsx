"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";

const FOOTER_LINKS = {
  Platform: ["Explore Startups", "Investor Network", "How It Works", "Pricing", "Success Stories"],
  Company: ["About Us", "Team", "Careers", "Blog", "Press"],
  Resources: ["Pitch Deck Guide", "Funding Roadmap", "Investor FAQs", "Startup Toolkit", "Community"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer"],
};

export default function Footer() {
  return (
    <footer className="bg-[#07070a] border-t border-white/[0.04] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-8">
        {/* KaroStartup social links */}
        <div className="flex flex-wrap items-center gap-3 mb-10 pb-8 border-b border-white/[0.04]">
          <span className="text-xs text-white/20 font-medium uppercase tracking-wide">
            Follow KaroStartup:
          </span>
          {[
            { label: "Instagram", href: "https://www.instagram.com/karo_startup_/", icon: Instagram, color: "hover:text-pink-400" },
            { label: "LinkedIn", href: "https://www.linkedin.com/company/karo-startup/", icon: Linkedin, color: "hover:text-blue-400" },
            { label: "Twitter/X", href: "https://x.com/karo_startup", icon: Twitter, color: "hover:text-white/70" },
          ].map(({ label, href, icon: Icon, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`flex items-center gap-1.5 text-xs text-white/20 ${color} transition-colors`}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </a>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#f59e0b] flex items-center justify-center">
                <span className="text-[#07070a] font-extrabold text-sm leading-none">K</span>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                Karo<span className="text-[#f59e0b]">Pitch</span>
              </span>
            </div>
            <p className="text-sm text-white/25 leading-relaxed mb-5 max-w-xs">
              Bridging ambitious founders from every corner of India with the
              investors who believe in Bharat&apos;s potential.
            </p>

            {/* Newsletter */}
            <div className="flex gap-2 max-w-xs">
              <input
                placeholder="your@email.com"
                className="flex-1 px-3.5 py-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] text-sm text-white/60 placeholder-white/15 outline-none focus:border-[#f59e0b]/30 transition-colors"
              />
              <button className="px-3.5 py-2.5 rounded-full bg-[#f59e0b] hover:bg-[#fbbf24] transition-colors text-[#07070a] flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-white/15 mt-2">Get weekly startup digest</p>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/20 hover:text-white/50 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-white/15">
            <p>&copy; 2026 Karo Pitch &middot; A KaroStartup Initiative</p>
            <span className="hidden sm:block">&middot;</span>
            <p className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              Made in Bharat
            </p>
          </div>
          <div className="flex items-center gap-1 text-xs text-white/10">
            <span>Building the future of Indian startups</span>
            <ArrowUpRight className="w-3 h-3 text-[#f59e0b]/40" />
          </div>
        </div>
      </div>
    </footer>
  );
}
