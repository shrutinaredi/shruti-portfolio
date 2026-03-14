import ScrollReveal from "./ScrollReveal";

const highlights = [
  { icon: "🧠", title: "Full Stack Developer",               desc: "Backend systems at Mastercard using Java & Spring Boot, revamped UI with JavaScript & Angular" },
  { icon: "⚡", title: "GPU & High-Performance Computing",   desc: "CUDA kernels, libcudf, parallel algorithms for data-intensive workloads" },
  { icon: "☁️", title: "Cloud-Native Distributed Systems",  desc: "Kubernetes, Kafka, Spring Boot microservices on Azure & AWS" },
  { icon: "🔬", title: "Published Researcher",              desc: "Top 3 Paper Award at ICDMAI 2022 — NLP & deep learning" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-bg2">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Text */}
          <div>
            <ScrollReveal>
              <p className="font-mono text-xs text-emerald tracking-widest uppercase mb-3">// about me</p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                Engineer. Researcher. <span className="grad-text">Problem Solver.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="space-y-4 text-dim leading-relaxed">
                <p>
                  I&apos;m a <strong className="text-text">CS grad student at UW-Madison</strong> with a passion for systems
                  programming and applied ML — from writing CUDA kernels that accelerate SQL joins to architecting
                  cloud-native microservices handling millions of transactions daily.
                </p>
                <p>
                  At <strong className="text-text">Mastercard</strong>, I spent three years as an SDE II reducing P99
                  latencies by 10×, driving zero-downtime migrations, and shipping systems across 80+ markets.
                </p>
                <p>
                  My current research sits at the intersection of{" "}
                  <strong className="text-text">LLM inference optimization</strong> and{" "}
                  <strong className="text-text">GPU-accelerated data systems</strong>.
                  I&apos;m a published researcher, hackathon winner, and WeTech Goldman Sachs Scholar.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Highlight cards — bento style */}
          <div className="grid grid-cols-2 gap-3">
            {highlights.map((h, i) => (
              <ScrollReveal key={h.title} delay={i * 0.08} direction="right">
                <div className="p-4 rounded-2xl glass border border-border hover:border-emerald/30 transition-all duration-300 h-full group">
                  <span className="text-2xl mb-3 block">{h.icon}</span>
                  <h4 className="text-xs font-semibold text-text mb-1.5 leading-snug group-hover:text-emerald-light transition-colors">{h.title}</h4>
                  <p className="text-xs text-dim leading-relaxed">{h.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
