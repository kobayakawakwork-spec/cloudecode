const WORRIES = [
  "今の給料のまま、この先も働き続けるのは不安",
  "将来につながるスキルが身についている実感がない",
  "営業に興味はあるけど、未経験だから一歩が踏み出せない",
  "転職したい気持ちはあるけど、何から始めればいいか分からない",
  "求人が多すぎて、結局どこがいいのか選べない",
  "学歴や職歴に自信がなく、選考が不安",
];

export function EmpathySection() {
  return (
    <section className="bg-brand-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="font-mono text-xs tracking-wide text-brand-blue">
          WORRY
        </p>
        <h2 className="mt-3 max-w-lg text-2xl leading-snug font-bold tracking-tight text-brand-navy text-balance sm:text-3xl">
          今のままでいいのか、
          <br className="sm:hidden" />
          迷っていませんか。
        </h2>

        <div className="mt-10 grid gap-0 border-t border-brand-line sm:mt-14 lg:grid-cols-2 lg:gap-x-12">
          {WORRIES.map((worry) => (
            <div
              key={worry}
              className="flex gap-4 border-b border-brand-line py-5"
            >
              <span
                aria-hidden
                className="mt-1 h-4 w-[3px] shrink-0 bg-brand-blue"
              />
              <p className="text-[15px] leading-relaxed text-brand-navy/90 sm:text-base">
                {worry}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm leading-relaxed font-medium text-brand-navy sm:mt-12 sm:text-base">
          どれも、一人で抱えていると動けなくなる悩みです。
          <br />
          でも、気づいたときが変えどきです。
        </p>
      </div>
    </section>
  );
}
