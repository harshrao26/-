import { Loader2 } from "lucide-react";

export default function BlogDetailLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50/20">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        {/* Back button skeleton */}
        <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-8"></div>

        <article className="max-w-4xl mx-auto">
          {/* Header skeleton */}
          <div className="mb-10 space-y-4">
            <div className="h-8 w-24 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="h-12 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4"></div>
            <div className="flex gap-4 pt-5">
              <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>

          {/* Image skeleton */}
          <div className="h-96 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl animate-pulse mb-10"></div>

          {/* Content skeleton */}
          <div className="space-y-4 mb-10">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="h-4 bg-gray-200 rounded animate-pulse"
                style={{ width: `${Math.random() * 30 + 70}%` }}
              ></div>
            ))}
          </div>

          {/* Centered Loader */}
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-12 h-12 animate-spin text-indigo-600" />
          </div>
        </article>
      </div>
    </div>
  );
}
