# MildFist Design System — 초기 셋업

이 문서는 `draft-to-storybook-v2` skill 1차 패스 결과물입니다. Draft UI(하드코딩된 값, 인라인 스타일)를 **토큰 기반 디자인 시스템**과 **재사용 범위로 정리된 Storybook**으로 전환했습니다.

---

## 1. Stack

- Next.js 16 (App Router) + React 19
- TypeScript, Tailwind CSS v4 (`@tailwindcss/postcss`)
- 패키지 매니저: **npm**
- Storybook: **추가됨** (실행 전 `npm install` 필요 — 아래 "실행 방법" 참고)

## 2. 이미 존재하던 것

1차 패스 전에 저장소에 있던 디자인 관련 자원:

- `src/app/globals.css` — 9개 이름 있는 색(pinterest-red, sand-gray 등)과 Tailwind v4 `@theme inline` 매핑
- 컴포넌트 폴더는 `src/components/` 에 `Header`, `AuthContext` 두 개뿐, 나머지 UI는 모두 페이지 파일에 인라인 (`style={{...}}` 375회)

분류: **Partial** — 색 변수는 있었지만 시맨틱 역할(role) 개념이 없고, 간격/반경/그림자 토큰과 컴포넌트 계층이 부재.

## 3. Token 두 개 레이어

### 왜 두 레이어인가

| 레이어 | 이름 | 역할 | 예 |
| --- | --- | --- | --- |
| 1 | **Primitive** | 원시 팔레트. 의미 없음. 값만 | `--palette-neutral-900 = #211922` |
| 2 | **Semantic** | 역할(role) 기반. primitive를 가리킴 | `--color-text-primary = var(--palette-neutral-900)` |

**UI 코드는 2번만 참조합니다.** 브랜드 색이 바뀌면 1번만 고치면 되고, 역할이 재정의되면 2번만 고치면 됩니다. 두 단계로 분리하지 않으면 "값 이름"(`gray500`) 과 "역할 이름"(`text.primary`) 중 하나를 고르는 순간 한쪽이 깨집니다.

### 파일 위치

- `src/styles/tokens-primitive.css` — primitive CSS 변수 (raw 값)
- `src/styles/tokens-semantic.css` — `@theme` 으로 Tailwind 유틸리티 생성 (`bg-surface`, `text-primary`, `rounded-card`…)
- `src/app/globals.css` — entrypoint. 위 두 파일을 `@import` 하고 legacy 이름(`pinterest-red` 등)도 primitive에 매핑해 하위 호환 유지

## 4. Token 표

### Color — Semantic

| Semantic | Primitive | 쓰임 |
| --- | --- | --- |
| `bg.surface` | `neutral.0` (#ffffff) | 기본 페이지/카드 배경 |
| `bg.muted` | `neutral.100` (#f6f6f3) | 부드러운 회색 블록 |
| `bg.subtle` | `neutral.200` (#e0e0d9) | 강조된 muted |
| `bg.inverse` | `neutral.900` (#211922) | 다크 서피스 |
| `bg.brand` | `brand.500` (#e60023) | CTA, 강조 |
| `bg.brand-muted` | `brand.50` (#fef2f2) | 브랜드 tint, 드래그 호버 |
| `bg.danger-muted` | `danger.100` (8% brand) | 에러 영역 |
| `bg.success-muted` | `success.100` (8% success) | 성공 영역 |
| `bg.overlay` | `rgba(0,0,0,0.5)` | 모달/이미지 오버레이 |
| `bg.scrim` | `rgba(255,255,255,0.85)` | 이미지 위 반투명 칩 |
| `text.primary` | `neutral.900` | 본문 |
| `text.secondary` | `neutral.700` | 보조 본문 |
| `text.tertiary` | `neutral.500` | 메타 · placeholder |
| `text.on-brand` | `neutral.0` | 브랜드 배경 위 텍스트 |
| `text.brand` | `brand.500` | 강조 · 에러 · 링크 강조 |
| `text.success` | `success.700` | 성공 라벨 |
| `text.link` | `accent-blue.500` | 외부 링크 |
| `border.default` | `neutral.300` | 기본 경계선 |
| `border.subtle` | `neutral.200` | 약한 경계선 |
| `border.strong` | `neutral.500` | 입력 필드 · 대시 보더 |
| `border.brand` | `brand.500` | 포커스 · 드래그 활성 |
| `tag.{blue,green,lime,purple,pink,peach}` | `palette.tag.*` | 카테고리 칩 (6색) |

### Spacing

| Semantic | Primitive | 용도 |
| --- | --- | --- |
| `spacing.component-xs` | `space-1` (4px) | 원자 간 hairline |
| `spacing.component-sm` | `space-2` (8px) | 기본 gap |
| `spacing.component-md` | `space-3` (12px) | 컨트롤 padding |
| `spacing.component-lg` | `space-4` (16px) | 카드 padding |
| `spacing.layout-sm` | `space-4` (16px) | 모바일 섹션 간격 |
| `spacing.layout-md` | `space-6` (24px) | 데스크탑 섹션 간격 |
| `spacing.layout-lg` | `space-8` (32px) | hero 여백 |

### Radius

| Semantic | 값 | 용도 |
| --- | --- | --- |
| `radius.control` | 8px | 버튼 · 입력 |
| `radius.tag` | 12px | 칩 · 세그먼트 썸 |
| `radius.card` | 16px | 카드 · 드롭다운 · 모달 |
| `radius.image` | 20px | 이미지 · 미디어 타일 |
| `radius.pill` | 9999px | 아바타 · 원형 버튼 |

### Shadow

| Semantic | 값 | 용도 |
| --- | --- | --- |
| `shadow.card` | `0 4px 12px rgba(0,0,0,0.08)` | 드롭다운 · FAB · 카드 떠오름 |

(modal/popover 단계는 필요 시 디자이너가 추가)

## 5. 컴포넌트 인벤토리

총 **13개** (1차 패스, 중규모 draft 기준 권장치 내).

### 🌍 Design System (8)

| 컴포넌트 | 파일 | 용도 |
| --- | --- | --- |
| Button | `src/components/Button.tsx` | 4 variant: primary / ghost / subtle / danger |
| Avatar | `src/components/Avatar.tsx` | 이니셜 or 이미지, 3 size |
| Input | `src/components/Input.tsx` | 라벨 · 에러 · 아이콘 슬롯 |
| Tag | `src/components/Tag.tsx` | 10 tone (neutral · brand · 6 pastel · onImage) |
| Spinner | `src/components/Spinner.tsx` | 로딩 인디케이터, 3 tone |
| SegmentedTabs | `src/components/SegmentedTabs.tsx` | pill / underline 두 variant |
| Card | `src/components/Card.tsx` | 서피스 컨테이너 (tone · padding · elevated · bordered) |
| Header | `src/components/Header.tsx` | 서비스 전역 상단바 (기존 파일에 스토리 추가) |

### 🎯 Feature Components (3)

| 컴포넌트 | 파일 | 소속 |
| --- | --- | --- |
| StyleCard | `src/features/feed/StyleCard.tsx` | 홈 피드 전용 (승격 후보 ⭐⭐⭐⭐) |
| UploadDropzone | `src/features/fitting/UploadDropzone.tsx` | 가상 피팅 전용 (승격 후보 ⭐⭐⭐) |
| AdminSideNav | `src/features/admin/AdminSideNav.tsx` | 관리자 전용 (승격 후보 ⭐⭐) |

### 📄 Pages (2)

| 컴포넌트 | 파일 | 구성 |
| --- | --- | --- |
| HomePagePreview | `src/stories/pages/HomePagePreview.tsx` | SegmentedTabs + Spinner + StyleCard list + Button FAB |
| LoginPagePreview | `src/stories/pages/LoginPagePreview.tsx` | Card + SegmentedTabs + Input × 3 + Button |

> 페이지 프리뷰는 Next.js 라우트(`src/app/.../page.tsx`)와 분리된 **프레젠테이셔널 버전** 입니다. 실제 라우트는 인증/데이터 페칭을 포함하므로 Storybook 전용 프리뷰를 따로 두었습니다.

## 6. 재사용 범위 판별 룰 (복붙용 요약)

새 컴포넌트 후보를 만났을 때 **순서대로** 질문:

1. 2+ 페이지/기능에서 쓰이는가? → 🌍 Design System (이름이 feature-specific 하면 일반명으로 바꿀 것)
2. Button/Input/Card/Badge/Tabs 같은 **일반 원시 프리미티브** 인가? → 🌍 (선제 등록)
3. 한 기능 전용인데 마크업 ≥ 30줄 또는 복잡한 상태를 품고 있는가? → 🎯 `src/features/<feature>/`
4. 화면 전체 조합(header+list+pagination) 인가? → 📄 `src/stories/pages/`
5. 어디에도 해당 안 되면 → 페이지 파일에 인라인 유지. `DESIGN_SYSTEM.md` 의 "다음 패스 후보" 에 기록

## 7. 승격 프로세스: 🎯 → 🌍

🎯 로 시작한 컴포넌트가 2번째 사용처를 얻으면:

1. 이름 재검토 — `SearchResultCard` 처럼 기능 이름이 붙어 있으면 `ListCard` 같은 일반명으로 제안 (사용자 확인 필수)
2. 파일 이동: `src/features/<x>/Foo.tsx` → `src/components/Foo.tsx` (`.stories.tsx` 같이)
3. 스토리 수정:
   - `title:` → `🌍 Design System/Foo`
   - `tags:` → `'design-system'` (기존 `'page-specific'`, `'<feature>-only'`, `'candidate-for-ds'` 모두 제거)
   - 설명 블록 — 긴 🎯 문서블록 → 가벼운 🌍 버전(purpose + Figma)
4. 사용처들의 import 경로 업데이트
5. `DESIGN_SYSTEM.md` 의 "변경 이력" 에 기록

## 8. 다음 패스 후보 (deferred)

1차 패스에서는 추출하지 않았으나 향후 정리할 만한 항목:

- **UserMenuDropdown** — Header.tsx 안에 인라인. 다른 곳에서도 드롭다운 UI가 필요해지면 🌍 Dropdown 으로 분리
- **EmptyState** — "아직 업로드된 스타일이 없습니다" 패턴. 여러 페이지에서 반복되면 🌍
- **CreditBadge / PriceCard** — 마이페이지 크레딧 섹션 요소들
- **InfoBanner** — `bg-muted` + 정보 아이콘 패턴 (피팅 안내문 등)
- **FittingPage / MyPage / StyleDetail / Admin\* — 대형 페이지들** — 단일 사용이라 현재는 페이지 파일 그대로 둠
- **typography 토큰의 composite 화** — 현재는 Tailwind 기본 스케일만 사용. `heading.md` / `body.sm` 같은 composite 가 필요해지면 추가

## 9. 디자이너 워크플로우

1. `npm run storybook` 으로 Storybook 실행
2. 사이드바 상단에 🎨 Foundations → 🌍 Design System → 🎯 Feature Components → 📄 Pages 순으로 표시됨
3. 사이드바 검색창에 이모지 입력으로 빠른 필터:
   - `🌍` → Design System 전체
   - `🎯 Feature Components/Fitting` → 피팅 기능 전용 컴포넌트만
   - `📄` → 페이지 조합
4. 컴포넌트 수정은 Claude Code 로: "SegmentedTabs 의 pill variant 간격을 4px 더 넓혀줘" 처럼 지시 → 결과가 Storybook 에 즉시 반영됨
5. 🎯 컴포넌트가 두 번째 사용처를 얻는 순간 팀 채널에 알림 → 승격 프로세스(7번) 트리거

## 10. 실행 방법

```bash
# 1. 의존성 설치 (최초 1회)
npm install
npm install -D storybook @storybook/nextjs @storybook/react @storybook/addon-essentials @storybook/addon-interactions @storybook/addon-a11y

# 2. Storybook 실행
npx storybook dev -p 6006
```

> 참고: skill 은 설치 명령을 직접 실행하지 않습니다. `.storybook/main.ts` 와 `preview.ts` 는 이미 작성돼 있습니다. `package.json` 에 `"storybook": "storybook dev -p 6006"` 스크립트를 추가하면 `npm run storybook` 으로 실행할 수 있습니다.

## 11. 가드레일 (깨지 말 것)

- 컴포넌트는 **semantic 토큰만** 참조. `bg-[#fff]` / `style={{ color: "#e60023" }}` 같은 하드코딩 금지. legacy 코드(페이지 인라인)는 아직 하드코딩이 많지만, 새 코드에서는 금지.
- `@theme inline` 의 legacy 네임드 컬러(pinterest-red 등)는 하위 호환용. **새 코드에서 직접 참조 금지** — 기존 코드는 점진적으로 semantic 으로 마이그레이션.
- 🌍 승격은 단순한 라벨링이 아니라 팀 합의가 필요한 행위. 선제 승격은 일반 원시 컴포넌트에 한해서.
- 🎯 컴포넌트의 문서 블록 5개 섹션(사용 위치 / 디자인 / 재사용 계획 / 승격 기준 / Figma)은 비어 있어도 섹션 자체를 지우지 말 것. 빈 placeholder 는 사람이 채워야 할 TODO 지, 삭제 허가가 아님.
- Motion 토큰은 범위 밖.
