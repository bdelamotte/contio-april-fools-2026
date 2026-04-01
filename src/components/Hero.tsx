"use client";

import posthog from "posthog-js";

const CTA_URL =
  "https://contio.ai?utm_source=meatingos&utm_medium=aprilfools&utm_campaign=hero";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-light)] via-white to-[var(--background-page)] opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-36 text-center">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--brand-light)] border border-[var(--purple-500)]/20 text-sm font-medium text-[var(--purple-700)] mb-8 animate-fade-in-up">
          <span>🥩</span>
          <span>Now with Wagyu-grade AI</span>
        </div>

        <h1 className="font-[Merriweather] text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--gray-950)] leading-tight tracking-tight max-w-4xl mx-auto animate-fade-in-up stagger-1">
          AI that turns what gets{" "}
          <em className="text-[var(--brand-solid)]">grilled</em> into what gets{" "}
          <em className="text-[var(--brand-solid)]">fulfilled</em>.
        </h1>

        <p className="mt-8 text-lg md:text-xl text-[var(--gray-600)] max-w-2xl mx-auto leading-relaxed animate-fade-in-up stagger-2">
          MeatingOS is the world&apos;s first Decision Acceleration Platform for
          Protein. Plan better meals. Track macros in real-time. Never miss a
          grocery run again.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up stagger-3">
          <a
            href={CTA_URL}
            onClick={() => posthog.capture("hero_cta_clicked")}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--brand-solid)] text-white font-semibold rounded-full hover:bg-[var(--purple-700)] transition-colors text-lg shadow-lg shadow-[var(--brand-solid)]/25"
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
          <a
            href="#how-it-works"
            onClick={() => posthog.capture("hero_explore_clicked")}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-[var(--gray-700)] font-semibold rounded-full border border-[var(--gray-200)] hover:border-[var(--gray-300)] hover:bg-[var(--gray-25)] transition-colors text-lg"
          >
            Explore MeatingOS
          </a>
        </div>

        {/* Social proof line */}
        <p className="mt-12 text-sm text-[var(--gray-400)] animate-fade-in-up stagger-4">
          Trusted by 2,847+ pit masters, grill enthusiasts, and one very
          confused financial advisor.
        </p>
      </div>
    </section>
  );
}
