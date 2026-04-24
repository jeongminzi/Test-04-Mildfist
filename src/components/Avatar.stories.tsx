import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "🌍 Design System/Avatar",
  component: Avatar,
  tags: ["autodocs", "design-system"],
  parameters: {
    docs: {
      description: {
        component: `
### Avatar

사용자 프로필 아이콘. 이미지가 있으면 이미지를, 없으면 이름의 첫 글자를 \`bg-subtle\` 배경 위에 표시합니다.

- 피드 카드(StyleCard), Header 사용자 메뉴, 마이페이지 등에서 사용
- 크기: \`sm (24)\` / \`md (32)\` / \`lg (48)\`

🎨 Figma: _link TBD_
        `,
      },
    },
  },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Initial: Story = {
  args: { name: "이정민", size: "md" },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar name="A" size="sm" />
      <Avatar name="B" size="md" />
      <Avatar name="C" size="lg" />
    </div>
  ),
};

export const WithImage: Story = {
  args: {
    name: "MildFist",
    size: "md",
    src: "https://i.pravatar.cc/64?img=12",
  },
};
