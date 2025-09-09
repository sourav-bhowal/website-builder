import { NextResponse } from "next/server";
import { dbService } from "@/lib/database";

export async function GET() {
  try {
    // Test the database connection by trying to get all pages
    const pages = await dbService.getAllPages();
    const pageCount = Object.keys(pages).length;
    
    return NextResponse.json({ 
      status: "connected", 
      database: "website_builder",
      collection: "pages",
      pageCount,
      message: "MongoDB connection successful" 
    });
  } catch (error) {
    console.error("Database connection error:", error);
    return NextResponse.json(
      { 
        status: "error", 
        message: "Failed to connect to MongoDB",
        error: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const path = searchParams.get('path');
    
    if (!path) {
      return NextResponse.json(
        { error: "Path parameter is required" },
        { status: 400 }
      );
    }

    const success = await dbService.deletePage(path);
    
    if (!success) {
      return NextResponse.json(
        { error: "Page not found or failed to delete" },
        { status: 404 }
      );
    }

    return NextResponse.json({ status: "deleted", path });
  } catch (error) {
    console.error("Error deleting page:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
