"use client";

import { useState, useEffect } from "react";
import { Loader2, TrendingUp } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";
import BlogFilters from "@/components/blog/BlogFilters";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    hasMore: false,
  });

  useEffect(() => {
    fetchBlogs(1);
  }, [selectedCategory]);

  const fetchBlogs = async (page = 1) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: "12",
      });

      if (selectedCategory && selectedCategory !== "all") {
        params.append("category", selectedCategory);
      }

      if (searchQuery) {
        params.append("search", searchQuery);
      }

      const response = await fetch(`/api/blogs?${params}`);
      const data = await response.json();

      if (data.success) {
        setBlogs(data.data.blogs);
        setCategories(data.data.categories);
        setPagination(data.data.pagination);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchBlogs(1);
  };

  const handleLoadMore = () => {
    if (pagination.hasMore) {
      fetchBlogs(pagination.currentPage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 bg-gradient-to-r from-orange-500 to-orange-500 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block bg-yellow-200 text- px-4 py-1 rounded-md text-xs font-semibold mb-6">
            <TrendingUp className="inline-block mr-2" />
            Blogs & Articles
          </div>

          <h1 className="text-4xl bg-white py-8 rounded-full md:text-6xl font-semibold text-gray-900 mb-8 tracking-tighter leading-[0.85] animate-in fade-in slide-in-from-bottom duration-700">
            Unfold <br />
            <span className="bg-clip-text  text-transparent bg-gradient-to-r from-orange-500 via-orange-600 to-orange-400 underline decoration-orange-200 decoration-8 underline-offset-[12px]">
              New Realities.
            </span>
          </h1>

          <p className="text-gray-100 text-lg md:text-xl max-w-2xl mx-auto mb-14 font-medium leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000">
            Synthesizing{" "}
            <span className="text-gray-900 font-bold border-b-4 border-orange-300">
              innovation
            </span>{" "}
            with{" "}
            <span className="text-gray-900 font-bold border-b-4 border-blue-200">
              strategic foresight
            </span>{" "}
            to navigate the digital horizon.
          </p>

          <form
            onSubmit={handleSearch}
            className="max-w-2xl mx-auto relative group animate-in fade-in zoom-in duration-1000"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 via-blue-200 to-orange-400 rounded-full blur-2xl opacity-10 group-hover:opacity-30 transition duration-1000 group-hover:duration-300"></div>
            <div className="relative flex items-center bg-white/90 backdrop-blur-xl border border-white rounded-full p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] ring-1 ring-black/5 hover:ring-orange-200 transition-all duration-300">
              <input
                type="text"
                placeholder="What spark of knowledge are you seeking?"
                className="flex-1 px-10 bg-transparent text-gray-900 placeholder-gray-400 outline-none text-lg font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="px-12 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-orange-600 transition-all duration-500 shadow-xl transform active:scale-95 group-hover:shadow-orange-200"
              >
                Explore
              </button>
            </div>
          </form>
        </div>

        {/* Minimal Bottom Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-50"></div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto max-w-6xl px-4 py-16">
        

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 animate-pulse">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col">
                <div className="aspect-[1.5/1] bg-gray-50 rounded-3xl mb-8"></div>
                <div className="h-8 bg-gray-50 rounded-lg w-3/4 mb-5"></div>
                <div className="h-4 bg-gray-50 rounded-md w-full mb-3"></div>
                <div className="h-4 bg-gray-50 rounded-md w-2/3"></div>
              </div>
            ))}
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-32 bg-gray-50/50 rounded-[40px] border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
              Focusing the lens...
            </h3>
            <p className="text-gray-500 text-lg">
              No matches found for this specific path. Try exploring another
              reality.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-8 px-8 py-3 bg-gray-900 text-white font-bold rounded-full hover:bg-orange-500 transition-all"
            >
              Reset Perspective
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        )}

        {/* Load More Action */}
        {pagination.hasMore && (
          <div className="flex justify-center mt-32">
            <button
              onClick={handleLoadMore}
              className="group relative px-12 py-4 bg-white text-gray-900 font-semibold rounded-full border-2 border-gray-900 overflow-hidden transition-all hover:text-white"
            >
              <div className="absolute inset-0 w-0 bg-gray-900 transition-all duration-500 group-hover:w-full -z-10"></div>
              <span className="relative z-10 uppercase tracking-widest text-sm">
                Expand Horizon
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
