export function ConversationIllustration({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 300 240"
      className={className}
      role="img"
      aria-label="テーブルを挟んで担当者と相談者が向かい合って話している面談シーンのフラットイラスト"
    >
      <ellipse cx="150" cy="130" rx="140" ry="100" fill="#eafaf3" />

      {/* table */}
      <rect x="70" y="168" width="160" height="14" rx="7" fill="#0b1220" opacity="0.85" />
      <rect x="90" y="182" width="10" height="34" fill="#0b1220" opacity="0.6" />
      <rect x="200" y="182" width="10" height="34" fill="#0b1220" opacity="0.6" />

      {/* speech bubbles */}
      <rect x="30" y="30" width="70" height="34" rx="14" fill="#ffffff" />
      <path d="M50 62 L42 76 L64 64 Z" fill="#ffffff" />
      <rect x="200" y="20" width="70" height="34" rx="14" fill="#2451e5" />
      <path d="M236 52 L244 66 L222 54 Z" fill="#2451e5" />

      {/* advisor (left) */}
      <g transform="translate(56 90)">
        <path
          d="M0 76 Q0 48 34 48 Q68 48 68 76 L64 108 Q34 118 4 108 Z"
          fill="#9aa4b2"
          stroke="#0b1220"
          strokeWidth="4"
        />
        <circle cx="34" cy="20" r="24" fill="#e5a76f" stroke="#0b1220" strokeWidth="4" />
        <path
          d="M10 18 Q10 -6 34 -6 Q58 -6 58 18 Q58 4 34 4 Q10 4 10 18Z"
          fill="#2c3650"
        />
        <circle cx="26" cy="22" r="2.4" fill="#0b1220" />
        <circle cx="42" cy="22" r="2.4" fill="#0b1220" />
      </g>

      {/* candidate (right) */}
      <g transform="translate(168 90)">
        <path
          d="M0 76 Q0 48 34 48 Q68 48 68 76 L64 108 Q34 118 4 108 Z"
          fill="#2451e5"
          stroke="#0b1220"
          strokeWidth="4"
        />
        <circle cx="34" cy="20" r="24" fill="#f2c39c" stroke="#0b1220" strokeWidth="4" />
        <path
          d="M10 18 Q10 -6 34 -6 Q58 -6 58 18 Q58 2 34 2 Q10 2 10 18Z"
          fill="#0b1220"
        />
        <circle cx="26" cy="22" r="2.4" fill="#0b1220" />
        <circle cx="42" cy="22" r="2.4" fill="#0b1220" />
        <path
          d="M25 32 Q34 37 43 32"
          stroke="#0b1220"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  );
}
