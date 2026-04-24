import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "🌍 Design System/Input",
  component: Input,
  tags: ["autodocs", "design-system"],
  parameters: {
    docs: {
      description: {
        component: `
### Input

텍스트 입력 필드. 라벨 / 에러 / 아이콘 슬롯을 지원하며 카드 반경(\`radius.card\`)으로 통일된 외형을 가집니다.

- 로그인 / 회원가입 폼, 가상 피팅 직접 입력, 관리자 검색 등에서 사용
- 에러 상태일 때 테두리를 브랜드 레드로 전환

🎨 Figma: _link TBD_
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { placeholder: "example@email.com" },
  parameters: { layout: "padded" },
};

export const WithLabel: Story = {
  args: { label: "이메일", placeholder: "example@email.com", type: "email" },
  parameters: { layout: "padded" },
};

export const Password: Story = {
  args: { label: "비밀번호", placeholder: "비밀번호 입력", type: "password" },
  parameters: { layout: "padded" },
};

export const Errored: Story = {
  args: {
    label: "이메일",
    defaultValue: "invalid-email",
    error: "올바른 이메일 형식이 아닙니다.",
  },
  parameters: { layout: "padded" },
};

export const WithSearchIcon: Story = {
  args: {
    placeholder: "스타일 검색...",
    leadingIcon: (
      <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  parameters: { layout: "padded" },
};
