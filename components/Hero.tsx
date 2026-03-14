"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};
const word = {
  hidden: { opacity: 0, y: 48, filter: "blur(10px)" },
  show: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const CODE_LINES = [
  { t: "comment", text: "# current_mission.py" },
  { t: "blank",   text: "" },
  { t: "keyword", text: "from", rest: " shruti import Engineer" },
  { t: "blank",   text: "" },
  { t: "var",     text: "me", rest: " = Engineer(" },
  { t: "prop",    text: '  role',     val: '"SDE II → MS CS @ UW-Madison",' },
  { t: "prop",    text: '  stack',    val: '["Java","CUDA","Python","K8s"],' },
  { t: "prop",    text: '  research', val: '["LLM Agents","GPU Systems"],' },
  { t: "prop",    text: '  gpa',      val: "4.0," },
  { t: "prop",    text: '  status',   val: '"Open to Summer 2026"' },
  { t: "var",     text: ")" },
  { t: "blank",   text: "" },
  { t: "call",    text: "me.reduce_latency",  suffix: "(by='10x')   # checkmark" },
  { t: "call",    text: "me.publish_paper",   suffix: "()          # checkmark" },
  { t: "call",    text: "me.win_hackathon",   suffix: "()          # checkmark" },
];

const stats = [
  { value: "3",  label: "Years as SDE at Mastercard" },
  { value: "10x", label: "Latency Reduction"   },
  { value: "4.0", label: "GPA @ UW-Madison"    },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden dot-grid noise">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-indigo-DEFAULT/10 blur-[140px] animate-float" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-emerald-DEFAULT/8 blur-[120px] animate-float-delay" />
        <div className="absolute -bottom-20 left-1/3 w-[400px] h-[400px] rounded-full bg-indigo-dark/10 blur-[100px] animate-float-delay2" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass border border-indigo-DEFAULT/20 text-sm text-muted mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-DEFAULT opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-DEFAULT" />
              </span>
              MS CS @ UW-Madison &nbsp;&middot;&nbsp; Open to Summer/Fall 2026 internships
            </motion.div>

            <motion.h1 variants={container} initial="hidden" animate="show"
              className="text-5xl md:text-7xl font-bold leading-[1.15] tracking-tight mb-5 overflow-visible pb-2"
            >
              {["Shruti", "Agarwal"].map((w, i) => (
                <motion.span key={w} variants={word} className={`block overflow-visible ${i === 1 ? "grad-text" : ""}`}>{w}</motion.span>
              ))}
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-lg md:text-xl text-muted mb-3 font-medium"
            >
              <span className="text-text font-semibold">Software Engineer</span> with builder mindset.
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.68 }}
              className="text-dim leading-relaxed max-w-md mb-10"
            >
              CS graduate student at the University of Wisconsin–Madison and former Software Engineer at Mastercard with 3 years of experience building scalable backend systems and shipping production features. Seeking Summer and Fall 2026 Software Engineering internships. Prev:{" "}
              <span className="text-text font-semibold">Mastercard SDE II</span>.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <a href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-DEFAULT hover:bg-indigo-dark text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-indigo-DEFAULT/30 hover:-translate-y-0.5"
              >
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                View My Work
              </a>
              <a href="mailto:sagarwal235@wisc.edu"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-muted hover:border-emerald-DEFAULT/60 hover:text-emerald-light font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Get In Touch
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.95 }}
              className="flex flex-wrap gap-8 pt-8 border-t border-border"
            >
              {stats.map((s) => <AnimatedCounter key={s.label} value={s.value} label={s.label} />)}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-DEFAULT/10 blur-3xl rounded-3xl" />
              <div className="relative rounded-2xl overflow-hidden grad-border">
                <div className="flex items-center gap-2 px-5 py-3.5 bg-bg3 border-b border-border">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <span className="ml-3 text-xs font-mono text-dim">current_mission.py</span>
                </div>
                <div className="p-6 font-mono text-sm leading-[1.9] bg-bg2">
                  {CODE_LINES.map((line, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + i * 0.06 }}
                    >
                      {line.t === "blank"   && <div>&nbsp;</div>}
                      {line.t === "comment" && <div className="text-dim italic">{line.text}</div>}
                      {line.t === "keyword" && <div><span className="text-indigo-light font-semibold">{line.text}</span><span className="text-text">{line.rest}</span></div>}
                      {line.t === "var"     && <div><span className="text-emerald-light">{line.text}</span><span className="text-muted">{line.rest}</span></div>}
                      {line.t === "prop"    && <div><span className="text-indigo-light">{line.text}</span><span className="text-muted">=</span><span className="text-amber-light">{line.val}</span></div>}
                      {line.t === "call"    && <div><span className="text-emerald-DEFAULT">{line.text}</span><span className="text-muted">{line.suffix}</span></div>}
                    </motion.div>
                  ))}
                  <div className="mt-1 text-emerald-DEFAULT flex items-center">
                    <span>&#8250;</span>
                    <span className="animate-blink ml-1 inline-block w-2 h-[18px] bg-emerald-DEFAULT align-middle" />
                  </div>
                </div>
              </div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-6 glass rounded-xl px-4 py-2.5 border border-emerald-DEFAULT/30 text-xs font-mono text-emerald-light shadow-xl"
              >
                GPA: 4.0 &nbsp;&middot;&nbsp; 0 vulnerabilities
              </motion.div>
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 4, delay: 1, ease: "easeInOut" }}
                className="absolute -top-5 -right-4 glass rounded-xl px-4 py-2.5 border border-indigo-DEFAULT/30 text-xs font-mono text-indigo-light shadow-xl"
              >
                Hackathon Winner &middot; Published
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-dim text-xs"
      >
        <span className="tracking-widest uppercase text-[10px]">scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-7 bg-gradient-to-b from-indigo-DEFAULT/70 to-transparent"
        />
      </motion.div>
    </section>
  );
}
