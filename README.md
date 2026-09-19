# 🌳 링크나무

내 모든 링크를 한 페이지에 모아두고, 하나의 URL로 공유하는 Link in Bio 서비스입니다.

## 기술 스택

- Next.js 14 (App Router) · TypeScript
- Tailwind CSS (class 기반 다크모드)
- MongoDB Atlas (링크 클릭 수 저장)
- Vercel (배포)

## 시작하기

```bash
npm install
cp .env.example .env.local   # MONGODB_URI 입력
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.
`MONGODB_URI`가 없어도 페이지는 동작하며, 클릭 수만 저장되지 않습니다.

## 프로필 / 링크 수정

`src/data/profile.ts` 파일에서 이름, 소개, 프로필 사진, 링크 목록을 수정하세요.

## 구조

```
src/
├── app/
│   ├── api/clicks/route.ts   # 클릭 수 조회(GET) / 증가(POST)
│   ├── layout.tsx            # 루트 레이아웃 + 테마 초기화 스크립트
│   └── page.tsx              # 메인 페이지
├── components/
│   ├── Profile.tsx           # 프로필 (사진, 이름, 소개)
│   ├── LinkList.tsx          # 링크 카드 목록
│   ├── LinkCard.tsx          # 링크 카드 (클릭 집계)
│   └── ThemeToggle.tsx       # 다크모드 토글
├── data/profile.ts           # 프로필 · 링크 데이터
└── lib/
    ├── mongodb.ts            # MongoDB 클라이언트
    └── clicks.ts             # 클릭 수 조회/증가
```
