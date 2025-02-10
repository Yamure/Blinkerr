import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { toggleFavourite, selectIsFavourite } from "@/store/favouritesSlice";
import { FaCopy } from "react-icons/fa";
import { Star } from "@phosphor-icons/react";
import CodeBlock from "./CodeBlock";

const Card = ({ link, loading = false }) => {
    const dispatch = useDispatch();
    const isStarred = useSelector((state) =>
        selectIsFavourite(state, link?.id)
    );

    if (!link && !loading) {
        return null;
    }

    if (!link?.title || !link?.body || !link?.output) {
        return null;
    }

    const getColourForCategory = () => {
        const colours = [
            "#8BC34A",
            "#F46B6C",
            "#4ECDC5",
            "#F7AA80",
            "#34A85A",
            "#292F37",
            "#F7B4B4",
            "#3498db",
            "FFC107",
            "#3498db",
        ];
        let randomColourInt = Math.floor(Math.random() * colours.length);
        return colours[randomColourInt] || "FFFFFF";
    };

    let colour = getColourForCategory();

    if (loading) {
        return (
            <div className="p-4 rounded-xl sm:p-6 bg-custom-bg/80 backdrop-blur-sm animate-pulse">
                <div className="flex items-start mb-4 space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-200 shrink-0" />
                    <div className="flex-1 min-w-0">
                        <div className="w-24 h-4 rounded bg-primary-200" />
                        <div className="w-16 h-3 mt-2 rounded bg-primary-200" />
                    </div>
                </div>
                <div className="h-16 rounded bg-primary-200" />
            </div>
        );
    }

    return (
        <>
            <div
                className="relative block p-4 transition-all duration-300 outline-none min-h-42 group rounded-xl sm:p-6 hover:-translate-y-1 focus-visible:-translate-y-1 hover:shadow-lg focus-visible:shadow-lg bg-white/90 backdrop-blur-sm ring-primary-400 focus-visible:ring-2"
                style={{
                    backgroundColor: `${colour}20`,
                }}
            >
                <div
                    className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-xl group-hover:opacity-100"
                    style={{
                        background: `linear-gradient(45deg, ${colour}05 0%, ${colour}15 100%)`,
                    }}
                />
                <div className="relative z-10">
                    <div className="flex items-center mb-4 space-x-3">
                        {/* Icon */}
                        <button
                            className="flex items-center justify-center w-10 h-10 text-sm font-medium text-white transition-transform duration-300 rounded-lg shadow-sm shrink-0 group-hover:scale-110"
                            style={{
                                backgroundColor: `${colour}`,
                            }}
                        >
                            <FaCopy />
                        </button>
                        {/* Title & Star */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                                <h2 className="text-[18px] font-heading font-medium text-text-900 group-hover:text-text-700 transition-colors truncate">
                                    {link.title}
                                </h2>
                                <div className="flex items-center gap-1.5 shrink-0">
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
                    {/* Description */}
                    <p className="text-[11px] text-text-600 font-body leading-relaxed line-clamp-2 mb-4">
                        {link.description}
                    </p>
                    {/* Code Block */}
                    <div>
                        <CodeBlock item={link} />
                    </div>
                </div>
            </div>
        </>
    );
};

Card.propTypes = {
    link: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        output: PropTypes.string.isRequired,
    }).isRequired,
    loading: PropTypes.bool,
};

export default Card;
