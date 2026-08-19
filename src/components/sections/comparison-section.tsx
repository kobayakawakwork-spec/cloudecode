import { ArrowDown } from "lucide-react";

import {
  OverwhelmIcon,
  OneWayIcon,
  MatchIcon,
} from "@/components/illustrations/comparison-icons";
import { ConversationIllustration } from "@/components/illustrations/conversation-illustration";

const ROUNDS = [
  {
    genericIcon: OverwhelmIcon,
    genericTitle: "とにかく大量に求人を紹介される",
    genericBody: "希望条件に関わらず、手当たり次第に求人を送られることも。",
    arkIcon: MatchIcon,
    arkTitle: "未経験でも活躍できる求人だけを厳選",
    arkBody: "希望や適性をふまえ、本当に合う求人だけを紹介します。",
  },
  {
    genericIcon: OneWayIcon,
    genericTitle: "話を聞かれる前に紹介が始まる",
    genericBody: "経歴や希望を伝えきれないまま、求人紹介が進んでしまう。",
    arkIcon: ConversationIllustration,
    arkTitle: "まずはじっくりヒアリングしてから提案",
    arkBody: "不安や希望を丁寧に伺ったうえで、方向性を一緒に整理します。",
  },
];

export function ComparisonSection() {
  return (
    <section className="bg-brand-paper">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-center font-mono text-xs tracking-wide text-brand-blue">
          DIFFERENCE
        </p>
        <h2 className="mt-3 text-center text-2xl leading-snug font-bold tracking-tight text-brand-navy text-balance sm:text-3xl">
          他社と何が違う?
          <br className="sm:hidden" />
          Arkの転職相談との違い
        </h2>

        <div className="mt-10 flex flex-col gap-12 sm:mt-12">
          {ROUNDS.map((round) => (
            <div key={round.genericTitle}>
              <div className="rounded-2xl border border-brand-line bg-white p-6 sm:flex sm:items-center sm:gap-6">
                <round.genericIcon className="mx-auto w-28 shrink-0 sm:mx-0" />
                <div className="mt-4 text-center sm:mt-0 sm:text-left">
                  <p className="text-[11px] font-semibold text-brand-ink-muted">
                    一般的な転職エージェントの場合
                  </p>
                  <h3 className="mt-1 text-base font-bold text-brand-navy">
                    {round.genericTitle}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-ink-muted">
                    {round.genericBody}
                  </p>
                </div>
              </div>

              <div className="flex justify-center py-3">
                <ArrowDown aria-hidden="true" className="size-5 text-brand-blue" />
              </div>

              <div className="rounded-2xl bg-brand-navy p-6 text-white sm:flex sm:items-center sm:gap-6">
                <round.arkIcon className="mx-auto w-28 shrink-0 sm:mx-0" />
                <div className="mt-4 text-center sm:mt-0 sm:text-left">
                  <p className="text-[11px] font-semibold text-brand-blue-soft">
                    Arkなら
                  </p>
                  <h3 className="mt-1 text-base font-bold">{round.arkTitle}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">
                    {round.arkBody}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
