import {
  RegisterIcon,
  ReviewIcon,
  OfferIcon,
} from "@/components/illustrations/strength-icons";

const STRENGTHS = [
  {
    step: "01",
    icon: RegisterIcon,
    label: "活動中営業求人",
    stat: "20,000件",
    suffix: "以上",
    body: "営業未経験の20代からの登録・相談を数多く受け付けています。",
  },
  {
    step: "02",
    icon: ReviewIcon,
    label: "書類通過率",
    stat: "90%",
    suffix: "以上",
    body: "未経験だからこそ伝わる書類の作り方、話し方を個別に対策します。",
  },
  {
    step: "03",
    icon: OfferIcon,
    label: "内定後・入社後まで",
    stat: "伴走",
    suffix: "",
    body: "内定して終わりではなく、入社後の定着まで見据えてサポートします。",
  },
];

export function StrengthsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-center font-mono text-xs tracking-wide text-brand-blue">
          STRENGTH
        </p>
        <h2 className="mt-3 text-center text-2xl leading-snug font-bold tracking-tight text-brand-navy text-balance sm:text-3xl">
          Arkエージェントの3つの強み
        </h2>

        <div className="mt-14 grid gap-x-6 gap-y-10 sm:mt-16 sm:grid-cols-3">
          {STRENGTHS.map((item) => (
            <div key={item.step} className="relative">
              <span className="absolute -top-7 left-1/2 flex size-14 -translate-x-1/2 items-center justify-center rounded-full bg-brand-amber font-mono text-lg font-bold text-white shadow-md">
                {item.step}
              </span>
              <div className="rounded-2xl border border-brand-line px-6 pt-11 pb-6 text-center">
                <p className="text-sm font-bold text-brand-navy">
                  {item.label}
                </p>
                <p className="mt-1 text-3xl font-black text-brand-blue">
                  {item.stat}
                  <span className="ml-0.5 text-base font-bold">
                    {item.suffix}
                  </span>
                </p>
                <item.icon className="mx-auto mt-4 w-20" />
                <p className="mt-4 text-sm leading-relaxed text-brand-ink-muted">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm leading-relaxed font-bold text-brand-navy sm:text-base">
          <span className="text-brand-blue">営業職に精通したエージェント</span>
          だから、あなたのニーズに合わせた求人をご紹介します。
        </p>
      </div>
    </section>
  );
}
