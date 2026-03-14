import ScrollReveal from "./ScrollReveal";

const categories = [
  {
    icon: "💻",
    name: "Languages",
    skills: ["Java", "Python", "C++", "C", "CUDA", "JavaScript", "SQL", "Bash"],
  },
  {
    icon: "🧠",
    name: "ML & AI",
    skills: ["PyTorch", "vLLM", "LangGraph", "LangChain", "Hugging Face", "RAG", "scikit-learn", "RAPIDS/cuDF"],
  },
  {
    icon: "⚙️",
    name: "Backend & Frameworks",
    skills: ["Spring Boot", "FastAPI", "REST APIs", "GraphQL", "gRPC", "React", "Node.js"],
  },
  {
    icon: "☁️",
    name: "Cloud & DevOps",
    skills: ["Kubernetes", "Docker", "Azure", "AWS", "GitHub Actions", "Jenkins", "Terraform"],
  },
  {
    icon: "🗄️",
    name: "Data & Messaging",
    skills: ["Apache Kafka", "Redis", "PostgreSQL", "MongoDB", "Elasticsearch", "Apache Spark"],
  },
  {
    icon: "🔧",
    name: "Systems & Tools",
    skills: ["Linux", "Git", "CUDA Toolkit", "Valgrind", "GDB", "OpenAPI", "Prometheus"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-bg">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <p className="font-mono text-xs text-teal-DEFAULT tracking-widest uppercase mb-3">
            // technical skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            What I Work <span className="grad-text">With</span>
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.name} delay={(i % 3) * 0.1}>
              <div className="p-5 rounded-xl bg-surface border border-border hover:border-purple-DEFAULT/40 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">{cat.icon}</span>
                  <h3 className="text-sm font-semibold text-[#e2e8f0]">{cat.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-md bg-bg2 border border-border text-muted hover:border-purple-DEFAULT/40 hover:text-purple-light transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
