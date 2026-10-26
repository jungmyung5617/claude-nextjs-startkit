새 페이지를 만들어주세요. 인자: $ARGUMENTS (형식: `<라우트 경로> <페이지 설명>`, 예: `dashboard 통계 요약 화면`)

작업 순서:
1. `node_modules/next/dist/docs/`에서 App Router 관련 가이드를 먼저 읽고, 파일 규칙과 API가 현재 Next.js 버전과 맞는지 확인합니다.
2. 기존 `app/about/page.tsx`, `app/contact/page.tsx`, `app/layout.tsx`를 읽어 레이아웃, 여백, 제목 구조 패턴을 파악합니다.
3. `app/<라우트 경로>/page.tsx`를 만듭니다.
   - 설명에 맞는 내용을 구성하고, shadcn/ui 컴포넌트(`app/components/ui` 등 기존 위치)와 Tailwind CSS를 사용합니다.
   - 모바일 우선 반응형으로 작성하고, 가로 스크롤이 생기지 않게 합니다.
   - `any` 타입을 쓰지 않고, 들여쓰기는 2칸으로 맞춥니다.
   - 주석은 한국어로 작성합니다.
4. 로딩 상태가 필요하면 `loading.tsx`를, 잘못된 경로 처리가 필요하면 `not-found.tsx`를 함께 만듭니다. 에러 처리 파일(`error.tsx`)은 실제로 필요한 경우에만 만듭니다.
5. 필요하면 `layout.tsx`의 내비게이션에 새 페이지 링크를 추가합니다.
6. `npx tsc --noEmit`과 `npm run lint`로 타입과 린트를 확인합니다. 실패하면 원인을 보고합니다.

완료 후 만든 파일 목록과 확인 결과를 한국어로 짧게 요약해주세요.
