import { MeatingOSLogo } from "./MeatingOSLogo";

const REAL_URL =
  "https://contio.ai?utm_source=meatingos&utm_medium=aprilfools&utm_campaign=footer";

export function Footer() {
  return (
    <footer className="bg-[var(--gray-950)] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <MeatingOSLogo className="h-8 w-auto [&_text]:fill-white [&_path]:fill-[var(--purple-500)]" />
            <p className="mt-4 text-sm text-[var(--gray-400)] max-w-sm leading-relaxed">
              Killing bad meals and transforming the rest into a force for
              accomplishing great gains. A product of too many briskets and not
              enough meetings.
            </p>
            <p className="mt-4 text-xs text-[var(--gray-500)]">
              An April Fools&apos; production from the team at{" "}
              <a
                href={REAL_URL}
                className="text-[var(--purple-500)] hover:text-[var(--purple-400)] underline"
              >
                Contio
              </a>
              .
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#how-it-works"
                  className="text-sm text-[var(--gray-400)] hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-sm text-[var(--gray-400)] hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-sm text-[var(--gray-400)] hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href={REAL_URL}
                  className="text-sm text-[var(--gray-400)] hover:text-white transition-colors"
                >
                  The Real MeetingOS
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Solutions
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-[var(--gray-400)]">
                  MeatingOS for Pit Masters
                </span>
              </li>
              <li>
                <span className="text-sm text-[var(--gray-400)]">
                  MeatingOS for Financial Advisors Who Grill
                </span>
              </li>
              <li>
                <span className="text-sm text-[var(--gray-400)]">
                  MeatingOS for Competitive Eaters
                </span>
              </li>
              <li>
                <span className="text-sm text-[var(--gray-400)]">
                  MeatingOS Plant Edition (Q3)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--gray-500)]">
            &copy; 2026 Contio Inc. This page is a joke. The company is real.
            Boise, Idaho.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={REAL_URL}
              className="text-xs text-[var(--gray-500)] hover:text-white transition-colors"
            >
              Terms of Seasoning
            </a>
            <a
              href={REAL_URL}
              className="text-xs text-[var(--gray-500)] hover:text-white transition-colors"
            >
              Privacy Poultry
            </a>
            <a
              href={REAL_URL}
              className="text-xs text-[var(--gray-500)] hover:text-white transition-colors"
            >
              Security & Complian-steak
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
