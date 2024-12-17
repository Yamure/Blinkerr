import { useDispatch, useSelector } from "react-redux";
import { selectUI, setActiveCategory } from "@/store/uiSlice";
import LinkCard from "@components/LinkCard";
import Navigation from "@components/Navigation";
import { collections } from "@data/collections";
import { Experiments, LookingAhead, Rogue, NewBeginnings, Whoa } from "@assets";
import ScrollToTop from "@components/ScrollToTop";

// Category colors mapping
const categoryColors = {
  all: "#18181B", // Zinc-900 for default
  essentials: "#F46B6C",
  development: "#4ECDC5",
  design: "#F7AA80",
  productivity: "#F9E780",
  resources: "#292F37",
};

const Collections = () => {
  const dispatch = useDispatch();
  const { searchQuery, activeCategory } = useSelector(selectUI);

  // Filter links based on search query and active category
  const filteredLinks = Object.entries(collections)
    .flatMap(([category, items]) =>
      activeCategory === "all" || activeCategory === category ? items : []
    )
    .filter(
      (link) =>
        !searchQuery ||
        link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        link.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="min-h-screen grainy bg-custom-bg relative">
      <Navigation currentPage="collections" />
      <ScrollToTop />

      {/* Decorative SVGs - moved to lower z-index */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <img
          src={Rogue}
          alt="Rogue illustration"
          className="absolute top-32 left-12 w-16 h-16 opacity-30"
        />
        <img
          src={Whoa}
          alt="Whoa illustration"
          className="absolute top-48 right-16 w-20 h-20 opacity-30"
        />
        <img
          src={Experiments}
          alt="Experiments illustration"
          className="absolute bottom-8 right-8 w-24 h-24 opacity-50"
        />
        <img
          src={LookingAhead}
          alt="Looking Ahead illustration"
          className="absolute bottom-8 left-8 w-24 h-24 opacity-50"
        />
        <img
          src={NewBeginnings}
          alt="New Beginnings illustration"
          className="absolute top-1/2 left-12 w-20 h-20 opacity-30"
        />
      </div>

      {/* Background overlay for small screens */}
      <div className="md:hidden fixed inset-0 bg-white/30 backdrop-blur-[2px] z-10" />

      <main className="relative z-20 max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-6 mb-8">
          {/* Category Filters */}
          <div className="flex items-center space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-2 p-1 bg-zinc-100/50 backdrop-blur-sm rounded-lg">
              <button
                onClick={() => dispatch(setActiveCategory("all"))}
                className={`px-3 py-1.5 text-sm whitespace-nowrap transition-all rounded-md ${
                  activeCategory === "all"
                    ? "bg-white shadow-sm font-medium"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
                style={{
                  color: activeCategory === "all" ? categoryColors.all : undefined,
                }}
              >
                All
              </button>
              {Object.keys(collections).map((category) => (
                <button
                  key={category}
                  onClick={() => dispatch(setActiveCategory(category))}
                  className={`px-3 py-1.5 text-sm capitalize whitespace-nowrap transition-all rounded-md flex items-center gap-2 ${
                    activeCategory === category
                      ? "bg-white shadow-sm font-medium"
                      : "text-zinc-500 hover:text-zinc-900"
                  }`}
                  style={{
                    color: activeCategory === category ? categoryColors[category] : undefined,
                  }}
                >
                  {category}
                  <span
                    className="text-xs px-1.5 py-0.5 rounded-full"
                    style={{
                      backgroundColor: activeCategory === category
                        ? `${categoryColors[category]}15`
                        : 'rgb(244 244 245)' // zinc-100
                    }}
                  >
                    {collections[category].length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLinks.map((item) => (
            <LinkCard key={item.id} link={item} />
          ))}
          {filteredLinks.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-sm text-zinc-500">
                No results found for "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Collections;
