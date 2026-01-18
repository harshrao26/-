'use client';

import { Calendar, User, Clock, Tag } from 'lucide-react';

export default function BlogContent({ blog }) {
  const imageUrl = blog.featuredImage || blog.imageUrl || blog.image;

  // Format for "February 19, 2024" style
  const formattedDate = blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }) : '';

  return (
    <article className="max-w-7xl mx-auto px-4 p bg-white">
      {/* Header Section */}
      

      {/* Featured Image */}
      {imageUrl && (
        <div className="mb-12 relative -mx-4 md:mx-0">
          <div className="aspect-[21/9] overflow-hidden  bg-gray-50 border border-gray-100">
            <img
              src={imageUrl}
              alt={blog.imageAlt || blog.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>



          <div className='bg-gradient-to-b from-black/100 to-transparent via-transparent absolute  top-0 left-0 w-full h-full z-0'>
            
          </div>
        </div>



      )}

      {/* Content Area */}
      <div className="max-w-7xl mx-auto">
        <div
         className="
                      prose prose-lg max-w-none
                      
                      /* Headings */
                      [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:mb-6 [&_h1]:mt-10 [&_h1]:text-gray-900 [&_h1]:leading-tight
                      [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mb-5 [&_h2]:mt-10 [&_h2]:text-gray-900 [&_h2]:leading-snug [&_h2]:border-b [&_h2]:border-gray-200 [&_h2]:pb-3
                      [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mb-4 [&_h3]:mt-8 [&_h3]:text-gray-800 [&_h3]:leading-snug
                      [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:mb-3 [&_h4]:mt-6 [&_h4]:text-gray-800
                      [&_h5]:text-lg [&_h5]:font-semibold [&_h5]:mb-3 [&_h5]:mt-5 [&_h5]:text-gray-700
                      [&_h6]:text-base [&_h6]:font-semibold [&_h6]:mb-2 [&_h6]:mt-4 [&_h6]:text-gray-700
                      
                      /* Paragraphs */
                      [&_p]:text-base [&_p]:leading-relaxed [&_p]:mb-5 [&_p]:text-gray-700 [&_p]:tracking-wide
                      
                      /* Lists */
                      [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-6 [&_ul]:space-y-2 [&_ul]:text-gray-700
                      [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:mb-6 [&_ol]:space-y-2 [&_ol]:text-gray-700
                      [&_li]:text-base [&_li]:leading-relaxed [&_li]:pl-2
                      [&_li>ul]:mt-2 [&_li>ol]:mt-2
                      
                      /* Links */
                      [&_a]:text-blue-600 [&_a]:underline [&_a]:decoration-2 [&_a]:underline-offset-2 
                      [&_a]:transition-colors [&_a]:duration-200 hover:[&_a]:text-blue-800 hover:[&_a]:decoration-blue-800
                      
                      /* Images */
                      [&_img]:rounded-xl [&_img]:shadow-lg [&_img]:my-8 [&_img]:w-full [&_img]:h-auto
                      
                      /* Blockquotes */
                      [&_blockquote]:border-l-4 [&_blockquote]:border-purple-500 [&_blockquote]:pl-6 [&_blockquote]:pr-4
                      [&_blockquote]:py-4 [&_blockquote]:my-6 [&_blockquote]:bg-purple-50 [&_blockquote]:rounded-r-lg
                      [&_blockquote]:italic [&_blockquote]:text-gray-700 [&_blockquote]:text-lg
                      
                      /* Code */
                      [&_code]:bg-gray-100 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm 
                      [&_code]:text-purple-700 [&_code]:font-mono
                      [&_pre]:bg-gray-900 [&_pre]:text-gray-100 [&_pre]:p-6 [&_pre]:rounded-xl 
                      [&_pre]:overflow-x-auto [&_pre]:my-6 [&_pre]:shadow-lg
                      [&_pre_code]:bg-transparent [&_pre_code]:text-gray-100 [&_pre_code]:p-0
                      
                      /* Tables */
                      [&_table]:w-full [&_table]:border-collapse [&_table]:my-6 [&_table]:shadow-md [&_table]:rounded-lg [&_table]:overflow-hidden
                      [&_th]:bg-gray-900 [&_th]:text-white [&_th]:font-semibold [&_th]:px-6 [&_th]:py-4 [&_th]:text-left
                      [&_td]:border-t [&_td]:border-gray-200 [&_td]:px-6 [&_td]:py-4 [&_td]:text-gray-700
                      [&_tr:nth-child(even)]:bg-gray-50
                      
                      /* Strong & Em */
                      [&_strong]:font-bold [&_strong]:text-gray-900
                      [&_em]:italic [&_em]:text-gray-800
                      
                      /* Horizontal Rule */
                      [&_hr]:my-10 [&_hr]:border-0 [&_hr]:h-px [&_hr]:bg-gradient-to-r [&_hr]:from-transparent [&_hr]:via-gray-300 [&_hr]:to-transparent
                    "
         
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Supplemental Sections */}
        {blog.faqs && blog.faqs.length > 0 && (
          <section className="mt-20 pt-10 border-t border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {blog.faqs.map((faq, index) => (
                <div key={index} className="group">
                  <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {faq.question}
                  </h3>
                  <div className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* {blog.focusKeyword && blog.focusKeyword.length > 0 && (
          <div className="mt-20 pt-8 border-t border-gray-100 flex flex-wrap gap-2">
            {blog.focusKeyword.map((keyword, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-50 text-gray-500 text-xs font-medium rounded-full border border-gray-100 uppercase tracking-wider"
              >
                #{keyword}
              </span>
            ))}
          </div>
        )} */}
      </div>
    </article>
  );
}
