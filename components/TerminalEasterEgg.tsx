"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KONAMI = [
  "ArrowUp","ArrowUp","ArrowDown","ArrowDown",
  "ArrowLeft","ArrowRight","ArrowLeft","ArrowRight",
  "b","a",
];

const LINES = [
  { delay: 0,    text: "$ whoami" },
  { delay: 400,  text: "  shruti-agarwal" },
  { delay: 800,  text: "$ cat fun_facts.txt" },
  { delay: 1200, text: "  → published researcher @ ICDMAI 2022 (top 3 paper)" },
  { delay: 1600, text: "  → WeTech Goldman Sachs Scholar 2021" },
  { delay: 2000, text: "  → hackathon winner @ Mastercard (200+ participants)" },
  { delay: 2400, text: "  → wrote CUDA kernels at 2am for fun (send help)" },
  { delay: 2800, text: "  → 4.0 GPA while surviving a Wisconsin winter" },
  { delay: 3200, text: "$ cat current_status.txt" },
  { delay: 3600, text: "  Open to Summer 2026 internships in ML systems & distributed computing." },
  { delay: 4000, text: "  sagarwal235@wisc.edu" },
  { delay: 4400, text: "$ _" },
];

export default function TerminalEasterEgg() {
  const [open, setOpen] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const [keys, setKeys] = useState<string[]>([]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Also open with backtick `
      if (e.key === "`") { setOpen((o) => !o); return; }

      setKeys((prev) => {
        const next = [...prev, e.key].slice(-KONAMI.length);
        if (JSON.stringify(next) === JSON.stringify(KONAMI)) {
          setOpen(true);
        }
        return next;
      });
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Animate lines in when open
  useEffect(() => {
    if (!open) { setVisibleLines(0); return; }
    LINES.forEach((line, i) => {
      setTimeout(() => setVisibleLines(i + 1), line.delay);
    });
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Terminal window */}
          <div
            className="relative z-10 w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl border border-surface2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title bar */}
            <div className="bg-surface flex items-center gap-2 px-4 py-3 border-b border-border">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-3 text-xs text-dim font-mono">shruti@portfolio ~ — terminal</span>
              <button
                className="ml-auto text-dim hover:text-muted text-sm"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Terminal body */}
            <div className="bg-bg3 p-6 font-mono text-sm leading-7 min-h-[280px]">
              {LINES.slice(0, visibleLines).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={
                    line.text.startsWith("$")
                      ? "text-teal-light"
                      : line.text.includes("→")
                      ? "text-muted"
                      : "text-purple-light"
                  }
                >
                  {line.text}
                </motion.div>
              ))}
            </div>

            <div className="bg-bg3 border-t border-border px-6 py-2 text-xs text-dim font-mono">
              press <kbd className="px-1 py-0.5 bg-surface rounded text-teal-light">`</kbd> or click outside to close &nbsp;·&nbsp; <span className="text-purple-light">you found the easter egg 🎉</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
