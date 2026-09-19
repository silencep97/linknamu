import { DB_NAME, getMongoClient } from "./mongodb";

type ClickDoc = { _id: string; count: number };

export type ClickCounts = Record<string, number>;

async function collection() {
  const clientPromise = getMongoClient();
  if (!clientPromise) return null;
  const client = await clientPromise;
  return client.db(DB_NAME).collection<ClickDoc>("clicks");
}

/** 모든 링크의 클릭 수를 { linkId: count } 형태로 반환. DB 미설정 시 빈 객체 */
export async function getClickCounts(): Promise<ClickCounts> {
  try {
    const col = await collection();
    if (!col) return {};
    const docs = await col.find().toArray();
    return Object.fromEntries(docs.map((d) => [d._id, d.count]));
  } catch (err) {
    console.error("[clicks] 조회 실패:", err);
    return {};
  }
}

/** 링크 클릭 수 1 증가 후 새 값을 반환. DB 미설정 시 null */
export async function incrementClick(linkId: string): Promise<number | null> {
  const col = await collection();
  if (!col) return null;
  const result = await col.findOneAndUpdate(
    { _id: linkId },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );
  return result?.count ?? null;
}
