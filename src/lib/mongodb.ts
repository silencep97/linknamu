import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

// 개발 중 HMR로 클라이언트가 중복 생성되지 않도록 global에 캐시
const globalWithMongo = global as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

export function getMongoClient(): Promise<MongoClient> | null {
  if (!uri) return null;

  if (!globalWithMongo._mongoClientPromise) {
    // DB에 닿을 수 없을 때 페이지가 기본값(30초) 동안 멈추지 않도록 짧게 제한
    const promise = new MongoClient(uri, {
      serverSelectionTimeoutMS: 5_000,
    }).connect();

    // 연결 실패 시 거부된 Promise가 캐시에 남아 영구 장애가 되지 않도록 비움
    promise.catch(() => {
      if (globalWithMongo._mongoClientPromise === promise) {
        globalWithMongo._mongoClientPromise = undefined;
      }
    });

    globalWithMongo._mongoClientPromise = promise;
  }
  return globalWithMongo._mongoClientPromise;
}

export const DB_NAME = process.env.MONGODB_DB || "linknamu";
