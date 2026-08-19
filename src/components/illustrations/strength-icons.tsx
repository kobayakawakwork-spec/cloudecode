import type { ReactNode } from "react";

function IconBase({
  bg,
  children,
  className,
  label,
}: {
  bg: string;
  children: ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label={label}
    >
      <circle cx="60" cy="60" r="60" fill={bg} />
      {children}
    </svg>
  );
}

export function RegisterIcon({ className }: { className?: string }) {
  return (
    <IconBase
      bg="#eaf0ff"
      className={className}
      label="ノートPCの前でエントリーシートに入力している人のイラスト"
    >
      <rect x="30" y="52" width="60" height="40" rx="6" fill="#2451e5" />
      <rect x="38" y="60" width="44" height="24" rx="3" fill="#eaf0ff" />
      <circle cx="60" cy="34" r="16" fill="#f2c39c" />
      <path
        d="M44 32 Q44 18 60 18 Q76 18 76 32 Q76 24 60 24 Q44 24 44 32Z"
        fill="#0b1220"
      />
    </IconBase>
  );
}

export function ReviewIcon({ className }: { className?: string }) {
  return (
    <IconBase
      bg="#fef2e0"
      className={className}
      label="書類にチェックマークが付いているイラスト"
    >
      <rect x="34" y="26" width="52" height="68" rx="6" fill="#ffffff" stroke="#f5a524" strokeWidth="3" />
      <rect x="44" y="40" width="32" height="5" rx="2.5" fill="#e4e7ec" />
      <rect x="44" y="52" width="32" height="5" rx="2.5" fill="#e4e7ec" />
      <rect x="44" y="64" width="20" height="5" rx="2.5" fill="#e4e7ec" />
      <circle cx="82" cy="80" r="18" fill="#f5a524" />
      <path
        d="M74 80 L80 86 L92 72"
        stroke="#ffffff"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </IconBase>
  );
}

export function OfferIcon({ className }: { className?: string }) {
  return (
    <IconBase
      bg="#eafaf3"
      className={className}
      label="内定通知書と星のイラスト"
    >
      <rect x="30" y="34" width="60" height="52" rx="6" fill="#ffffff" stroke="#22c58b" strokeWidth="3" />
      <path d="M30 40 L60 62 L90 40" stroke="#22c58b" strokeWidth="3" fill="none" />
      <path
        d="M60 20 L64 30 L75 30 L66 37 L69 48 L60 41 L51 48 L54 37 L45 30 L56 30 Z"
        fill="#f5a524"
      />
    </IconBase>
  );
}
