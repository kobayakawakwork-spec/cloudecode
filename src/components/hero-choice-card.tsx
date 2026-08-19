"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { ConsultationDialog } from "@/components/consultation-dialog";

const TYPES = [
  {
    value: "challenge",
    label: "挑戦派",
    body: "収入も裁量も、自分の実力で決めたい",
    ring: "ring-brand-coral border-brand-coral bg-orange-50",
  },
  {
    value: "stable",
    label: "安定派",
    body: "無理なく長く続けられる環境を大事にしたい",
    ring: "ring-brand-blue border-brand-blue bg-brand-blue-soft",
  },
] as const;

const TIMINGS = ["すぐにでも", "3ヶ月以内", "情報収集中"];

export function HeroChoiceCard() {
  const [type, setType] = useState<(typeof TYPES)[number]["value"] | null>(
    null
  );
  const [timing, setTiming] = useState<string | null>(null);

  return (
    <div className="rounded-2xl bg-white p-5 text-brand-navy shadow-xl sm:p-6">
      <p className="text-sm font-bold">転職するなら、あなたはどちらを選びますか?</p>

      <div className="mt-3 grid grid-cols-2 gap-3">
        {TYPES.map((t) => (
          <button
            key={t.value}
            type="button"
            onClick={() => setType(t.value)}
            aria-pressed={type === t.value}
            className={cn(
              "rounded-xl border border-brand-line p-3 text-left transition-colors",
              type === t.value && `ring-2 ${t.ring}`
            )}
          >
            <span className="text-xs font-bold text-brand-navy">
              #{t.label}
            </span>
            <p className="mt-1 text-[11px] leading-snug text-brand-ink-muted">
              {t.body}
            </p>
          </button>
        ))}
      </div>

      <p className="mt-5 text-xs font-bold text-brand-ink-muted">
        入社希望時期を選択してください
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {TIMINGS.map((label) => (
          <button
            key={label}
            type="button"
            onClick={() => setTiming(label)}
            aria-pressed={timing === label}
            className={cn(
              "rounded-full border border-brand-line px-3 py-1.5 text-xs font-medium text-brand-navy transition-colors",
              timing === label && "border-brand-blue bg-brand-blue-soft text-brand-blue"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-5">
        <ConsultationDialog
          triggerLabel="この条件で無料相談する"
          triggerSize="lg"
          triggerClassName="w-full"
          helperText="まずは話すだけでもOK。1分で送信できます。"
        />
      </div>
    </div>
  );
}
