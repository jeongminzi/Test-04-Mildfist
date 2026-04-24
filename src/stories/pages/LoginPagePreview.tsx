"use client";

import { useState } from "react";
import { SegmentedTabs } from "@/components/SegmentedTabs";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Card } from "@/components/Card";

export interface LoginPagePreviewProps {
  initialMode?: "login" | "signup";
  errorMessage?: string;
  loading?: boolean;
}

export function LoginPagePreview({
  initialMode = "login",
  errorMessage,
  loading,
}: LoginPagePreviewProps) {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);

  return (
    <div className="flex-1 flex items-center justify-center bg-bg-surface min-h-screen p-4">
      <Card bordered padding="lg" className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-6">
          <div className="w-12 h-12 rounded-pill bg-bg-brand flex items-center justify-center mb-3">
            <svg
              width={22}
              height={22}
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 3v12" />
              <path d="M18 9a3 3 0 0 1-3 3H6" />
              <path d="m10 8 -4 4 4 4" />
            </svg>
          </div>
          <h1 className="text-xl font-semibold text-text-primary">MildFist</h1>
          <p className="mt-1 text-sm text-text-secondary">
            {mode === "login" ? "로그인하여 시작하세요" : "새 계정을 만드세요"}
          </p>
        </div>

        <div className="mb-6">
          <SegmentedTabs
            variant="pill"
            tabs={[
              { value: "login", label: "로그인" },
              { value: "signup", label: "회원가입" },
            ]}
            value={mode}
            onChange={setMode}
          />
        </div>

        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          {mode === "signup" ? (
            <Input label="이름" placeholder="홍길동" name="name" />
          ) : null}
          <Input
            label="이메일"
            placeholder="example@email.com"
            type="email"
            name="email"
          />
          <Input
            label="비밀번호"
            placeholder={mode === "signup" ? "4자 이상" : "비밀번호 입력"}
            type="password"
            name="password"
            error={errorMessage}
          />
          <Button type="submit" fullWidth disabled={loading}>
            {mode === "login" ? "로그인" : "회원가입"}
          </Button>
        </form>
      </Card>
    </div>
  );
}
