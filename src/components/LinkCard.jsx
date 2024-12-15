import PropTypes from "prop-types";

const LinkCard = ({ link, loading = false }) => {
  const backgroundColor = `${link.color}15`; // This is for the icon
  const cardBackground = `${link.color}20`; // Color background for larger screens

  if (loading) {
    return (
      <div className="rounded-lg p-4 bg-white/80 backdrop-blur-sm animate-pulse">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-md bg-zinc-200" />
          <div>
            <div className="h-4 w-24 bg-zinc-200 rounded" />
            <div className="h-3 w-16 bg-zinc-200 rounded mt-2" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      title={`Visit ${link.title}`}
      className="group block rounded-lg p-4 transition-all hover:-translate-y-1 focus-visible:-translate-y-1 hover:shadow-md focus-visible:shadow-md relative z-20 bg-white/80 backdrop-blur-sm outline-none ring-zinc-400 focus-visible:ring-2"
      style={{ backgroundColor: cardBackground }}
    >
      <div className="flex items-center space-x-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-md text-white text-sm font-medium"
          style={{ backgroundColor: link.color }}
        >
          {link.title.charAt(0)}
        </div>
        <div>
          <h2 className="text-sm font-medium text-zinc-900">{link.title}</h2>
          <p className="text-xs text-zinc-500">{link.category}</p>
        </div>
      </div>
    </a>
  );
};

LinkCard.propTypes = {
  link: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default LinkCard;
