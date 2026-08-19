export function SiteFooter() {
  return (
    <footer className="border-t border-brand-line bg-white pb-24 sm:pb-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-sm font-semibold tracking-tight text-brand-navy">
            Ark
          </p>
          <p className="mt-2 max-w-xs text-xs leading-relaxed text-brand-ink-muted">
            株式会社Ark 転職支援サービス。
            東京・神奈川・千葉・埼玉・大阪・愛知(名古屋)・福岡エリア対応。
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-brand-ink-muted">
          <a href="#" className="hover:text-brand-navy">
            運営会社
          </a>
          <a href="#" className="hover:text-brand-navy">
            プライバシーポリシー
          </a>
          <a href="#" className="hover:text-brand-navy">
            利用規約
          </a>
          <a href="#" className="hover:text-brand-navy">
            特定商取引法に基づく表記
          </a>
        </nav>
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-[11px] text-brand-ink-muted/80">
          &copy; {new Date().getFullYear()} Ark Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
