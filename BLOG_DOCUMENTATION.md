# Blog System Documentation

## Overview

A full-featured blog system built with Next.js 16, MongoDB, and Tailwind CSS. The system includes blog listing, detailed blog pages, filtering, search, and SEO optimization.

## Features

### ✨ Core Features

- **Blog Listing Page** (`/blogs`)

  - Grid layout with responsive cards
  - Category filtering
  - Search functionality
  - Load more pagination
  - Beautiful gradients and animations

- **Blog Detail Page** (`/blogs/[slug]`)
  - Full blog content with rich typography
  - SEO metadata (OpenGraph, Twitter Cards)
  - Social sharing buttons
  - Related articles
  - FAQ section support
  - Keyword tags

### 🎨 Design Features

- Modern, premium UI with Tailwind CSS
- Gradient backgrounds
- Hover animations and transitions
- Skeleton loading states
- Custom 404 page
- Responsive design (mobile, tablet, desktop)

### 🔧 Technical Features

- Server-side rendering (SSR)
- MongoDB integration
- RESTful API endpoints
- Image optimization
- Error handling
- Type-safe components

## File Structure

```
app/
├── api/
│   └── blogs/
│       ├── route.js                 # GET /api/blogs (listing)
│       └── [slug]/
│           └── route.js             # GET /api/blogs/:slug (detail)
├── blogs/
│   ├── page.js                      # Blog listing page
│   ├── layout.js                    # Blog layout wrapper
│   ├── loading.js                   # Loading state
│   └── [slug]/
│       ├── page.js                  # Blog detail page
│       ├── loading.js               # Detail loading state
│       └── not-found.js             # Custom 404
├── models/
│   └── Blog.js                      # MongoDB Blog model
└── lib/
    └── db.js                        # Database connection

components/
└── blog/
    ├── BlogCard.jsx                 # Blog card component
    ├── BlogFilters.jsx              # Search & filters
    └── BlogContent.jsx              # Blog content display
```

## API Endpoints

### GET /api/blogs

Fetch blogs with filtering and pagination.

**Query Parameters:**

- `page` (number): Page number (default: 1)
- `limit` (number): Items per page (default: 12)
- `category` (string): Filter by category
- `search` (string): Search in title/content
- `sort` (string): Sort order (default: '-publishedAt')

**Response:**

```json
{
  "success": true,
  "data": {
    "blogs": [...],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalBlogs": 50,
      "hasMore": true
    },
    "categories": ["Tech", "Design", ...]
  }
}
```

### GET /api/blogs/[slug]

Fetch a single blog by slug.

**Response:**

```json
{
  "success": true,
  "data": {
    "blog": {...},
    "relatedBlogs": [...]
  }
}
```

## Database Schema

The Blog model includes:

- **Core Content**: title, content, urlSlug
- **SEO**: metaTitle, metaDescription, canonicalUrl, focusKeyword
- **Categorization**: category, subCategory
- **Images**: featuredImage, imageUrl, imageAlt
- **FAQs**: Array of question/answer pairs
- **Metadata**: author, publishedAt, wordCount, status
- **Relationships**: relatedBlog, connectedServices

## Usage

### Adding a New Blog

1. **Via CMS/API**: Post to your CMS endpoint
2. **Direct MongoDB**: Insert into `blogs` collection
3. **Required fields**: title, content, urlSlug, status: 'visible'

### Customization

#### Colors

Update `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: '#6366f1',  // Change this
}
```

#### Layout

- Grid columns: Edit `grid-cols-*` in `/app/blogs/page.js`
- Card design: Modify `/components/blog/BlogCard.jsx`

#### SEO

Update metadata in `/app/blogs/[slug]/page.js`:

```javascript
export async function generateMetadata({ params }) {
  // Customize metadata here
}
```

## Environment Variables

Create a `.env` file:

```env
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_BASE_URL=https://yoursite.com
```

## Social Sharing

The blog detail page includes pre-configured sharing buttons for:

- Facebook
- Twitter/X
- LinkedIn
- Copy Link

## Typography & Content Styling

Blog content uses `@tailwindcss/typography` plugin with custom prose styling:

- Headings: Bold, custom colors
- Links: Indigo color with hover effects
- Images: Rounded corners, shadows
- Code blocks: Dark theme
- Lists: Styled bullets and numbers

## Performance Optimizations

1. **Caching**: Database connections are cached globally
2. **Pagination**: Load blogs in batches
3. **Image Loading**: Native Next.js image optimization
4. **SSR**: Server-side rendering for better SEO
5. **Loading States**: Skeleton loaders for better UX

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Alt text for images
- High contrast ratios

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Dependencies

```json
{
  "mongoose": "^X.X.X",
  "@tailwindcss/typography": "^X.X.X",
  "lucide-react": "^X.X.X",
  "next": "16.0.7"
}
```

## Future Enhancements

- [ ] Comments system
- [ ] Like/bookmark functionality
- [ ] Author profiles
- [ ] Newsletter subscription
- [ ] RSS feed
- [ ] Reading progress bar
- [ ] Table of contents
- [ ] Code syntax highlighting
- [ ] Image zoom/lightbox
- [ ] Print-friendly version

## Troubleshooting

### No blogs appearing

1. Check MongoDB connection
2. Verify `status: 'visible'` in database
3. Check API response in DevTools

### Images not loading

1. Verify image URLs are accessible
2. Check CORS settings
3. Use placeholder images as fallback

### Search not working

1. Check MongoDB text indexes
2. Verify search query format
3. Review API logs

## Support

For issues or questions, check:

- MongoDB connection status
- API endpoint responses
- Browser console errors
- Server logs

---

**Built with ❤️ using Next.js 16, MongoDB, and Tailwind CSS**
