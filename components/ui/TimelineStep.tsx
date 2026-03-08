"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface TimelineStepProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

export default function TimelineStep({
  step,
  title,
  description,
  icon,
  isLast = false,
}: TimelineStepProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: (step - 1) * 0.15, ease: "easeOut" }}
      className="flex gap-6 relative"
    >
      {/* Line */}
      {!isLast && (
        <motion.div
          className="absolute left-[22px] top-14 w-px bg-gradient-to-b from-violet-500/40 to-transparent"
          initial={{ height: 0 }}
          animate={inView ? { height: "calc(100% - 3rem)" } : {}}
          transition={{ duration: 0.8, delay: (step - 1) * 0.15 + 0.4 }}
          style={{ minHeight: "60px" }}
        />
      )}

      {/* Step indicator */}
      <div className="flex-shrink-0 flex flex-col items-center">
        <motion.div
          className="w-11 h-11 rounded-xl glass-strong border border-violet-500/30 flex items-center justify-center text-violet-400 relative z-10"
          whileHover={{ scale: 1.1, borderColor: "rgba(139,92,246,0.6)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {icon}
          {/* Glow */}
          <div className="absolute inset-0 rounded-xl bg-violet-500/10 blur-sm" />
        </motion.div>
        <div className="mt-1.5 w-5 h-5 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
          <span className="text-[10px] font-bold text-violet-400">{step}</span>
        </div>
      </div>

      {/* Content */}
      <div className="pb-10 flex-1">
        <h3 className="font-semibold text-slate-100 text-lg mb-2">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
