const stages = [
  {
    label: "Before the Meating",
    emoji: "📋",
    title: "Brilliant Meal Prep",
    description:
      "AI drafts your meal plan based on past meatings, surfaces macros from your nutrition history, identifies optimal protein sources, and gathers grocery data — so you never show up to a meal unprepared.",
    features: [
      "AI-drafted meal agendas",
      "Nutrition context from past meatings",
      "Smart grocery list generation",
      "Protein source recommendations",
    ],
  },
  {
    label: "During the Meating",
    emoji: "🔥",
    title: "Sharp In-Meal Intelligence",
    description:
      "Real-time bite tracking, live macro insights, and contextual protein alerts. MeatingOS surfaces critical nutritional data points while you eat so every bite is a decisive moment.",
    features: [
      "Live macro tracking",
      "\"You're 23g short on protein\" alerts",
      "Real-time grill temperature monitoring",
      "Voice chat with your butcher",
    ],
  },
  {
    label: "After the Meating",
    emoji: "✅",
    title: "Flawless Follow-Through",
    description:
      "Generates comprehensive nutrition notes, creates one-click grocery action items, and distributes leftovers instantly. Never lose track of what was consumed or what needs restocking.",
    features: [
      "AI-powered nutrition recap",
      "One-click grocery action items",
      "Leftover distribution automation",
      "Macro deficit tracking",
    ],
  },
];

export function ValueProp() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-[Merriweather] text-3xl md:text-4xl font-bold text-[var(--gray-950)]">
            Before. During. After.
          </h2>
          <p className="mt-4 text-lg text-[var(--gray-500)] max-w-2xl mx-auto">
            MeatingOS transforms every stage of your meal into a force for
            accomplishing great gains.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stages.map((stage) => (
            <div
              key={stage.label}
              className="relative p-8 rounded-2xl border border-[var(--gray-100)] hover:border-[var(--purple-500)]/30 transition-colors group"
            >
              <div className="text-4xl mb-4">{stage.emoji}</div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-solid)] mb-2">
                {stage.label}
              </p>
              <h3 className="text-xl font-bold text-[var(--gray-900)] mb-3">
                {stage.title}
              </h3>
              <p className="text-[var(--gray-600)] text-sm leading-relaxed mb-6">
                {stage.description}
              </p>
              <ul className="space-y-2">
                {stage.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-[var(--gray-700)]"
                  >
                    <svg
                      className="w-4 h-4 mt-0.5 text-[var(--brand-solid)] shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
