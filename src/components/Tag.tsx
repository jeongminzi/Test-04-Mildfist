"use client";

import { HTMLAttributes } from "react";

type Tone =
  | "neutral"
  | "brand"
  | "selected"
  | "blue"
  | "green"
  | "lime"
  | "purple"
  | "pink"
  | "peach"
  | "onImage";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
  clickable?: boolean;
}

const toneClasses: Record<Tone, string> = {
  neutral: "bg-bg-subtle text-text-primary",
  brand: "bg-bg-brand text-text-on-brand",
  selected: "bg-bg-brand text-text-on-brand",
  blue: "bg-tag-blue text-text-primary",
  green: "bg-tag-green text-text-primary",
  lime: "bg-tag-lime text-text-primary",
  purple: "bg-tag-purple text-text-primary",
  pink: "bg-tag-pink text-text-primary",
  peach: "bg-tag-peach text-text-primary",
  onImage: "bg-bg-scrim text-text-primary",
};

export function Tag({
  tone = "neutral",
  clickable = false,
  className = "",
  children,
  ...rest
}: TagProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-tag text-xs font-medium",
        toneClasses[tone],
        clickable ? "cursor-pointer hover:opacity-90" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </span>
  );
}
