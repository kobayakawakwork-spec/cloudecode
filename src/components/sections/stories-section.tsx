import { PhotoPlaceholder } from "@/components/photo-placeholder";

const STORIES = [
  {
    id: "P-03",
    quote:
      "未経験でも、人と話すのが好きなだけで武器になると気づけました。",
    profile: "24歳・元アパレル販売",
    path: "IT・SaaS営業へ",
  },
  {
    id: "P-04",
    quote:
      "収入よりも先に、“選べる自分”になれたことが大きかったです。",
    profile: "27歳・元工場勤務",
    path: "人材営業へ",
  },
  {
    id: "P-05",
    quote: "学歴に自信がなかったけど、面接対策で不安がなくなりました。",
    profile: "23歳・既卒",
    path: "インサイドセールスへ",
  },
];

export function StoriesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="font-mono text-xs tracking-wide text-brand-blue">
          STORIES
        </p>
        <h2 className="mt-3 max-w-lg text-2xl leading-snug font-bold tracking-tight text-brand-navy text-balance sm:text-3xl">
          相談から一歩踏み出した人がいます。
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-brand-ink-muted">
          実際のご相談内容をもとにした活用イメージです。個人が特定される情報は含みません。
        </p>

        <div className="mt-10 grid gap-8 border-t border-brand-line pt-10 sm:mt-12 sm:grid-cols-3 sm:gap-6 sm:pt-12">
          {STORIES.map((story) => (
            <div key={story.id}>
              <PhotoPlaceholder
                id={story.id}
                showLabel={false}
                brief="20代男性のポートレート。自然光、正面〜やや斜め、柔らかい表情。ビジネスカジュアル。"
                className="aspect-square w-16 rounded-full"
              />
              <p className="mt-4 text-[15px] leading-relaxed font-medium text-brand-navy">
                &ldquo;{story.quote}&rdquo;
              </p>
              <p className="mt-3 text-xs text-brand-ink-muted">
                {story.profile} ／ {story.path}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
