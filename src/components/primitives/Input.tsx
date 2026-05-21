import * as React from "react";
import { cn } from "../../lib/cn";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-bcLg border border-white/80 bg-white/65 px-4 text-sm text-plum-muted outline-none placeholder:text-plum-soft focus:ring-2 focus:ring-blush-action/25",
        className
      )}
      {...props}
    />
  );
}
