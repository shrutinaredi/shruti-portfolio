import ScrollReveal from "./ScrollReveal";

const education = [
  {
    degree: "M.S. Computer Science",
    school: "University of Wisconsin-Madison",
    date: "Aug 2025 – May 2027",
    gpa: "4.0 / 4.0",
    courses: "Advanced OS, Distributed Systems, Deep Learning Systems, Database Internals, GPU Computing",
  },
  {
    degree: "B.Tech Computer Science",
    school: "Cummins College of Engineering for Women, Pune",
    date: "Aug 2018 – May 2022",
    gpa: "8.8 / 10",
    courses: "Data Structures & Algorithms, OS, DBMS, Computer Networks, Machine Learning, NLP",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-bg2">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <p className="font-mono text-xs text-teal-DEFAULT tracking-widest uppercase mb-3">
            // education
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Academic <span className="grad-text">Background</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <ScrollReveal key={edu.school} delay={i * 0.1}>
              <div className="p-6 rounded-xl bg-surface border border-border hover:border-purple-DEFAULT/40 transition-all duration-300 h-full">
                <h3 className="text-base font-bold text-[#e2e8f0] mb-1">{edu.degree}</h3>
                <p className="text-sm text-muted mb-3">{edu.school}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-purple-DEFAULT/20 text-purple-light border border-purple-DEFAULT/30">
                    {edu.date}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-teal-DEFAULT/20 text-teal-light border border-teal-DEFAULT/30">
                    GPA: {edu.gpa}
                  </span>
                </div>
                <p className="text-xs text-dim leading-relaxed">
                  <span className="text-muted font-medium">Coursework: </span>
                  {edu.courses}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
