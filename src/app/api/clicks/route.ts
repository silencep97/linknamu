import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { getClickCounts, incrementClick } from "@/lib/clicks";

export const dynamic = "force-dynamic";

export async function GET() {
  const counts = await getClickCounts();
  return NextResponse.json(counts);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "잘못된 요청" }, { status: 400 });
  }

  // body가 null이거나 객체가 아닌 경우(예: JSON `null`)도 500이 아닌 400으로 처리
  const rawId =
    typeof body === "object" && body !== null && "id" in body ? body.id : undefined;
  const id = typeof rawId === "string" ? rawId : "";
  if (!links.some((l) => l.id === id)) {
    return NextResponse.json({ error: "존재하지 않는 링크" }, { status: 404 });
  }

  try {
    const count = await incrementClick(id);
    return NextResponse.json({ id, count });
  } catch (err) {
    console.error("[clicks] 증가 실패:", err);
    return NextResponse.json({ error: "저장 실패" }, { status: 500 });
  }
}
