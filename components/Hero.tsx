"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const word = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const HERO_WORDS = ["Shruti", "Agarwal"];

const stats = [
  { value: "3+", label: "Years at Mastercard" },
  { value: "10×", label: "Latency Reduction" },
  { value: "4.0", label: "GPA @ UW-Madison" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden grid-pattern"
    >
      {/* Animated blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-DEFAULT/10 blur-[120px] animate-float" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-teal-DEFAULT/10 blur-[100px] animate-float-delay" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-pink-DEFAULT/8 blur-[80px] animate-float-delay2" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-DEFAULT/10 border border-purple-DEFAULT/30 text-sm text-muted mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal-DEFAULT animate-pulse" />
          MS CS @ UW-Madison &nbsp;·&nbsp; Open to Summer 2026
        </motion.div>

        {/* Name with blur-reveal */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="text-6xl md:text-8xl font-bold leading-tight tracking-tight mb-4 flex flex-wrap gap-x-5"
        >
          {HERO_WORDS.map((w, i) => (
            <motion.span
              key={w}
              variants={word}
              className={i === 1 ? "grad-text" : "text-[#e2e8f0]"}
            >
              {w}
            </motion.span>
          ))}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl md:text-2xl text-muted font-medium mb-4"
        >
          <span className="text-[#e2e8f0] font-semibold">Software Engineer</span> &amp; ML Systems Researcher
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="max-w-[560px] text-dim text-base leading-relaxed mb-10"
        >
          I build distributed systems at scale and push the boundaries of ML
          infrastructure — from GPU-accelerated query engines to self-correcting
          LLM agents. Prev:{" "}
          <span className="text-[#e2e8f0] font-semibold">Mastercard SDE II</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-DEFAULT hover:bg-purple-DEFAULT/80 text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-purple-DEFAULT/25 hover:-translate-y-0.5"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-muted hover:border-purple-DEFAULT/50 hover:text-purple-light font-medium transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Get In Touch
          </a>
        </motion.div>

        {/* Animated stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap gap-10 border-t border-border pt-8"
        >
          {stats.map((s) => (
            <AnimatedCounter key={s.label} value={s.value} label={s.label} />
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-dim text-xs"
      >
        <span>scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          className="w-0.5 h-6 bg-gradient-to-b from-purple-light/60 to-transparent rounded"
        />
      </motion.div>
    </section>
  );
}
