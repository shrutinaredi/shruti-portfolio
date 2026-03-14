"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Props {
  value: string; // e.g. "3+", "10×", "4.0"
  label: string;
}

export default function AnimatedCounter({ value, label }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState("0");

  useEffect(() => {
    if (!inView) return;

    // Extract numeric part and suffix
    const numeric = parseFloat(value.replace(/[^0-9.]/g, ""));
    const suffix = value.replace(/[0-9.]/g, "");
    const duration = 1200;
    const steps = 40;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numeric * eased;
      // Format: preserve decimal places from original value
      const decimals = (value.match(/\.(\d+)/) || ["", ""])[1].length;
      setDisplayed(current.toFixed(decimals) + suffix);
      if (step >= steps) {
        clearInterval(timer);
        setDisplayed(value); // exact final value
      }
    }, interval);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold grad-text tabular-nums">{displayed}</div>
      <div className="text-xs text-dim mt-1 font-medium tracking-wide">{label}</div>
    </div>
  );
}
