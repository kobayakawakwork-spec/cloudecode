const STROKE = "#0b1220";

export function ChallengeIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 220"
      className={className}
      role="img"
      aria-label="虫眼鏡を顔に当てて前向きな表情をしている20代男性のイラスト"
    >
      <g stroke={STROKE} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        {/* body */}
        <path
          d="M40 214 Q34 150 60 132 Q80 118 100 118 Q120 118 140 132 Q166 150 160 214"
          fill="#ffffff"
        />
        {/* shirt collar + tie */}
        <path d="M84 130 L100 150 L116 130" fill="none" />
        <path d="M96 148 L104 148 L108 190 L100 200 L92 190 Z" fill="#f5a524" />
        {/* head */}
        <circle cx="100" cy="70" r="42" fill="#f2c39c" />
        {/* hair */}
        <path
          d="M58 66 Q54 24 100 24 Q146 24 142 66 Q140 40 100 40 Q60 40 58 66Z"
          fill="#f5c518"
        />
        {/* eyes */}
        <circle cx="86" cy="72" r="3.4" fill={STROKE} stroke="none" />
        {/* magnifier over right eye */}
        <circle cx="118" cy="76" r="20" fill="#eaf6ff" fillOpacity="0.7" stroke={STROKE} strokeWidth="4" />
        <line x1="132" y1="90" x2="148" y2="106" stroke={STROKE} strokeWidth="6" />
        <path d="M96 92 Q100 98 108 94" fill="none" />
      </g>
    </svg>
  );
}

export function StableIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 220"
      className={className}
      role="img"
      aria-label="虫眼鏡を顔に当てて落ち着いた表情をしている20代男性のイラスト"
    >
      <g stroke={STROKE} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        {/* body / jacket */}
        <path
          d="M40 214 Q34 150 60 132 Q80 118 100 118 Q120 118 140 132 Q166 150 160 214"
          fill="#2451e5"
        />
        <path d="M84 130 L100 214 L116 130" fill="#ffffff" />
        {/* head */}
        <circle cx="100" cy="70" r="42" fill="#f2c39c" />
        {/* hair */}
        <path
          d="M58 64 Q54 24 100 24 Q146 24 142 64 Q148 78 138 84 Q140 50 100 50 Q60 50 62 84 Q52 78 58 64Z"
          fill="#e4e7ec"
        />
        <circle cx="82" cy="72" r="3.4" fill={STROKE} stroke="none" />
        <circle cx="118" cy="76" r="20" fill="#fff7e6" fillOpacity="0.7" stroke={STROKE} strokeWidth="4" />
        <line x1="132" y1="90" x2="148" y2="106" stroke={STROKE} strokeWidth="6" />
        <path d="M92 94 Q100 98 106 94" fill="none" />
      </g>
    </svg>
  );
}
