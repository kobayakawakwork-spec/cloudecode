export function SuccessIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 200"
      className={className}
      role="img"
      aria-label="ドアの先に向かって歩き出す20代男性のフラットイラスト"
    >
      <circle cx="110" cy="100" r="92" fill="#16213a" />

      {/* doorway */}
      <path
        d="M120 190 L120 40 Q120 20 148 20 Q176 20 176 40 L176 190"
        fill="#f5a524"
        opacity="0.15"
      />
      <path
        d="M120 190 L120 40 Q120 20 148 20 Q176 20 176 40 L176 190"
        stroke="#f5a524"
        strokeWidth="4"
        fill="none"
      />

      {/* figure walking toward light */}
      <g transform="translate(56 90)">
        <path
          d="M8 66 Q0 80 10 96"
          stroke="#f2c39c"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M32 66 Q44 78 38 96"
          stroke="#f2c39c"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M4 40 Q4 20 30 20 Q56 20 56 40 L52 72 Q30 82 8 72 Z"
          fill="#2451e5"
          stroke="#060a14"
          strokeWidth="3"
        />
        <path
          d="M50 40 Q66 30 68 12"
          stroke="#f2c39c"
          strokeWidth="11"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="30" cy="4" r="20" fill="#f2c39c" stroke="#060a14" strokeWidth="3" />
        <path
          d="M10 2 Q10 -18 30 -18 Q50 -18 50 2 Q50 -10 30 -10 Q10 -10 10 2Z"
          fill="#0b1220"
        />
      </g>

      <circle cx="40" cy="50" r="4" fill="#f5a524" />
      <circle cx="182" cy="150" r="5" fill="#ff7a59" />
      <circle cx="30" cy="150" r="3" fill="#f5a524" />
    </svg>
  );
}
