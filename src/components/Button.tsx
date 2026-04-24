"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "ghost" | "danger" | "subtle";
type Size = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-bg-brand text-text-on-brand hover:opacity-90",
  ghost:
    "bg-transparent text-text-primary hover:bg-bg-muted border border-border-default",
  danger: "bg-transparent text-text-brand hover:bg-bg-muted",
  subtle: "bg-bg-muted text-text-primary hover:bg-bg-subtle",
};

const sizeClasses: Record<Size, string> = {
  sm: "text-xs px-3 py-1.5 gap-1.5",
  md: "text-sm px-5 py-2 gap-2",
  lg: "text-sm px-6 py-3 gap-2",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", fullWidth, className = "", children, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      className={[
        "inline-flex items-center justify-center font-medium rounded-control transition-colors disabled:opacity-60 disabled:cursor-not-allowed",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? "w-full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
});
