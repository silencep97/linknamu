import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";
import { getClickCounts } from "@/lib/clicks";

// 클릭 수는 요청마다 DB에서 읽음
export const dynamic = "force-dynamic";

export default async function Home() {
  const counts = await getClickCounts();

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-sm flex-col px-4 py-6">
      {/* 다크모드 토글 (우측 상단) */}
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      {/* 와이어프레임의 둥근 카드 프레임 */}
      <div className="mt-4 flex flex-1 flex-col rounded-[2rem] border border-zinc-200 bg-white px-6 pb-10 pt-12 shadow-sm dark:border-zinc-700 dark:bg-zinc-800/60">
        {/* 상단: 원형 프로필 사진 + 이름 + 한 줄 소개 */}
        <Profile {...profile} />

        {/* 하단: 링크 카드 세로 배치 (GitHub / LinkedIn / Blog) */}
        <section className="mt-10" aria-label="링크 목록">
          <LinkList links={links} counts={counts} />
        </section>
      </div>
    </main>
  );
}
