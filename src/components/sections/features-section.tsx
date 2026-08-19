import { Compass, ListFilter, LifeBuoy } from "lucide-react";

import { ConsultationDialog } from "@/components/consultation-dialog";

const FEATURES = [
  {
    icon: Compass,
    title: "専属アドバイザーが一人ひとりに伴走",
    body: "経歴や希望条件をもとに、専属担当があなたに合う方向性を一緒に整理します。",
  },
  {
    icon: ListFilter,
    title: "未経験者向けの求人だけを厳選して紹介",
    body: "情報量に圧倒されないよう、未経験からでも挑戦しやすい求人だけに絞って提案します。",
  },
  {
    icon: LifeBuoy,
    title: "内定後、入社後まで見据えたサポート",
    body: "書類・面接対策はもちろん、入社後の不安や条件面の相談にも継続して対応します。",
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-brand-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="font-mono text-xs tracking-wide text-brand-blue-soft/80">
          ARK SUPPORT
        </p>
        <h2 className="mt-3 max-w-md text-2xl leading-snug font-bold tracking-tight text-balance sm:text-3xl">
          転職は、一人で進めなくていい。
        </h2>

        <div className="mt-10 grid gap-8 border-t border-brand-line-on-navy pt-10 sm:mt-14 sm:grid-cols-3 sm:gap-10 sm:pt-14">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <div key={title}>
              <Icon
                aria-hidden="true"
                className="size-6 text-brand-blue-soft"
                strokeWidth={1.75}
              />
              <h3 className="mt-4 text-base leading-snug font-bold sm:text-lg">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-xs sm:mt-16">
          <ConsultationDialog
            triggerLabel="無料で転職相談する"
            triggerSize="lg"
            triggerClassName="w-full"
            helperClassName="text-white/50"
          />
        </div>
      </div>
    </section>
  );
}
