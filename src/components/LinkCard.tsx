"use client";

import { useState } from "react";
import type { LinkItem } from "@/data/profile";

type Props = LinkItem & { initialCount: number };

export default function LinkCard({ id, title, url, emoji, initialCount }: Props) {
  const [count, setCount] = useState(initialCount);

  const handleClick = () => {
    // 새 탭으로 열리므로 응답을 기다리지 않고 낙관적으로 갱신
    setCount((c) => c + 1);
    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true,
    }).catch(() => {});
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="group flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-4 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 dark:border-zinc-700 dark:bg-zinc-800"
    >
      <span className="w-7 text-center text-xl" aria-hidden>
        {emoji ?? "🔗"}
      </span>
      <span className="flex-1 text-center font-semibold text-zinc-900 dark:text-zinc-50">
        {title}
      </span>
      <span
        className="w-7 text-right text-xs tabular-nums text-zinc-400 dark:text-zinc-500"
        title="클릭 수"
      >
        {count}
      </span>
    </a>
  );
}
