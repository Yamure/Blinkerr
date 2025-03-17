import LinkCard from '@components/LinkCard';
import Navigation from '@components/Navigation';
import ScrollToTop from '@components/ScrollToTop';
import {
  CollectionsIllustration,
  CollectionsMobileIllustration,
} from '@components/illustrations';
import { collections } from '@data/collections';
import { selectUI, setActiveCategory } from '@slices/ui';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Category colors mapping
const categoryColors = {
  all: '#18181B', // Zinc-900 for default
  Browsers: '#8BC34A',
  Essentials: '#F46B6C',
  Development: '#4ECDC5',
  Design: '#F7AA80',
  Productivity: '#34A85A',
  Resources: '#292F37',
  'Project Management': '#F7B4B4',
  Documentation: '#3498db',
  'Note Taking': '#FFC107',
  Terminal: '#3498db',
  Inspiration: '#FFA07A',
  AI: '#9C27B0', // Adding AI category with a purple color
};

const Collection = () => {
  const dispatch = useDispatch();
  const { searchQuery, activeCategory } = useSelector(selectUI);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

  // Filter links based on search query and active category with safety checks
  const filteredLinks = Object.entries(collections)
    .flatMap(([category, items]) =>
      activeCategory === 'all' || activeCategory === category ? items : [],
    )
    .filter((link) => {
      // First verify the link has all required properties
      if (!link || !link.title || !link.id) return false;

      if (!searchQuery) return true;

      const searchLower = searchQuery.toLowerCase();
      const titleMatch = link.title.toLowerCase().includes(searchLower);
      const categoryMatch = link.category
        ? link.category.toLowerCase().includes(searchLower)
        : false;

      return titleMatch || categoryMatch;
    });

  return (
    <div className="grainy bg-custom-bg relative min-h-screen">
      <Navigation currentPage="collections" />
      <ScrollToTop />
      <CollectionsMobileIllustration />
      <CollectionsIllustration />

      <main className="relative z-10 mx-auto h-screen max-w-7xl overflow-y-auto px-6 py-8 md:h-auto md:overflow-visible">
        <div className="mb-8 space-y-6">
          {/* Category Dropdown */}
          <div className="relative z-50">
            <button
              onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
              className="flex items-center gap-2 rounded-lg bg-white/50 px-4 py-2 backdrop-blur-xs transition-all hover:bg-white/60"
            >
              <span
                className="font-heading"
                style={{
                  color: categoryColors[activeCategory],
                }}
              >
                {activeCategory.charAt(0).toUpperCase() +
                  activeCategory.slice(1)}
              </span>
              <svg
                className={`h-4 w-4 transition-transform ${
                  isCategoryMenuOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div
              className={`ring-opacity-5 absolute left-0 z-50 mt-2 w-56 rounded-lg bg-white shadow-lg ring-1 ring-black transition-all ${
                isCategoryMenuOpen
                  ? 'visible translate-y-0 opacity-100'
                  : 'invisible -translate-y-2 opacity-0'
              }`}
            >
              <div className="max-h-[60vh] overflow-y-auto py-1">
                <button
                  onClick={() => {
                    dispatch(setActiveCategory('all'));
                    setIsCategoryMenuOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left transition-colors hover:bg-gray-100"
                >
                  <span className="font-heading flex items-center justify-between">
                    All
                    <span className="rounded-full bg-zinc-100 px-1.5 py-0.5 text-sm">
                      {Object.values(collections).flat().length}
                    </span>
                  </span>
                </button>
                {Object.keys(collections).map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      dispatch(setActiveCategory(category));
                      setIsCategoryMenuOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left transition-colors hover:bg-gray-100"
                  >
                    <span className="font-heading flex items-center justify-between">
                      {category}
                      <span
                        className="rounded-full px-1.5 py-0.5 text-sm"
                        style={{
                          backgroundColor: `${categoryColors[category]}15`,
                        }}
                      >
                        {collections[category].length}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredLinks
            .filter((link) => link && link.title && link.id) // Extra safety check
            .map((item) => (
              <LinkCard key={item.id} link={item} />
            ))}
          {filteredLinks.length === 0 && (
            <div className="col-span-full py-12 text-center">
              <p className="font-body text-text-500 text-sm">
                No results found for &quot;{searchQuery}&quot;
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Collection;
