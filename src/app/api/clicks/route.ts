import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { getClickCounts, incrementClick } from "@/lib/clicks";

export const dynamic = "force-dynamic";

export async function GET() {
  const counts = await getClickCounts();
  return NextResponse.json(counts);
}

export async function POST(request: Request) {
  let body: { id?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "잘못된 요청" }, { status: 400 });
  }

  const id = typeof body.id === "string" ? body.id : "";
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
