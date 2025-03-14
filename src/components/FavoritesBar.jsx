import { useFavorites } from '@/context/FavoritesContext';

const FavoritesBar = () => {
  const { favourites } = useFavorites();

  const getColourForCategory = (category) => {
    const colours = {
      Browser: '#8BC34A',
      Essentials: '#F46B6C',
      Development: '#4ECDC5',
      Design: '#F7AA80',
      Productivity: '#F9E780',
      Resources: '#292F37',
      'Project Management': '#F7B4B4',
      Documentation: '#3498db',
      'Note Taking': '#FFC107',
      Terminal: '#3498db',
      Inspiration: '#FFA07A',
      AI: '#9C27B0',
      UI: '#FF5722',
      Database: '#795548',
      Cloud: '#607D8B',
      Security: '#F44336',
      Testing: '#9575CD',
      Analytics: '#00BCD4',
      'Version Control': '#4CAF50',
      Frameworks: '#FF9800',
      'Web Development': '#FF5722',
    };

    return colours[category] || 'FFFFFF';
  };

  if (favourites.length === 0) return null;

  return (
    <div className="bg-custom-bg/80 border-primary-200/50 fixed right-0 bottom-0 left-0 z-40 border-t backdrop-blur-xs">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center space-x-4">
          <h3 className="font-heading text-text-900 text-xs font-medium">
            Favourites
          </h3>
          <div className="scrollbar-hide flex items-center gap-2 overflow-x-auto pb-2">
            {favourites.map((favourite) => (
              <a
                key={favourite.id}
                href={favourite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 rounded-md border border-zinc-200/50 bg-white/50 px-3 py-1.5 transition-colors hover:bg-white"
              >
                <div
                  className="flex h-4 w-4 items-center justify-center rounded-sm text-[10px] text-white"
                  style={{
                    backgroundColor: `${getColourForCategory(
                      favourite.category,
                    )}`,
                  }}
                >
                  {favourite.title.charAt(0)}
                </div>
                <span className="font-mono text-xs whitespace-nowrap text-zinc-600">
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
