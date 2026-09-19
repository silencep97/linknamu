import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

// 개발 중 HMR로 클라이언트가 중복 생성되지 않도록 global에 캐시
const globalWithMongo = global as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

export function getMongoClient(): Promise<MongoClient> | null {
  if (!uri) return null;

  if (!globalWithMongo._mongoClientPromise) {
    globalWithMongo._mongoClientPromise = new MongoClient(uri).connect();
  }
  return globalWithMongo._mongoClientPromise;
}

export const DB_NAME = process.env.MONGODB_DB ?? "linknamu";
