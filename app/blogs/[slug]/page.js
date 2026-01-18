import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlogContent from "@/components/blog/BlogContent";
import BlogCard from "@/components/blog/BlogCard";
import ShareButtons from "@/components/blog/ShareButtons";

async function getBlog(slug) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/blogs/${slug}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.success ? data.data : null;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getBlog(slug);

  if (!data) {
    return {
      title: "Blog Not Found",
    };
  }

  const { blog } = data;

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.content?.substring(0, 160),
    keywords: blog.focusKeyword?.join(", "),
    authors: [{ name: blog.author || "GenForge Studio Team" }],
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription,
      images: [blog.featuredImage || blog.imageUrl || blog.image].filter(
        Boolean
      ),
      type: "article",
      publishedTime: blog.publishedAt,
      authors: [blog.author],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription,
      images: [blog.featuredImage || blog.imageUrl || blog.image].filter(
        Boolean
      ),
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const data = await getBlog(slug);

  if (!data) {
    notFound();
  }

  const { blog, relatedBlogs } = data;
  const currentUrl = `${
    process.env.NEXT_PUBLIC_BASE_URL || "https://yoursite.com"
  }/blogs/${blog.urlSlug}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
       

      {/* Blog Content Area */}
      <main className="container mx-auto">
        <BlogContent blog={blog} />

        {/* Share Section */}
        

        {/* Related Articles Section */}
        {relatedBlogs && relatedBlogs.length > 0 && (
          <section className="bg-gray-50/50 py-24 border-t border-gray-100">
            <div className="container mx-auto max-w-5xl px-4">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-2">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-3">
                    Continue <span className="text-blue-600">Reading</span>
                  </h2>
                  <p className="text-gray-500 text-sm font-medium">
                    More articles that might interest you
                  </p>
                </div>
                <Link
                  href="/blogs"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  View all posts →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedBlogs.map((relatedBlog) => (
                  <BlogCard key={relatedBlog._id} blog={relatedBlog} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
