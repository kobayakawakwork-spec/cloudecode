import { Check } from "lucide-react";

import { ConversationIllustration } from "@/components/illustrations/conversation-illustration";

const SUPPORTS = [
  {
    title: "履歴書・職務経歴書の添削",
    body: "未経験からでも伝わる書き方を、一緒に作り込みます。",
  },
  {
    title: "面接対策・模擬面接",
    body: "よくある質問への答え方を事前に整理し、本番前に練習できます。",
  },
  {
    title: "あなたに合う求人紹介",
    body: "希望条件と適性をふまえ、無理のない候補だけを提案します。",
  },
  {
    title: "年収・条件面の交渉サポート",
    body: "言い出しにくい条件面の調整も、代わりに担当が行います。",
  },
  {
    title: "入社後のフォロー相談",
    body: "入社してからの不安や疑問も、引き続き相談できます。",
  },
];

export function SupportSection() {
  return (
    <section className="bg-brand-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs tracking-wide text-brand-blue">
              SUPPORT
            </p>
            <h2 className="mt-3 text-2xl leading-snug font-bold tracking-tight text-brand-navy text-balance sm:text-3xl">
              応募までも、
              <br />
              入社後も、そばにいます。
            </h2>
            <div className="mt-8 hidden lg:block">
              <ConversationIllustration className="w-full max-w-sm" />
            </div>
          </div>

          <ul className="flex flex-col gap-0">
            {SUPPORTS.map((item, index) => (
              <li
                key={item.title}
                className={`flex gap-4 py-5 ${
                  index !== 0 ? "border-t border-brand-line" : ""
                }`}
              >
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
                  <Check aria-hidden="true" className="size-3.5" strokeWidth={2.5} />
                </span>
                <div>
                  <h3 className="text-[15px] font-bold text-brand-navy sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-ink-muted">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
