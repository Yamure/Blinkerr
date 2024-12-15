import PropTypes from "prop-types";

const LinkCard = ({ link }) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white border border-zinc-200 rounded-lg p-4 hover:border-zinc-400 transition-colors"
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
