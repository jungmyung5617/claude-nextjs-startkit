"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type NavLinksProps = {
  className?: string;
  onNavigate?: () => void;
};

// 현재 경로와 일치하는 메뉴를 강조하는 네비게이션 링크 목록
export function NavLinks({ className, onNavigate }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav className={className}>
      {siteConfig.nav.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "text-sm font-medium transition-colors hover:text-foreground",
              isActive ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}
