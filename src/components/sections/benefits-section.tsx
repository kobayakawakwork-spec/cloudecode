const BENEFITS = [
  {
    tag: "見える化",
    title: "頑張りが、数字で正当に評価される",
    body: "営業は成果が数字に表れる仕事。年功序列ではなく、行動と結果が評価に直結します。",
  },
  {
    tag: "再現性",
    title: "話す力・提案力は、一生モノのスキルになる",
    body: "ヒアリング力や提案力は業界を問わず通用します。一度身につければ、次のキャリアでも武器になります。",
  },
  {
    tag: "将来性",
    title: "業界を問わず、求められ続ける経験になる",
    body: "営業経験者はIT・広告・不動産・人材など幅広い業界で必要とされています。選べる未来が広がります。",
  },
  {
    tag: "自由度",
    title: "成果次第で、働き方も収入も選べる",
    body: "インセンティブや裁量のある求人を選べば、年次に関係なく収入もキャリアの進み方も自分で決められます。",
  },
];

export function BenefitsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs tracking-wide text-brand-blue">
              WHY SALES
            </p>
            <h2 className="mt-3 text-2xl leading-snug font-bold tracking-tight text-brand-navy text-balance sm:text-3xl">
              未経験からでも、
              <br />
              営業を選ぶ理由がある。
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-ink-muted sm:text-[15px]">
              営業職は「大変そう」なだけの仕事ではありません。20代のうちに始める意味を、4つの視点で整理しました。
            </p>
          </div>

          <div className="grid gap-0 border-t border-brand-line sm:grid-cols-2">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.tag}
                className="border-b border-brand-line py-6 sm:border-r sm:pr-6 sm:pl-0 [&:nth-child(2n)]:sm:pr-0 [&:nth-child(2n)]:sm:pl-6 [&:nth-child(2n)]:sm:border-r-0"
              >
                <span className="inline-flex rounded-full border border-brand-blue/30 bg-brand-blue-soft px-2.5 py-1 text-[11px] font-medium text-brand-blue">
                  {benefit.tag}
                </span>
                <h3 className="mt-3 text-base leading-snug font-bold text-brand-navy sm:text-lg">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink-muted">
                  {benefit.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
