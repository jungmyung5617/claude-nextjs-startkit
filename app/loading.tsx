import { Skeleton } from "@/components/ui/skeleton";

// 라우트 전환 중 표시되는 로딩 스켈레톤
export default function Loading() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 sm:py-16">
      <Skeleton className="h-10 w-48" />
      <Skeleton className="h-4 w-full max-w-md" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
    </div>
  );
}
