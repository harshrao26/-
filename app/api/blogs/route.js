import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Blog from "@/app/models/Blog";

export async function GET(request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "12");
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    const sort = searchParams.get("sort") || "-publishedAt";

    // Build query
    const query = { status: "visible" };

    if (category && category !== "all") {
      query.category = category;
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } },
        { metaDescription: { $regex: search, $options: "i" } },
      ];
    }

    // Execute query
    const skip = (page - 1) * limit;
    const [blogs, total, categories] = await Promise.all([
      Blog.find(query)
        .select(
          "title urlSlug metaDescription featuredImage imageUrl image category author publishedAt readability wordCount"
        )
        .sort(sort)
        .skip(skip)
        .limit(limit)
        .lean(),
      Blog.countDocuments(query),
      Blog.distinct("category", { status: "visible" }),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        blogs,
        pagination: {
          currentPage: page,
          totalPages: Math.ceil(total / limit),
          totalBlogs: total,
          hasMore: skip + blogs.length < total,
        },
        categories: categories.filter(Boolean).sort(),
      },
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
