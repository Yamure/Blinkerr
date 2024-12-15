import { useState } from "react";
import LinkCard from "./components/LinkCard";

const App = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const collections = {
    essentials: [
      {
        id: 1,
        title: "Notion",
        url: "https://notion.so",
        category: "Note Taking",
        color: "#2E3338",
      },
      // Add more items...
    ],
    development: [
      {
        id: 3,
        title: "GitHub",
        url: "https://github.com",
        category: "Version Control",
        color: "#24292F",
      },
      // Add more development tools...
    ],
    design: [
      {
        id: 5,
        title: "Figma",
        url: "https://figma.com",
        category: "Design Tool",
        color: "#1E1E1E",
      },
      // Add more design tools...
    ],
    resources: [
      {
        id: 7,
        title: "MDN",
        url: "https://developer.mozilla.org",
        category: "Documentation",
        color: "#15141A",
      },
      // Add more resources...
    ],
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Header */}
      <header className="border-b border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-2xl font-medium text-zinc-900">
            Links
          </h1>
          <p className="mt-1 text-sm text-zinc-500">
            Collection of essential tools and resources
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-zinc-200 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-6 overflow-x-auto py-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`text-sm transition-colors ${
                activeCategory === 'all'
                  ? 'text-zinc-900 font-medium'
                  : 'text-zinc-500 hover:text-zinc-900'
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
                    ? 'text-zinc-900 font-medium'
                    : 'text-zinc-500 hover:text-zinc-900'
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
          {Object.entries(collections).map(([category, items]) => (
            activeCategory === 'all' || activeCategory === category ? (
              items.map((item) => (
                <LinkCard key={item.id} link={item} />
              ))
            ) : null
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
