"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  { delay: 0,    text: "$ whoami",                        type: "cmd" },
  { delay: 400,  text: "shruti_agarwal",                  type: "out" },
  { delay: 700,  text: "$ cat about.txt",                 type: "cmd" },
  { delay: 1100, text: "MS CS @ UW-Madison  |  GPA: 4.0", type: "out" },
  { delay: 1400, text: "Former SDE II @ Mastercard",       type: "out" },
  { delay: 1700, text: "$ ls projects/",                  type: "cmd" },
  { delay: 2100, text: "self-correcting-llm-agent/  gpu-accelerated-joins/  rag-pipeline/", type: "out" },
  { delay: 2500, text: "$ ./achievements --highlight",    type: "cmd" },
  { delay: 2900, text: "✓  10× latency reduction at Mastercard", type: "out" },
  { delay: 3100, text: "✓  Published research paper",     type: "out" },
  { delay: 3300, text: "✓  Hackathon winner",             type: "out" },
  { delay: 3700, text: "$ echo $STATUS",                  type: "cmd" },
  { delay: 4100, text: "Open to Summer/Fall 2026 internships 🚀", type: "out" },
  { delay: 4500, text: "$ _",                             type: "cmd" },
];

interface Props {
  onClose: () => void;
}

export function SecretTerminal({ onClose }: Props) {
  const [visible, setVisible] = useState<number[]>([]);
  const timerRefs = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    LINES.forEach((line, i) => {
      const t = setTimeout(() => setVisible((prev) => [...prev, i]), line.delay);
      timerRefs.current.push(t);
    });
    return () => timerRefs.current.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, y: 24, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.92, y: 24, opacity: 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl mx-4 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-5 py-3 bg-[#1a1a1a] border-b border-white/10">
          <button onClick={onClose} className="w-3 h-3 rounded-full bg-[#ff5f57] hover:opacity-80 transition-opacity" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 flex-1 text-center text-xs font-mono text-[#525252]">shruti@portfolio ~ zsh</span>
          <span className="text-xs text-[#525252] font-mono">esc to close</span>
        </div>

        {/* Terminal body */}
        <div className="bg-[#0d0d0d] p-6 font-mono text-sm min-h-[320px] space-y-1">
          <AnimatePresence>
            {LINES.map((line, i) =>
              visible.includes(i) ? (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={
                    line.type === "cmd"
                      ? "text-[#10b981]"
                      : "text-[#a3a3a3] pl-4"
                  }
                >
                  {line.text}
                  {i === LINES.length - 1 && (
                    <span className="animate-blink inline-block w-2 h-[14px] bg-[#10b981] ml-0.5 align-middle" />
                  )}
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}
