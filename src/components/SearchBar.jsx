import PropTypes from "prop-types";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="relative w-full md:max-w-lg lg:max-w-xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search tools..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 text-xs font-mono text-zinc-900 placeholder:text-zinc-400
          focus:outline-none focus:ring-1 focus:ring-zinc-200 border border-zinc-200/50
          transition-all duration-200"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg
            className="w-3.5 h-3.5 text-zinc-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
