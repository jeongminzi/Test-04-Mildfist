"use client";

import { CSSProperties } from "react";

type Size = "sm" | "md" | "lg";

export interface AvatarProps {
  name: string;
  src?: string | null;
  size?: Size;
  className?: string;
}

const dimension: Record<Size, number> = { sm: 24, md: 32, lg: 48 };
const fontClass: Record<Size, string> = {
  sm: "text-xs",
  md: "text-xs",
  lg: "text-sm",
};

export function Avatar({ name, src, size = "md", className = "" }: AvatarProps) {
  const px = dimension[size];
  const style: CSSProperties = { width: px, height: px };
  const initial = name.charAt(0).toUpperCase();

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        style={style}
        className={`rounded-pill object-cover ${className}`}
      />
    );
  }

  return (
    <div
      style={style}
      className={`inline-flex items-center justify-center rounded-pill bg-bg-subtle text-text-primary font-semibold ${fontClass[size]} ${className}`}
    >
      {initial}
    </div>
  );
}
