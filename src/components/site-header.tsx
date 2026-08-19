import { ConsultationDialog } from "@/components/consultation-dialog";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-line bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#"
          className="font-mono text-lg font-semibold tracking-tight text-brand-navy"
        >
          Ark
          <span className="ml-2 hidden text-[11px] font-normal tracking-normal text-brand-ink-muted sm:inline">
            20代・営業未経験の転職相談
          </span>
        </a>
        <ConsultationDialog
          triggerLabel="無料で転職相談する"
          triggerClassName="hidden sm:flex"
          triggerSize="sm"
          helperText=""
        />
      </div>
    </header>
  );
}
