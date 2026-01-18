import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Blog from "@/app/models/Blog";

export async function GET(request, { params }) {
  try {
    await dbConnect();

    const { slug } = await params;

    // Find blog by slug
    const blog = await Blog.findOne({
      urlSlug: slug,
      status: "visible",
    }).lean();

    if (!blog) {
      return NextResponse.json(
        { success: false, error: "Blog not found" },
        { status: 404 }
      );
    }

    // Get related blogs
    const relatedBlogs = await Blog.find({
      _id: { $ne: blog._id },
      status: "visible",
      $or: [
        { category: blog.category },
        { urlSlug: { $in: blog.relatedBlog || [] } },
      ],
    })
      .select(
        "title urlSlug metaDescription featuredImage imageUrl image category publishedAt"
      )
      .limit(3)
      .lean();

    return NextResponse.json({
      success: true,
      data: {
        blog,
        relatedBlogs,
      },
    });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}
