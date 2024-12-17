import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite, selectIsFavourite } from "@/store/favouritesSlice";
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
    Book,
    Pencil,
    Lightbulb,
} from "@phosphor-icons/react";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

const LinkCard = ({ link, loading = false }) => {
    if (!link && !loading) {
        return null;
    }

    const dispatch = useDispatch();
    const isStarred = useSelector((state) =>
        selectIsFavourite(state, link?.id)
    );
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!link?.title || !link?.category || !link?.url) {
        return null;
    }

    const getColourForCategory = (category) => {
        const colours = {
            Browser: "#8BC34A",
            Essentials: "#F46B6C",
            Development: "#4ECDC5",
            Design: "#F7AA80",
            Productivity: "#34A85A",
            Resources: "#292F37",
            "Project Management": "#F7B4B4",
            Documentation: "#3498db",
            "Note Taking": "#FFC107",
            Terminal: "#3498db",
            Inspiration: "#FFA07A",
        };

        return colours[category] || "FFFFFF";
    };

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
            Documentation: Book,
            "Note Taking": Pencil,
            Inspiration: Lightbulb,
        };

        const Icon = icons[category] || Globe;
        return <Icon weight="bold" className="w-5 h-5" />;
    };

    if (loading) {
        return (
            <div className="rounded-xl p-4 sm:p-6 bg-custom-bg/80 backdrop-blur-sm animate-pulse">
                <div className="flex items-start space-x-3 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-primary-200 shrink-0" />
                    <div className="flex-1 min-w-0">
                        <div className="h-4 w-24 bg-primary-200 rounded" />
                        <div className="h-3 w-16 bg-primary-200 rounded mt-2" />
                    </div>
                </div>
                <div className="h-16 bg-primary-200 rounded" />
            </div>
        );
    }

    return (
        <>
            <div
                className="min-h-42 group relative block rounded-xl p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 focus-visible:-translate-y-1 hover:shadow-lg focus-visible:shadow-lg bg-white/90 backdrop-blur-sm outline-none ring-primary-400 focus-visible:ring-2"
                style={{
                    backgroundColor: `${getColourForCategory(link.category)}10`,
                }}
            >
                <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: `linear-gradient(45deg, ${getColourForCategory(
                            link.category
                        )}05 0%, ${getColourForCategory(
                            link.category
                        )}15 100%)`,
                    }}
                />

                <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-4">
                        <div
                            className="flex h-10 w-10 items-center justify-center rounded-lg text-white text-sm font-medium shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-110"
                            style={{
                                backgroundColor: `${getColourForCategory(
                                    link.category
                                )}`,
                            }}
                        >
                            {getIconForCategory(link.category)}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                                <h2 className="text-[18px] font-heading font-medium text-text-900 group-hover:text-text-700 transition-colors truncate">
                                    {link.title}
                                </h2>
                                <div className="flex items-center gap-1.5 shrink-0">
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-1.5 rounded-full hover:bg-primary-100 transition-colors"
                                        aria-label="Visit resource"
                                    >
                                        <LiaExternalLinkAltSolid className="w-4 h-4 text-primary-400" />
                                    </a>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="p-1.5 rounded-full hover:bg-primary-100 transition-colors"
                                        aria-label="View details"
                                    >
                                        <Info className="w-4 h-4 text-primary-400" />
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            dispatch(toggleFavourite(link));
                                        }}
                                        className="p-1.5 rounded-full hover:bg-primary-100 transition-colors"
                                    >
                                        <Star
                                            weight={
                                                isStarred ? "fill" : "regular"
                                            }
                                            className={`w-4 h-4 transition-colors duration-300 ${
                                                isStarred
                                                    ? "text-yellow-400"
                                                    : "text-primary-400 group-hover:text-primary-500"
                                            }`}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p
                        className="text-[11px] w-fit px-2 mb-2 text-white font-heading uppercase rounded-full"
                        style={{
                            backgroundColor: `${getColourForCategory(
                                link.category
                            )}`,
                        }}
                    >
                        {link.category}
                    </p>
                    <p className="text-[11px] text-text-600 font-body leading-relaxed line-clamp-2 mb-4">
                        {link.description}
                    </p>
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
        dateAdded: PropTypes.string.isRequired,
        comments: PropTypes.string,
        useCase: PropTypes.string,
    }).isRequired,
    loading: PropTypes.bool,
};

export default LinkCard;
