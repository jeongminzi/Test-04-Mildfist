"use client";

import { HTMLAttributes } from "react";

type Tone = "surface" | "muted" | "subtle";
type Padding = "none" | "sm" | "md" | "lg";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  tone?: Tone;
  padding?: Padding;
  elevated?: boolean;
  bordered?: boolean;
}

const toneClass: Record<Tone, string> = {
  surface: "bg-bg-surface",
  muted: "bg-bg-muted",
  subtle: "bg-bg-subtle",
};

const padClass: Record<Padding, string> = {
  none: "p-0",
  sm: "p-3",
  md: "p-4",
  lg: "p-6",
};

export function Card({
  tone = "surface",
  padding = "md",
  elevated = false,
  bordered = false,
  className = "",
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={[
        "rounded-card",
        toneClass[tone],
        padClass[padding],
        bordered ? "border border-border-default" : "",
        elevated ? "shadow-card" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </div>
  );
}
