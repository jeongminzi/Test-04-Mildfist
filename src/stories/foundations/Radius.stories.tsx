import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "🎨 Foundations/Radius",
  tags: ["foundations"],
  parameters: {
    docs: {
      description: {
        component: `역할 기반 radius 토큰. 값(숫자)이 아닌 **용도**로 이름을 짓습니다 — 버튼은 \`rounded-control\`, 카드는 \`rounded-card\`, 이미지는 \`rounded-image\`.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

function Sample({ name, varName, size }: { name: string; varName: string; size: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="w-20 h-20 bg-bg-brand-muted border border-border-default"
        style={{ borderRadius: `var(${varName})` }}
      />
      <code className="text-xs text-text-primary">{name}</code>
      <code className="text-[10px] text-text-tertiary">{size}</code>
    </div>
  );
}

export const Semantic: Story = {
  render: () => (
    <div className="p-6 max-w-3xl">
      <div className="flex flex-wrap gap-6">
        <Sample name="radius.control" varName="--radius-control" size="8px · buttons/inputs" />
        <Sample name="radius.tag" varName="--radius-tag" size="12px · chips" />
        <Sample name="radius.card" varName="--radius-card" size="16px · cards/modals" />
        <Sample name="radius.image" varName="--radius-image" size="20px · media" />
        <Sample name="radius.pill" varName="--radius-pill" size="9999px · avatar" />
      </div>
    </div>
  ),
};
