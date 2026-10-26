import { siteConfig } from "@/config/site";

// 하단 푸터: 사이트 이름과 사용 기술 표시
export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p>© {siteConfig.name}. 모든 권리 보유.</p>
        <p>Next.js · Tailwind CSS · shadcn/ui</p>
      </div>
    </footer>
  );
}
