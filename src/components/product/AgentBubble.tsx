import * as React from "react";
import { cn } from "../../lib/cn";

export type AgentBubbleRole = "user" | "agent" | "system";
export type AgentBubbleType = "answer" | "plan" | "action" | "review" | "recovery" | "risk";

type AgentBubbleProps = React.HTMLAttributes<HTMLDivElement> & {
  role: AgentBubbleRole;
  type?: AgentBubbleType;
};

export function AgentBubble({ role, type = "answer", className, ...props }: AgentBubbleProps) {
  const isAgent = role === "agent";
  const isRisk = type === "risk" || type === "recovery";

  return (
    <div
      className={cn(
        "rounded-bcLg p-3 text-xs leading-5 shadow-sm",
        role === "user" && "bg-white/60 text-plum-muted",
        isAgent && "bg-gradient-to-br from-blush-hover to-blush-coral text-white shadow-bcAgent",
        role === "system" && !isRisk && "border border-white/75 bg-blush-soft/40 text-plum-muted",
        isRisk && "border border-blush-coral/30 bg-blush-coral/15 text-plum-muted",
        className
      )}
      {...props}
    />
  );
}
