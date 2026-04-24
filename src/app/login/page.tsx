"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/components/AuthContext";
import { SegmentedTabs } from "@/components/SegmentedTabs";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Spinner } from "@/components/Spinner";

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex-1 flex items-center justify-center">
          <Spinner />
        </div>
      }
    >
      <LoginPageInner />
    </Suspense>
  );
}

function LoginPageInner() {
  const { login, signup } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";

  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (mode === "login") {
        const result = await login(email, password);
        if (result.ok) {
          router.push(redirectTo);
        } else {
          setError(result.error || "로그인에 실패했습니다.");
        }
      } else {
        if (!name.trim()) {
          setError("이름을 입력해주세요.");
          setLoading(false);
          return;
        }
        const result = await signup(email, password, name);
        if (result.ok) {
          router.push(redirectTo);
        } else {
          setError(result.error || "회원가입에 실패했습니다.");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center px-4 py-12 bg-bg-surface">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
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
            onChange={(v) => {
              setMode(v);
              setError("");
            }}
          />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {mode === "signup" ? (
            <Input
              label="이름"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="홍길동"
            />
          ) : null}
          <Input
            label="이메일"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
            required
          />
          <Input
            label="비밀번호"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={mode === "signup" ? "4자 이상" : "비밀번호 입력"}
            required
            error={error || undefined}
          />

          <Button type="submit" fullWidth disabled={loading} className="mt-2">
            {loading ? (
              <>
                <Spinner size="sm" tone="onBrand" /> 처리 중...
              </>
            ) : mode === "login" ? (
              "로그인"
            ) : (
              "회원가입"
            )}
          </Button>
        </form>

        <div className="mt-6 p-4 bg-bg-muted rounded-card">
          <p className="text-xs font-medium mb-2 text-text-primary">데모 계정</p>
          <div className="flex flex-col gap-1.5 text-xs text-text-secondary">
            <p>demo@mildfist.com / demo1234</p>
            <p>fashion@mildfist.com / fashion1234</p>
            <p>test@mildfist.com / test1234</p>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-text-tertiary">
          가입 시{" "}
          <Link href="/terms" className="text-text-secondary underline">
            이용약관
          </Link>
          에 동의하게 됩니다.
        </p>
      </div>
    </div>
  );
}
