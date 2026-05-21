import * as React from "react";
import { cn } from "../../lib/cn";

export type BadgeVariant = "status" | "shortcut" | "category" | "risk" | "success";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const variants: Record<BadgeVariant, string> = {
  status: "bg-white/60 text-plum-muted border border-white/75",
  shortcut: "bg-blush-soft/60 text-blush-action",
  category: "bg-white/60 text-plum-muted",
  risk: "bg-blush-coral/15 text-[#d85b62] border border-blush-coral/30",
  success: "bg-blush-soft/60 text-blush-action",
};

export function Badge({ className, variant = "status", ...props }: BadgeProps) {
  return (
    <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold", variants[variant], className)} {...props} />
  );
}
