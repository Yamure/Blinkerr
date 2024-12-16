import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite, selectIsFavorite } from "@/store/favoritesSlice";
import LinkDetailsModal from "./LinkDetailsModal";
import {
    Browsers,
    Code,
    PaintBrush,
    Lightning,
    Robot,
    Rocket,
    Terminal,
    Layout,
    Database,
    Cloud,
    Globe,
    Info,
    Star,
} from "@phosphor-icons/react";

const LinkCard = ({ link, loading = false }) => {
    if (!link && !loading) {
        return null;
    }

    const dispatch = useDispatch();
    const isStarred = useSelector((state) => selectIsFavorite(state, link?.id));
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!link?.title || !link?.color || !link?.category || !link?.url) {
        return null;
    }

    const firstLetter = link?.title?.charAt(0) || "?";

    const getIconForCategory = (category) => {
        const icons = {
            Browser: Browsers,
            Development: Code,
            Design: PaintBrush,
            Productivity: Lightning,
            AI: Robot,
            "Project Management": Rocket,
            Terminal: Terminal,
            UI: Layout,
            Database: Database,
            Cloud: Cloud,
        };

        const Icon = icons[category] || Globe;
        return <Icon weight="bold" className="w-5 h-5" />;
    };

    if (loading) {
        return (
            <div className="rounded-xl p-4 sm:p-6 bg-white/80 backdrop-blur-sm animate-pulse">
                <div className="flex items-start space-x-3 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-zinc-200 shrink-0" />
                    <div className="flex-1 min-w-0">
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
                className="group relative block rounded-xl p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 focus-visible:-translate-y-1 hover:shadow-lg focus-visible:shadow-lg bg-white/90 backdrop-blur-sm outline-none ring-zinc-400 focus-visible:ring-2"
                style={{ backgroundColor: `${link.color}10` }}
            >
                <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: `linear-gradient(45deg, ${link.color}05 0%, ${link.color}15 100%)`,
                    }}
                />

                <div className="relative z-10">
                    <div className="flex items-start space-x-3 mb-4">
                        <div
                            className="flex h-10 w-10 items-center justify-center rounded-lg text-white text-sm font-medium shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-110"
                            style={{ backgroundColor: link.color }}
                        >
                            {getIconForCategory(link.category)}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                                <div className="flex flex-col items-start justify-between">
                                    <h2 className="text-sm font-medium text-zinc-900 group-hover:text-zinc-700 transition-colors truncate">
                                        {link.title}
                                    </h2>
                                    <p className="text-[11px] text-zinc-500 font-mono bg-zinc-100/80 rounded-full">
                                        {link.category}
                                    </p>
                                </div>
                                <div className="flex items-center gap-1.5 shrink-0">
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="p-1.5 rounded-full hover:bg-zinc-100 transition-colors"
                                        aria-label="View details"
                                    >
                                        <Info className="w-4 h-4 text-zinc-400" />
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            dispatch(toggleFavorite(link));
                                        }}
                                        className="p-1.5 rounded-full hover:bg-zinc-100 transition-colors"
                                    >
                                        <Star
                                            weight={
                                                isStarred ? "fill" : "regular"
                                            }
                                            className={`w-4 h-4 transition-colors duration-300 ${
                                                isStarred
                                                    ? "text-yellow-400"
                                                    : "text-zinc-400 group-hover:text-zinc-500"
                                            }`}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-[11px] text-zinc-600 font-mono leading-relaxed line-clamp-2 mb-4">
                        {link.description}
                    </p>
                    <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[10px] text-zinc-500 hover:text-zinc-700 transition-colors group/link"
                    >
                        <span className="font-mono bg-zinc-100/80 px-2 py-1 rounded-full group-hover/link:bg-zinc-200/80 transition-colors">
                            Open resource
                            <svg
                                className="w-3 h-3 inline-block ml-1.5 transition-transform group-hover/link:translate-x-0.5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </span>
                    </a>
                </div>
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
