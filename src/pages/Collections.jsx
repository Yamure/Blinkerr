import { useState } from "react";
import { Link } from "react-router-dom";
import LinkCard from "@components/LinkCard";
import { collections } from "@data/collections";
import { Experiments, LookingAhead, Rogue, NewBeginnings, Whoa } from "@assets";

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="min-h-screen bg-zinc-50 relative">
      {/* Header */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Link
                to="/"
                className="text-sm font-medium hover:text-zinc-900 transition-colors no-underline"
              >
                <span className="text-zinc-900">ScientificDevs</span>
                <span className="text-blue-500">/F</span>
              </Link>
              <div className="h-4 mx-4 w-px bg-zinc-200" />
              <div className="flex items-center space-x-4">
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
          </div>
        </div>
      </nav>

      {/* Decorative SVGs */}
      <img
        src={Rogue}
        alt="Rogue illustration"
        className="absolute top-32 left-12 w-16 h-16 opacity-30 pointer-events-none"
      />
      <img
        src={Whoa}
        alt="Whoa illustration"
        className="absolute top-48 right-16 w-20 h-20 opacity-30 pointer-events-none"
      />

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

      {/* Corner and Middle Illustrations */}
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
      <img
        src={NewBeginnings}
        alt="New Beginnings illustration"
        className="fixed top-1/2 left-12 w-20 h-20 opacity-30 pointer-events-none"
      />
    </div>
  );
};

export default Collections;
