import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
} from "lucide-react";
import BlogContent from "@/components/blog/BlogContent";
import BlogCard from "@/components/blog/BlogCard";

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
  const data = await getBlog(params.slug);

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
  const data = await getBlog(params.slug);

  if (!data) {
    notFound();
  }

  const { blog, relatedBlogs } = data;
  const currentUrl = `${
    process.env.NEXT_PUBLIC_BASE_URL || "https://yoursite.com"
  }/blogs/${blog.urlSlug}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50/20">
      {/* Back Button */}
      <div className="container mx-auto max-w-6xl px-4 pt-8">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Back to Blogs
        </Link>
      </div>

      {/* Blog Content */}
      <main className="container mx-auto max-w-6xl px-4 py-8">
        <BlogContent blog={blog} />

        {/* Share Section */}
        <div className="max-w-4xl mx-auto mt-12 p-6 bg-white rounded-2xl shadow-md border border-gray-100">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Share2 className="w-5 h-5 text-indigo-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Share this article
              </h3>
            </div>

            <div className="flex gap-3">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  currentUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  currentUrl
                )}&text=${encodeURIComponent(blog.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>

              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                  currentUrl
                )}&title=${encodeURIComponent(blog.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(currentUrl);
                  alert("Link copied to clipboard!");
                }}
                className="p-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
                aria-label="Copy link"
              >
                <LinkIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Related Blogs */}
        {relatedBlogs && relatedBlogs.length > 0 && (
          <section className="mt-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Related Articles
              </h2>
              <p className="text-gray-600 text-lg">
                Continue exploring with these related posts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <BlogCard key={relatedBlog._id} blog={relatedBlog} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
