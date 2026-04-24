"use client";

import { InputHTMLAttributes, forwardRef, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leadingIcon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, leadingIcon, className = "", id, ...rest },
  ref,
) {
  const inputId = id ?? rest.name;
  const hasError = Boolean(error);

  const field = (
    <div
      className={[
        "flex items-center gap-2 px-4 py-2.5 bg-bg-surface rounded-card border transition-colors",
        hasError ? "border-border-brand" : "border-border-strong",
      ].join(" ")}
    >
      {leadingIcon ? (
        <span className="text-text-tertiary flex-shrink-0">{leadingIcon}</span>
      ) : null}
      <input
        id={inputId}
        ref={ref}
        className={`flex-1 text-sm outline-none bg-transparent text-text-primary placeholder:text-text-tertiary ${className}`}
        {...rest}
      />
    </div>
  );

  if (!label && !error) return field;

  return (
    <div className="flex flex-col gap-1.5">
      {label ? (
        <label htmlFor={inputId} className="text-xs font-medium text-text-primary">
          {label}
        </label>
      ) : null}
      {field}
      {error ? <p className="text-xs text-text-brand">{error}</p> : null}
    </div>
  );
});
