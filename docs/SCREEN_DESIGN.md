# 화면 설계

## 앱별 정보

| 앱 | 포트 | URL | 설명 |
|----|------|-----|------|
| community | 3000 | http://localhost:3000 | 커뮤니티 (갤러리/피드) |
| shorts | 3001 | http://localhost:3001 | 숏폼 피드/재생 |
| admin | 3002 | http://localhost:3002 | 관리자 |

## community (3000)

### 레이아웃 구조
- **Header**: 전체 폭, 3단 구성
  - **헤더**: 상단바 (마이너갤, 미니갤 등 + 로그인, 야간모드)
  - **서치박스**: 로고 + 검색 인풋 + 검색 버튼
  - **네비게이션**: 갤러리 메뉴 + 태그바
- **Body**: Left Banner | Content | Right Banner (3열)
- **Footer**: 링크/저작권

### 화면 구성 (와이어프레임)
```
[         header          ]
[          nav            ]
[ banner | content | banner ]
[         footer          ]
```

### 화면 너비/패딩
- max-width: 1280px
- 가운데 정렬
- 반응형 패딩: 16px → 24px(768px) → 32px(1024px)

### 위젯
- ShortsWidget: 우측하단 고정 (데스크톱 미니플레이어 / 모바일 FAB → 모달)

---

## shorts (3001)

### 레이아웃 구조
- **Header**: 상단 최소 네비 (로고)
- **Body**: 풀스크린에 가까운 숏폼 피드 (HlsPlayer)

---

## admin (3002)

### 레이아웃 구조
- **Header**: 없음
- **Body**: SideNav(좌측 고정) + 메인 컨텐츠
- **Footer**: 없음

### 용도
- 테이블/리스트/폼 중심
