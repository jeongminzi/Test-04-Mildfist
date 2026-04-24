"use client";

import { useState } from "react";
import { SegmentedTabs } from "@/components/SegmentedTabs";
import { Button } from "@/components/Button";
import { Spinner } from "@/components/Spinner";
import { StyleCard, type StyleCardProps } from "@/features/feed/StyleCard";

export interface HomePagePreviewProps {
  styles: StyleCardProps[];
  loading?: boolean;
}

export function HomePagePreview({ styles, loading }: HomePagePreviewProps) {
  const [sort, setSort] = useState<"latest" | "popular">("latest");

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
            <p className="text-sm text-text-secondary">
              아직 업로드된 스타일이 없습니다.
            </p>
          </div>
        ) : (
          <div
            className="columns-2 sm:columns-3 lg:columns-4 gap-4"
            style={{ columnFill: "balance" }}
          >
            {styles.map((s) => (
              <StyleCard key={s.id} {...s} />
            ))}
          </div>
        )}
      </div>

      <Button
        className="fixed bottom-8 right-6 sm:right-8 shadow-card"
        size="lg"
      >
        스타일 올리기
      </Button>
    </div>
  );
}
