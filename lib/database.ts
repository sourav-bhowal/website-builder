import { Data } from "@measured/puck";
import clientPromise from "./mongodb";

export interface PageData {
  _id?: string;
  path: string;
  data: Data;
  updatedAt: Date;
  createdAt: Date;
}

class DatabaseService {
  private dbName = "website_builder";
  private collectionName = "pages";

  async getDatabase() {
    const client = await clientPromise;
    return client.db(this.dbName);
  }

  async getCollection() {
    const db = await this.getDatabase();
    return db.collection<PageData>(this.collectionName);
  }

  async getPage(path: string): Promise<Data | null> {
    try {
      const collection = await this.getCollection();
      const page = await collection.findOne({ path });
      return page ? page.data : null;
    } catch (error) {
      console.error("Error fetching page:", error);
      return null;
    }
  }

  async savePage(path: string, data: Data): Promise<boolean> {
    try {
      const collection = await this.getCollection();
      const now = new Date();
      
      await collection.updateOne(
        { path },
        {
          $set: {
            path,
            data,
            updatedAt: now,
          },
          $setOnInsert: {
            createdAt: now,
          },
        },
        { upsert: true }
      );
      
      return true;
    } catch (error) {
      console.error("Error saving page:", error);
      return false;
    }
  }

  async getAllPages(): Promise<Record<string, Data>> {
    try {
      const collection = await this.getCollection();
      const pages = await collection.find({}).toArray();
      
      const result: Record<string, Data> = {};
      pages.forEach((page) => {
        result[page.path] = page.data;
      });
      
      return result;
    } catch (error) {
      console.error("Error fetching all pages:", error);
      return {};
    }
  }

  async deletePage(path: string): Promise<boolean> {
    try {
      const collection = await this.getCollection();
      const result = await collection.deleteOne({ path });
      return result.deletedCount > 0;
    } catch (error) {
      console.error("Error deleting page:", error);
      return false;
    }
  }


}

export const dbService = new DatabaseService();
