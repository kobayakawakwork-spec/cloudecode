import { ConsultationDialog } from "@/components/consultation-dialog";
import { SuccessIllustration } from "@/components/illustrations/success-illustration";

export function FinalCtaSection() {
  return (
    <section className="bg-brand-navy text-white">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <SuccessIllustration className="mx-auto w-40 sm:w-48" />
        <h2 className="mt-6 text-2xl leading-snug font-bold tracking-tight text-balance sm:text-4xl sm:leading-tight">
          その転職、
          <br className="sm:hidden" />
          話すところから始めよう。
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
          20代・営業未経験OK。あなたに合う会社だけを紹介する、完全無料の転職相談です。
        </p>

        <div className="mx-auto mt-9 max-w-xs">
          <ConsultationDialog
            triggerLabel="無料で転職相談する"
            triggerSize="lg"
            triggerClassName="w-full"
            helperClassName="text-white/50"
          />
        </div>

        <p className="mt-10 border-t border-brand-line-on-navy pt-6 text-[11px] leading-relaxed text-white/40">
          運営:株式会社Ark ／ 対応エリア:東京・神奈川・千葉・埼玉・大阪・愛知(名古屋)・福岡
          ／ ご相談・ご利用は無料です(費用は紹介企業が負担する仕組みです)
        </p>
      </div>
    </section>
  );
}
