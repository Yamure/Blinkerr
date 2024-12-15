import { useState } from "react";
import LinkCard from "@components/LinkCard";
import Navigation from "@components/Navigation";
import { collections } from "@data/collections";
import { Experiments, LookingAhead, Rogue, NewBeginnings, Whoa } from "@assets";

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="min-h-screen grainy bg-[#FAFAF9] relative">
      <Navigation currentPage="collections" />

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

      {/* Main Content - with higher z-index */}
      <main className="relative z-20 max-w-7xl mx-auto px-6 py-8">
        {/* Category Filters */}
        <div className="flex items-center space-x-4 mb-8 overflow-x-auto pb-4">
          <button
            onClick={() => setActiveCategory("all")}
            className={`text-sm whitespace-nowrap transition-colors ${
              activeCategory === "all"
                ? "text-zinc-900 font-medium"
                : "text-zinc-500 hover:text-zinc-900"
            }`}
          >
            All
          </button>
          {Object.keys(collections).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm capitalize whitespace-nowrap transition-colors ${
                activeCategory === category
                  ? "text-zinc-900 font-medium"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(collections).map(([category, items]) =>
            activeCategory === "all" || activeCategory === category
              ? items.map((item) => <LinkCard key={item.id} link={item} />)
              : null
          )}
        </div>
      </main>
    </div>
  );
};

export default Collections;
