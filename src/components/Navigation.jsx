import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navigation = ({ currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-sm font-medium hover:text-zinc-900 transition-colors no-underline"
            >
              <span className="text-zinc-900">ScientificDevs</span>
              <span className="text-blue-500">/F</span>
            </Link>
            {currentPage !== "home" && (
              <>
                <div className="h-4 mx-4 w-px bg-zinc-200" />
                <span className="text-zinc-500">{currentPage}</span>
              </>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/collections"
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors no-underline"
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors no-underline"
            >
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-500 hover:text-zinc-900"
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-2 space-y-2 border-t border-zinc-200">
            <Link
              to="/collections"
              className="block py-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors no-underline"
              onClick={() => setIsOpen(false)}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="block py-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors no-underline"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

export default Navigation;
