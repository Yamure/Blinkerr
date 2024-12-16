import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, selectUI } from "@/store/uiSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { searchQuery } = useSelector(selectUI);

  return (
    <div className="relative">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        placeholder="Search resources... (Press '/' to focus)"
        className="w-full px-4 py-3 rounded-lg bg-white/80 backdrop-blur-sm border border-zinc-200/50 outline-none focus:ring-2 ring-zinc-400 transition-all"
      />
      <kbd className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hidden sm:block">
        Press /
      </kbd>
    </div>
  );
};

export default SearchBar;
