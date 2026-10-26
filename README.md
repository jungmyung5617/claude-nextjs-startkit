# Next.js Starter Kit

Next.js 16, React 19, Tailwind CSS 4, shadcn/ui로 만든 스타터킷입니다. 헤더·푸터 레이아웃, 다크 모드, 예제 페이지가 포함되어 있어 새 프로젝트를 바로 시작할 수 있습니다.

## 기술 스택

- Next.js 16 (App Router, `cacheComponents`)
- React 19
- Tailwind CSS 4
- shadcn/ui (base-nova 스타일, `@base-ui/react` 기반)
- next-themes (테마 전환)
- lucide-react (아이콘)
- TypeScript

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열면 확인할 수 있습니다.

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 빌드 결과 실행 |
| `npm run lint` | ESLint 검사 |

## 폴더 구조

```
app/
  layout.tsx          # 루트 레이아웃 (헤더, 푸터, 테마 Provider)
  page.tsx            # 홈
  about/page.tsx      # 소개 페이지
  components/page.tsx # shadcn/ui 컴포넌트 예제
  contact/page.tsx    # 문의 폼 예제
  loading.tsx         # 로딩 스켈레톤
  error.tsx           # 에러 페이지
  not-found.tsx       # 404 페이지
components/
  ui/                 # shadcn/ui 컴포넌트
  layout/             # SiteHeader, SiteFooter, NavLinks, MobileNav
  theme-provider.tsx  # next-themes Provider
  theme-toggle.tsx    # 라이트/다크/시스템 테마 선택
  contact-form.tsx    # 문의 폼 (클라이언트 컴포넌트)
config/
  site.ts             # 사이트 이름, 설명, 네비게이션 메뉴
lib/
  utils.ts            # cn 유틸리티
```

## 자주 하는 작업

### 컴포넌트 추가

```bash
npx shadcn@latest add dialog tabs
```

추가된 파일은 `components/ui/`에 생성되며 자유롭게 수정할 수 있습니다.

### 메뉴 수정

`config/site.ts`의 `siteConfig.nav` 배열을 수정하면 데스크톱 메뉴와 모바일 메뉴에 함께 반영됩니다.

### 사이트 정보 수정

`config/site.ts`의 `name`, `description`을 바꾸면 메타데이터, 헤더, 푸터에 반영됩니다.

### 페이지 추가

`app/<경로>/page.tsx` 파일을 만들면 라우트가 생성됩니다. 메뉴에 노출하려면 `config/site.ts`에 항목을 추가하세요.

## 참고

- `next.config.ts`는 `cacheComponents`가 켜져 있습니다. 요청마다 달라지는 값(`cookies()`, `headers()`, `new Date()` 등)은 `<Suspense>` 안에서 사용해야 합니다.
- `runtime` route segment config는 사용할 수 없습니다.
