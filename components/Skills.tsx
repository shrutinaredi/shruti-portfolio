import ScrollReveal from "./ScrollReveal";

const categories = [
  { icon: "💻", name: "Languages",             skills: ["Java","Python","C++","C","CUDA","JavaScript","SQL","Bash"],                                         span: "col-span-2" },
  { icon: "🧠", name: "ML & AI",               skills: ["PyTorch","vLLM","LangGraph","LangChain","Hugging Face","RAG","scikit-learn","RAPIDS/cuDF"],         span: "col-span-2" },
  { icon: "⚙️", name: "Backend & Frameworks",  skills: ["Spring Boot","FastAPI","REST APIs","GraphQL","gRPC","React","Node.js"],                             span: "" },
  { icon: "☁️", name: "Cloud & DevOps",        skills: ["Kubernetes","Docker","Azure","AWS","GitHub Actions","Jenkins","Terraform"],                         span: "" },
  { icon: "🗄️", name: "Data & Messaging",      skills: ["Apache Kafka","Redis","PostgreSQL","MongoDB","Elasticsearch","Apache Spark"],                       span: "" },
  { icon: "🔧", name: "Systems & Tools",       skills: ["Linux","Git","CUDA Toolkit","Valgrind","GDB","OpenAPI","Prometheus"],                               span: "" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-bg">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <p className="font-mono text-xs text-emerald-DEFAULT tracking-widest uppercase mb-3">// technical skills</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            What I Work <span className="grad-text">With</span>
          </h2>
        </ScrollReveal>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.name} delay={(i % 4) * 0.08}
              className={cat.span === "col-span-2" ? "col-span-2" : ""}
            >
              <div className="p-5 rounded-2xl glass border border-border hover:border-indigo-DEFAULT/30 transition-all duration-300 h-full group">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="text-xl">{cat.icon}</span>
                  <h3 className="text-sm font-semibold text-text group-hover:text-indigo-light transition-colors">{cat.name}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span key={skill}
                      className="text-xs px-2.5 py-1 rounded-lg bg-bg2 border border-border text-muted hover:border-indigo-DEFAULT/40 hover:text-indigo-light transition-all duration-200"
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
