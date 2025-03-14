import { selectUI, setSearchQuery } from '@slices/ui';
import { useDispatch, useSelector } from 'react-redux';

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
        className="text-text-900 font-body bg-custom-bg/80 border-primary ring-primary-400 placeholder:text-text-400 w-full rounded-lg border px-4 py-2 text-sm outline-hidden backdrop-blur-xs transition-all focus:ring-2"
      />
      <kbd className="font-body text-text-400 bg-primary-100 absolute top-1/2 right-4 -translate-y-1/2 rounded-sm px-1.5 py-0.5 text-[10px]">
        /
      </kbd>
    </div>
  );
};

export default SearchBar;
