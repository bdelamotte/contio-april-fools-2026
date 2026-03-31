const steps = [
  {
    number: "1",
    title: "Connect your kitchen",
    description:
      "Link your grocery apps, smart grill, fitness tracker, and calendar. MeatingOS syncs with DoorDash, Instacart, Whole Foods, Costco, and your mom's recipe book.",
  },
  {
    number: "2",
    title: "MeatingOS does the prep",
    description:
      "Before every meating, AI drafts your meal plan, surfaces macros from past meatings, and generates a grocery list. You just show up hungry.",
  },
  {
    number: "3",
    title: "Eat decisively",
    description:
      "During the meating, real-time macro insights appear as you eat. After, you get a full nutrition recap, action items, and leftover assignments. Every meal becomes a decisive protein moment.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-solid)] mb-2">
            How it works
          </p>
          <h2 className="font-[Merriweather] text-3xl md:text-4xl font-bold text-[var(--gray-950)]">
            As easy as 1, 2, eat.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--brand-light)] text-[var(--brand-solid)] font-bold text-lg mb-4 border-2 border-[var(--purple-500)]/20">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-[var(--gray-900)] mb-3">
                {step.title}
              </h3>
              <p className="text-[var(--gray-600)] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
