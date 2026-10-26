import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "반응형 레이아웃",
    description:
      "모바일부터 데스크톱까지 자연스럽게 배치되는 헤더와 그리드를 제공합니다.",
  },
  {
    title: "다크 모드",
    description:
      "next-themes로 라이트, 다크, 시스템 테마를 전환하고 선택을 기억합니다.",
  },
  {
    title: "shadcn/ui 컴포넌트",
    description:
      "CLI로 필요한 컴포넌트만 추가하고 프로젝트에 맞게 자유롭게 수정할 수 있습니다.",
  },
];

const techStack = ["Next.js 16", "React 19", "Tailwind CSS 4", "shadcn/ui", "TypeScript"];

export default function HomePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-16 sm:px-6 sm:py-24">
      <section className="flex flex-col items-center gap-6 text-center">
        <Badge variant="secondary">Next.js + shadcn/ui</Badge>
        <h1 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
          바로 시작하는 Next.js 스타터킷
        </h1>
        <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
          레이아웃, 테마, 예제 페이지가 준비되어 있어 원하는 기능에 바로 집중할 수 있습니다.
        </p>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button
            size="lg"
            nativeButton={false}
            render={<Link href="/components" />}
          >
            컴포넌트 보기
          </Button>
          <Button
            size="lg"
            variant="outline"
            nativeButton={false}
            render={<Link href="/about" />}
          >
            소개 보기
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <section className="flex flex-col items-center gap-4">
        <h2 className="text-xl font-semibold">기술 스택</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {techStack.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
      </section>
    </div>
  );
}
