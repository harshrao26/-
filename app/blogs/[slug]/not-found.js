export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50/20 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-extrabold text-indigo-600 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Blog Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn't find the blog post you're looking for. It may
            have been moved or deleted.
          </p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="/blogs"
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            View All Blogs
          </a>
          <a
            href="/"
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-200"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
