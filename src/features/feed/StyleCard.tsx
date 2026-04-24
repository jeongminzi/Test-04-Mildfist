"use client";

import Link from "next/link";
import { Avatar } from "@/components/Avatar";
import { Tag } from "@/components/Tag";

export interface StyleCardProps {
  id: number;
  imageUrl: string;
  userName: string;
  userProfile?: string | null;
  likesCount: number;
  items?: { name: string }[];
  href?: string;
}

export function StyleCard({
  id,
  imageUrl,
  userName,
  userProfile,
  likesCount,
  items = [],
  href,
}: StyleCardProps) {
  const linkHref = href ?? `/style/${id}`;
  const liked = likesCount > 0;

  return (
    <Link
      href={linkHref}
      className="block mb-4 break-inside-avoid no-underline group"
    >
      <div className="overflow-hidden relative rounded-card bg-bg-muted">
        <img
          src={imageUrl}
          alt={`Style by ${userName}`}
          className="w-full object-cover"
          style={{ minHeight: 180 }}
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3"
          style={{
            background:
              "linear-gradient(transparent 40%, var(--color-bg-overlay))",
          }}
        >
          {items.length > 0 ? (
            <div className="flex flex-wrap gap-1 mb-2">
              {items.slice(0, 3).map((item, i) => (
                <Tag key={i} tone="onImage">
                  {item.name}
                </Tag>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <div className="flex items-center justify-between mt-2 px-1">
        <div className="flex items-center gap-2">
          <Avatar name={userName} src={userProfile ?? undefined} size="sm" />
          <span className="text-xs text-text-primary">{userName}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg
            width={12}
            height={12}
            viewBox="0 0 24 24"
            fill={liked ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={2}
            className={liked ? "text-text-brand" : "text-text-tertiary"}
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <span className="text-xs text-text-tertiary">{likesCount}</span>
        </div>
      </div>
    </Link>
  );
}
