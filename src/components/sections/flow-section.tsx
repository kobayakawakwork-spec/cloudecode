import { ConsultationDialog } from "@/components/consultation-dialog";

const STEPS = [
  {
    step: "01",
    title: "無料相談に申し込む",
    body: "フォームに5項目を入力するだけ。1分で完了します。",
  },
  {
    step: "02",
    title: "ヒアリング面談",
    body: "経歴や希望条件、不安な点をオンラインまたは電話で伺います。",
  },
  {
    step: "03",
    title: "求人紹介・選考対策",
    body: "合う求人だけを提案し、書類・面接対策まで伴走します。",
  },
  {
    step: "04",
    title: "内定・入社サポート",
    body: "条件交渉から入社後の相談まで、継続してサポートします。",
  },
];

export function FlowSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="font-mono text-xs tracking-wide text-brand-blue">
          FLOW
        </p>
        <h2 className="mt-3 max-w-lg text-2xl leading-snug font-bold tracking-tight text-brand-navy text-balance sm:text-3xl">
          利用の流れ
        </h2>

        <ol className="mt-10 grid gap-0 border-t border-brand-line sm:mt-14 sm:grid-cols-4 sm:gap-8 sm:border-t-0">
          {STEPS.map((s, index) => (
            <li
              key={s.step}
              className={`relative py-6 sm:border-t sm:border-brand-line sm:pt-6 ${
                index !== 0 ? "border-t border-brand-line sm:border-t-0" : ""
              }`}
            >
              <span className="font-mono text-2xl font-semibold text-brand-blue tabular-nums">
                {s.step}
              </span>
              <h3 className="mt-3 text-base font-bold text-brand-navy">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink-muted">
                {s.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 max-w-xs sm:mt-16">
          <ConsultationDialog
            triggerLabel="無料で転職相談する"
            triggerSize="lg"
            triggerClassName="w-full"
          />
        </div>
      </div>
    </section>
  );
}
