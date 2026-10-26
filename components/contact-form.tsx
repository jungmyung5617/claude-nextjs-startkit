"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// 문의 폼 예제: 제출 시 실제 전송 없이 토스트만 표시
export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    // 실제 서비스에서는 여기서 API 또는 Server Action을 호출
    setTimeout(() => {
      setIsSubmitting(false);
      event.currentTarget.reset();
      toast.success("문의가 접수되었습니다. (예제 동작)");
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">이름</Label>
        <Input id="name" name="name" placeholder="홍길동" required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">이메일</Label>
        <Input id="email" name="email" type="email" placeholder="you@example.com" required />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="message">내용</Label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="문의 내용을 입력해 주세요"
          className="min-h-24 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30"
        />
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto sm:self-end">
        {isSubmitting ? "전송 중..." : "보내기"}
      </Button>
    </form>
  );
}
