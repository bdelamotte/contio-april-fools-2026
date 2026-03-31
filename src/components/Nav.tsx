"use client";

import { useState } from "react";
import { MeatingOSLogo } from "./MeatingOSLogo";

const CTA_URL =
  "https://contio.ai?utm_source=meatingos&utm_medium=aprilfools&utm_campaign=nav";

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[var(--gray-100)]">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <MeatingOSLogo className="h-8 w-auto" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#how-it-works"
            className="text-sm font-medium text-[var(--gray-600)] hover:text-[var(--gray-900)] transition-colors"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-[var(--gray-600)] hover:text-[var(--gray-900)] transition-colors"
          >
            Pricing
          </a>
          <a
            href="#features"
            className="text-sm font-medium text-[var(--gray-600)] hover:text-[var(--gray-900)] transition-colors"
          >
            Features
          </a>
          <a
            href={CTA_URL}
            className="text-sm font-semibold text-white bg-[var(--brand-solid)] hover:bg-[var(--purple-700)] px-5 py-2.5 rounded-full transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[var(--gray-100)] px-6 py-4 flex flex-col gap-4">
          <a
            href="#how-it-works"
            className="text-sm font-medium text-[var(--gray-700)]"
            onClick={() => setMobileOpen(false)}
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium text-[var(--gray-700)]"
            onClick={() => setMobileOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#features"
            className="text-sm font-medium text-[var(--gray-700)]"
            onClick={() => setMobileOpen(false)}
          >
            Features
          </a>
          <a
            href={CTA_URL}
            className="text-sm font-semibold text-white bg-[var(--brand-solid)] px-5 py-2.5 rounded-full text-center"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
