"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/components/AuthContext";
import { Spinner } from "@/components/Spinner";
import { Button } from "@/components/Button";
import { AdminSideNav, type AdminNavItem } from "@/features/admin/AdminSideNav";

const NAV_ITEMS: AdminNavItem[] = [
  {
    href: "/admin",
    label: "대시보드",
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
      </svg>
    ),
  },
  {
    href: "/admin/members",
    label: "회원 관리",
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    href: "/admin/contents",
    label: "콘텐츠 관리",
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
    ),
  },
  {
    href: "/admin/credits",
    label: "크레딧 관리",
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    href: "/admin/payments",
    label: "결제 관리",
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center bg-bg-surface">
        <Spinner size="sm" />
      </div>
    );
  }

  if (!user || user.is_admin !== 1) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-4 bg-bg-surface">
        <svg
          width={48}
          height={48}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-text-brand"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        </svg>
        <h1 className="text-lg font-semibold text-text-primary">
          접근 권한이 없습니다
        </h1>
        <p className="text-sm text-text-secondary">
          관리자 계정으로 로그인해 주세요.
        </p>
        <Link href="/" className="no-underline">
          <Button>홈으로 돌아가기</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col lg:flex-row bg-bg-surface">
      <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-border-default">
        <span className="text-sm font-semibold text-text-primary">
          관리자 패널
        </span>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-transparent border-none cursor-pointer p-1 text-text-primary"
          aria-label="메뉴"
        >
          <svg
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen ? (
        <div className="lg:hidden border-b border-border-default bg-bg-surface">
          <AdminSideNav
            items={NAV_ITEMS}
            activeHref={pathname}
            onNavigate={() => setMobileMenuOpen(false)}
          />
        </div>
      ) : null}

      <aside className="hidden lg:flex flex-col shrink-0 w-56 border-r border-border-default bg-bg-surface">
        <AdminSideNav items={NAV_ITEMS} activeHref={pathname} />
      </aside>

      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}
