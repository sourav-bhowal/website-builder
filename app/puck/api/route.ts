import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { dbService } from "@/lib/database";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    const success = await dbService.savePage(payload.path, payload.data);

    if (!success) {
      return NextResponse.json(
        { error: "Failed to save page" },
        { status: 500 }
      );
    }

    // Purge Next.js cache
    revalidatePath(payload.path);

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.error("Error saving page:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
