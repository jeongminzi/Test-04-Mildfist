"use client";

import Link from "next/link";
import type { ReactNode } from "react";

export interface AdminNavItem {
  href: string;
  label: string;
  icon: ReactNode;
}

export interface AdminSideNavProps {
  items: AdminNavItem[];
  activeHref: string;
  onNavigate?: () => void;
}

export function AdminSideNav({
  items,
  activeHref,
  onNavigate,
}: AdminSideNavProps) {
  return (
    <nav className="flex flex-col gap-1 px-3 py-4">
      <span className="text-xs font-semibold text-text-tertiary px-3 mb-2">
        관리자
      </span>
      {items.map((item) => {
        const active =
          item.href === "/admin"
            ? activeHref === "/admin"
            : activeHref.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={[
              "flex items-center gap-3 text-sm no-underline px-3 py-2.5 rounded-tag transition-colors",
              active
                ? "bg-bg-brand text-text-on-brand font-medium"
                : "text-text-primary hover:bg-bg-muted",
            ].join(" ")}
          >
            {item.icon}
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
