export function MeatingOSLogo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 40"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Steak icon */}
      <g transform="translate(2, 4) scale(0.55)">
        {/* Steak shape */}
        <path
          d="M30 8C18 4 6 12 4 24c-2 12 6 22 18 26s24-2 28-14c4-12-6-24-20-28z"
          fill="#563fd4"
          opacity="0.9"
        />
        {/* Marbling lines */}
        <path
          d="M14 22c4-2 8-1 12 1s8 1 10-2"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M10 30c3-2 7-2 11 0s7 1 9-1"
          fill="none"
          stroke="white"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.4"
        />
        {/* Bone highlight */}
        <ellipse cx="40" cy="16" rx="6" ry="3" fill="#f8f7ff" opacity="0.8" transform="rotate(-20 40 16)" />
      </g>

      {/* "MeatingOS" text */}
      <text
        x="40"
        y="28"
        fontFamily="Merriweather, serif"
        fontWeight="700"
        fontSize="22"
        fill="#13191e"
      >
        Meating
        <tspan fill="#563fd4">OS</tspan>
      </text>
    </svg>
  );
}
