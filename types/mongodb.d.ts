import { MongoClient } from 'mongodb';

declare global {
  namespace globalThis {
    var _mongoClientPromise: Promise<MongoClient> | undefined;
  }
}

export {};
