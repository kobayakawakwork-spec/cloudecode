import {
  RegisterIcon,
  ReviewIcon,
  OfferIcon,
} from "@/components/illustrations/strength-icons";

const STRENGTHS = [
  {
    step: "01",
    icon: RegisterIcon,
    title: "未経験からの登録・相談実績",
    body: "営業未経験の20代からの登録・相談を数多く受け付けています。",
  },
  {
    step: "02",
    icon: ReviewIcon,
    title: "書類・面接の通過率を高める対策",
    body: "未経験だからこそ伝わる書類の作り方、話し方を個別に対策します。",
  },
  {
    step: "03",
    icon: OfferIcon,
    title: "内定後・入社後まで伴走",
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

        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-3">
          {STRENGTHS.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-brand-line p-6 text-center"
            >
              <span className="font-mono text-xs font-semibold text-brand-blue/60">
                {item.step}
              </span>
              <item.icon className="mx-auto mt-2 w-20" />
              <h3 className="mt-4 text-[15px] font-bold text-brand-navy sm:text-base">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink-muted">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
