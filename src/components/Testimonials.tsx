const testimonials = [
  {
    quote:
      "MeatingOS helped me close 23% more briskets this quarter. My smoker has never been more productive.",
    name: "Chad Richardson",
    title: "Pit Master & Weekend Portfolio Manager",
    initials: "CR",
  },
  {
    quote:
      "I used to lose 4 hours a week to unproductive meals. Now every meating is a decisive protein moment.",
    name: "Sarah Kowalski",
    title: "VP of Gains, CrossFit Capital Partners",
    initials: "SK",
  },
  {
    quote:
      "Finally, an AI tool that respects my steak preferences and doesn't try to join my dinner as a bot.",
    name: "Dave Mitchell",
    title: "Financial Advisor & Weekend Grillmaster",
    initials: "DM",
  },
];

export function Testimonials() {
  return (
    <section className="bg-[var(--background-page)] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--gray-100)] hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[var(--brand-solid)] flex items-center justify-center text-white font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-[var(--gray-900)] text-sm">
                    {t.name}
                  </p>
                  <p className="text-[var(--gray-500)] text-xs">{t.title}</p>
                </div>
              </div>
              <blockquote className="text-[var(--gray-700)] leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
