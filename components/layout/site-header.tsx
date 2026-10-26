import Link from "next/link";
import { siteConfig } from "@/config/site";
import { NavLinks } from "@/components/layout/nav-links";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";

// 상단 고정 헤더: 로고, 데스크톱 메뉴(md 이상), 테마 토글, 모바일 메뉴
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {siteConfig.name}
        </Link>
        <div className="flex items-center gap-2">
          <NavLinks className="hidden items-center gap-6 md:flex" />
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
