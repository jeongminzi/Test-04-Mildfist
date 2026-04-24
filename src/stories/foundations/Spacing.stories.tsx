import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "🎨 Foundations/Spacing",
  tags: ["foundations"],
  parameters: {
    docs: {
      description: {
        component: `4px 기반 스케일. 컴포넌트 내부 간격은 \`spacing-component-*\`, 페이지/섹션 간격은 \`spacing-layout-*\` 토큰을 사용합니다. Tailwind 기본 \`p-{n}\` / \`gap-{n}\` 도 동일 스케일입니다.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

function Ruler({ name, size, note }: { name: string; size: number; note: string }) {
  return (
    <div className="grid grid-cols-[160px_120px_1fr] gap-4 items-center py-1">
      <code className="text-xs text-text-primary">{name}</code>
      <code className="text-xs text-text-tertiary">{size}px</code>
      <div className="h-4 bg-bg-brand rounded-tag" style={{ width: size }} title={note} />
    </div>
  );
}

export const Primitive: Story = {
  render: () => (
    <div className="p-6 max-w-3xl">
      <h3 className="text-sm font-semibold text-text-primary mb-3">Primitive scale (base-4)</h3>
      <Ruler name="space-1"  size={4}  note="hairline" />
      <Ruler name="space-2"  size={8}  note="tight" />
      <Ruler name="space-3"  size={12} note="default" />
      <Ruler name="space-4"  size={16} note="card padding" />
      <Ruler name="space-5"  size={20} note="lg gap" />
      <Ruler name="space-6"  size={24} note="section" />
      <Ruler name="space-8"  size={32} note="hero" />
      <Ruler name="space-10" size={40} note="" />
      <Ruler name="space-12" size={48} note="" />
    </div>
  ),
};

export const Semantic: Story = {
  render: () => (
    <div className="p-6 max-w-3xl">
      <h3 className="text-sm font-semibold text-text-primary mb-3">Component-level</h3>
      <Ruler name="component-xs" size={4}  note="tight" />
      <Ruler name="component-sm" size={8}  note="default" />
      <Ruler name="component-md" size={12} note="padding" />
      <Ruler name="component-lg" size={16} note="card" />

      <h3 className="text-sm font-semibold text-text-primary mt-6 mb-3">Layout-level</h3>
      <Ruler name="layout-sm" size={16} note="mobile section" />
      <Ruler name="layout-md" size={24} note="desktop section" />
      <Ruler name="layout-lg" size={32} note="hero" />
    </div>
  ),
};
