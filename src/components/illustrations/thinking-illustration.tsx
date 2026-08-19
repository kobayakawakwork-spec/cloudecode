export function ThinkingIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 220"
      className={className}
      role="img"
      aria-label="膝を抱えて座り、頭の上に吹き出しで考え事をしている20代男性のフラットイラスト"
    >
      <circle cx="120" cy="112" r="100" fill="#eaf0ff" />

      {/* thought bubble */}
      <circle cx="176" cy="46" r="7" fill="#ffffff" stroke="#e4e7ec" strokeWidth="2" />
      <circle cx="192" cy="30" r="10" fill="#ffffff" stroke="#e4e7ec" strokeWidth="2" />
      <rect
        x="150"
        y="-6"
        width="86"
        height="56"
        rx="20"
        fill="#ffffff"
        stroke="#e4e7ec"
        strokeWidth="2"
      />
      <text
        x="193"
        y="30"
        textAnchor="middle"
        fontSize="26"
        fontWeight="700"
        fill="#2451e5"
      >
        ?
      </text>

      {/* seated figure */}
      <g transform="translate(46 74)">
        <ellipse cx="60" cy="146" rx="52" ry="8" fill="#0b1220" opacity="0.08" />
        {/* legs bent */}
        <path
          d="M30 96 Q10 110 18 140"
          stroke="#0b1220"
          strokeWidth="18"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M90 96 Q110 110 102 140"
          stroke="#0b1220"
          strokeWidth="18"
          strokeLinecap="round"
          fill="none"
        />
        {/* torso */}
        <path
          d="M24 60 Q24 36 60 36 Q96 36 96 60 L92 104 Q60 116 28 104 Z"
          fill="#2451e5"
          stroke="#0b1220"
          strokeWidth="4"
        />
        {/* arm to chin */}
        <path
          d="M30 66 Q18 78 40 92"
          stroke="#f2c39c"
          strokeWidth="14"
          strokeLinecap="round"
          fill="none"
        />
        {/* head */}
        <circle cx="60" cy="18" r="26" fill="#f2c39c" stroke="#0b1220" strokeWidth="4" />
        <path
          d="M34 16 Q34 -10 60 -10 Q86 -10 86 16 Q86 0 60 0 Q34 0 34 16Z"
          fill="#0b1220"
        />
        <circle cx="51" cy="20" r="2.4" fill="#0b1220" />
        <path
          d="M50 32 Q60 28 68 32"
          stroke="#0b1220"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  );
}
