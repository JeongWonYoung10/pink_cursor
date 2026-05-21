import * as React from "react";
import { cn } from "../../lib/cn";

export type ButtonVariant = "primary" | "gradient" | "secondary" | "quiet" | "recovery";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-blush-action text-white shadow-bcAction hover:bg-blush-hover",
  gradient: "bg-gradient-to-r from-blush-action to-blush-coral text-white shadow-bcAgent",
  secondary: "border border-white/80 bg-white/60 text-plum-muted hover:bg-white/80",
  quiet: "bg-transparent text-plum-muted hover:bg-white/40",
  recovery: "bg-blush-action text-white shadow-bcAction hover:bg-blush-hover",
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-bcLg px-5 text-sm font-semibold transition disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
