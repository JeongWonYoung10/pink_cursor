import * as React from "react";
import { cn } from "../../lib/cn";

export type DiffLineType = "added" | "removed" | "context" | "warning";

type DiffLineProps = React.HTMLAttributes<HTMLParagraphElement> & {
  type?: DiffLineType;
};

const variants: Record<DiffLineType, string> = {
  added: "bg-blush-action/12 text-blush-action",
  removed: "bg-blush-coral/15 text-[#b15c64]",
  context: "text-plum-soft",
  warning: "bg-blush-coral/15 text-[#d85b62]",
};

export function DiffLine({ type = "context", className, ...props }: DiffLineProps) {
  return <p className={cn("rounded-bcSm px-3 py-1 font-mono text-xs leading-6", variants[type], className)} {...props} />;
}
