"use client";

import { Button } from "@/components/ui/button";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

// 런타임 오류 발생 시 표시되는 에러 페이지 (재시도 버튼 제공)
export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-4 py-24 text-center sm:px-6">
      <h1 className="text-2xl font-bold tracking-tight">문제가 발생했습니다</h1>
      <p className="text-muted-foreground">잠시 후 다시 시도해 주세요.</p>
      <Button onClick={() => reset()}>다시 시도</Button>
    </div>
  );
}
