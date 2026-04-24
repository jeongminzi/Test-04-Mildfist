"use client";

type Size = "sm" | "md" | "lg";

export interface SpinnerProps {
  size?: Size;
  tone?: "brand" | "onBrand" | "tertiary";
  className?: string;
  label?: string;
}

const pxSize: Record<Size, number> = { sm: 18, md: 32, lg: 48 };

const toneClass: Record<NonNullable<SpinnerProps["tone"]>, string> = {
  brand: "text-text-brand",
  onBrand: "text-text-on-brand",
  tertiary: "text-text-tertiary",
};

export function Spinner({
  size = "md",
  tone = "brand",
  className = "",
  label = "Loading",
}: SpinnerProps) {
  const px = pxSize[size];
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      role="status"
      aria-label={label}
      className={`animate-spin ${toneClass[tone]} ${className}`}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={3} opacity={0.2} />
      <path
        d="M12 2a10 10 0 0 1 10 10"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </svg>
  );
}
