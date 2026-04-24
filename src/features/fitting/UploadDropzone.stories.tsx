import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { UploadDropzone } from "./UploadDropzone";

const meta: Meta<typeof UploadDropzone> = {
  title: "🎯 Feature Components/Fitting/UploadDropzone",
  component: UploadDropzone,
  tags: ["autodocs", "page-specific", "fitting-only", "candidate-for-ds"],
  parameters: {
    docs: {
      description: {
        component: `
## 📍 사용 위치 (Usage)
- ✅ 가상 피팅 페이지 (\`src/app/fitting/page.tsx\`) — "내 사진" / "스타일 사진" 두 영역에 각각 렌더
- ❌ 일반 폼에서 쓰지 말 것 — 프리뷰 UI, dashed border 등이 피팅 플로우에 특화됨

## 🎨 디자인 (Design)
- Figma: _link TBD_
- 담당 디자이너: _TBD_

## 🔄 재사용 계획 (Reuse plan)
- 현재: 가상 피팅 전용 (한 페이지 내 2회 사용)
- 향후 가능성: 마이페이지 프로필 이미지 업로드, 관리자 배너 업로드 등에서 범용 \`ImageUploader\` 가 필요해질 가능성 있음
- 디자인 시스템 후보 가능성: ⭐⭐⭐ (중간) — dashed border / preview 패턴 자체는 범용성 높음

## 🚀 승격 기준 (Promotion trigger)
- 마이페이지 또는 관리자 쪽에서 두 번째 사용처가 생기면 → 이름을 \`ImageUploader\` 로 변경, 🌍 Design System 으로 이동
- 피팅 특화 문구/아이콘 default는 props로 뽑아서 호출부가 주입하도록 리팩토링
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UploadDropzone>;

export const Empty: Story = {
  render: () => {
    const [preview, setPreview] = useState<string | null>(null);
    return (
      <div className="w-[340px]">
        <UploadDropzone
          label="내 사진 업로드"
          caption="정면 전신 사진 권장"
          preview={preview}
          onFile={(f) => setPreview(URL.createObjectURL(f))}
        />
      </div>
    );
  },
};

export const WithPreview: Story = {
  render: () => (
    <div className="w-[340px]">
      <UploadDropzone
        label="스타일 사진"
        caption="참고할 코디 사진"
        preview="https://picsum.photos/seed/mildfist-style/400/520"
        onFile={() => {}}
      />
    </div>
  ),
};

export const SideBySide: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-[640px]">
      <UploadDropzone
        label="내 사진 업로드"
        caption="정면 전신 사진 권장"
        preview={null}
        onFile={() => {}}
      />
      <UploadDropzone
        label="스타일 사진 업로드"
        caption="참고할 코디 사진"
        preview={null}
        onFile={() => {}}
      />
    </div>
  ),
};
