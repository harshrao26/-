import { Loader2 } from "lucide-react";

export default function BlogsLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Skeleton */}
      <section className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center flex flex-col items-center">
          <div className="h-6 w-32 bg-gray-100 rounded-md mb-6 animate-pulse"></div>
          <div className="h-16 w-3/4 bg-gray-100 rounded-xl mb-6 animate-pulse"></div>
          <div className="h-6 w-1/2 bg-gray-100 rounded-lg mb-10 animate-pulse"></div>
          <div className="h-14 w-full max-w-xl bg-gray-100 rounded-full animate-pulse"></div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        {/* Filters Skeleton */}
        <div className="flex flex-col items-center gap-6 mb-12">
          <div className="h-10 w-48 bg-gray-100 rounded-lg animate-pulse"></div>
          <div className="flex gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-6 w-20 bg-gray-100 rounded animate-pulse"
              ></div>
            ))}
          </div>
        </div>

        {/* Blog Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex flex-col">
              <div className="aspect-[1.5/1] bg-gray-100 rounded-2xl mb-6 animate-pulse"></div>
              <div className="h-6 bg-gray-100 rounded w-3/4 mb-4 animate-pulse"></div>
              <div className="h-4 bg-gray-100 rounded w-full mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-100 rounded w-1/2 animate-pulse"></div>
              <div className="h-4 w-24 bg-gray-100 rounded mt-6 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
