import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "컴포넌트",
  description: "설치된 shadcn/ui 컴포넌트 예제입니다.",
};

const buttonVariants = ["default", "secondary", "outline", "ghost", "destructive", "link"] as const;
const badgeVariants = ["default", "secondary", "outline", "destructive"] as const;

export default function ComponentsPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-12 sm:px-6 sm:py-16">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">컴포넌트</h1>
        <p className="text-muted-foreground">
          <code className="font-mono text-sm">npx shadcn@latest add [이름]</code>으로 컴포넌트를 추가할 수 있습니다.
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Button</h2>
        <div className="flex flex-wrap gap-2">
          {buttonVariants.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant}
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm">small</Button>
          <Button size="default">default</Button>
          <Button size="lg">large</Button>
          <Button size="icon" aria-label="아이콘 버튼">+</Button>
        </div>
      </section>

      <Separator />

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Badge</h2>
        <div className="flex flex-wrap gap-2">
          {badgeVariants.map((variant) => (
            <Badge key={variant} variant={variant}>
              {variant}
            </Badge>
          ))}
        </div>
      </section>

      <Separator />

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Card &amp; Input</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>카드 제목</CardTitle>
              <CardDescription>카드 설명 텍스트가 들어가는 영역입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                카드 본문 영역입니다. 모바일에서는 한 열, 태블릿 이상에서는 두 열로 배치됩니다.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>입력 필드</CardTitle>
              <CardDescription>Label과 Input을 함께 사용하는 예제입니다.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Label htmlFor="example-input">이메일</Label>
              <Input id="example-input" type="email" placeholder="you@example.com" />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
