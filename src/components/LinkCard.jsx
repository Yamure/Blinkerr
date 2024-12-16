import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite, selectIsFavorite } from "@/store/favoritesSlice";
import LinkDetailsModal from "./LinkDetailsModal";

const LinkCard = ({ link, loading = false }) => {
  console.log('LinkCard received props:', { link, loading });  // Debug log

  if (!link && !loading) {
    console.log('No link provided and not loading, returning null');  // Debug log
    return null;
  }

  const dispatch = useDispatch();
  const isStarred = useSelector((state) => selectIsFavorite(state, link?.id));
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!link?.title || !link?.color || !link?.category || !link?.url) {
    console.log('Missing required link properties:', link);  // Debug log
    return null;
  }

  const firstLetter = link?.title?.charAt(0) || '?';

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
    <>
      <div
        className="group block rounded-lg p-6 transition-all hover:-translate-y-1 focus-visible:-translate-y-1 hover:shadow-md focus-visible:shadow-md relative z-20 bg-white/80 backdrop-blur-sm outline-none ring-zinc-400 focus-visible:ring-2"
        style={{ backgroundColor: `${link.color}20` }}
      >
        <div className="flex items-center space-x-3 mb-4">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-md text-white text-sm font-medium shadow-sm shrink-0"
            style={{ backgroundColor: link.color }}
          >
            <span className="block">{firstLetter}</span>
          </div>
          <div>
            <h2 className="text-sm font-medium text-zinc-900 group-hover:text-zinc-700 transition-colors">
              {link.title}
            </h2>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-[11px] text-zinc-500 font-mono">
                {link.category}
              </span>
              <span className="block w-1 h-1 rounded-full bg-zinc-300" />
              <span className="text-[11px] text-zinc-500 font-mono">
                {new URL(link.url).hostname.replace("www.", "")}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-1.5 ml-auto">
            <button
              onClick={() => setIsModalOpen(true)}
              className="p-1.5 rounded-full hover:bg-zinc-100 transition-colors"
              aria-label="View details"
            >
              <svg className="w-4 h-4 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                dispatch(toggleFavorite(link));
              }}
              className="p-1.5 rounded-full hover:bg-zinc-100 transition-colors"
            >
              <svg
                className={`w-4 h-4 ${
                  isStarred ? "text-yellow-400 fill-current" : "text-zinc-400"
                }`}
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </button>
          </div>
        </div>
        <p className="text-[11px] text-zinc-600 font-mono leading-relaxed line-clamp-2">
          {link.description}
        </p>
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 mt-4 text-[10px] text-zinc-500 hover:text-zinc-700 transition-colors group"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
          <span className="font-mono">Open resource</span>
        </a>
      </div>

      <LinkDetailsModal
        link={link}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

LinkCard.propTypes = {
  link: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    dateAdded: PropTypes.string.isRequired,
    comments: PropTypes.string,
    useCase: PropTypes.string,
  }).isRequired,
  loading: PropTypes.bool,
};

export default LinkCard;
