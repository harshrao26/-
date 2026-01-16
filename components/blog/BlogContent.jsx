'use client';

import { Calendar, User, Clock, Tag } from 'lucide-react';

export default function BlogContent({ blog }) {
    const imageUrl = blog.featuredImage || blog.imageUrl || blog.image;
    const publishDate = blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }) : '';

    return (
        <article className="max-w-4xl mx-auto bg-white">
            {/* Header */}
            <header className="mb-10">
                {blog.category && (
                    <div className="inline-block bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-5">
                        {blog.category}
                    </div>
                )}

                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                    {blog.title}
                </h1>

                {blog.metaDescription && (
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                        {blog.metaDescription}
                    </p>
                )}

                <div className="flex flex-wrap gap-6 pt-5 border-t-2 border-gray-100">
                    {blog.author && (
                        <div className="flex items-center gap-2 text-gray-600">
                            <User size={18} className="text-indigo-500" />
                            <span>{blog.author}</span>
                        </div>
                    )}

                    {publishDate && (
                        <div className="flex items-center gap-2 text-gray-600">
                            <Calendar size={18} className="text-indigo-500" />
                            <span>{publishDate}</span>
                        </div>
                    )}

                    {blog.wordCount && (
                        <div className="flex items-center gap-2 text-gray-600">
                            <Clock size={18} className="text-indigo-500" />
                            <span>{Math.ceil(blog.wordCount / 200)} min read</span>
                        </div>
                    )}
                </div>
            </header>

            {/* Featured Image */}
            {imageUrl && (
                <div className="mb-10 rounded-2xl overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={blog.imageAlt || blog.title}
                        className="w-full h-auto block"
                    />
                    {blog.imagePhotographer && (
                        <p className="text-sm text-gray-500 mt-2 italic">
                            Photo by{' '}
                            {blog.imagePhotographerUrl ? (
                                <a
                                    href={blog.imagePhotographerUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline"
                                >
                                    {blog.imagePhotographer}
                                </a>
                            ) : (
                                blog.imagePhotographer
                            )}
                            {blog.imageSource && ` on ${blog.imageSource}`}
                        </p>
                    )}
                </div>
            )}

            {/* Content */}
            <div
                className="prose prose-lg prose-indigo max-w-none mb-10
          prose-headings:font-bold prose-headings:text-gray-900
          prose-p:text-gray-700 prose-p:leading-relaxed
          prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-gray-900 prose-strong:font-semibold
          prose-ul:list-disc prose-ol:list-decimal
          prose-img:rounded-xl prose-img:shadow-md
          prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-gray-900 prose-pre:text-gray-100"
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* FAQs */}
            {blog.faqs && blog.faqs.length > 0 && (
                <section className="mt-16 p-10 bg-gray-50 rounded-2xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                        Frequently Asked Questions
                    </h2>
                    <div className="flex flex-col gap-6">
                        {blog.faqs.map((faq, index) => (
                            <div key={index} className="p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-200">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {faq.question}
                                </h3>
                                <p className="text-base text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Keywords */}
            {blog.focusKeyword && blog.focusKeyword.length > 0 && (
                <div className="flex items-center gap-3 mt-10 p-5 bg-gray-50 rounded-xl">
                    <Tag size={18} className="text-indigo-500 flex-shrink-0" />
                    <div className="flex flex-wrap gap-2">
                        {blog.focusKeyword.map((keyword, index) => (
                            <span
                                key={index}
                                className="px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-2xl text-sm font-medium"
                            >
                                {keyword}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </article>
    );
}
