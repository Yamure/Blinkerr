import PropTypes from "prop-types";

const LinkCard = ({ link }) => {
  const backgroundColor = `${link.color}15`; // This is for the icon
  const cardBackground = `${link.color}20`; // Increased opacity from 08 to 20 for more visibility

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg p-4 transition-all hover:-translate-y-1 hover:shadow-md"
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
