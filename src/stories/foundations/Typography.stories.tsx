import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "🎨 Foundations/Typography",
  tags: ["foundations"],
  parameters: {
    docs: {
      description: {
        component: `본문 UI는 Tailwind 기본 타이포 스케일(\`text-xs / sm / base / lg / xl / 2xl / 3xl\`)을 사용합니다. 굵기는 \`font-medium\` 또는 \`font-semibold\` 두 단계를 주로 씁니다.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

function Line({
  label,
  className,
  example,
}: {
  label: string;
  className: string;
  example: string;
}) {
  return (
    <div className="grid grid-cols-[200px_1fr] gap-6 items-baseline py-2 border-b border-border-subtle">
      <code className="text-xs text-text-tertiary">{label}</code>
      <p className={`${className} text-text-primary`}>{example}</p>
    </div>
  );
}

export const Scale: Story = {
  render: () => (
    <div className="p-6 max-w-3xl">
      <Line label="text-3xl / semibold" className="text-3xl font-semibold" example="AI 패션 스타일 피드" />
      <Line label="text-2xl / semibold" className="text-2xl font-semibold" example="가상 피팅" />
      <Line label="text-xl / semibold" className="text-xl font-semibold" example="섹션 제목" />
      <Line label="text-lg / semibold" className="text-lg font-semibold" example="MildFist" />
      <Line label="text-base / medium" className="text-base font-medium" example="본문 기본" />
      <Line label="text-sm / medium" className="text-sm font-medium" example="UI 라벨 · 버튼" />
      <Line label="text-sm / regular" className="text-sm" example="본문 설명" />
      <Line label="text-xs / medium" className="text-xs font-medium" example="캡션 · 메타" />
      <Line label="text-xs / regular" className="text-xs" example="보조 설명" />
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div className="p-6 max-w-2xl flex flex-col gap-2">
      <p className="text-base font-normal text-text-primary">font-normal — 본문 기본</p>
      <p className="text-base font-medium text-text-primary">font-medium — UI 요소 기본</p>
      <p className="text-base font-semibold text-text-primary">font-semibold — 제목 · 강조</p>
    </div>
  ),
};
