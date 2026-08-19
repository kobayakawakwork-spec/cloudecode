import { HeroChoiceCard } from "@/components/hero-choice-card";
import { HeroIllustration } from "@/components/illustrations/hero-illustration";

const TRUST_MARKERS = ["営業未経験OK", "20代限定", "完全無料相談"];

const AREAS = [
  "東京",
  "神奈川",
  "千葉",
  "埼玉",
  "大阪",
  "愛知(名古屋)",
  "福岡",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-40 -right-40 size-[520px] rounded-full bg-brand-blue/25 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pt-10 pb-12 sm:px-6 sm:pt-16 sm:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pt-24 lg:pb-24">
        <div>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] tracking-wide text-white/70 sm:text-xs">
            {TRUST_MARKERS.map((marker, i) => (
              <li key={marker} className="flex items-center gap-4">
                {i > 0 && <span className="text-white/25">/</span>}
                {marker}
              </li>
            ))}
          </ul>

          <h1 className="mt-5 text-[2.1rem] leading-[1.25] font-bold tracking-tight text-balance sm:text-5xl sm:leading-[1.15] lg:text-[3.4rem]">
            営業未経験から、
            <br />
            <span className="text-brand-blue-soft">
              &ldquo;稼げる自分&rdquo;
            </span>
            に近づく転職を。
          </h1>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/75 sm:text-base">
            20代・営業未経験OK。学歴や職歴に自信がなくても大丈夫。
            あなたに合う会社だけを紹介する、Arkの無料転職相談です。
          </p>

          <div className="mt-8">
            <HeroChoiceCard />
          </div>

          <div className="mt-8 border-t border-brand-line-on-navy pt-4">
            <p className="text-[11px] text-white/50">
              対応エリア&nbsp;
              <span className="text-white/70">{AREAS.join(" / ")}</span>
            </p>
          </div>
        </div>

        <div className="hidden lg:block lg:pl-4">
          <HeroIllustration className="mx-auto w-full max-w-sm opacity-90" />
        </div>
      </div>
    </section>
  );
}
