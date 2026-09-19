"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  // 최초 렌더 시 현재 <html> 클래스 상태를 읽어옴 (layout의 인라인 스크립트가 미리 적용)
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-lg shadow-sm transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700"
    >
      {dark === null ? "" : dark ? "☀️" : "🌙"}
    </button>
  );
}
