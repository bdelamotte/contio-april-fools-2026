const REAL_CTA =
  "https://contio.ai?utm_source=meatingos&utm_medium=aprilfools&utm_campaign=reveal";

export function Reveal() {
  return (
    <section className="bg-gradient-to-br from-[var(--brand-solid)] to-[var(--purple-900)] py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-6xl mb-6">🎉</p>
        <h2 className="font-[Merriweather] text-3xl md:text-4xl font-bold text-white mb-4">
          April Fools!
        </h2>
        <p className="text-lg text-white/80 leading-relaxed mb-4">
          MeatingOS isn&apos;t real... but{" "}
          <strong className="text-white">MeetingOS</strong> is.
        </p>
        <p className="text-white/70 leading-relaxed max-w-xl mx-auto mb-8">
          We actually built the world&apos;s first Decision Acceleration
          Platform — for meetings, not meatings. No bot. No recording. Just
          better meetings that turn what gets <em>said</em> into what gets{" "}
          <em>done</em>.
        </p>
        <a
          href={REAL_CTA}
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--brand-solid)] font-bold rounded-full hover:bg-[var(--gray-100)] transition-colors text-lg shadow-xl"
        >
          Try the Real MeetingOS
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
        <p className="text-sm text-white/50 mt-6">
          Free for 20 meetings a month. Seriously.
        </p>
      </div>
    </section>
  );
}
