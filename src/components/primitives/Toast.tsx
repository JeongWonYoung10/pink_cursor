import * as React from "react";
import { Bell, CircleAlert, CheckCircle2 } from "lucide-react";
import { cn } from "../../lib/cn";

type ToastVariant = "success" | "warning" | "agent";

type ToastProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: ToastVariant;
  title: string;
  description?: string;
};

export function Toast({ variant = "agent", title, description, className, ...props }: ToastProps) {
  const Icon = variant === "success" ? CheckCircle2 : variant === "warning" ? CircleAlert : Bell;
  return (
    <div className={cn("rounded-bcXl border border-white/75 bg-white/70 p-4 shadow-bcSoft backdrop-blur-xl", variant === "warning" && "border-blush-coral/30 bg-blush-coral/15", className)} {...props}>
      <div className="flex gap-3">
        <Icon className="mt-0.5 h-5 w-5 text-blush-action" />
        <div>
          <p className="font-semibold text-plum-strong">{title}</p>
          {description && <p className="mt-1 text-sm text-plum-muted">{description}</p>}
        </div>
      </div>
    </div>
  );
}
