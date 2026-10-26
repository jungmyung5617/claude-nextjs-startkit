// 사이트 공통 설정 (이름, 설명, 네비게이션 메뉴)
export type NavItem = {
  title: string;
  href: string;
};

export const siteConfig = {
  name: "Next.js Starter Kit",
  description: "Next.js, Tailwind CSS, shadcn/ui로 만든 스타터킷입니다.",
  nav: [
    { title: "홈", href: "/" },
    { title: "소개", href: "/about" },
    { title: "컴포넌트", href: "/components" },
    { title: "문의", href: "/contact" },
  ] satisfies NavItem[],
};
