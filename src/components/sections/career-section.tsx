import { PhotoPlaceholder } from "@/components/photo-placeholder";

const STAGES = [
  {
    step: "01",
    title: "未経験入社",
    body: "基礎研修から始めるので、知識ゼロでも安心してスタートできます。",
  },
  {
    step: "02",
    title: "OJT・実践",
    body: "先輩に同行しながら、商談の進め方を実践で身につけていきます。",
  },
  {
    step: "03",
    title: "独り立ち",
    body: "自分の顧客を任され、成果を数字で実感できるようになります。",
  },
  {
    step: "04",
    title: "次を選べる",
    body: "マネジメント・専門職・独立など、経験を武器に道を選べます。",
  },
];

export function CareerSection() {
  return (
    <section className="bg-brand-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
          <div>
            <p className="font-mono text-xs tracking-wide text-brand-blue">
              CAREER PATH
            </p>
            <h2 className="mt-3 text-2xl leading-snug font-bold tracking-tight text-brand-navy text-balance sm:text-3xl">
              入社後は、
              <br />
              こんな流れで成長します。
            </h2>
            <div className="mt-8 hidden lg:block">
              <PhotoPlaceholder
                id="P-02"
                brief="20代男性がオフィスでノートPCを見ながら先輩と話している自然なワンシーン。過度な笑顔は避ける。"
                className="aspect-[4/5] w-full"
              />
            </div>
          </div>

          <ol className="flex flex-col">
            {STAGES.map((stage, index) => (
              <li
                key={stage.step}
                className={`flex gap-5 py-6 ${
                  index !== 0 ? "border-t border-brand-line" : ""
                }`}
              >
                <span className="font-mono text-xl font-semibold text-brand-blue/70 tabular-nums sm:text-2xl">
                  {stage.step}
                </span>
                <div>
                  <h3 className="text-base font-bold text-brand-navy sm:text-lg">
                    {stage.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-ink-muted">
                    {stage.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
