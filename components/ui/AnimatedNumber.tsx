"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { cn } from "@/lib/utils";

interface AnimatedNumberProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

export default function AnimatedNumber({
  end,
  prefix = "",
  suffix = "",
  duration = 2.5,
  className,
  decimals = 0,
}: AnimatedNumberProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {inView ? (
        <CountUp
          end={end}
          duration={duration}
          decimals={decimals}
          separator=","
          enableScrollSpy={false}
        />
      ) : (
        "0"
      )}
      {suffix}
    </span>
  );
}
