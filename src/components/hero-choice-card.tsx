"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { ConsultationDialog } from "@/components/consultation-dialog";

const TIMINGS = ["すぐに", "3ヶ月以内", "6ヶ月以内", "1年以内", "情報収集段階"];

export function HeroChoiceCard() {
  const [timing, setTiming] = useState<string | null>(null);

  return (
    <div className="rounded-2xl bg-white p-5 text-brand-navy shadow-xl sm:p-6">
      <p className="text-sm font-bold">入社希望時期を選択してください</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {TIMINGS.map((label) => (
          <button
            key={label}
            type="button"
            onClick={() => setTiming(label)}
            aria-pressed={timing === label}
            className={cn(
              "rounded-full border border-brand-line px-3 py-1.5 text-xs font-medium text-brand-navy transition-colors",
              timing === label &&
                "border-brand-blue bg-brand-blue-soft text-brand-blue"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-5">
        <ConsultationDialog
          triggerLabel="無料で相談する"
          triggerSize="lg"
          triggerClassName="w-full"
          helperText="まずは話すだけでもOK。1分で送信できます。"
        />
      </div>
    </div>
  );
}
