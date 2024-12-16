import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, selectUI } from "@/store/uiSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { searchQuery } = useSelector(selectUI);

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        placeholder="Search resources..."
        className="w-full px-4 py-2 text-sm text-zinc-900 bg-custom-bg/80 backdrop-blur-sm rounded-lg
          border border-black outline-none focus:ring-2 ring-zinc-400 transition-all
          placeholder:text-zinc-400"
      />
      <kbd className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-mono text-zinc-400 bg-zinc-100 px-1.5 py-0.5 rounded">
        /
      </kbd>
    </div>
  );
};

export default SearchBar;
