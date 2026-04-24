import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "🌍 Design System/Card",
  component: Card,
  tags: ["autodocs", "design-system"],
  parameters: {
    docs: {
      description: {
        component: `
### Card

콘텐츠를 담는 기본 서피스. \`tone\` 으로 배경 단계를, \`elevated\` 로 카드 그림자, \`bordered\` 로 경계선을 제어합니다.

- \`surface\` — 기본 흰색 (드롭다운 메뉴, 결과 카드)
- \`muted\` — fog 배경 (안내 박스, 업로드 컨테이너)
- \`subtle\` — warm-light 배경 (강조 영역)

🎨 Figma: _link TBD_
        `,
      },
    },
  },
  argTypes: {
    tone: { control: "select", options: ["surface", "muted", "subtle"] },
    padding: { control: "select", options: ["none", "sm", "md", "lg"] },
    elevated: { control: "boolean" },
    bordered: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Surface: Story = {
  args: {
    tone: "surface",
    bordered: true,
    children: (
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold text-text-primary">회원가입이 완료되었습니다</span>
        <span className="text-xs text-text-secondary">이메일 인증 후 로그인해 주세요.</span>
      </div>
    ),
  },
};

export const Muted: Story = {
  args: {
    tone: "muted",
    children: (
      <p className="text-xs text-text-secondary">
        스타일 사진을 업로드하면 AI가 자동으로 아이템을 인식합니다.
      </p>
    ),
  },
};

export const Elevated: Story = {
  args: {
    tone: "surface",
    elevated: true,
    bordered: true,
    padding: "sm",
    children: (
      <ul className="flex flex-col gap-1 text-sm text-text-primary">
        <li className="px-2 py-1.5 rounded-tag hover:bg-bg-muted cursor-pointer">마이페이지</li>
        <li className="px-2 py-1.5 rounded-tag hover:bg-bg-muted cursor-pointer">아이템 인식</li>
        <li className="px-2 py-1.5 rounded-tag hover:bg-bg-muted cursor-pointer">가상 피팅</li>
      </ul>
    ),
  },
};
