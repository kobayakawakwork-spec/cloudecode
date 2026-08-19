import { cn } from "@/lib/utils";

type PhotoPlaceholderProps = {
  id: string;
  brief: string;
  className?: string;
  tone?: "light" | "navy";
  showLabel?: boolean;
};

/**
 * Stand-in for a not-yet-supplied photo. Renders an abstract duotone panel
 * (never a "no image" gray box) so the layout reads as intentional art
 * direction until real photography is dropped in. `brief` is the shot
 * direction for whoever sources the replacement — surfaced in the delivery
 * report, not meant as permanent on-page copy.
 */
export function PhotoPlaceholder({
  id,
  brief,
  className,
  tone = "light",
  showLabel = true,
}: PhotoPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-md",
        tone === "light" ? "bg-brand-navy" : "bg-brand-blue",
        className
      )}
      role="img"
      aria-label={brief}
    >
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            tone === "light"
              ? "radial-gradient(120% 140% at 15% 0%, #223055 0%, #0b1220 55%, #060a14 100%)"
              : "radial-gradient(120% 140% at 85% 100%, #4d74ff 0%, #2451e5 55%, #163199 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 10px)",
        }}
      />
      {showLabel && (
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3">
          <span className="rounded-sm bg-black/30 px-2 py-1 font-mono text-[10px] whitespace-nowrap tracking-wide text-white/80 backdrop-blur-sm">
            {id}
          </span>
        </div>
      )}
    </div>
  );
}
