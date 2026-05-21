import { cn } from "../../lib/cn";

export function FileTreeItem({ name, active, touched }: { name: string; active?: boolean; touched?: boolean }) {
  return (
    <div className={cn("flex items-center justify-between rounded-bcLg px-3 py-2 text-xs", active ? "bg-blush-action text-white shadow-bcAction" : "bg-white/55 text-plum-muted")}>
      <span>{name}</span>
      {touched && <span className={active ? "text-white/70" : "text-blush-action"}>●</span>}
    </div>
  );
}
