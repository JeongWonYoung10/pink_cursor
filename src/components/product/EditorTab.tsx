import { cn } from "../../lib/cn";

export function EditorTab({ label, active, dirty }: { label: string; active?: boolean; dirty?: boolean }) {
  return (
    <div className={cn("inline-flex items-center gap-2 rounded-bcMd px-3 py-1.5 text-xs font-semibold", active ? "bg-blush-action text-white shadow-bcAction" : "bg-white/60 text-plum-muted")}>
      {label}
      {dirty && <span className={active ? "text-white/75" : "text-blush-action"}>●</span>}
    </div>
  );
}
