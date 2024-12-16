import PropTypes from "prop-types";

const LinkCard = ({ link, loading = false }) => {
  if (loading) {
    return (
      <div className="rounded-lg p-6 bg-white/80 backdrop-blur-sm animate-pulse">
        <div className="flex items-center space-x-3 mb-4">
          <div className="h-12 w-12 rounded-md bg-zinc-200" />
          <div>
            <div className="h-4 w-24 bg-zinc-200 rounded" />
            <div className="h-3 w-16 bg-zinc-200 rounded mt-2" />
          </div>
        </div>
        <div className="h-16 bg-zinc-200 rounded" />
      </div>
    );
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      title={`Visit ${link.title}`}
      className="group block rounded-lg p-6 transition-all hover:-translate-y-1 focus-visible:-translate-y-1 hover:shadow-md focus-visible:shadow-md relative z-20 bg-white/80 backdrop-blur-sm outline-none ring-zinc-400 focus-visible:ring-2"
      style={{ backgroundColor: `${link.color}20` }}
    >
      <div className="flex items-center space-x-3 mb-4">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-md text-white text-sm font-medium shadow-sm"
          style={{ backgroundColor: link.color }}
        >
          {link.title.charAt(0)}
        </div>
        <div>
          <h2 className="text-sm font-medium text-zinc-900 group-hover:text-zinc-700 transition-colors">
            {link.title}
          </h2>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-[11px] text-zinc-500 font-mono">{link.category}</span>
            <span className="block w-1 h-1 rounded-full bg-zinc-300" />
            <span className="text-[11px] text-zinc-500 font-mono">
              {new URL(link.url).hostname.replace('www.', '')}
            </span>
          </div>
        </div>
      </div>
      <p className="text-xs text-zinc-600 font-mono leading-relaxed line-clamp-2">
        {link.description}
      </p>
      <div className="flex items-center space-x-2 mt-4 text-[11px] text-zinc-500">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        <span className="font-mono group-hover:text-zinc-700 transition-colors">Open resource</span>
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
    description: PropTypes.string.isRequired,
  }).isRequired,
  loading: PropTypes.bool
};

LinkCard.defaultProps = {
  loading: false
};

export default LinkCard;
