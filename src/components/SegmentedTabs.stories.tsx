import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SegmentedTabs } from "./SegmentedTabs";

const meta: Meta<typeof SegmentedTabs> = {
  title: "🌍 Design System/SegmentedTabs",
  component: SegmentedTabs,
  tags: ["autodocs", "design-system"],
  parameters: {
    docs: {
      description: {
        component: `
### SegmentedTabs

배타적 옵션 중 하나를 선택하는 세그먼트 탭. 두 가지 variant를 지원합니다.

- \`pill\` — muted 배경 위의 썸 이동형. 폼 내부(로그인/회원가입 전환, 마이페이지 탭)에 적합
- \`underline\` — 하단 언더라인형. 피드 정렬(최신/인기) 등 페이지 레벨 내비게이션에 적합

🎨 Figma: _link TBD_
        `,
      },
    },
  },
  argTypes: {
    variant: { control: "select", options: ["pill", "underline"] },
  },
};

export default meta;
type Story = StoryObj<typeof SegmentedTabs>;

function PillAuthDemo() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  return (
    <div className="w-80">
      <SegmentedTabs
        variant="pill"
        tabs={[
          { value: "login", label: "로그인" },
          { value: "signup", label: "회원가입" },
        ]}
        value={mode}
        onChange={setMode}
      />
    </div>
  );
}

function UnderlineSortDemo() {
  const [sort, setSort] = useState<"latest" | "popular">("latest");
  return (
    <div className="w-80">
      <SegmentedTabs
        variant="underline"
        tabs={[
          { value: "latest", label: "최신순" },
          { value: "popular", label: "인기순" },
        ]}
        value={sort}
        onChange={setSort}
      />
    </div>
  );
}

function PillMyPageDemo() {
  const [tab, setTab] = useState<"styles" | "fittings" | "credits">("styles");
  return (
    <div className="w-[420px]">
      <SegmentedTabs
        variant="pill"
        tabs={[
          { value: "styles", label: "내 스타일" },
          { value: "fittings", label: "피팅 기록" },
          { value: "credits", label: "크레딧" },
        ]}
        value={tab}
        onChange={setTab}
      />
    </div>
  );
}

export const PillAuth: Story = { render: () => <PillAuthDemo /> };
export const UnderlineSort: Story = { render: () => <UnderlineSortDemo /> };
export const PillMyPage: Story = { render: () => <PillMyPageDemo /> };
