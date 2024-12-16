import LinkCard from "@components/LinkCard";
import Navigation from "@components/Navigation";
import { useSelector } from "react-redux";
import { selectFavorites } from "@/store/favoritesSlice";
import { Coffee, ChaoticGood, Pilot, Plants, MechanicalLove } from "@assets";
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div className="min-h-screen grainy bg-[#FAFAF9] relative">
      <Navigation currentPage="home" />

      {/* Decorative SVGs */}
      <img
        src={Pilot}
        alt="Pilot illustration"
        className="absolute top-24 right-12 w-20 h-20 opacity-30 pointer-events-none"
      />
      <img
        src={Plants}
        alt="Plants illustration"
        className="absolute top-40 left-8 w-16 h-16 opacity-30 pointer-events-none"
      />

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Yamu's Favs Section */}
        <section className="mb-12">
          <h2 className="text-sm font-medium text-zinc-900 mb-6">
            Yamu's Favs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {yamusFavs.map((item) => (
              <LinkCard key={item.id} link={item} />
            ))}
          </div>
        </section>

        {/* User's Favorites Section */}
        {favorites.length > 0 && (
          <section>
            <div className="flex items-center space-x-2 mb-6">
              <h2 className="text-sm font-medium text-zinc-900">
                Your Favorites
              </h2>
              <span className="text-xs bg-zinc-100 px-1.5 py-0.5 rounded-full text-zinc-500">
                {favorites.length}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((item) => (
                <LinkCard key={item.id} link={item} />
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Corner and Middle Illustrations */}
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
      <img
        src={MechanicalLove}
        alt="Mechanical Love illustration"
        className="fixed top-1/2 right-12 w-20 h-20 opacity-30 pointer-events-none"
      />
    </div>
  );
};

const yamusFavs = [
  {
    id: uuidv4(),
    title: "Raycast",
    url: "https://raycast.com",
    category: "Productivity",
    color: "#FF6363",
    description: "Productivity tool that helps you get things done faster.",
  },
  {
    id: uuidv4(),
    title: "Arc",
    url: "https://arc.net",
    category: "Browser",
    color: "#5A45FF",
    description: "A browser built for a better internet.",
  },
  {
    id: uuidv4(),
    title: "Figma",
    url: "https://figma.com",
    category: "Design",
    color: "#1E1E1E",
    description: "Collaborative interface design tool.",
  },
  {
    id: uuidv4(),
    title: "GitHub",
    url: "https://github.com",
    category: "Development",
    color: "#24292F",
    description: "Development platform inspired by the way you work.",
  },
  {
    id: uuidv4(),
    title: "VS Code",
    url: "https://vscode.dev",
    category: "Development",
    color: "#007ACC",
    description: "Code editing. Redefined.",
  },
  {
    id: uuidv4(),
    title: "Notion",
    url: "https://notion.so",
    category: "Productivity",
    color: "#000000",
    description: "All-in-one workspace for your notes, tasks, and docs.",
  },
  {
    id: uuidv4(),
    title: "Linear",
    url: "https://linear.app",
    category: "Project Management",
    color: "#5E6AD2",
    description: "The issue tracking tool you'll enjoy using.",
  },
  {
    id: uuidv4(),
    title: "Warp",
    url: "https://warp.dev",
    category: "Development",
    color: "#FF4F64",
    description: "The terminal for the 21st century.",
  },
];

export default Home;
