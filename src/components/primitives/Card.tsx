import * as React from "react";
import { cn } from "../../lib/cn";

export type CardVariant = "glass" | "blush" | "gradient" | "technical";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
};

const variants: Record<CardVariant, string> = {
  glass: "border border-white/75 bg-white/50 shadow-bcSurface backdrop-blur-2xl",
  blush: "border border-white/75 bg-blush-soft/45 shadow-bcSoft",
  gradient: "bg-gradient-to-br from-blush-action to-blush-coral text-white shadow-bcAgent",
  technical: "border border-blush-panel/70 bg-[#fff8fb]/80 shadow-inner",
};

export function Card({ className, variant = "glass", ...props }: CardProps) {
  return <div className={cn("rounded-bc2xl", variants[variant], className)} {...props} />;
}
