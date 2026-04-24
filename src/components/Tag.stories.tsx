import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "🌍 Design System/Tag",
  component: Tag,
  tags: ["autodocs", "design-system"],
  parameters: {
    docs: {
      description: {
        component: `
### Tag

칩/뱃지 형태의 짧은 라벨. 파스텔 6색 팔레트는 카테고리 구분용이며 브랜드 색은 선택 상태입니다.

- \`neutral\` — 기본 (sand-gray bg)
- \`brand / selected\` — 선택된 필터 아이템
- \`blue / green / lime / purple / pink / peach\` — 카테고리 구분
- \`onImage\` — 이미지 위에 올릴 때 쓰는 반투명 화이트

🎨 Figma: _link TBD_
        `,
      },
    },
  },
  argTypes: {
    tone: {
      control: "select",
      options: [
        "neutral",
        "brand",
        "selected",
        "blue",
        "green",
        "lime",
        "purple",
        "pink",
        "peach",
        "onImage",
      ],
    },
    clickable: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Neutral: Story = {
  args: { tone: "neutral", children: "미니멀" },
};

export const Selected: Story = {
  args: { tone: "selected", children: "👗 원피스" },
};

export const PastelPalette: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag tone="blue">바다</Tag>
      <Tag tone="green">숲</Tag>
      <Tag tone="lime">라임</Tag>
      <Tag tone="purple">라벤더</Tag>
      <Tag tone="pink">블러쉬</Tag>
      <Tag tone="peach">피치</Tag>
    </div>
  ),
};

export const CategoryChips: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag tone="selected">👗 원피스</Tag>
      <Tag tone="neutral">👚 상의</Tag>
      <Tag tone="neutral">👖 하의</Tag>
      <Tag tone="neutral">🧥 아우터</Tag>
      <Tag tone="neutral">👞 신발</Tag>
    </div>
  ),
};
