import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    title: "Software Development Engineer II",
    company: "Mastercard",
    location: "Pune, India",
    date: "May 2022 – Aug 2025",
    color: "bg-purple-DEFAULT",
    bullets: [
      "Architected and launched a Merchant Onboarding API using Java Spring Boot & PostgreSQL, enabling seamless integration for merchants across 80+ global markets.",
      "Re-engineered the real-time notification system using Kafka and Redis, achieving a 10× reduction in P99 latency (320ms → 28ms).",
      "Led a zero-downtime migration of a mission-critical monolith to a Kubernetes microservices architecture on Azure, reducing operational costs by 40%.",
      "Developed a shared Spring Boot starter library adopted across 15+ internal services, standardizing auth, logging, and error handling org-wide.",
      "Mentored 3 junior engineers; drove adoption of contract-first API design using OpenAPI, cutting integration bugs by 35%.",
    ],
    tags: [
      { label: "Java", color: "bg-purple-DEFAULT/20 text-purple-light border-purple-DEFAULT/30" },
      { label: "Spring Boot", color: "bg-purple-DEFAULT/20 text-purple-light border-purple-DEFAULT/30" },
      { label: "Kubernetes", color: "bg-teal-DEFAULT/20 text-teal-light border-teal-DEFAULT/30" },
      { label: "Kafka", color: "bg-teal-DEFAULT/20 text-teal-light border-teal-DEFAULT/30" },
      { label: "Azure", color: "bg-green-500/20 text-green-300 border-green-500/30" },
    ],
  },
  {
    title: "Database Engineering Intern",
    company: "Veritas Technologies",
    location: "Pune, India",
    date: "Jan 2022 – May 2022",
    color: "bg-teal-DEFAULT",
    bullets: [
      "Contributed to the NetBackup CloudPoint data protection platform, developing SQL query optimizations that reduced backup metadata retrieval time by 25%.",
      "Built automated regression tests for database backup & recovery workflows using Python, increasing test coverage by 30%.",
      "Debugged and resolved critical data consistency issues in distributed snapshot management.",
    ],
    tags: [
      { label: "Python", color: "bg-purple-DEFAULT/20 text-purple-light border-purple-DEFAULT/30" },
      { label: "SQL", color: "bg-teal-DEFAULT/20 text-teal-light border-teal-DEFAULT/30" },
      { label: "C++", color: "bg-green-500/20 text-green-300 border-green-500/30" },
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company: "Mastercard",
    location: "Pune, India",
    date: "May 2021 – Jul 2021",
    color: "bg-pink-DEFAULT",
    bullets: [
      "Designed and shipped a real-time dashboard for internal transaction analytics using React and D3.js, giving the ops team instant visibility into processing pipelines.",
      "Integrated the dashboard with backend REST APIs, improving alert response time by 60% and earning a full-time return offer.",
    ],
    tags: [
      { label: "React", color: "bg-purple-DEFAULT/20 text-purple-light border-purple-DEFAULT/30" },
      { label: "D3.js", color: "bg-teal-DEFAULT/20 text-teal-light border-teal-DEFAULT/30" },
      { label: "Java", color: "bg-pink-DEFAULT/20 text-pink-300 border-pink-DEFAULT/30" },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-bg">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <p className="font-mono text-xs text-teal-DEFAULT tracking-widest uppercase mb-3">
            // work experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Where I&apos;ve <span className="grad-text">Worked</span>
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <ScrollReveal key={exp.title + exp.company} delay={i * 0.1}>
                <div className="relative pl-12">
                  {/* Dot */}
                  <div className={`absolute left-0 top-2 w-7 h-7 rounded-full ${exp.color} flex items-center justify-center shadow-lg shadow-${exp.color}/30`}>
                    <div className="w-2 h-2 rounded-full bg-bg" />
                  </div>

                  {/* Card */}
                  <div className="p-6 rounded-xl bg-surface border border-border hover:border-purple-DEFAULT/40 transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-base font-semibold text-[#e2e8f0]">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-muted mt-0.5">
                          {exp.company} &mdash; {exp.location}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-dim bg-bg3 px-3 py-1 rounded-full border border-border whitespace-nowrap">
                        {exp.date}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((b) => (
                        <li key={b} className="text-sm text-dim leading-relaxed flex gap-2">
                          <span className="text-teal-DEFAULT mt-1 flex-shrink-0">›</span>
                          <span dangerouslySetInnerHTML={{ __html: b.replace(/(\d+[\+×%][\w\s]*|80\+|15\+|3[\s]junior)/g, '<strong class="text-[#e2e8f0]">$&</strong>') }} />
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((t) => (
                        <span key={t.label} className={`text-xs px-2.5 py-1 rounded-md border font-medium ${t.color}`}>
                          {t.label}
                        </span>
                      ))}
                    </div>
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
