import { useFavorites } from "@/context/FavoritesContext";

const FavoritesBar = () => {
  const { favourites } = useFavorites();

  const getColourForCategory = (category) => {
    const colours = {
      Browser: "#8BC34A",
      Essentials: "#F46B6C",
      Development: "#4ECDC5",
      Design: "#F7AA80",
      Productivity: "#F9E780",
      Resources: "#292F37",
      "Project Management": "#F7B4B4",
      Documentation: "#3498db",
      "Note Taking": "#FFC107",
      Terminal: "#3498db",
      Inspiration: "#FFA07A",
      AI: "#9C27B0",
      UI: "#FF5722",
      Database: "#795548",
      Cloud: "#607D8B",
      Security: "#F44336",
      Testing: "#9575CD",
      Analytics: "#00BCD4",
      "Version Control": "#4CAF50",
      Frameworks: "#FF9800",
      "Web Development": "#FF5722",
    };

    return colours[category] || "FFFFFF";
  };

  if (favourites.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-custom-bg/80 backdrop-blur-xs border-primary-200/50">
      <div className="px-6 py-4 mx-auto max-w-7xl">
        <div className="flex items-center space-x-4">
          <h3 className="text-xs font-medium font-heading text-text-900">
            Favourites
          </h3>
          <div className="flex items-center gap-2 pb-2 overflow-x-auto scrollbar-hide">
            {favourites.map((favourite) => (
              <a
                key={favourite.id}
                href={favourite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3 py-1.5 rounded-md bg-white/50 hover:bg-white transition-colors border border-zinc-200/50"
              >
                <div
                  className="w-4 h-4 rounded-sm flex items-center justify-center text-[10px] text-white"
                  style={{
                    backgroundColor: `${getColourForCategory(
                      favourite.category,
                    )}`,
                  }}
                >
                  {favourite.title.charAt(0)}
                </div>
                <span className="font-mono text-xs text-zinc-600 whitespace-nowrap">
                  {favourite.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesBar;
