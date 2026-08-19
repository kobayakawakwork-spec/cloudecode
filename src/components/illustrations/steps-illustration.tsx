export function StepsIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 260"
      className={className}
      role="img"
      aria-label="階段を一段ずつ登り、頂上の旗に向かって歩く20代男性のフラットイラスト"
    >
      <circle cx="130" cy="130" r="120" fill="#fef2e0" />

      {/* steps */}
      <rect x="20" y="210" width="220" height="20" rx="6" fill="#2451e5" opacity="0.15" />
      <rect x="40" y="188" width="60" height="42" rx="6" fill="#e4e7ec" />
      <rect x="100" y="156" width="60" height="74" rx="6" fill="#cbd8f5" />
      <rect x="160" y="118" width="60" height="112" rx="6" fill="#2451e5" />

      {/* flag */}
      <rect x="196" y="46" width="5" height="76" rx="2.5" fill="#0b1220" />
      <path d="M201 48 L232 60 L201 76 Z" fill="#ff7a59" />

      {/* figure walking up */}
      <g transform="translate(102 108)">
        <path
          d="M6 76 Q-6 88 2 106"
          stroke="#0b1220"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M30 76 Q42 90 34 108"
          stroke="#0b1220"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M2 46 Q2 26 30 26 Q58 26 58 46 L54 82 Q30 92 6 82 Z"
          fill="#2451e5"
        />
        <path
          d="M4 50 Q-14 40 -10 20"
          stroke="#f2c39c"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="30" cy="8" r="22" fill="#f2c39c" />
        <path
          d="M8 6 Q8 -16 30 -16 Q52 -16 52 6 Q52 -6 30 -6 Q8 -6 8 6Z"
          fill="#0b1220"
        />
      </g>
    </svg>
  );
}
