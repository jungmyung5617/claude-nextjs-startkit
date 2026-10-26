import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "문의",
  description: "문의 폼 예제 페이지입니다.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-4 py-12 sm:px-6 sm:py-16">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">문의</h1>
        <p className="text-muted-foreground">아래 폼을 작성하고 보내 주세요.</p>
      </header>
      <ContactForm />
    </div>
  );
}
