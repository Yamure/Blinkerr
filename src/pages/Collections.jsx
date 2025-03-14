import { useDispatch, useSelector } from "react-redux";
import { selectUI, setActiveCategory } from "@/store/uiSlice";
import LinkCard from "@components/LinkCard";
import Navigation from "@components/Navigation";
import { collections } from "@data/collections";
import ScrollToTop from "@components/ScrollToTop";
import {
  CollectionsIllustration,
  CollectionsMobileIllustration,
} from "@components/illustrations";
import { useState } from "react";

// Category colors mapping
const categoryColors = {
  all: "#18181B", // Zinc-900 for default
  Browsers: "#8BC34A",
  Essentials: "#F46B6C",
  Development: "#4ECDC5",
  Design: "#F7AA80",
  Productivity: "#34A85A",
  Resources: "#292F37",
  "Project Management": "#F7B4B4",
  Documentation: "#3498db",
  "Note Taking": "#FFC107",
  Terminal: "#3498db",
  Inspiration: "#FFA07A",
  AI: "#9C27B0", // Adding AI category with a purple color
};

const Collections = () => {
  const dispatch = useDispatch();
  const { searchQuery, activeCategory } = useSelector(selectUI);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

  // Filter links based on search query and active category with safety checks
  const filteredLinks = Object.entries(collections)
    .flatMap(([category, items]) =>
      activeCategory === "all" || activeCategory === category ? items : [],
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
    <div className="min-h-screen grainy bg-custom-bg relative">
      <Navigation currentPage="collections" />
      <ScrollToTop />
      <CollectionsMobileIllustration />
      <CollectionsIllustration />

      <main className="max-w-7xl mx-auto px-6 py-8 relative z-10 h-screen overflow-y-auto md:h-auto md:overflow-visible">
        <div className="space-y-6 mb-8">
          {/* Category Dropdown */}
          <div className="relative z-50">
            <button
              onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-xs rounded-lg hover:bg-white/60 transition-all"
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
                className={`w-4 h-4 transition-transform ${
                  isCategoryMenuOpen ? "rotate-180" : ""
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
              className={`absolute left-0 mt-2 w-56 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all z-50 ${
                isCategoryMenuOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <div className="py-1 max-h-[60vh] overflow-y-auto">
                <button
                  onClick={() => {
                    dispatch(setActiveCategory("all"));
                    setIsCategoryMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-heading flex items-center justify-between">
                    All
                    <span className="text-sm px-1.5 py-0.5 rounded-full bg-zinc-100">
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
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-heading flex items-center justify-between">
                      {category}
                      <span
                        className="text-sm px-1.5 py-0.5 rounded-full"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLinks
            .filter((link) => link && link.title && link.id) // Extra safety check
            .map((item) => (
              <LinkCard key={item.id} link={item} />
            ))}
          {filteredLinks.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-sm font-body text-text-500">
                No results found for &quot;{searchQuery}&quot;
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Collections;
