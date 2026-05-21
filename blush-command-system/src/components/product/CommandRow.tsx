import type { LucideIcon } from "lucide-react";
import { cn } from "../../lib/cn";
import { Badge } from "../primitives/Badge";

type CommandRowProps = {
  icon: LucideIcon;
  group: string;
  title: string;
  shortcut?: string;
  active?: boolean;
};

export function CommandRow({ icon: Icon, group, title, shortcut, active }: CommandRowProps) {
  return (
    <div className={cn("flex items-center justify-between rounded-bcLg px-4 py-3", active ? "bg-gradient-to-r from-blush-action to-blush-coral text-white shadow-bcAction" : "bg-white/60 text-plum-muted")}>
      <div className="flex items-center gap-3">
        <Icon className="h-4 w-4" />
        <div>
          <p className="text-sm font-semibold">{title}</p>
          <p className={cn("text-xs", active ? "text-white/70" : "text-plum-soft")}>{group}</p>
        </div>
      </div>
      {shortcut && <Badge variant="shortcut" className={cn(active && "bg-white/20 text-white")}>{shortcut}</Badge>}
    </div>
  );
}
