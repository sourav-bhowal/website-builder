import { Data } from "@measured/puck";
import { dbService } from "./database";

// Get page data from MongoDB
export const getPage = async (path: string): Promise<Data | null> => {
  return await dbService.getPage(path);
};
