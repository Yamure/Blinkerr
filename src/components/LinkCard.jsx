import { selectIsFavourite, toggleFavourite } from '@slices/favourites';
import {
  BookOpen,
  Bot,
  Chrome,
  Cloud,
  Code,
  Database,
  ExternalLink,
  Globe,
  Info,
  Layout,
  Lightbulb,
  Paintbrush,
  Pencil,
  Rocket,
  Star,
  Terminal,
  X,
  Zap,
} from 'lucide-react';
import PropTypes from 'prop-types';
import React, { memo, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const categoryConfig = {
  colors: {
    Browser: '#8BC34A',
    Essentials: '#F46B6C',
    Development: '#4ECDC5',
    Design: '#F7AA80',
    Productivity: '#34A85A',
    Resources: '#292F37',
    'Project Management': '#F7B4B4',
    Documentation: '#3498db',
    'Note Taking': '#FFC107',
    Terminal: '#3498db',
    Inspiration: '#FFA07A',
    AI: '#9C27B0',
  },
  icons: {
    Browser: Chrome,
    Development: Code,
    Design: Paintbrush,
    Productivity: Zap,
    AI: Bot,
    'Project Management': Rocket,
    Terminal: Terminal,
    UI: Layout,
    Database: Database,
    Cloud: Cloud,
    Documentation: BookOpen,
    'Note Taking': Pencil,
    Inspiration: Lightbulb,
  },
};

const CardSkeleton = () => (
  <div className="bg-custom-bg/80 animate-pulse rounded-xl p-4 backdrop-blur-xs sm:p-6">
    <div className="mb-4 flex items-start space-x-3">
      <div className="bg-primary-200 h-10 w-10 shrink-0 rounded-lg" />
      <div className="min-w-0 flex-1">
        <div className="bg-primary-200 h-4 w-24 rounded-sm" />
        <div className="bg-primary-200 mt-2 h-3 w-16 rounded-sm" />
      </div>
    </div>
    <div className="bg-primary-200 h-16 rounded-sm" />
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
      className="fixed inset-0 z-100 h-screen touch-none"
      style={{ position: 'fixed', height: '100dvh' }}
    >
      <div
        className="bg-custom-bg/30 fixed inset-0 backdrop-blur-xs transition-opacity duration-200"
        onClick={onClose}
      />
      <div className="fixed inset-0 flex items-center justify-center overscroll-none p-4">
        <div
          ref={modalRef}
          onTouchStart={handleTouchStart}
          className="grainy bg-custom-bg animate-in fade-in slide-in-from-bottom-4 relative max-h-[90dvh] w-full max-w-2xl overflow-y-auto overscroll-contain rounded-xl p-6 shadow-xl duration-200"
        >
          <ModalHeader link={link} color={color} />
          <ModalContent link={link} />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full p-1.5 text-zinc-600 transition-colors hover:bg-white/20 hover:text-zinc-900"
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
    <div className="mb-6 flex items-center gap-4">
      <div
        className="flex size-12 items-center justify-center rounded-md text-white shadow-xs"
        style={{ backgroundColor: color }}
      >
        <Icon className="size-5" />
      </div>
      <div>
        <h2 className="font-heading text-text-900 text-xl">{link.title}</h2>
        <p className="font-heading text-text-500 text-sm uppercase">
          {link.category}
        </p>
      </div>
    </div>
  );
};

const ModalContent = ({ link }) => (
  <div className="space-y-6">
    <p className="font-body text-sm">{link.description}</p>

    {link.useCase && <InfoSection title="Why use it?" content={link.useCase} />}
    {link.comments && (
      <InfoSection title="Personal Notes" content={link.comments} />
    )}

    <div className="grid grid-cols-2 gap-4 border-y border-zinc-200/50 py-4">
      <DetailItem
        label="Added On"
        value={new Date(link.dateAdded).toLocaleDateString()}
      />
      <DetailItem
        label="Website"
        value={new URL(link.url).hostname.replace('www.', '')}
      />
    </div>

    <div className="flex justify-end">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-heading text-text-900 inline-flex items-center rounded-lg bg-white/80 px-4 py-2 text-sm font-medium uppercase backdrop-blur-xs transition-colors hover:bg-white/90"
      >
        Visit Website
        <ExternalLink className="ml-2 size-4" />
      </a>
    </div>
  </div>
);

const InfoSection = memo(({ title, content }) => (
  <div className="rounded-lg bg-white/50 p-4 backdrop-blur-xs">
    <h3 className="font-heading text-text-900 mb-2 text-base font-medium">
      {title}
    </h3>
    <p className="font-body text-text-600 text-sm">{content}</p>
  </div>
));

const DetailItem = memo(({ label, value }) => (
  <div>
    <p className="font-heading text-text-500 text-xs font-medium">{label}</p>
    <p className="font-body text-text-900 mt-1 text-sm">{value}</p>
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
        <div className="rounded-xl border border-red-200 bg-red-50 p-4">
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
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isModalOpen]);

  if (!link && !loading) return null;
  if (!link?.title || !link?.category || !link?.url) return null;
  if (loading) return <CardSkeleton />;

  const color = categoryConfig.colors[link.category] || '#FFFFFF';
  const Icon = categoryConfig.icons[link.category] || Globe;

  return (
    <ErrorBoundary>
      <div
        className="group relative min-h-42 rounded-xl bg-white/90 p-4 backdrop-blur-xs transition-all hover:-translate-y-1 hover:shadow-lg sm:p-6"
        style={{ backgroundColor: `${color}20` }}
      >
        <div
          className="absolute inset-0 rounded-xl opacity-0 transition-opacity group-hover:opacity-100"
          style={{
            background: `linear-gradient(45deg, ${color}05 0%, ${color}15 100%)`,
          }}
        />

        <div className="relative z-10">
          <div className="mb-4 flex items-center gap-3">
            <div
              className="flex size-10 shrink-0 items-center justify-center rounded-lg text-white shadow-xs transition group-hover:scale-110"
              style={{ backgroundColor: color }}
            >
              <Icon className="size-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <h2 className="font-heading text-text-900 group-hover:text-text-700 truncate text-lg font-medium transition-colors">
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
            className="font-heading mb-2 inline-block rounded-full px-2 text-[11px] text-white uppercase"
            style={{ backgroundColor: color }}
          >
            {link.category}
          </span>

          <p className="text-text-600 font-body line-clamp-2 text-[11px] leading-relaxed">
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
      <div className="flex shrink-0 items-center gap-1.5">
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-primary-100 rounded-full p-1.5 transition-colors"
          aria-label="Visit resource"
        >
          <ExternalLink className="text-primary-400 size-4" />
        </a>
        <button
          onClick={onOpenModal}
          className="hover:bg-primary-100 rounded-full p-1.5 transition-colors"
          aria-label="View details"
        >
          <Info className="text-primary-400 size-4" />
        </button>
        <button
          onClick={handleFavorite}
          disabled={isLoading}
          className={`rounded-full p-1.5 transition-colors ${
            isLoading ? 'cursor-not-allowed opacity-50' : 'hover:bg-primary-100'
          }`}
        >
          <Star
            fill={isStarred ? 'currentColor' : 'none'}
            className={`size-4 transition-colors ${
              isStarred
                ? 'text-yellow-400'
                : 'text-primary-400 group-hover:text-primary-500'
            } ${isLoading ? 'animate-pulse' : ''}`}
          />
        </button>
      </div>
    );
  },
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

InfoSection.displayName = 'InfoSection';
DetailItem.displayName = 'DetailItem';
CardActions.displayName = 'CardActions';

export default LinkCard;
