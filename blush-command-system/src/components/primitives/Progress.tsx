import { cn } from "../../lib/cn";

export function Progress({ value = 0, className }: { value?: number; className?: string }) {
  return (
    <div className={cn("h-2 rounded-full bg-blush-soft/60", className)}>
      <div className="h-2 rounded-full bg-blush-action transition-all" style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  );
}
