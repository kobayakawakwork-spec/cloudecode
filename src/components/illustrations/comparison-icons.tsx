export function OverwhelmIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 140"
      className={className}
      role="img"
      aria-label="大量の求人票に囲まれて困っている人のイラスト"
    >
      <circle cx="80" cy="70" r="66" fill="#f2f4f8" />
      <rect x="34" y="30" width="34" height="44" rx="4" fill="#ffffff" stroke="#cbd2dc" strokeWidth="2" transform="rotate(-8 51 52)" />
      <rect x="60" y="24" width="34" height="44" rx="4" fill="#ffffff" stroke="#cbd2dc" strokeWidth="2" />
      <rect x="88" y="32" width="34" height="44" rx="4" fill="#ffffff" stroke="#cbd2dc" strokeWidth="2" transform="rotate(8 105 54)" />
      <g transform="translate(54 74)">
        <path
          d="M6 56 Q6 32 26 32 Q46 32 46 56 L42 78 Q26 86 10 78 Z"
          fill="#9aa4b2"
          stroke="#0b1220"
          strokeWidth="3"
        />
        <circle cx="26" cy="16" r="18" fill="#f2c39c" stroke="#0b1220" strokeWidth="3" />
        <path
          d="M8 14 Q8 -6 26 -6 Q44 -6 44 14 Q44 2 26 2 Q8 2 8 14Z"
          fill="#0b1220"
        />
        <path d="M18 26 Q26 22 34 26" stroke="#0b1220" strokeWidth="2" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
}

export function OneWayIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 140"
      className={className}
      role="img"
      aria-label="担当者が一方的に説明し、相手が聞くだけになっている面談のイラスト"
    >
      <circle cx="80" cy="70" r="66" fill="#f2f4f8" />
      <rect x="30" y="98" width="100" height="10" rx="5" fill="#0b1220" opacity="0.7" />

      <g transform="translate(30 34)" stroke="#0b1220" strokeWidth="3">
        <path d="M0 46 Q0 26 20 26 Q40 26 40 46 L37 66 Q20 74 3 66 Z" fill="#9aa4b2" />
        <circle cx="20" cy="12" r="16" fill="#e5a76f" />
        <path d="M4 10 Q4 -8 20 -8 Q36 -8 36 10 Q36 -2 20 -2 Q4 -2 4 10Z" fill="#2c3650" stroke="none" />
      </g>

      <path d="M76 44 L104 44" stroke="#9aa4b2" strokeWidth="3" strokeLinecap="round" />
      <path d="M96 38 L104 44 L96 50" stroke="#9aa4b2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      <g transform="translate(100 34)" stroke="#0b1220" strokeWidth="3">
        <path d="M0 46 Q0 26 20 26 Q40 26 40 46 L37 66 Q20 74 3 66 Z" fill="#cbd2dc" />
        <circle cx="20" cy="12" r="16" fill="#f2c39c" />
        <path d="M4 10 Q4 -8 20 -8 Q36 -8 36 10 Q36 -2 20 -2 Q4 -2 4 10Z" fill="#0b1220" stroke="none" />
      </g>
    </svg>
  );
}

export function MatchIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 140"
      className={className}
      role="img"
      aria-label="一枚だけ選ばれた求人票と、それを確認して喜ぶ人のイラスト"
    >
      <circle cx="80" cy="70" r="66" fill="#eaf0ff" />
      <rect x="58" y="24" width="44" height="56" rx="6" fill="#ffffff" stroke="#2451e5" strokeWidth="3" />
      <rect x="66" y="36" width="28" height="5" rx="2.5" fill="#e4e7ec" />
      <rect x="66" y="46" width="20" height="5" rx="2.5" fill="#e4e7ec" />
      <circle cx="90" cy="66" r="12" fill="#f5a524" />
      <path
        d="M85 66 L89 70 L96 61"
        stroke="#ffffff"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <g transform="translate(24 78)">
        <path
          d="M4 52 Q4 30 24 30 Q44 30 44 52 L40 72 Q24 80 8 72 Z"
          fill="#2451e5"
          stroke="#0b1220"
          strokeWidth="3"
        />
        <circle cx="24" cy="14" r="18" fill="#f2c39c" stroke="#0b1220" strokeWidth="3" />
        <path
          d="M6 12 Q6 -8 24 -8 Q42 -8 42 12 Q42 0 24 0 Q6 0 6 12Z"
          fill="#0b1220"
        />
        <path d="M16 24 Q24 29 32 24" stroke="#0b1220" strokeWidth="2" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
}
