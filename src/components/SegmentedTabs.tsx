"use client";

export interface SegmentedTab<T extends string = string> {
  value: T;
  label: string;
}

export interface SegmentedTabsProps<T extends string = string> {
  tabs: SegmentedTab<T>[];
  value: T;
  onChange: (value: T) => void;
  variant?: "pill" | "underline";
  className?: string;
}

export function SegmentedTabs<T extends string = string>({
  tabs,
  value,
  onChange,
  variant = "pill",
  className = "",
}: SegmentedTabsProps<T>) {
  if (variant === "underline") {
    return (
      <div
        role="tablist"
        className={`flex items-center gap-4 border-b border-border-default ${className}`}
      >
        {tabs.map((tab) => {
          const active = tab.value === value;
          return (
            <button
              key={tab.value}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onChange(tab.value)}
              className={[
                "pb-3 text-sm font-medium relative transition-colors cursor-pointer",
                active ? "text-text-brand" : "text-text-secondary",
              ].join(" ")}
            >
              {tab.label}
              {active ? (
                <span className="absolute left-0 right-0 -bottom-px h-[2.5px] rounded-control bg-bg-brand" />
              ) : null}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div
      role="tablist"
      className={`inline-flex bg-bg-muted rounded-card p-1 ${className}`}
    >
      {tabs.map((tab) => {
        const active = tab.value === value;
        return (
          <button
            key={tab.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(tab.value)}
            className={[
              "flex-1 text-sm font-medium py-2 px-4 rounded-tag transition-colors cursor-pointer",
              active
                ? "bg-bg-surface text-text-primary"
                : "bg-transparent text-text-tertiary",
            ].join(" ")}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
