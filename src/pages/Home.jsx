import { Link } from "react-router-dom";
import LinkCard from "../components/LinkCard";
import { ChaoticGood, Coffee } from "../assets";

const Home = () => {
  return (
    <div className="min-h-screen bg-zinc-50 relative">
      {/* Header */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-zinc-200 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <h1 className="text-sm font-medium text-zinc-900">Links</h1>
            <div className="flex items-center space-x-6">
              <Link
                to="/collections"
                className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                Collections
              </Link>
              <Link
                to="/about"
                className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Yamu's Favs Section */}
        <section>
          <h2 className="text-sm font-medium text-zinc-900 mb-6">Yamu's Favs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {yamusFavs.map((item) => (
              <LinkCard key={item.id} link={item} />
            ))}
          </div>
        </section>
      </main>

      {/* Corner Illustrations */}
      <img
        src={Coffee}
        alt="Coffee illustration"
        className="fixed bottom-8 right-8 w-24 h-24 opacity-50 pointer-events-none"
      />
      <img
        src={ChaoticGood}
        alt="Chaotic Good illustration"
        className="fixed bottom-8 left-8 w-24 h-24 opacity-50 pointer-events-none"
      />
    </div>
  );
};

const yamusFavs = [
  {
    id: 1,
    title: "Raycast",
    url: "https://raycast.com",
    category: "Productivity",
    color: "#FF6363",
  },
  {
    id: 2,
    title: "Arc",
    url: "https://arc.net",
    category: "Browser",
    color: "#5A45FF",
  },
  {
    id: 3,
    title: "Figma",
    url: "https://figma.com",
    category: "Design",
    color: "#1E1E1E",
  },
  {
    id: 4,
    title: "GitHub",
    url: "https://github.com",
    category: "Development",
    color: "#24292F",
  },
];

export default Home;
