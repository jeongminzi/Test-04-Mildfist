import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "🌍 Design System/Button",
  component: Button,
  tags: ["autodocs", "design-system"],
  parameters: {
    docs: {
      description: {
        component: `
### Button

액션 트리거의 기본 컴포넌트. 브랜드 레드를 주 색상으로 사용하며 \`variant\` 로 시각적 무게를 결정합니다.

- \`primary\` — 메인 CTA (업로드, 로그인, 제출)
- \`ghost\` — 보조 액션, 중립 테두리
- \`subtle\` — 약한 상태, muted 배경
- \`danger\` — 로그아웃, 삭제 등 파괴적 액션

🎨 Figma: _link TBD_
        `,
      },
    },
  },
  argTypes: {
    variant: { control: "select", options: ["primary", "ghost", "danger", "subtle"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    fullWidth: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: "primary", children: "스타일 올리기" },
};

export const Ghost: Story = {
  args: { variant: "ghost", children: "취소" },
};

export const Subtle: Story = {
  args: { variant: "subtle", children: "더보기" },
};

export const Danger: Story = {
  args: { variant: "danger", children: "로그아웃" },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: { variant: "primary", disabled: true, children: "업로드 중..." },
};

export const FullWidth: Story = {
  args: { variant: "primary", fullWidth: true, children: "로그인" },
  parameters: { layout: "padded" },
};
