import { useState, useEffect, memo, useRef } from "react";
import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite, selectIsFavourite } from "@/store/favouritesSlice";
import {
  Chrome,
  Code,
  Paintbrush,
  Zap,
  Bot,
  Rocket,
  Terminal,
  Layout,
  Database,
  Cloud,
  Globe,
  Info,
  Star,
  BookOpen,
  Pencil,
  Lightbulb,
  ExternalLink,
  X,
} from "lucide-react";

const categoryConfig = {
  colors: {
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
    AI: "#9C27B0",
  },
  icons: {
    Browser: Chrome,
    Development: Code,
    Design: Paintbrush,
    Productivity: Zap,
    AI: Bot,
    "Project Management": Rocket,
    Terminal: Terminal,
    UI: Layout,
    Database: Database,
    Cloud: Cloud,
    Documentation: BookOpen,
    "Note Taking": Pencil,
    Inspiration: Lightbulb,
  },
};

const CardSkeleton = () => (
  <div className="p-4 sm:p-6 rounded-xl bg-custom-bg/80 backdrop-blur-sm animate-pulse">
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

const Modal = ({ link, onClose, color }) => {
  const modalRef = useRef(null);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    const modalElement = modalRef.current;
    if (!modalElement) return;

    const startY = touch.pageY;
    const scrollTop = modalElement.scrollTop;

    if (scrollTop === 0 && startY > touch.pageY) {
      e.preventDefault();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] h-screen touch-none"
      style={{ position: "fixed", height: "100dvh" }}
    >
      <div
        className="fixed inset-0 bg-custom-bg/30 backdrop-blur-sm transition-opacity duration-200"
        onClick={onClose}
      />
      <div className="fixed inset-0 flex items-center justify-center p-4 overscroll-none">
        <div
          ref={modalRef}
          onTouchStart={handleTouchStart}
          className="relative grainy bg-custom-bg rounded-xl shadow-xl max-w-2xl w-full p-6 max-h-[90dvh] overflow-y-auto overscroll-contain
            animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          <ModalHeader link={link} color={color} />
          <ModalContent link={link} />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/20 text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            <X className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ModalHeader = ({ link, color }) => {
  const Icon = categoryConfig.icons[link.category] || Globe;
  return (
    <div className="flex items-center gap-4 mb-6">
      <div
        className="flex size-12 items-center justify-center rounded-md text-white shadow-sm"
        style={{ backgroundColor: color }}
      >
        <Icon className="size-5" />
      </div>
      <div>
        <h2 className="text-xl font-heading text-text-900">{link.title}</h2>
        <p className="text-sm font-heading uppercase text-text-500">
          {link.category}
        </p>
      </div>
    </div>
  );
};

const ModalContent = ({ link }) => (
  <div className="space-y-6">
    <p className="text-sm font-body">{link.description}</p>

    {link.useCase && <InfoSection title="Why use it?" content={link.useCase} />}
    {link.comments && (
      <InfoSection title="Personal Notes" content={link.comments} />
    )}

    <div className="grid grid-cols-2 gap-4 py-4 border-y border-zinc-200/50">
      <DetailItem
        label="Added On"
        value={new Date(link.dateAdded).toLocaleDateString()}
      />
      <DetailItem
        label="Website"
        value={new URL(link.url).hostname.replace("www.", "")}
      />
    </div>

    <div className="flex justify-end">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 text-sm font-medium font-heading uppercase text-text-900 bg-white/80 hover:bg-white/90 rounded-lg transition-colors backdrop-blur-sm"
      >
        Visit Website
        <ExternalLink className="size-4 ml-2" />
      </a>
    </div>
  </div>
);

const InfoSection = memo(({ title, content }) => (
  <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4">
    <h3 className="text-base font-medium font-heading text-text-900 mb-2">
      {title}
    </h3>
    <p className="text-sm font-body text-text-600">{content}</p>
  </div>
));

const DetailItem = memo(({ label, value }) => (
  <div>
    <p className="text-xs font-medium font-heading text-text-500">{label}</p>
    <p className="mt-1 text-sm font-body text-text-900">{value}</p>
  </div>
));

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200">
          <p className="text-red-600">
            Something went wrong loading this card.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

const LinkCard = ({ link, loading = false }) => {
  const dispatch = useDispatch();
  const isStarred = useSelector((state) => selectIsFavourite(state, link?.id));
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [isModalOpen]);

  if (!link && !loading) return null;
  if (!link?.title || !link?.category || !link?.url) return null;
  if (loading) return <CardSkeleton />;

  const color = categoryConfig.colors[link.category] || "#FFFFFF";
  const Icon = categoryConfig.icons[link.category] || Globe;

  return (
    <ErrorBoundary>
      <div
        className="relative p-4 sm:p-6 min-h-42 rounded-xl hover:-translate-y-1 hover:shadow-lg transition-all bg-white/90 backdrop-blur-sm group"
        style={{ backgroundColor: `${color}20` }}
      >
        <div
          className="absolute inset-0 transition-opacity opacity-0 rounded-xl group-hover:opacity-100"
          style={{
            background: `linear-gradient(45deg, ${color}05 0%, ${color}15 100%)`,
          }}
        />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex size-10 items-center justify-center text-white rounded-lg shadow-sm shrink-0 transition group-hover:scale-110"
              style={{ backgroundColor: color }}
            >
              <Icon className="size-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-lg font-heading font-medium text-text-900 group-hover:text-text-700 transition-colors truncate">
                  {link.title}
                </h2>
                <CardActions
                  link={link}
                  isStarred={isStarred}
                  onOpenModal={() => setIsModalOpen(true)}
                  onToggleFavorite={() => dispatch(toggleFavourite(link))}
                />
              </div>
            </div>
          </div>

          <span
            className="inline-block px-2 mb-2 text-[11px] text-white font-heading uppercase rounded-full"
            style={{ backgroundColor: color }}
          >
            {link.category}
          </span>

          <p className="text-[11px] text-text-600 font-body leading-relaxed line-clamp-2">
            {link.description}
          </p>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          link={link}
          color={color}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </ErrorBoundary>
  );
};

const CardActions = memo(
  ({ link, isStarred, onOpenModal, onToggleFavorite }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleFavorite = async (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsLoading(true);
      await onToggleFavorite();
      setIsLoading(false);
    };

    return (
      <div className="flex items-center gap-1.5 shrink-0">
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-full hover:bg-primary-100 transition-colors"
          aria-label="Visit resource"
        >
          <ExternalLink className="size-4 text-primary-400" />
        </a>
        <button
          onClick={onOpenModal}
          className="p-1.5 rounded-full hover:bg-primary-100 transition-colors"
          aria-label="View details"
        >
          <Info className="size-4 text-primary-400" />
        </button>
        <button
          onClick={handleFavorite}
          disabled={isLoading}
          className={`p-1.5 rounded-full transition-colors ${
            isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-primary-100"
          }`}
        >
          <Star
            fill={isStarred ? "currentColor" : "none"}
            className={`size-4 transition-colors ${
              isStarred
                ? "text-yellow-400"
                : "text-primary-400 group-hover:text-primary-500"
            } ${isLoading ? "animate-pulse" : ""}`}
          />
        </button>
      </div>
    );
  }
);

Modal.propTypes = {
  link: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    useCase: PropTypes.string,
    comments: PropTypes.string,
    dateAdded: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

ModalHeader.propTypes = {
  link: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  color: PropTypes.string.isRequired,
};

ModalContent.propTypes = {
  link: PropTypes.shape({
    description: PropTypes.string.isRequired,
    useCase: PropTypes.string,
    comments: PropTypes.string,
    dateAdded: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

InfoSection.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

DetailItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

CardActions.propTypes = {
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  isStarred: PropTypes.bool.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
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

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

InfoSection.displayName = "InfoSection";
DetailItem.displayName = "DetailItem";
CardActions.displayName = "CardActions";

export default LinkCard;
