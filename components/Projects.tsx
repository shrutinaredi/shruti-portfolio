import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";

const projects = [
  {
    icon: "🤖",
    name: "Self-Correcting LLM Agent",
    desc: "A multi-stage agentic system that autonomously identifies and corrects reasoning errors in LLM outputs. Combines vLLM for high-throughput inference, LangGraph for stateful orchestration, and a RAG pipeline backed by vector embeddings. Runs iterative verification loops, reducing hallucination rates by 40% on benchmarks.",
    metrics: [
      { val: "40%", lbl: "Fewer hallucinations" },
      { val: "3×", lbl: "vLLM throughput" },
    ],
    tags: [
      { label: "Python", c: "purple" },
      { label: "vLLM", c: "purple" },
      { label: "LangGraph", c: "purple" },
      { label: "RAG", c: "teal" },
      { label: "Vector DB", c: "teal" },
      { label: "LLM Agents", c: "pink" },
    ],
    github: "https://github.com/shrutinaredi",
  },
  {
    icon: "⚡",
    name: "GPU-Accelerated Joins — Sirius SQL Engine",
    desc: "Implemented high-performance hash join and sort-merge join operators directly in CUDA C++ for the Sirius SQL Engine, leveraging libcudf (RAPIDS) for GPU-native DataFrame operations. Achieved massive throughput improvements over CPU-bound alternatives for large-scale analytical queries.",
    metrics: [
      { val: "GPU", lbl: "Native execution" },
      { val: "SQL", lbl: "Query engine" },
    ],
    tags: [
      { label: "CUDA", c: "green" },
      { label: "C++", c: "green" },
      { label: "libcudf", c: "teal" },
      { label: "RAPIDS", c: "teal" },
      { label: "HPC", c: "pink" },
      { label: "SQL Engine", c: "purple" },
    ],
    github: "https://github.com/shrutinaredi",
  },
];

const tagColor: Record<string, string> = {
  purple: "bg-purple-DEFAULT/20 text-purple-light border-purple-DEFAULT/30",
  teal: "bg-teal-DEFAULT/20 text-teal-light border-teal-DEFAULT/30",
  pink: "bg-pink-DEFAULT/20 text-pink-300 border-pink-DEFAULT/30",
  green: "bg-green-500/20 text-green-300 border-green-500/30",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-bg2">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <p className="font-mono text-xs text-teal-DEFAULT tracking-widest uppercase mb-3">
            // projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Things I&apos;ve <span className="grad-text">Built</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.15}>
              <TiltCard className="h-full">
                <div className="h-full p-6 rounded-xl bg-surface border border-border hover:border-purple-DEFAULT/50 transition-colors duration-300 flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{p.icon}</span>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-dim hover:text-purple-light border border-border hover:border-purple-DEFAULT/50 px-3 py-1.5 rounded-lg transition-all duration-200"
                    >
                      ↗ GitHub
                    </a>
                  </div>

                  {/* Name */}
                  <h3 className="text-base font-semibold text-[#e2e8f0] mb-3">
                    {p.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-dim leading-relaxed mb-5 flex-1">
                    {p.desc}
                  </p>

                  {/* Metrics */}
                  <div className="flex gap-6 mb-5 py-3 border-y border-border">
                    {p.metrics.map((m) => (
                      <div key={m.lbl}>
                        <div className="text-lg font-bold grad-text">{m.val}</div>
                        <div className="text-xs text-dim">{m.lbl}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t.label}
                        className={`text-xs px-2.5 py-1 rounded-md border font-medium ${tagColor[t.c]}`}
                      >
                        {t.label}
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
