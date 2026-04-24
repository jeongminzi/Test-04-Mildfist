"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { resizeAndConvertToBase64 } from "@/lib/image-utils";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthContext";
import { SegmentedTabs } from "@/components/SegmentedTabs";
import { Button } from "@/components/Button";
import { Spinner } from "@/components/Spinner";
import { StyleCard } from "@/features/feed/StyleCard";

interface StyleItem {
  id: number;
  user_id: number;
  image_url: string;
  analysis_json: string;
  likes_count: number;
  created_at: string;
  user_name: string;
  user_profile: string | null;
}

const fileToBase64 = resizeAndConvertToBase64;

export default function HomePage() {
  const { user } = useAuth();
  const router = useRouter();
  const [styles, setStyles] = useState<StyleItem[]>([]);
  const [sort, setSort] = useState<"latest" | "popular">("latest");
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchStyles = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/styles?sort=${sort}&page=1`);
      const data = await res.json();
      setStyles(data.styles || []);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }, [sort]);

  useEffect(() => {
    fetchStyles();
  }, [fetchStyles]);

  const handleUpload = async (file: File) => {
    if (!user) {
      router.push("/login?redirect=/");
      return;
    }
    setUploading(true);
    try {
      const b64 = await fileToBase64(file);
      const res = await fetch("/api/styles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: b64 }),
      });
      if (res.ok) {
        fetchStyles();
      }
    } catch {
      // ignore
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-full bg-bg-surface">
      <div className="px-4 sm:px-6 pt-8 pb-6 text-center">
        <h1
          className="text-2xl sm:text-3xl font-semibold text-text-primary"
          style={{ letterSpacing: "-0.5px" }}
        >
          AI 패션 스타일 피드
        </h1>
        <p className="mt-2 text-sm text-text-secondary">
          다양한 스타일을 탐색하고, AI 가상 피팅을 체험하세요
        </p>
      </div>

      <div className="px-4 sm:px-6">
        <SegmentedTabs
          variant="underline"
          tabs={[
            { value: "latest", label: "최신순" },
            { value: "popular", label: "인기순" },
          ]}
          value={sort}
          onChange={setSort}
        />
      </div>

      <div className="flex-1 px-4 sm:px-6 py-6">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Spinner />
          </div>
        ) : styles.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <svg width={48} height={48} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="text-text-tertiary">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-5-5L5 21" />
            </svg>
            <p className="text-sm text-text-secondary">
              아직 업로드된 스타일이 없습니다.
            </p>
          </div>
        ) : (
          <div
            className="columns-2 sm:columns-3 lg:columns-4 gap-4"
            style={{ columnFill: "balance" }}
          >
            {styles.map((style) => {
              let items: { name: string }[] = [];
              try {
                const parsed = JSON.parse(style.analysis_json);
                items = parsed.items || [];
              } catch {
                // ignore
              }
              return (
                <StyleCard
                  key={style.id}
                  id={style.id}
                  imageUrl={style.image_url}
                  userName={style.user_name}
                  userProfile={style.user_profile}
                  likesCount={style.likes_count}
                  items={items}
                />
              );
            })}
          </div>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleUpload(file);
        }}
      />
      <Button
        onClick={() => {
          if (!user) {
            router.push("/login?redirect=/");
            return;
          }
          fileInputRef.current?.click();
        }}
        disabled={uploading}
        size="lg"
        className="fixed bottom-8 right-6 sm:right-8 shadow-card z-40 hover:scale-105 transition-transform"
      >
        {uploading ? (
          <>
            <Spinner size="sm" tone="onBrand" /> 업로드 중...
          </>
        ) : (
          <>
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            스타일 올리기
          </>
        )}
      </Button>
    </div>
  );
}
