import ScrollReveal from "./ScrollReveal";

const achievements = [
  {
    icon: "🏆",
    title: "Mastercard Internal Hackathon Winner",
    detail: "1st place out of 200+ participants. Built an AI-powered fraud detection prototype that reduced false positives by 30%.",
    year: "2025",
  },
  {
    icon: "📄",
    title: "Top 3 Paper Award — ICDMAI",
    detail: "Published and presented research on NLP-based automated essay scoring at the International Conference on Data Management & AI.",
    year: "Sep 2022",
  },
  {
    icon: "🎓",
    title: "WeTech Goldman Sachs Scholar",
    detail: "Awarded to high-achieving women in technology by Goldman Sachs & the Institute of International Education.",
    year: "2021",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-bg">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal>
          <p className="font-mono text-xs text-teal-DEFAULT tracking-widest uppercase mb-3">
            // recognition
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Achievements &amp; <span className="grad-text">Awards</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 0.1}>
              <div className="p-6 rounded-xl bg-surface border border-border hover:border-purple-DEFAULT/40 transition-all duration-300 h-full flex flex-col">
                <span className="text-3xl mb-4">{a.icon}</span>
                <h3 className="text-sm font-semibold text-[#e2e8f0] mb-2 leading-snug">
                  {a.title}
                </h3>
                <p className="text-xs text-dim leading-relaxed flex-1">{a.detail}</p>
                <p className="text-xs font-mono text-teal-DEFAULT mt-4">{a.year}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
