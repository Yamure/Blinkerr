


const LinkCard = ({ link }) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
      style={{ backgroundColor: link.color }}
    >
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
        {link.title}
      </h2>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {link.category}
      </p>
    </a>
  );
};

export default LinkCard;
