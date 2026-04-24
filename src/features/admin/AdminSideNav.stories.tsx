import type { Meta, StoryObj } from "@storybook/react";
import { AdminSideNav } from "./AdminSideNav";

const icon = (path: string) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={path} />
  </svg>
);

const navItems = [
  { href: "/admin", label: "대시보드", icon: icon("M3 12h18M3 6h18M3 18h18") },
  { href: "/admin/members", label: "회원 관리", icon: icon("M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2") },
  { href: "/admin/contents", label: "콘텐츠", icon: icon("M21 15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z") },
  { href: "/admin/credits", label: "크레딧", icon: icon("M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6") },
  { href: "/admin/payments", label: "결제", icon: icon("M3 7h18M3 12h18M3 17h18") },
];

const meta: Meta<typeof AdminSideNav> = {
  title: "🎯 Feature Components/Admin/AdminSideNav",
  component: AdminSideNav,
  tags: ["autodocs", "page-specific", "admin-only"],
  parameters: {
    docs: {
      description: {
        component: `
## 📍 사용 위치 (Usage)
- ✅ 관리자 레이아웃 (\`src/app/admin/layout.tsx\`) — 모바일 드롭다운 + 데스크탑 사이드바 두 곳에 같은 아이템 리스트로 사용
- ❌ 일반 서비스 내비게이션에 사용 금지

## 🎨 디자인 (Design)
- Figma: _link TBD_
- 담당 디자이너: _TBD_

## 🔄 재사용 계획 (Reuse plan)
- 현재: 관리자 영역 전용
- 향후 가능성: 마이페이지 세팅 내비게이션이 비슷한 구조가 될 수 있음
- 디자인 시스템 후보 가능성: ⭐⭐ (낮음) — 일반 nav는 \`SideNav\` 같은 더 범용 버전으로 새로 만드는 편이 자연스러움

## 🚀 승격 기준 (Promotion trigger)
- 관리자 외부에서 사이드 내비가 필요한 UI가 생기면 🌍 Design System 에 \`SideNav\` 를 새로 만들고 본 컴포넌트는 그것의 래퍼로 축소
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AdminSideNav>;

export const Dashboard: Story = {
  render: () => (
    <div className="w-64 border border-border-default rounded-card bg-bg-surface">
      <AdminSideNav items={navItems} activeHref="/admin" />
    </div>
  ),
};

export const MembersActive: Story = {
  render: () => (
    <div className="w-64 border border-border-default rounded-card bg-bg-surface">
      <AdminSideNav items={navItems} activeHref="/admin/members" />
    </div>
  ),
};
