<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the MeatingOS April Fools landing page. PostHog is initialized via `instrumentation-client.ts` (Next.js 15.3+ pattern) with a reverse proxy through `/ingest`, error tracking enabled, and 8 custom events instrumented across 6 components. No server-side events were needed — this project has no API routes or server actions.

## Files created or modified

| File | Change |
|------|--------|
| `instrumentation-client.ts` | Created — initializes PostHog with reverse proxy host, error tracking, and debug mode |
| `next.config.ts` | Updated — added `/ingest` reverse proxy rewrites and `skipTrailingSlashRedirect` |
| `.env.local` | Updated — added `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` |

## Events instrumented

| Event | Description | File |
|-------|-------------|------|
| `hero_cta_clicked` | User clicks the primary "Start Meating Better" CTA in the Hero section | `src/components/Hero.tsx` |
| `hero_explore_clicked` | User clicks the secondary "Explore MeatingOS" anchor link in the Hero section | `src/components/Hero.tsx` |
| `nav_cta_clicked` | User clicks the "Get Started" CTA in the navigation bar (`location`: desktop/mobile) | `src/components/Nav.tsx` |
| `pricing_cta_clicked` | User clicks a pricing plan CTA (`plan_name`, `plan_price`, `cta_label`) | `src/components/Pricing.tsx` |
| `anthem_play_clicked` | User clicks "Play the Song" to open the AI Maker anthem on Suno | `src/components/Soundtrack.tsx` |
| `anthem_lyrics_toggled` | User expands or collapses the lyrics section (`expanded`: true/false) | `src/components/Soundtrack.tsx` |
| `reveal_cta_clicked` | User clicks "Try the Real MeetingOS" in the April Fools reveal section | `src/components/Reveal.tsx` |
| `footer_real_product_clicked` | User clicks a link to contio.ai from the footer (`link_label`) | `src/components/Footer.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/364787/dashboard/1418913
- **Hero → Reveal Conversion Funnel**: https://us.posthog.com/project/364787/insights/4rWSsNRn
- **CTA Clicks Over Time**: https://us.posthog.com/project/364787/insights/q58iA16i
- **Pricing Plan CTA Clicks by Plan**: https://us.posthog.com/project/364787/insights/ZuER61jn
- **Anthem Engagement (Plays & Lyrics)**: https://us.posthog.com/project/364787/insights/EGDySVxV
- **Footer Real Product Clicks by Link**: https://us.posthog.com/project/364787/insights/tLN1wmgw

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
