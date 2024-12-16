import LinkCard from "@components/LinkCard";
import Navigation from "@components/Navigation";
import { useSelector } from "react-redux";
import { selectFavorites } from "@/store/favoritesSlice";
import { Coffee, ChaoticGood, Pilot, Plants, MechanicalLove } from "@assets";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const favorites = useSelector(selectFavorites);
  console.log('yamusFavs:', yamusFavs);  // Debug log
  console.log('favorites:', favorites);   // Debug log

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
    dateAdded: "2024-01-15",
    useCase: "Perfect for quick app launching, window management, and custom scripts. The AI commands are incredibly powerful.",
    comments: "I use this instead of Spotlight. The clipboard history and snippets features save me hours each week."
  },
  {
    id: uuidv4(),
    title: "Arc",
    url: "https://arc.net",
    category: "Browser",
    color: "#5A45FF",
    description: "A browser built for a better internet.",
    dateAdded: "2024-01-15",
    useCase: "Great for organizing research and managing multiple workspaces. The split view is perfect for development.",
    comments: "The spaces feature helps me separate work and personal browsing. Command bar is incredibly intuitive."
  },
  {
    id: uuidv4(),
    title: "Figma",
    url: "https://figma.com",
    category: "Design",
    color: "#1E1E1E",
    description: "Collaborative interface design tool.",
    dateAdded: "2024-01-15",
    useCase: "Essential for UI design and prototyping. Real-time collaboration makes team design work seamless.",
    comments: "The auto-layout and component variants have revolutionized my design workflow. Great plugin ecosystem."
  },
  {
    id: uuidv4(),
    title: "GitHub",
    url: "https://github.com",
    category: "Development",
    color: "#24292F",
    description: "Development platform inspired by the way you work.",
    dateAdded: "2024-01-15",
    useCase: "Version control and collaboration hub. Perfect for managing projects and tracking issues.",
    comments: "GitHub Copilot integration is a game changer. The mobile app is great for quick reviews."
  },
  {
    id: uuidv4(),
    title: "VS Code",
    url: "https://vscode.dev",
    category: "Development",
    color: "#007ACC",
    description: "Code editing. Redefined.",
    dateAdded: "2024-01-15",
    useCase: "Powerful yet lightweight code editor. Great for web development with excellent extension support.",
    comments: "The integrated terminal and Git features are essential. Remote development is fantastic."
  },
  {
    id: uuidv4(),
    title: "Notion",
    url: "https://notion.so",
    category: "Productivity",
    color: "#000000",
    description: "All-in-one workspace for your notes, tasks, and docs.",
    dateAdded: "2024-01-15",
    useCase: "Perfect for documentation, note-taking, and project management. The database features are incredibly versatile.",
    comments: "I use this for everything from project docs to personal notes. The templates save lots of setup time."
  },
  {
    id: uuidv4(),
    title: "Linear",
    url: "https://linear.app",
    category: "Project Management",
    color: "#5E6AD2",
    description: "The issue tracking tool you'll enjoy using.",
    dateAdded: "2024-01-15",
    useCase: "Streamlined issue tracking and project management. Great for agile development workflows.",
    comments: "The keyboard shortcuts make it super fast to use. GitHub integration works perfectly."
  },
  {
    id: uuidv4(),
    title: "Warp",
    url: "https://warp.dev",
    category: "Development",
    color: "#FF4F64",
    description: "The terminal for the 21st century.",
    dateAdded: "2024-01-15",
    useCase: "Modern terminal with AI assistance and great UI. Perfect for command-line work.",
    comments: "The command history and AI suggestions are incredibly helpful. Much more user-friendly than traditional terminals."
  },
];

export default Home;
