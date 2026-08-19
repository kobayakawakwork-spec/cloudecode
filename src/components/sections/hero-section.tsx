import { HeroChoiceCard } from "@/components/hero-choice-card";
import {
  ChallengeIllustration,
  StableIllustration,
} from "@/components/illustrations/hero-tag-illustrations";

const AREAS = [
  "東京",
  "神奈川",
  "千葉",
  "埼玉",
  "大阪",
  "愛知(名古屋)",
  "福岡",
];

const TAGS = [
  {
    tag: "#挑戦派",
    tagClass: "text-brand-blue",
    stat: "収入も裁量も、自分の実力で決めたい",
    bg: "bg-brand-blue-soft",
    Illustration: ChallengeIllustration,
  },
  {
    tag: "#安定派",
    tagClass: "text-brand-amber",
    stat: "無理なく長く続けられる環境を大事にしたい",
    bg: "bg-brand-amber-soft",
    Illustration: StableIllustration,
  },
] as const;

export function HeroSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-14">
        <p className="text-center font-mono text-xs tracking-wide text-brand-blue">
          営業未経験OK / 20代限定 / 完全無料相談
        </p>
        <h1 className="mx-auto mt-4 max-w-2xl text-center text-[1.9rem] leading-[1.3] font-bold tracking-tight text-brand-navy text-balance sm:text-4xl sm:leading-tight lg:text-5xl">
          転職するなら、あなたは
          <br />
          どちらを選びますか?
        </h1>
      </div>

      <div className="mt-8 grid grid-cols-2 sm:mt-10">
        {TAGS.map(({ tag, tagClass, stat, bg, Illustration }) => (
          <div key={tag} className={`${bg} px-3 py-8 text-center sm:py-12`}>
            <p className="text-sm leading-snug font-bold text-brand-navy sm:text-base">
              {stat}
            </p>
            <p
              className={`mt-3 text-2xl font-black tracking-tight italic sm:text-4xl ${tagClass}`}
            >
              {tag}
            </p>
            <Illustration className="mx-auto mt-4 w-24 sm:w-32" />
          </div>
        ))}
      </div>

      <div className="bg-brand-paper px-4 py-10 text-center sm:px-6 sm:py-14">
        <p className="text-base font-bold text-brand-navy sm:text-lg">
          あなたの希望の働き方を、一緒に叶えます。
          <br className="sm:hidden" />
          まずは無料で相談してみませんか?
        </p>

        <div className="mx-auto mt-6 max-w-sm sm:mt-8">
          <HeroChoiceCard />
        </div>

        <p className="mt-6 text-[11px] text-brand-ink-muted">
          対応エリア {AREAS.join(" / ")}
        </p>
      </div>
    </section>
  );
}
