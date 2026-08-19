const VARIANTS = [
  { bg: "#eaf0ff", skin: "#f2c39c", hair: "#0b1220", shirt: "#2451e5" },
  { bg: "#fef2e0", skin: "#e5a76f", hair: "#2c3650", shirt: "#f5a524" },
  { bg: "#eafaf3", skin: "#f2c39c", hair: "#3a2a1a", shirt: "#0b1220" },
] as const;

export function AvatarIllustration({
  variant = 0,
  className,
}: {
  variant?: 0 | 1 | 2;
  className?: string;
}) {
  const c = VARIANTS[variant];
  return (
    <svg
      viewBox="0 0 96 96"
      className={className}
      role="img"
      aria-label="20代男性を表したシンプルなフラットアイコンイラスト"
    >
      <circle cx="48" cy="48" r="48" fill={c.bg} />
      <path
        d="M14 90 Q14 62 48 62 Q82 62 82 90"
        fill={c.shirt}
        stroke="#0b1220"
        strokeWidth="3"
      />
      <circle cx="48" cy="42" r="22" fill={c.skin} stroke="#0b1220" strokeWidth="3" />
      <path
        d="M26 40 Q26 18 48 18 Q70 18 70 40 Q70 26 48 26 Q26 26 26 40Z"
        fill={c.hair}
      />
    </svg>
  );
}
