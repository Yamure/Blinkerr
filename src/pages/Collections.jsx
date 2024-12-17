import { useDispatch, useSelector } from "react-redux";
import { selectUI, setActiveCategory } from "@/store/uiSlice";
import LinkCard from "@components/LinkCard";
import Navigation from "@components/Navigation";
import { collections } from "@data/collections";
import ScrollToTop from "@components/ScrollToTop";
import {
    CollectionsIllustration,
    CollectionsMobileIllustration,
} from "@components/illustrations";

// Category colors mapping
const categoryColors = {
    all: "#18181B", // Zinc-900 for default
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

const Collections = () => {
    const dispatch = useDispatch();
    const { searchQuery, activeCategory } = useSelector(selectUI);

    // Filter links based on search query and active category
    const filteredLinks = Object.entries(collections)
        .flatMap(([category, items]) =>
            activeCategory === "all" || activeCategory === category ? items : []
        )
        .filter(
            (link) =>
                !searchQuery ||
                link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                link.category.toLowerCase().includes(searchQuery.toLowerCase())
        );

    return (
        <div className="min-h-screen grainy bg-custom-bg relative">
            <Navigation currentPage="collections" />
            <ScrollToTop />
            <CollectionsMobileIllustration />
            <CollectionsIllustration />

            <main className="max-w-7xl mx-auto px-6 py-8 relative z-10 h-screen overflow-y-auto md:h-auto md:overflow-visible">
                <div className="space-y-6 mb-8">
                    {/* Category Filters */}
                    <div className="flex items-center space-x-4 overflow-x-auto pb-4 scrollbar-hide">
                        <div className="flex gap-2 p-1 bg-zinc-100/50 backdrop-blur-sm rounded-lg">
                            <button
                                onClick={() =>
                                    dispatch(setActiveCategory("all"))
                                }
                                className={`px-3 py-1.5 text-sm whitespace-nowrap transition-all rounded-md ${
                                    activeCategory === "all"
                                        ? "bg-white shadow-sm font-medium"
                                        : "text-zinc-500 hover:text-zinc-900"
                                }`}
                                style={{
                                    color:
                                        activeCategory === "all"
                                            ? categoryColors.all
                                            : undefined,
                                }}
                            >
                                All
                            </button>
                            {Object.keys(collections).map((category) => (
                                <button
                                    key={category}
                                    onClick={() =>
                                        dispatch(setActiveCategory(category))
                                    }
                                    className={`px-3 py-1.5 text-sm capitalize whitespace-nowrap transition-all rounded-md flex items-center gap-2 ${
                                        activeCategory === category
                                            ? "bg-white shadow-sm font-medium"
                                            : "text-zinc-500 hover:text-zinc-900"
                                    }`}
                                    style={{
                                        color:
                                            activeCategory === category
                                                ? categoryColors[category]
                                                : undefined,
                                    }}
                                >
                                    {category}
                                    <span
                                        className="text-xs px-1.5 py-0.5 rounded-full"
                                        style={{
                                            backgroundColor:
                                                activeCategory === category
                                                    ? `${categoryColors[category]}15`
                                                    : "rgb(244 244 245)", // zinc-100
                                        }}
                                    >
                                        {collections[category].length}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredLinks.map((item) => (
                        <LinkCard key={item.id} link={item} />
                    ))}
                    {filteredLinks.length === 0 && (
                        <div className="col-span-full text-center py-12">
                            <p className="text-sm text-zinc-500">
                                No results found for &quot;{searchQuery}&quot;
                            </p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Collections;
