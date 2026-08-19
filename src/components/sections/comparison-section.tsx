import {
  OverwhelmIcon,
  OneWayIcon,
  MatchIcon,
} from "@/components/illustrations/comparison-icons";
import { ConversationIllustration } from "@/components/illustrations/conversation-illustration";

const ROUNDS = [
  {
    genericIcon: OverwhelmIcon,
    genericBody: "希望条件に関わらず、手当たり次第に求人を紹介される",
    arkIcon: MatchIcon,
    arkTitle: "未経験でも活躍できる求人だけを厳選",
    arkBody: "希望や適性をふまえ、本当に合う求人だけを紹介します。",
  },
  {
    genericIcon: OneWayIcon,
    genericBody: "経歴や希望を伝えきれないまま、紹介が始まってしまう",
    arkIcon: ConversationIllustration,
    arkTitle: "まずはじっくりヒアリングしてから提案",
    arkBody: "不安や希望を丁寧に伺ったうえで、方向性を一緒に整理します。",
  },
];

export function ComparisonSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-center text-2xl leading-snug font-bold tracking-tight text-brand-navy text-balance sm:text-3xl">
          他社とは何が違う?
          <br className="sm:hidden" />
          Arkの転職相談の特徴をご紹介!
        </h2>

        <div className="mt-10 flex flex-col gap-12 sm:mt-14">
          {ROUNDS.map((round) => (
            <div key={round.genericBody}>
              <div className="rounded-3xl bg-brand-paper p-4 sm:p-5">
                <p className="mb-4 text-center text-sm font-bold text-brand-navy">
                  一般的な転職エージェントの場合
                </p>
                <div className="rounded-2xl bg-white p-6 text-center">
                  <round.genericIcon className="mx-auto w-28" />
                  <p className="mt-4 text-[15px] leading-relaxed font-medium text-brand-navy">
                    {round.genericBody}
                  </p>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="mx-auto h-0 w-0 border-x-[14px] border-t-[18px] border-x-transparent border-t-brand-navy"
              />

              <div className="rounded-3xl bg-brand-blue-soft p-4 sm:p-5">
                <p className="mb-4 text-center text-lg font-black tracking-tight text-brand-blue">
                  Ark<span className="text-brand-navy">なら</span>
                </p>
                <div className="rounded-2xl bg-white p-6 text-center">
                  <round.arkIcon className="mx-auto w-28" />
                  <h3 className="mt-4 text-base font-bold text-brand-navy">
                    {round.arkTitle}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-ink-muted">
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
