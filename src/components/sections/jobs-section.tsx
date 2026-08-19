import {
  Briefcase,
  Laptop,
  Megaphone,
  Users,
  Building2,
  Phone,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

const CHIP_TONES = [
  "bg-brand-blue-soft text-brand-blue",
  "bg-brand-amber-soft text-brand-amber",
  "bg-brand-mint text-emerald-600",
];

const JOBS = [
  {
    role: "法人営業",
    icon: Briefcase,
    body: "企業を相手に自社サービスを提案。信頼関係を築く力が身につきます。",
    tags: ["未経験歓迎", "研修あり"],
  },
  {
    role: "IT・SaaS営業",
    icon: Laptop,
    body: "成長中のプロダクトを企業に提案。業界知識も同時に得られます。",
    tags: ["未経験歓迎", "将来性"],
  },
  {
    role: "広告・Web営業",
    icon: Megaphone,
    body: "企業の集客・マーケティング課題を提案で解決するポジション。",
    tags: ["未経験歓迎", "企画力"],
  },
  {
    role: "人材営業",
    icon: Users,
    body: "企業の採用課題に向き合う仕事。人と企業をつなぐやりがいがあります。",
    tags: ["未経験歓迎", "研修あり"],
  },
  {
    role: "不動産営業",
    icon: Building2,
    body: "成果が収入に反映されやすく、20代からの裁量が大きい領域。",
    tags: ["未経験歓迎", "インセンティブ"],
  },
  {
    role: "インサイドセールス",
    icon: Phone,
    body: "訪問なしで完結する内勤営業。未経験からの入口として人気です。",
    tags: ["未経験歓迎", "内勤中心"],
  },
];

export function JobsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="font-mono text-xs tracking-wide text-brand-blue">
          FIELDS
        </p>
        <h2 className="mt-3 max-w-lg text-2xl leading-snug font-bold tracking-tight text-brand-navy text-balance sm:text-3xl">
          紹介できる営業職の一例です。
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-brand-ink-muted">
          いずれも紹介実績のある職種イメージです。募集状況は時期により変動するため、最新の求人は相談時にご案内します。
        </p>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {JOBS.map((job, i) => (
            <div
              key={job.role}
              className="rounded-2xl border border-brand-line p-5"
            >
              <span
                className={`inline-flex size-10 items-center justify-center rounded-xl ${CHIP_TONES[i % CHIP_TONES.length]}`}
              >
                <job.icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 text-base font-bold text-brand-navy">
                {job.role}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink-muted">
                {job.body}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {job.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-brand-line text-brand-navy/80"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
