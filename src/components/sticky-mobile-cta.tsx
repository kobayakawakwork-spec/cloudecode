import { ConsultationDialog } from "@/components/consultation-dialog";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-line bg-white/95 p-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] backdrop-blur-md sm:hidden">
      <ConsultationDialog
        triggerLabel="無料で転職相談する"
        triggerClassName="w-full"
        triggerSize="lg"
      />
    </div>
  );
}
