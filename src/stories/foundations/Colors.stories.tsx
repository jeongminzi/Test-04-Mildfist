import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "🎨 Foundations/Colors",
  tags: ["foundations"],
  parameters: {
    docs: {
      description: {
        component: `UI 코드가 참조하는 시맨틱 색상 토큰. 원시(primitive) 팔레트는 설계 정보이며 컴포넌트에서는 시맨틱 토큰만 사용합니다.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

function Swatch({ name, varName }: { name: string; varName: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-12 h-12 rounded-control border border-border-default"
        style={{ background: `var(${varName})` }}
      />
      <div className="flex flex-col">
        <code className="text-sm text-text-primary">{name}</code>
        <code className="text-xs text-text-tertiary">{varName}</code>
      </div>
    </div>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h3 className="text-sm font-semibold text-text-primary mb-3">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{children}</div>
    </section>
  );
}

export const Semantic: Story = {
  render: () => (
    <div className="p-6 max-w-4xl">
      <Group title="Background (서피스)">
        <Swatch name="bg.surface" varName="--color-bg-surface" />
        <Swatch name="bg.muted" varName="--color-bg-muted" />
        <Swatch name="bg.subtle" varName="--color-bg-subtle" />
        <Swatch name="bg.inverse" varName="--color-bg-inverse" />
        <Swatch name="bg.brand" varName="--color-bg-brand" />
        <Swatch name="bg.brand-muted" varName="--color-bg-brand-muted" />
        <Swatch name="bg.danger-muted" varName="--color-bg-danger-muted" />
        <Swatch name="bg.success-muted" varName="--color-bg-success-muted" />
      </Group>

      <Group title="Text (글자 색)">
        <Swatch name="text.primary" varName="--color-text-primary" />
        <Swatch name="text.secondary" varName="--color-text-secondary" />
        <Swatch name="text.tertiary" varName="--color-text-tertiary" />
        <Swatch name="text.on-brand" varName="--color-text-on-brand" />
        <Swatch name="text.brand" varName="--color-text-brand" />
        <Swatch name="text.success" varName="--color-text-success" />
        <Swatch name="text.link" varName="--color-text-link" />
      </Group>

      <Group title="Border">
        <Swatch name="border.default" varName="--color-border-default" />
        <Swatch name="border.subtle" varName="--color-border-subtle" />
        <Swatch name="border.strong" varName="--color-border-strong" />
        <Swatch name="border.brand" varName="--color-border-brand" />
      </Group>

      <Group title="Tag palette (카테고리용 파스텔)">
        <Swatch name="tag.blue" varName="--color-tag-blue" />
        <Swatch name="tag.green" varName="--color-tag-green" />
        <Swatch name="tag.lime" varName="--color-tag-lime" />
        <Swatch name="tag.purple" varName="--color-tag-purple" />
        <Swatch name="tag.pink" varName="--color-tag-pink" />
        <Swatch name="tag.peach" varName="--color-tag-peach" />
      </Group>
    </div>
  ),
};

export const Primitive: Story = {
  render: () => (
    <div className="p-6 max-w-4xl">
      <p className="text-xs text-text-secondary mb-4">
        원시 팔레트 — 설계 참고용. 컴포넌트에서 직접 참조하지 말고, 위의 Semantic
        레이어를 사용하세요.
      </p>
      <Group title="Neutral">
        <Swatch name="neutral.900" varName="--palette-neutral-900" />
        <Swatch name="neutral.700" varName="--palette-neutral-700" />
        <Swatch name="neutral.500" varName="--palette-neutral-500" />
        <Swatch name="neutral.300" varName="--palette-neutral-300" />
        <Swatch name="neutral.200" varName="--palette-neutral-200" />
        <Swatch name="neutral.100" varName="--palette-neutral-100" />
        <Swatch name="neutral.0" varName="--palette-neutral-0" />
      </Group>
      <Group title="Brand · Status · Accent">
        <Swatch name="brand.500" varName="--palette-brand-500" />
        <Swatch name="brand.50" varName="--palette-brand-50" />
        <Swatch name="success.700" varName="--palette-success-700" />
        <Swatch name="accent-blue.500" varName="--palette-accent-blue-500" />
        <Swatch name="accent-purple.500" varName="--palette-accent-purple-500" />
      </Group>
    </div>
  ),
};
