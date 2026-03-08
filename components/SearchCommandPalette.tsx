"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Rocket,
  Users,
  Tag,
  TrendingUp,
  MapPin,
  X,
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

const SEARCH_DATA = {
  startups: [
    { name: "KisanMart", category: "AgriTech", location: "Indore" },
    { name: "Shiksha360", category: "EdTech", location: "Jaipur" },
    { name: "PayKaro", category: "FinTech", location: "Surat" },
    { name: "HealthBharat", category: "HealthTech", location: "Lucknow" },
    { name: "GreenWatt", category: "CleanTech", location: "Coimbatore" },
    { name: "LogiRoute", category: "LogiTech", location: "Nagpur" },
    { name: "CloudDukan", category: "SaaS", location: "Vadodara" },
    { name: "MandiBridge", category: "AgriTech", location: "Bhopal" },
  ],
  investors: [
    { name: "Rajiv Mehta", firm: "Bharat Angels" },
    { name: "Priya Kapoor", firm: "Tier2 Ventures" },
    { name: "Arjun Singh", firm: "Desh Capital" },
    { name: "Sunita Patel", firm: "India Growth Fund" },
  ],
  categories: [
    "AgriTech",
    "EdTech",
    "FinTech",
    "HealthTech",
    "CleanTech",
    "LogiTech",
    "SaaS",
    "RetailTech",
  ],
};

interface SearchCommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchCommandPalette({
  isOpen,
  onClose,
}: SearchCommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!isOpen) {
      const id = requestAnimationFrame(() => setQuery(""));
      return () => cancelAnimationFrame(id);
    }
  }, [isOpen]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={(o) => !o && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay asChild>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />
        </Dialog.Overlay>
        <Dialog.Content asChild>
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed top-[15%] left-1/2 -translate-x-1/2 w-full max-w-xl z-[101]"
          >
            <Command className="rounded-2xl overflow-hidden shadow-2xl">
              {/* Input */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/8">
                <Search className="w-5 h-5 text-slate-500 flex-shrink-0" />
                <Command.Input
                  value={query}
                  onValueChange={setQuery}
                  placeholder="Search startups, investors, categories..."
                  className="flex-1 bg-transparent outline-none text-slate-100 placeholder-slate-500 text-base"
                  autoFocus
                />
                <button
                  onClick={onClose}
                  className="text-slate-600 hover:text-slate-400 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <kbd className="text-xs text-slate-600 bg-white/5 px-1.5 py-0.5 rounded">
                  esc
                </kbd>
              </div>

              <Command.List className="p-2 max-h-[380px] overflow-y-auto">
                <Command.Empty>
                  <div className="flex flex-col items-center py-8 gap-2">
                    <Search className="w-8 h-8 text-slate-600" />
                    <p className="text-slate-500 text-sm">
                      No results for &ldquo;{query}&rdquo;
                    </p>
                  </div>
                </Command.Empty>

                {/* Startups */}
                <Command.Group heading="Startups">
                  {SEARCH_DATA.startups.map((s) => (
                    <Command.Item
                      key={s.name}
                      value={`${s.name} ${s.category} ${s.location}`}
                      onSelect={onClose}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-slate-400 hover:text-slate-100 hover:bg-violet-500/10 transition-all"
                    >
                      <div className="w-7 h-7 rounded-lg bg-violet-500/15 flex items-center justify-center flex-shrink-0">
                        <Rocket className="w-3.5 h-3.5 text-violet-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-medium text-sm text-slate-200">
                          {s.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-xs text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-md">
                          {s.category}
                        </span>
                        <span className="text-xs text-slate-600 flex items-center gap-0.5">
                          <MapPin className="w-3 h-3" />
                          {s.location}
                        </span>
                      </div>
                    </Command.Item>
                  ))}
                </Command.Group>

                {/* Investors */}
                <Command.Group heading="Investors">
                  {SEARCH_DATA.investors.map((inv) => (
                    <Command.Item
                      key={inv.name}
                      value={`${inv.name} ${inv.firm}`}
                      onSelect={onClose}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer hover:bg-violet-500/10 transition-all"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-500/15 flex items-center justify-center flex-shrink-0">
                        <Users className="w-3.5 h-3.5 text-blue-400" />
                      </div>
                      <span className="font-medium text-sm text-slate-200 flex-1">
                        {inv.name}
                      </span>
                      <span className="text-xs text-blue-400">{inv.firm}</span>
                    </Command.Item>
                  ))}
                </Command.Group>

                {/* Categories */}
                <Command.Group heading="Categories">
                  <div className="flex flex-wrap gap-2 px-3 py-2">
                    {SEARCH_DATA.categories.map((cat) => (
                      <Command.Item
                        key={cat}
                        value={cat}
                        onSelect={onClose}
                        className="text-xs text-slate-400 bg-white/5 border border-white/8 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-violet-500/15 hover:text-violet-300 hover:border-violet-500/30 transition-all"
                      >
                        <Tag className="w-3 h-3 inline mr-1.5 text-violet-400" />
                        {cat}
                      </Command.Item>
                    ))}
                  </div>
                </Command.Group>
              </Command.List>

              {/* Footer */}
              <div className="border-t border-white/5 px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <span className="flex items-center gap-1">
                    <kbd className="bg-white/5 px-1 rounded text-slate-500">
                      ↑↓
                    </kbd>
                    navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="bg-white/5 px-1.5 rounded text-slate-500">
                      ↵
                    </kbd>
                    select
                  </span>
                </div>
                <span className="text-xs text-slate-600 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> Karo Pitch
                </span>
              </div>
            </Command>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
