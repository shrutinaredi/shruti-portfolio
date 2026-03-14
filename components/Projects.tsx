import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";

const projects = [
  {
    icon: "🤖",
    name: "Self-Correcting LLM Agent",
    desc: "A multi-stage agentic system that autonomously identifies and corrects reasoning errors in LLM outputs. Combines vLLM for high-throughput inference, LangGraph for stateful orchestration, and a RAG pipeline backed by vector embeddings. Reduces hallucination rates by 40% on benchmarks.",
    metrics: [
      { val: "40%", lbl: "Fewer hallucinations" },
      { val: "3×",  lbl: "vLLM throughput"      },
    ],
    tags: ["Python","vLLM","LangGraph","RAG","Vector DB","LLM Agents"],
    github: "https://github.com/shrutinaredi",
    accent: "indigo",
  },
  {
    icon: "⚡",
    name: "GPU-Accelerated Joins — Sirius SQL",
    desc: "Implemented high-performance hash join and sort-merge join operators in CUDA C++ for the Sirius SQL Engine, leveraging libcudf (RAPIDS) for GPU-native DataFrame ops. Massive throughput gains over CPU-bound alternatives for analytical queries.",
    metrics: [
      { val: "GPU", lbl: "Native execution" },
      { val: "SQL", lbl: "Query engine"     },
    ],
    tags: ["CUDA","C++","libcudf","RAPIDS","HPC","SQL Engine"],
    github: "https://github.com/shrutinaredi",
    accent: "emerald",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-bg2">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <p className="font-mono text-xs text-emerald-DEFAULT tracking-widest uppercase mb-3">// projects</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Things I&apos;ve <span className="grad-text">Built</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.15}>
              <TiltCard className="h-full">
                <div className={`h-full p-6 rounded-2xl flex flex-col ${p.accent === "indigo" ? "grad-border-2" : "grad-border-2"}`}
                  style={{
                    background: p.accent === "indigo"
                      ? "linear-gradient(var(--bg2), var(--bg2)) padding-box, linear-gradient(135deg, #6366f1, #8b5cf6) border-box"
                      : "linear-gradient(var(--bg2), var(--bg2)) padding-box, linear-gradient(135deg, #10b981, #6366f1) border-box",
                    border: "1px solid transparent",
                  }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl">{p.icon}</span>
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="text-xs text-dim hover:text-indigo-light border border-border hover:border-indigo-DEFAULT/50 px-3 py-1.5 rounded-lg transition-all duration-200 font-mono"
                    >
                      ↗ GitHub
                    </a>
                  </div>

                  <h3 className="text-base font-bold text-text mb-3">{p.name}</h3>
                  <p className="text-sm text-dim leading-relaxed mb-5 flex-1">{p.desc}</p>

                  {/* Metrics */}
                  <div className="flex gap-6 py-4 border-y border-border mb-5">
                    {p.metrics.map((m) => (
                      <div key={m.lbl}>
                        <div className="text-xl font-bold grad-text">{m.val}</div>
                        <div className="text-xs text-dim">{m.lbl}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-bg border border-border text-muted hover:border-indigo-DEFAULT/40 hover:text-indigo-light transition-all duration-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
