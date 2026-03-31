const features = [
  {
    icon: "🤖",
    title: "Contio Intelligence Engine",
    description:
      "Our proprietary AI reads nutritional data, protein reports, grocery histories, and grill performance metrics to give you live intelligence during every meating.",
  },
  {
    icon: "📊",
    title: "Real-Time Macro Dashboard",
    description:
      "Watch your protein, carbs, and fats update in real-time as you eat. Get alerts when you're falling behind on your daily targets.",
  },
  {
    icon: "🗓️",
    title: "Calendar Integration",
    description:
      "MeatingOS syncs with Google Calendar, Outlook, and Apple Calendar to schedule your meatings and send nutrition prep materials to all attendees.",
  },
  {
    icon: "🔗",
    title: "Partner Apps Program",
    description:
      "Connect MeatingOS to Traeger, Weber Connect, Omaha Steaks, and 12+ other partner apps through our open ecosystem.",
  },
  {
    icon: "🎙️",
    title: "Voice Chat",
    description:
      'Ask MeatingOS anything mid-meal. "How many grams of protein in this ribeye?" "Should I flip the chicken?" "When is the brisket done?"',
  },
  {
    icon: "📝",
    title: "Compliance Transcripts",
    description:
      "For regulated protein professionals. Every meating generates a detailed transcript for nutritional compliance and audit purposes.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-[var(--background-page)] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-solid)] mb-2">
            Features
          </p>
          <h2 className="font-[Merriweather] text-3xl md:text-4xl font-bold text-[var(--gray-950)]">
            Everything you need to meat better.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white p-6 rounded-2xl border border-[var(--gray-100)] hover:shadow-md transition-shadow"
            >
              <span className="text-3xl">{f.icon}</span>
              <h3 className="text-lg font-bold text-[var(--gray-900)] mt-4 mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
