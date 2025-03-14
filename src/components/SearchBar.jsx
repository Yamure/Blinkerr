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
        className="w-full px-4 py-2 text-sm text-text-900 font-body bg-custom-bg/80 backdrop-blur-xs rounded-lg
          border border-primary outline-hidden focus:ring-2 ring-primary-400 transition-all
          placeholder:text-text-400"
      />
      <kbd className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-body text-text-400 bg-primary-100 px-1.5 py-0.5 rounded-sm">
        /
      </kbd>
    </div>
  );
};

export default SearchBar;
