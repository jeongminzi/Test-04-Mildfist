import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "🎨 Foundations/Shadow",
  tags: ["foundations"],
  parameters: {
    docs: {
      description: {
        component: `역할 기반 그림자 토큰. 현재는 카드/드롭다운용 \`shadow.card\` 하나만 정의되어 있으며 필요 시 디자이너가 modal/popover 단계를 추가할 수 있습니다.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Semantic: Story = {
  render: () => (
    <div className="p-10 flex gap-8 bg-bg-muted min-h-[240px] items-center">
      <div className="flex flex-col items-center gap-3">
        <div
          className="w-28 h-28 bg-bg-surface rounded-card"
          style={{ boxShadow: "var(--shadow-card)" }}
        />
        <code className="text-xs text-text-primary">shadow.card</code>
        <code className="text-[10px] text-text-tertiary">
          0 4px 12px rgba(0,0,0,0.08)
        </code>
      </div>
    </div>
  ),
};
