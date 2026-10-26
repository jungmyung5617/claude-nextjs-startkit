import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "소개",
  description: "스타터킷의 구조와 사용 방법을 소개합니다.",
};

const structure = [
  { path: "app/", description: "라우트, 레이아웃, 페이지 (App Router)" },
  { path: "components/ui/", description: "shadcn/ui 컴포넌트" },
  { path: "components/layout/", description: "헤더, 푸터, 모바일 메뉴" },
  { path: "config/site.ts", description: "사이트 이름, 설명, 네비게이션 메뉴" },
  { path: "lib/utils.ts", description: "클래스 병합 유틸리티 (cn)" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 sm:py-16">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">소개</h1>
        <p className="text-muted-foreground">
          이 스타터킷은 새 프로젝트를 빠르게 시작할 수 있도록 기본 구조를 미리 갖춘 템플릿입니다.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>프로젝트 구조</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-3">
            {structure.map((item) => (
              <li
                key={item.path}
                className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4"
              >
                <code className="w-full rounded bg-muted px-2 py-1 font-mono text-sm sm:w-56">
                  {item.path}
                </code>
                <span className="text-sm text-muted-foreground">{item.description}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
