import type { Meta, StoryObj } from "@storybook/react";
import { HomePagePreview } from "./HomePagePreview";

const sampleStyles = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/seed/home-1/400/520",
    userName: "Minji",
    likesCount: 24,
    items: [{ name: "화이트 티셔츠" }, { name: "데님 팬츠" }],
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/seed/home-2/400/420",
    userName: "Sohee",
    likesCount: 58,
    items: [{ name: "블레이저" }],
  },
  {
    id: 3,
    imageUrl: "https://picsum.photos/seed/home-3/400/620",
    userName: "Jihoon",
    likesCount: 102,
    items: [{ name: "니트" }, { name: "슬랙스" }, { name: "로퍼" }],
  },
  {
    id: 4,
    imageUrl: "https://picsum.photos/seed/home-4/400/380",
    userName: "Arin",
    likesCount: 7,
    items: [{ name: "원피스" }],
  },
  {
    id: 5,
    imageUrl: "https://picsum.photos/seed/home-5/400/540",
    userName: "Hajin",
    likesCount: 43,
    items: [],
  },
  {
    id: 6,
    imageUrl: "https://picsum.photos/seed/home-6/400/460",
    userName: "Seohyun",
    likesCount: 0,
    items: [{ name: "카디건" }],
  },
];

const meta: Meta<typeof HomePagePreview> = {
  title: "📄 Pages/HomePage",
  component: HomePagePreview,
  tags: ["autodocs", "page"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
## HomePage

\`src/app/page.tsx\` 홈 피드의 Storybook 프리뷰. 실제 라우트는 데이터 페칭(\`fetch('/api/styles')\`)을 포함하므로, 구성 확인용 프레젠테이셔널 버전(\`HomePagePreview\`)으로 렌더합니다.

Composed of:
- 🌍 SegmentedTabs (underline)
- 🌍 Spinner
- 🌍 Button (FAB)
- 🎯 StyleCard (feed list)
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof HomePagePreview>;

export const WithStyles: Story = {
  args: { styles: sampleStyles, loading: false },
};

export const Empty: Story = {
  args: { styles: [], loading: false },
};

export const Loading: Story = {
  args: { styles: [], loading: true },
};
