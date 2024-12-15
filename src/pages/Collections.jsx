import { useState } from "react";
import LinkCard from "../components/LinkCard";
import { collections } from "../data/collections";
import { Experiments, LookingAhead } from "../assets";

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="min-h-screen bg-zinc-50 relative">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-zinc-200 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-6 overflow-x-auto py-4">
            <button
              onClick={() => setActiveCategory("all")}
              className={`text-sm transition-colors ${
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
                className={`text-sm capitalize transition-colors ${
                  activeCategory === category
                    ? "text-zinc-900 font-medium"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(collections).map(([category, items]) =>
            activeCategory === "all" || activeCategory === category
              ? items.map((item) => <LinkCard key={item.id} link={item} />)
              : null
          )}
        </div>
      </main>

      {/* Corner Illustrations */}
      <img
        src={Experiments}
        alt="Experiments illustration"
        className="fixed bottom-8 right-8 w-24 h-24 opacity-50 pointer-events-none"
      />
      <img
        src={LookingAhead}
        alt="Looking Ahead illustration"
        className="fixed bottom-8 left-8 w-24 h-24 opacity-50 pointer-events-none"
      />
    </div>
  );
};

export default Collections;
