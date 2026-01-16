'use client';

export default function BlogFilters({ 
  categories, 
  selectedCategory, 
  onCategoryChange
}) {
  return (
    <div className="w-full mb-12">
      <div className="flex flex-col items-center gap-6 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Recent Blog Post
        </h2>
        
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <button
            onClick={() => onCategoryChange('all')}
            className={`text-base font-semibold transition-all duration-200 cursor-pointer outline-none ${
              selectedCategory === 'all'
                ? 'text-blue-600'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            All Article
          </button>
          
          {categories.slice(0, 5).map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`text-base font-semibold transition-all duration-200 cursor-pointer outline-none whitespace-nowrap ${
                selectedCategory === category
                  ? 'text-blue-600'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-100"></div>
    </div>
  );
}
