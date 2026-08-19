export function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 320"
      className={className}
      role="img"
      aria-label="上向きのグラフの前に立ち、鞄を持って前を向く20代男性のフラットイラスト"
    >
      <circle cx="160" cy="160" r="150" fill="#16213a" />
      <circle cx="160" cy="160" r="150" fill="url(#hero-fade)" opacity="0.6" />
      <defs>
        <radialGradient id="hero-fade" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#2451e5" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#2451e5" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* growth chart */}
      <g opacity="0.9">
        <path
          d="M60 240 L110 240 L110 190 L60 190 Z"
          fill="#1c2b4d"
        />
        <path d="M118 240 L168 240 L168 150 L118 150 Z" fill="#22335c" />
        <path d="M176 240 L226 240 L226 110 L176 110 Z" fill="#2451e5" />
        <path
          d="M64 196 L120 150 L172 122 L232 76"
          stroke="#f5a524"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M204 76 L232 76 L232 104"
          stroke="#f5a524"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>

      {/* figure */}
      <g transform="translate(96 60)">
        <ellipse cx="42" cy="182" rx="30" ry="7" fill="#000" opacity="0.15" />
        {/* legs */}
        <rect x="16" y="120" width="18" height="56" rx="9" fill="#0b1220" />
        <rect x="46" y="120" width="18" height="56" rx="9" fill="#0b1220" />
        {/* torso */}
        <path
          d="M10 70 Q10 50 42 50 Q74 50 74 70 L70 128 Q42 138 14 128 Z"
          fill="#2451e5"
        />
        {/* arm holding bag */}
        <path
          d="M12 74 Q-8 84 -6 112"
          stroke="#2451e5"
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
        />
        <rect x="-20" y="106" width="34" height="26" rx="6" fill="#f5a524" />
        <rect x="-9" y="98" width="12" height="12" rx="4" fill="none" stroke="#f5a524" strokeWidth="5" />
        {/* raised arm */}
        <path
          d="M72 72 Q96 58 96 32"
          stroke="#2451e5"
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="96" cy="26" r="10" fill="#f2c39c" />
        {/* head */}
        <circle cx="42" cy="28" r="28" fill="#f2c39c" />
        <path
          d="M14 24 Q14 -4 42 -4 Q70 -4 70 24 Q70 8 42 8 Q14 8 14 24Z"
          fill="#0b1220"
        />
        <circle cx="32" cy="30" r="2.6" fill="#0b1220" />
        <circle cx="52" cy="30" r="2.6" fill="#0b1220" />
        <path
          d="M32 40 Q42 47 52 40"
          stroke="#0b1220"
          strokeWidth="2.6"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* confetti */}
      <circle cx="252" cy="60" r="5" fill="#f5a524" />
      <circle cx="272" cy="140" r="4" fill="#ff7a59" />
      <circle cx="46" cy="70" r="4" fill="#f5a524" />
      <circle cx="70" cy="252" r="5" fill="#ff7a59" />
    </svg>
  );
}
