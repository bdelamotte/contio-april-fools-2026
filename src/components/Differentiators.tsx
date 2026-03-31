const CTA_URL =
  "https://contio.ai?utm_source=meatingos&utm_medium=aprilfools&utm_campaign=differentiators";

const items = [
  {
    icon: "🚫",
    title: "No bot at your table",
    description:
      "MeatingOS does NOT send a robot to sit at your dinner table. No awkward recording devices. No chewing transcription. We capture meal intelligence without ever recording audio.",
  },
  {
    icon: "🔒",
    title: "Your steak preferences are safe",
    description:
      "100% of AI processing happens in our secure private cloud. Your protein data is never used to train AI models. Your rare-vs-well-done stance remains strictly confidential.",
  },
  {
    icon: "🏗️",
    title: "SOC 2 Type II Certified",
    description:
      "Your brisket data is protected by enterprise-grade security. We completed our SOC 2 Type II audit in March 2026. Full report available for Enterprise Brisket customers.",
  },
  {
    icon: "🌐",
    title: "Works with every grill",
    description:
      "Weber, Traeger, Big Green Egg, Blackstone, charcoal, gas, pellet, campfire, and in-person meatings. Even works with your George Foreman.",
  },
];

export function Differentiators() {
  return (
    <section className="bg-[var(--navy-950)] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-[Merriweather] text-3xl md:text-4xl font-bold text-white">
            Go beyond the AI meat tracker.
          </h2>
          <p className="mt-4 text-lg text-[var(--gray-300)] max-w-2xl mx-auto">
            Other apps count your calories. MeatingOS accelerates your protein
            decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <span className="text-3xl shrink-0">{item.icon}</span>
              <div>
                <h3 className="font-bold text-white text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--gray-300)] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={CTA_URL}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[var(--navy-950)] font-semibold rounded-full hover:bg-[var(--gray-100)] transition-colors"
          >
            Start Meating Better
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 10h10M11 6l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
