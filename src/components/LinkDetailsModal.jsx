import PropTypes from "prop-types";
import { useEffect } from "react";

const LinkDetailsModal = ({ link, isOpen, onClose }) => {
  // Add scroll lock when modal opens
  useEffect(() => {
    if (isOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      // Restore scroll position when modal closes
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    }

    return () => {
      // Cleanup when component unmounts
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100]"
      style={{ position: "fixed", height: "100vh" }}
    >
      <div
        className="fixed inset-0 bg-custom-bg/30 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="relative grainy bg-custom-bg rounded-lg shadow-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
          {/* Header with icon */}
          <div className="flex items-center space-x-4 mb-6">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-md text-white text-sm font-medium shadow-sm"
              style={{ backgroundColor: link.color }}
            >
              <span className="block">{link.title.charAt(0)}</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-zinc-900">
                {link.title}
              </h2>
              <p className="text-sm text-zinc-500">{link.category}</p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <div className="prose prose-zinc prose-sm">
              <p>{link.description}</p>
            </div>

            {/* Use Case */}
            {link.useCase && (
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-sm font-medium text-zinc-900 mb-2">
                  Why use it?
                </h3>
                <p className="text-sm text-zinc-600">{link.useCase}</p>
              </div>
            )}

            {/* Personal Notes */}
            {link.comments && (
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-sm font-medium text-zinc-900 mb-2">
                  Personal Notes
                </h3>
                <p className="text-sm text-zinc-600">{link.comments}</p>
              </div>
            )}

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-zinc-200/50">
              <div>
                <p className="text-xs font-medium text-zinc-500">Added On</p>
                <p className="mt-1 text-sm text-zinc-900">
                  {new Date(link.dateAdded).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-zinc-500">Website</p>
                <p className="mt-1 text-sm text-zinc-900">
                  {new URL(link.url).hostname.replace("www.", "")}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end space-x-4">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-zinc-900 bg-white/80 hover:bg-white/90 rounded-lg transition-colors backdrop-blur-sm"
              >
                Visit Website
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-white/20 text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

LinkDetailsModal.propTypes = {
  link: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    dateAdded: PropTypes.string.isRequired,
    useCase: PropTypes.string,
    comments: PropTypes.string,
    color: PropTypes.string.isRequired,
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LinkDetailsModal;
