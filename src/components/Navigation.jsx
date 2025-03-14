import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SearchBar from "@components/SearchBar";

const Navigation = ({ currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* White overlay when menu is open */}
      <div
        className={`fixed inset-0 bg-custom-bg/50 backdrop-blur-xs transition-opacity duration-300 md:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ zIndex: 45 }}
      />

      <nav
        className="sticky top-0 bg-custom-bg/80 backdrop-blur-xs"
        style={{ zIndex: 50 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-4 relative">
            {/* Logo */}
            <Link
              to="/"
              className="text-base font-heading font-medium hover:text-text-900 transition-colors no-underline shrink-0"
            >
              <span className="text-text-900">ScientficDevs</span>
              <span className="text-green-500">/F</span>
            </Link>

            {/* Desktop - Right Side Content */}
            <div className="font-heading hidden md:flex items-center space-x-6 flex-1 justify-end">
              {/* Search Bar - Desktop */}
              {currentPage === "collections" && (
                <div className="w-72">
                  <SearchBar />
                </div>
              )}

              {/* Navigation Links */}
              <div className="font-heading flex items-center space-x-6 pl-6 border-l border-primary-200">
                <Link
                  to="/collections"
                  className="text-base text-text-500 hover:text-text-900 transition-colors no-underline whitespace-nowrap"
                >
                  Collections
                </Link>
                <Link
                  to="/about"
                  className="text-base text-text-500 hover:text-text-900 transition-colors no-underline whitespace-nowrap"
                >
                  About
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-zinc-500 hover:text-zinc-900 relative"
              style={{ zIndex: 60 }}
              aria-label="Toggle menu"
            >
              <svg
                className={`w-5 h-5 transition-colors duration-300 ${
                  isOpen ? "text-zinc-900" : "text-zinc-500"
                }`}
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

          {/* Search Bar - Mobile */}
          {currentPage === "collections" && (
            <div className="md:hidden pb-4">
              <SearchBar />
            </div>
          )}
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed inset-0 bg-custom-bg transition-all duration-300 md:hidden ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }`}
          style={{ zIndex: 55 }}
        >
          <div className="flex flex-col items-center justify-center h-screen space-y-8">
            <Link
              to="/"
              className="text-xl font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/collections"
              className="text-xl font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="text-xl font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

Navigation.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

export default Navigation;
