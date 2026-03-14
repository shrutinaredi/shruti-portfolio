import ScrollReveal from "./ScrollReveal";

const highlights = [
  {
    icon: "🧠",
    title: "ML Systems & LLM Research",
    desc: "Building self-correcting agents with vLLM, LangGraph & RAG pipelines",
  },
  {
    icon: "⚡",
    title: "GPU & High-Performance Computing",
    desc: "CUDA kernels, libcudf, and parallel algorithms for data-intensive workloads",
  },
  {
    icon: "☁️",
    title: "Cloud-Native Distributed Systems",
    desc: "Kubernetes, Kafka, Spring Boot microservices on Azure & AWS",
  },
  {
    icon: "🔬",
    title: "Published Researcher",
    desc: "Top 3 Paper Award at ICDMAI 2022 — NLP & deep learning applications",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-bg2">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <ScrollReveal>
              <p className="font-mono text-xs text-teal-DEFAULT tracking-widest uppercase mb-3">
                // about me
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                Engineer. Researcher.{" "}
                <span className="grad-text">Problem Solver.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-dim leading-relaxed mb-4">
                I&apos;m a{" "}
                <strong className="text-[#e2e8f0]">CS grad student at UW-Madison</strong>{" "}
                with a passion for systems programming and applied ML. My work spans
                the full stack — from writing CUDA kernels that accelerate SQL joins
                to architecting cloud-native microservices handling millions of
                transactions daily.
              </p>
              <p className="text-dim leading-relaxed mb-4">
                At{" "}
                <strong className="text-[#e2e8f0]">Mastercard</strong>, I spent
                three years as an SDE II improving platform reliability and building
                APIs at scale. I&apos;ve reduced P99 latencies by 10×, driven
                zero-downtime migrations, and shipped systems used across 80+ markets.
              </p>
              <p className="text-dim leading-relaxed">
                My current research sits at the intersection of{" "}
                <strong className="text-[#e2e8f0]">LLM inference optimization</strong>{" "}
                and{" "}
                <strong className="text-[#e2e8f0]">GPU-accelerated data systems</strong>.
                I&apos;m a published researcher, hackathon winner, and a WeTech Goldman Sachs Scholar.
              </p>
            </ScrollReveal>
          </div>

          {/* Highlight cards */}
          <div className="flex flex-col gap-4">
            {highlights.map((h, i) => (
              <ScrollReveal key={h.title} delay={i * 0.1} direction="right">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border hover:border-purple-DEFAULT/40 transition-colors duration-300">
                  <span className="text-2xl flex-shrink-0">{h.icon}</span>
                  <div>
                    <h4 className="text-sm font-semibold text-[#e2e8f0] mb-1">
                      {h.title}
                    </h4>
                    <p className="text-xs text-dim leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
