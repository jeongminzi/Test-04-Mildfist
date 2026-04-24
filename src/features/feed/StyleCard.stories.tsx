import type { Meta, StoryObj } from "@storybook/react";
import { StyleCard } from "./StyleCard";

const meta: Meta<typeof StyleCard> = {
  title: "🎯 Feature Components/Feed/StyleCard",
  component: StyleCard,
  tags: ["autodocs", "page-specific", "feed-only", "candidate-for-ds"],
  parameters: {
    docs: {
      description: {
        component: `
## 📍 사용 위치 (Usage)
- ✅ 홈 피드 (\`src/app/page.tsx\`)
- ❌ 다른 페이지에서 사용 금지 — 아직 팀 논의 없이 임포트하지 말 것

## 🎨 디자인 (Design)
- Figma: _link TBD_
- 담당 디자이너: _TBD_

## 🔄 재사용 계획 (Reuse plan)
- 현재: 홈 피드 전용 (masonry 그리드 내부)
- 향후 가능성: 마이페이지 "내 스타일" 탭, 관리자 콘텐츠 미리보기에서도 동일한 카드 UI가 필요해질 가능성 높음
- 디자인 시스템 후보 가능성: ⭐⭐⭐⭐ (높음)

## 🚀 승격 기준 (Promotion trigger)
- 마이페이지에서 이 카드가 재사용되는 순간 → 이름을 \`ListCard\` 로 바꾸고 🌍 Design System 으로 이동
- \`href\`, \`onClick\`, 그리고 \`variant\` (masonry / grid) 로 제어하는 props 추가 필요
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof StyleCard>;

export const Default: Story = {
  args: {
    id: 1,
    imageUrl: "https://picsum.photos/seed/mildfist-1/400/520",
    userName: "Minji",
    userProfile: null,
    likesCount: 24,
    items: [
      { name: "화이트 티셔츠" },
      { name: "데님 팬츠" },
      { name: "스니커즈" },
    ],
  },
  parameters: { layout: "padded" },
};

export const NoLikes: Story = {
  args: {
    id: 2,
    imageUrl: "https://picsum.photos/seed/mildfist-2/400/420",
    userName: "Sohee",
    likesCount: 0,
    items: [{ name: "블레이저" }],
  },
  parameters: { layout: "padded" },
};

export const NoItems: Story = {
  args: {
    id: 3,
    imageUrl: "https://picsum.photos/seed/mildfist-3/400/640",
    userName: "Jihoon",
    likesCount: 102,
    items: [],
  },
  parameters: { layout: "padded" },
};
