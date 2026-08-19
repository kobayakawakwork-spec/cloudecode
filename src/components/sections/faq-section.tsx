import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "営業未経験でも本当に大丈夫ですか?",
    a: "はい。紹介する求人は、未経験者向けの研修体制が整った企業を中心に選んでいます。まずは適性や不安な点を伺ったうえでご案内します。",
  },
  {
    q: "相談やサービスの利用に料金はかかりますか?",
    a: "相談・利用ともに無料です。費用は紹介先の企業が負担する仕組みのため、求職者の方の負担はありません。",
  },
  {
    q: "対象エリア外に住んでいても相談できますか?",
    a: "現在は東京・神奈川・千葉・埼玉・大阪・愛知(名古屋)・福岡を中心にご案内しています。対象エリア外の場合も、相談時にご案内可否をお伝えします。",
  },
  {
    q: "転職を決めていなくても、相談だけでいいですか?",
    a: "もちろんです。「話を聞いてみたい」という段階でのご相談も歓迎しています。無理に転職を勧めることはありません。",
  },
  {
    q: "入力した個人情報はどう扱われますか?",
    a: "ご入力いただいた情報は、転職相談の目的以外には使用しません。詳細はプライバシーポリシーをご確認ください。",
  },
];

export function FaqSection() {
  return (
    <section className="bg-brand-paper">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="font-mono text-xs tracking-wide text-brand-blue">
          FAQ
        </p>
        <h2 className="mt-3 text-2xl leading-snug font-bold tracking-tight text-brand-navy sm:text-3xl">
          よくある質問
        </h2>

        <Accordion type="single" collapsible className="mt-8 sm:mt-10">
          {FAQS.map((item, index) => (
            <AccordionItem
              key={item.q}
              value={`item-${index}`}
              className="border-brand-line"
            >
              <AccordionTrigger className="text-[15px] font-bold text-brand-navy sm:text-base">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-brand-ink-muted">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
