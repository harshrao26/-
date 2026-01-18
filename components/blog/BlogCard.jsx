'use client';

import Link from 'next/link';

export default function BlogCard({ blog }) {
    const imageUrl = blog.featuredImage || blog.imageUrl || blog.image || '/placeholder-blog.jpg';
    const excerpt = blog.metaDescription || blog.content?.replace(/<[^>]*>/g, '').substring(0, 120) + '...';

    return (
        <article className="flex flex-col h-full border border-gray-300 bg-white rounded-2xl transition-all duration-300">
            <Link href={`/blogs/${blog.urlSlug}`} className="relative w-full aspect-[1.5/1] overflow-hidden rounded-2xl ">
                <img
                    src={imageUrl}
                    alt={blog.imageAlt || blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                        e.target.src = '/placeholder-blog.jpg';
                    }}
                />
            </Link>

            <div className="flex flex-col flex-1 p-4">
                <Link href={`/blogs/${blog.urlSlug}`} className="no-underline group">
                    <h3 className="text-base font-semibold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-200">
                        {blog.title}
                    </h3>
                </Link>

                <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-1">
                    {excerpt}
                </p>

                <Link
                    href={`/blogs/${blog.urlSlug}`}
                    className="text-blue-600 font-semibold text-sm underline underline-offset-4 decoration-2 hover:text-blue-700 transition-all duration-200 w-fit"
                >
                    View Full Article
                </Link>
            </div>
        </article>
    );
}
