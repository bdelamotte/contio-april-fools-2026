"use client";

import { useState } from "react";

const lyrics = `[Intro – spoken over chugging riff]
"Rare… no, extra rare. And bring the side of meat."

[Verse 1]
Server lights are low, the prompts are flying fast,
He's stacking layers deep while the models crash.
But when the build is done and the clock hits seven,
He's already texting the steakhouse: "Make it heaven."
Filet so thick it blocks out the sun,
Then a porterhouse chaser — yeah, the battle's just begun!
Carbon-based legend, veins full of iron and will,
While others sip their oat milk, he's out here eating his fill.

[Pre-Chorus]
Zyn packet pops like a commit to main,
Creatine shaker rattling, thunder in his veins!

[Chorus]
AI MAKER! (Extra meat!)
Coding carnivore, can't be beat!
Silicon agents start to sing,
When the carbon maestro pulls the string!
AI MAKER! (Extra meat!)
Zyn-popping, protein-shaking beast!
From the gym to the GPU glow,
He makes the models steal the show!

[Verse 2]
Back at the bench he's curling PRs and weights,
Then back at the desk he's curling loss curves straight.
Every token he feeds 'em tastes like ribeye smoke,
His fine-tuned agents sparkle while the legacy chokes.
No tofu in his prompt, no salad in his stack,
Just bloody red output and a roller in the pack.
He laughs at the vegans, raises his favorite tines,
"You keep your veg — I'll stay with the bovines!"

[Pre-Chorus]
Shaker goes BRRRRT, the fork goes DING!
The dinner bell sounds — the meat he'll bring!

[Chorus]
AI MAKER! (Extra meat!)
Coding carnivore, can't be beat!
Silicon agents start to sing,
When the carbon maestro pulls the string!
AI MAKER! (Extra meat!)
Zyn-popping, protein-shaking beast!
From the gym to the GPU glow,
He makes the models steal the show!

[Bridge]
One more rep… one more turn…
One more ounce… one more token…
RAISE THE STEAK HIGH!
LET THE AGENTS FLY!

[Final Chorus]
AI MAKER! (EXTRA MEAT!)
King of the keyboard and the deadlift seat!
Mechanical keyboard for the brother
He turns silicon dreams into code that smothers!
AI MAKER! (EXTRA MEAT!)
The only dev who trains both nets and pecs!
So raise your glasses, steak knives, and forks —
To the carbon son who makes the agents shine!

[Outro]
"Rare… extra rare… and another side of meat."
AI Maker… forever elite.`;

export function Soundtrack() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-[var(--gray-950)] py-20 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--purple-500)] mb-2">
          Official Anthem
        </p>
        <h2 className="font-[Merriweather] text-3xl md:text-4xl font-bold text-white mb-3">
          AI Maker — Extra Meat
        </h2>
        <p className="text-[var(--gray-400)] mb-8">
          Every great product deserves a soundtrack. This is ours.
        </p>

        {/* Equalizer animation */}
        <div className="flex items-end justify-center gap-1 mb-8 h-10">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 rounded-full bg-[var(--purple-500)]"
              style={{
                height: `${12 + Math.sin(i * 0.8) * 20 + 10}px`,
                animation: `equalizer 1.2s ease-in-out ${i * 0.08}s infinite alternate`,
              }}
            />
          ))}
        </div>

        <style>{`
          @keyframes equalizer {
            0% { height: 8px; opacity: 0.4; }
            100% { height: 36px; opacity: 1; }
          }
        `}</style>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://suno.com/song/bc85fd00-3db2-43d8-89bc-016bb6811285?sh=fD25b8PognKQjWJ5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[var(--gray-950)] font-semibold hover:bg-[var(--gray-100)] transition-colors"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M6.5 3.5a1 1 0 011.55-.83l10 6.5a1 1 0 010 1.66l-10 6.5A1 1 0 016.5 16.5v-13z" />
            </svg>
            Play the Song
          </a>
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--purple-500)] text-white font-semibold hover:bg-[var(--purple-600)] transition-colors"
          >
            {expanded ? "Hide Lyrics" : "View Lyrics"}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`transition-transform ${expanded ? "rotate-180" : ""}`}
            >
              <path d="M4 6l4 4 4-4" />
            </svg>
          </button>
        </div>

        {expanded && (
          <div className="mt-8 text-left bg-white/5 rounded-2xl p-8 border border-white/10 animate-fade-in-up">
            <pre className="whitespace-pre-wrap font-[Lato] text-sm text-[var(--gray-300)] leading-relaxed">
              {lyrics}
            </pre>
          </div>
        )}
      </div>
    </section>
  );
}
