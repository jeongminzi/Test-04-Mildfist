import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import { AuthContext, type AuthUser } from "./AuthContext";
import type { ComponentProps, ReactNode } from "react";

function MockAuthProvider({
  user,
  children,
}: {
  user: AuthUser | null;
  children: ReactNode;
}) {
  const value: ComponentProps<typeof AuthContext.Provider>["value"] = {
    user,
    loading: false,
    login: async () => ({ ok: false, error: "mock" }),
    signup: async () => ({ ok: false, error: "mock" }),
    logout: async () => {},
    refresh: async () => {},
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const meta: Meta<typeof Header> = {
  title: "🌍 Design System/Header",
  component: Header,
  tags: ["autodocs", "design-system"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
### Header

서비스 전역 상단바. 모든 페이지 \`app/layout.tsx\` 를 통해 공통으로 렌더됩니다. 로그인 여부에 따라 우측 영역이 로그인 CTA 또는 사용자 아바타 드롭다운으로 전환됩니다.

🎨 Figma: _link TBD_
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const LoggedOut: Story = {
  render: () => (
    <MockAuthProvider user={null}>
      <Header />
    </MockAuthProvider>
  ),
};

export const LoggedIn: Story = {
  render: () => (
    <MockAuthProvider
      user={{
        id: 1,
        email: "design@mildfist.com",
        name: "Minji",
        credits: 32,
        is_admin: 0,
        profile_image: null,
      }}
    >
      <Header />
    </MockAuthProvider>
  ),
};

export const AdminUser: Story = {
  render: () => (
    <MockAuthProvider
      user={{
        id: 99,
        email: "admin@mildfist.com",
        name: "Admin",
        credits: 9999,
        is_admin: 1,
        profile_image: null,
      }}
    >
      <Header />
    </MockAuthProvider>
  ),
};
