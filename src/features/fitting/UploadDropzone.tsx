"use client";

import {
  DragEvent,
  ReactNode,
  useRef,
  useState,
  ChangeEvent,
} from "react";

export interface UploadDropzoneProps {
  label?: string;
  caption?: string;
  preview?: string | null;
  icon?: ReactNode;
  accept?: string;
  onFile: (file: File) => void;
  minHeight?: number;
}

export function UploadDropzone({
  label,
  caption,
  preview,
  icon,
  accept = "image/*",
  onFile,
  minHeight = 200,
}: UploadDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const handleDragEnter = (e: DragEvent) => {
    e.preventDefault();
    setDragging(true);
  };
  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    setDragging(false);
  };
  const handleDragOver = (e: DragEvent) => e.preventDefault();
  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) onFile(file);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onFile(file);
  };

  const defaultIcon = (
    <svg
      width={36}
      height={36}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="text-text-tertiary"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  );

  return (
    <div
      onClick={() => inputRef.current?.click()}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{ minHeight }}
      className={[
        "flex flex-col items-center justify-center p-6 overflow-hidden cursor-pointer rounded-image border-2 border-dashed transition-colors",
        dragging
          ? "border-border-brand bg-bg-brand-muted"
          : "border-border-strong bg-bg-muted",
      ].join(" ")}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={handleChange}
      />
      {preview ? (
        <img
          src={preview}
          alt="preview"
          className="max-h-48 object-contain rounded-tag"
        />
      ) : (
        <>
          {icon ?? defaultIcon}
          {label ? (
            <p className="mt-2 text-xs font-medium text-text-primary">{label}</p>
          ) : null}
          {caption ? (
            <p className="text-xs mt-0.5 text-text-tertiary">{caption}</p>
          ) : null}
        </>
      )}
    </div>
  );
}
