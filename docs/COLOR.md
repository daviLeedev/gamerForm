# Gamer Community Platform — UI Style Guide (v1)

> 목표: 다크 베이스 + 선명한 포인트 컬러로 “게임스러움(에너지/속도감)”을 주되,
> 텍스트 가독성/접근성(대비)과 확장성을 우선한다.

---

## 1) Color System

### 1.1 Primary (브랜드 포인트)

- **Primary-500**: `#7C3AED` (Violet / 메인 액션, 링크, 강조)
- **Primary-600**: `#6D28D9` (Hover)
- **Primary-700**: `#5B21B6` (Active/Pressed)
- **Primary-300**: `#A78BFA` (서브 강조/라이트 배경용)

> 팁: 보라 계열은 게이밍 무드(네온/사이버)와 궁합이 좋아서 “주 브랜드”로 두기 좋음.

### 1.2 Accent (보조 포인트, 상황별 선택)

- **Accent-Cyan-500**: `#22D3EE` (정보/하이라이트, 칩/태그)
- **Accent-Lime-500**: `#A3E635` (성공/레벨업/획득)
- **Accent-Red-500**: `#EF4444` (경고/에러)
- **Accent-Amber-500**: `#F59E0B` (주의/알림)

> 운영 원칙: 한 화면에서 “Primary + Accent 1개”까지만 강하게. 포인트 난사 금지.

### 1.3 Neutral (다크 테마 기본 배경/텍스트)

- **BG-900 (App Background)**: `#0B0F1A`
- **BG-850 (Surface)**: `#111827`
- **BG-800 (Card/Panel)**: `#151F34`
- **BG-750 (Elevated)**: `#1B2A4A`

- **Border-700**: `#24324D`
- **Divider-650**: `#2B3A57`

- **Text-100 (Primary text)**: `#E5E7EB`
- **Text-200 (Secondary text)**: `#CBD5E1`
- **Text-300 (Muted text)**: `#94A3B8`
- **Text-400 (Disabled/Hint)**: `#64748B`

### 1.4 Overlay / Shadow

- **Overlay**: `rgba(0,0,0,0.55)` (모달/드로어)
- **Glow (Primary)**: `rgba(124,58,237,0.35)` (네온 느낌 필요할 때만)

---

## 2) Font (권장 폰트 패밀리)

### 2.1 기본 UI 폰트 (가독성 우선)

- **Korean + Latin UI**
  - `Pretendard Variable` (우선)
  - fallback: `Noto Sans KR`, `Inter`, `system-ui`, `-apple-system`, `Segoe UI`, `Roboto`, `Arial`, `sans-serif`

### 2.2 숫자/코드/랭크/아이템 스탯(모노스페이스)

- `JetBrains Mono`, `Fira Code`, `ui-monospace`, `SFMono-Regular`, `Menlo`, `Monaco`, `Consolas`, `Liberation Mono`, `monospace`

### 2.3 권장 웨이트

- Body: 400~500
- Heading: 600~700
- 버튼/라벨: 600

---

## 3) Typography Scale (폰트 사이즈/라인 높이)

> 기준: Root 16px, 단위는 px (필요하면 rem로 변환 가능)

### 3.1 Display / Heading

- **Display**: 36px / LH 44px / W 700 (메인 히어로, 큰 타이틀)
- **H1**: 28px / LH 36px / W 700
- **H2**: 24px / LH 32px / W 700
- **H3**: 20px / LH 28px / W 700
- **H4**: 18px / LH 26px / W 600

### 3.2 Body

- **Body-L**: 16px / LH 24px / W 400~500 (기본 본문)
- **Body-M**: 14px / LH 22px / W 400~500 (리스트/댓글)
- **Body-S**: 13px / LH 20px / W 400 (보조 설명)

### 3.3 UI Label / Caption

- **Label**: 12px / LH 16px / W 600 (버튼/필터/칩)
- **Caption**: 12px / LH 16px / W 400 (메타 정보: 시간/조회수)
- **Micro**: 11px / LH 14px / W 400 (툴팁, 아주 작은 보조)

> 최소 권장: 본문 14px 이하 남발 금지. (댓글/메타는 12~13px까지 허용)

---

## 4) Font Colors (텍스트 컬러 규칙)

### 4.1 기본 텍스트

- **Primary text**: `Text-100` (`#E5E7EB`) — 제목/본문 기본
- **Secondary**: `Text-200` (`#CBD5E1`) — 보조 문장
- **Muted**: `Text-300` (`#94A3B8`) — 메타 정보, 도움말
- **Disabled**: `Text-400` (`#64748B`) — 비활성

### 4.2 링크/강조

- **Link**: `Primary-500` (`#7C3AED`)
- **Link Hover**: `Primary-300` (`#A78BFA`)
- **Inline highlight**: `Accent-Cyan-500` (`#22D3EE`) (필요할 때만)

### 4.3 상태 텍스트

- **Success**: `Accent-Lime-500` (`#A3E635`)
- **Warning**: `Accent-Amber-500` (`#F59E0B`)
- **Error**: `Accent-Red-500` (`#EF4444`)

---

## 5) Background & Surface Rules (배색 가이드)

### 5.1 기본 배경 구조

- App Background: `BG-900`
- 상단/사이드 네비: `BG-850`
- 카드/패널: `BG-800`
- hover 표면: `BG-750`
- 구분선: `Border-700`

### 5.2 카드/리스트 상호작용

- Default Card: BG-800 + Border-700
- Hover: BG-750 (컬러 변화는 “밝기만” 올려도 충분)
- Selected: Border를 `Primary-500`로 + 미세 Glow(선택)

---

## 6) Component Color Recipes (바로 쓰는 조합)

### 6.1 Primary Button

- BG: `Primary-500`
- Text: `#0B0F1A` (다크 텍스트가 더 선명하게 보일 때가 많음)
- Hover BG: `Primary-600`
- Active BG: `Primary-700`
- Disabled BG: `#2B3A57`
- Disabled Text: `Text-400`

### 6.2 Secondary Button (다크 서피스)

- BG: `BG-800`
- Border: `Border-700`
- Text: `Text-100`
- Hover BG: `BG-750`

### 6.3 Ghost Button / Icon Button

- BG: transparent
- Text/Icon: `Text-200`
- Hover BG: `rgba(124,58,237,0.12)`
- Active BG: `rgba(124,58,237,0.18)`

### 6.4 Input

- BG: `BG-850`
- Border: `Border-700`
- Text: `Text-100`
- Placeholder: `Text-400`
- Focus Border: `Primary-500`
- Error Border: `Accent-Red-500`

### 6.5 Tag/Chip

- Default: BG `rgba(148,163,184,0.12)` / Text `Text-200`
- Highlight: BG `rgba(34,211,238,0.14)` / Text `Accent-Cyan-500`
- Rank/Level: BG `rgba(163,230,53,0.14)` / Text `Accent-Lime-500`

---

## 7) Accessibility Quick Rules (최소 준수)

- 본문 텍스트는 **Text-100/200**만 사용하고, BG-900~800 위에서 대비 유지.
- 상태 색(빨강/초록/노랑)만으로 의미 전달 금지 → 아이콘/라벨 텍스트 병행.
- 포커스 링은 **항상 보이게**: `outline: 2px solid Primary-500` + `outline-offset: 2px`

---

## 8) CSS Variables Example (선택)

```css
:root {
  --primary-500: #7c3aed;
  --primary-600: #6d28d9;
  --primary-700: #5b21b6;

  --bg-900: #0b0f1a;
  --bg-850: #111827;
  --bg-800: #151f34;
  --bg-750: #1b2a4a;

  --border-700: #24324d;

  --text-100: #e5e7eb;
  --text-200: #cbd5e1;
  --text-300: #94a3b8;
  --text-400: #64748b;

  --cyan-500: #22d3ee;
  --lime-500: #a3e635;
  --amber-500: #f59e0b;
  --red-500: #ef4444;
}
```
