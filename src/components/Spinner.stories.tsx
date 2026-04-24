import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "🌍 Design System/Spinner",
  component: Spinner,
  tags: ["autodocs", "design-system"],
  parameters: {
    docs: {
      description: {
        component: `
### Spinner

로딩 상태를 표시하는 원형 인디케이터. 기본 색상은 브랜드 레드이며 버튼 내부 사용 시 \`onBrand\` 로 전환합니다.

- \`brand\` — 페이지 로딩, 빈 상태 대기
- \`onBrand\` — 브랜드 배경 버튼 안에서 사용
- \`tertiary\` — 강조가 낮은 인라인 로딩

🎨 Figma: _link TBD_
        `,
      },
    },
  },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    tone: { control: "select", options: ["brand", "onBrand", "tertiary"] },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = { args: { size: "md", tone: "brand" } };

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};

export const OnBrand: Story = {
  render: () => (
    <div className="inline-flex items-center gap-2 bg-bg-brand rounded-control px-5 py-3 text-text-on-brand text-sm font-medium">
      <Spinner size="sm" tone="onBrand" /> 업로드 중...
    </div>
  ),
};
