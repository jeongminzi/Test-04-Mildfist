import type { Meta, StoryObj } from "@storybook/react";
import { LoginPagePreview } from "./LoginPagePreview";

const meta: Meta<typeof LoginPagePreview> = {
  title: "📄 Pages/LoginPage",
  component: LoginPagePreview,
  tags: ["autodocs", "page"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
## LoginPage

\`src/app/login/page.tsx\` 의 Storybook 프리뷰. 실제 라우트는 인증 컨텍스트/라우터를 사용하므로, 구성 확인용 프레젠테이셔널 버전으로 분리했습니다.

Composed of:
- 🌍 Card (surface container)
- 🌍 SegmentedTabs (pill, login/signup 전환)
- 🌍 Input (email / password / name)
- 🌍 Button (full-width submit)
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoginPagePreview>;

export const Login: Story = {
  args: { initialMode: "login" },
};

export const Signup: Story = {
  args: { initialMode: "signup" },
};

export const WithError: Story = {
  args: {
    initialMode: "login",
    errorMessage: "이메일 또는 비밀번호가 올바르지 않습니다.",
  },
};

export const Loading: Story = {
  args: { initialMode: "login", loading: true },
};
