const CTA_URL =
  "https://contio.ai?utm_source=meatingos&utm_medium=aprilfools&utm_campaign=pricing";

const plans = [
  {
    name: "Free Range",
    price: "$0",
    period: "/mo",
    description: "For casual grillers and meal prep beginners.",
    users: "Unlimited users",
    highlight: false,
    cta: "Get Started for Free",
    features: [
      "20 meatings/month",
      "Plan meal agendas",
      "Attach recipes and data",
      "Share with dining attendees",
      "AI-powered nutrition notes",
      "AI-powered grocery action items",
      "Calendar integration",
    ],
    note: "No credit card required",
  },
  {
    name: "Prime Cut",
    price: "$49",
    period: "/mo",
    description: "For serious protein professionals.",
    users: "3 included, $15/mo per additional",
    highlight: true,
    cta: "Start Free Trial",
    features: [
      "Everything in Free Range, plus:",
      "Unlimited meatings",
      "AI drafts meal agendas",
      "Surfaces live macro insights",
      "Powerful voice chat with your butcher",
      "Premium nutrition recap formats",
      "Smart leftovers distribution",
    ],
    note: "Save 33%. Only $16.33/user!",
  },
  {
    name: "Wagyu Elite",
    price: "$99",
    period: "/mo",
    description: "AI superpowers for financial advisory firms that also grill.",
    users: "3 included, $25/mo per additional",
    highlight: false,
    cta: "Start Free Trial",
    features: [
      "Everything in Prime Cut, plus:",
      "Specialized AI for client dinner prep",
      "AI reads performance reports AND menus",
      "Custom AI meal prompts",
      "Custom AI Next Courses",
      "Transcript access for compliance",
    ],
    note: "Save 33%. Only $33/user!",
  },
  {
    name: "Enterprise Brisket",
    price: "$399",
    period: "/mo",
    description: "For organizations that take protein seriously.",
    users: "10 included, $35/mo per additional",
    highlight: false,
    cta: "Contact Our Pit Master",
    features: [
      "Everything in Wagyu Elite, plus:",
      "Advanced grill controls",
      "Nutrition transcript management",
      "Audit log",
      "Detailed SOC 2 report",
      "Dedicated pit master (CSM)",
      "Domain management",
      "Enterprise grill integrations",
    ],
    note: "Save 33%. Only $39.90/user!",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-solid)] mb-2">
            Pricing
          </p>
          <h2 className="font-[Merriweather] text-3xl md:text-4xl font-bold text-[var(--gray-950)]">
            Free for 20 meatings a month.
          </h2>
          <p className="mt-2 text-lg text-[var(--gray-500)]">
            Wildly affordable for unlimited meatings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 flex flex-col ${
                plan.highlight
                  ? "bg-[var(--brand-solid)] text-white ring-2 ring-[var(--brand-solid)] shadow-xl shadow-[var(--brand-solid)]/20 scale-[1.02]"
                  : "bg-white border border-[var(--gray-100)]"
              }`}
            >
              <div>
                <h3
                  className={`text-lg font-bold ${
                    plan.highlight ? "text-white" : "text-[var(--gray-900)]"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mt-1 ${
                    plan.highlight
                      ? "text-white/70"
                      : "text-[var(--gray-500)]"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mt-6">
                <span
                  className={`text-4xl font-bold ${
                    plan.highlight ? "text-white" : "text-[var(--gray-950)]"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm ${
                    plan.highlight
                      ? "text-white/70"
                      : "text-[var(--gray-500)]"
                  }`}
                >
                  {plan.period}
                </span>
              </div>

              <p
                className={`text-xs mt-1 ${
                  plan.highlight ? "text-white/60" : "text-[var(--gray-400)]"
                }`}
              >
                {plan.users}
              </p>

              {plan.note && (
                <p
                  className={`text-xs font-semibold mt-2 ${
                    plan.highlight
                      ? "text-white/80"
                      : "text-[var(--brand-solid)]"
                  }`}
                >
                  {plan.note}
                </p>
              )}

              <ul className="mt-6 space-y-2 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        plan.highlight
                          ? "text-white/80"
                          : "text-[var(--brand-solid)]"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span
                      className={
                        plan.highlight
                          ? "text-white/90"
                          : "text-[var(--gray-700)]"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={CTA_URL}
                className={`mt-6 block text-center py-3 rounded-full font-semibold text-sm transition-colors ${
                  plan.highlight
                    ? "bg-white text-[var(--brand-solid)] hover:bg-[var(--gray-100)]"
                    : "bg-[var(--brand-solid)] text-white hover:bg-[var(--purple-700)]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-[var(--gray-400)] mt-8">
          All prices are in USD. One plan must be applied for all users within a
          kitchen. MeatingOS Plant Edition coming Q3. 🌱
        </p>
      </div>
    </section>
  );
}
