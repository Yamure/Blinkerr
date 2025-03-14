import SearchBar from '@components/SearchBar';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* White overlay when menu is open */}
      <div
        className={`bg-custom-bg/50 fixed inset-0 backdrop-blur-xs transition-opacity duration-300 md:hidden ${
          isOpen
            ? 'visible opacity-100'
            : 'pointer-events-none invisible opacity-0'
        }`}
        style={{ zIndex: 45 }}
      />

      <nav
        className="bg-custom-bg/80 sticky top-0 backdrop-blur-xs"
        style={{ zIndex: 50 }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative flex items-center justify-between py-4">
            {/* Logo */}
            <Link
              to="/"
              className="font-heading hover:text-text-900 shrink-0 text-base font-medium no-underline transition-colors"
            >
              <span className="text-text-900">ScientficDevs</span>
              <span className="text-green-500">/F</span>
            </Link>

            {/* Desktop - Right Side Content */}
            <div className="font-heading hidden flex-1 items-center justify-end space-x-6 md:flex">
              {/* Search Bar - Desktop */}
              {currentPage === 'collections' && (
                <div className="w-72">
                  <SearchBar />
                </div>
              )}

              {/* Navigation Links */}
              <div className="font-heading border-primary-200 flex items-center space-x-6 border-l pl-6">
                <Link
                  to="/collections"
                  className="text-text-500 hover:text-text-900 text-base whitespace-nowrap no-underline transition-colors"
                >
                  Collections
                </Link>
                <Link
                  to="/about"
                  className="text-text-500 hover:text-text-900 text-base whitespace-nowrap no-underline transition-colors"
                >
                  About
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-zinc-500 hover:text-zinc-900 md:hidden"
              style={{ zIndex: 60 }}
              aria-label="Toggle menu"
            >
              <svg
                className={`h-5 w-5 transition-colors duration-300 ${
                  isOpen ? 'text-zinc-900' : 'text-zinc-500'
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
          {currentPage === 'collections' && (
            <div className="pb-4 md:hidden">
              <SearchBar />
            </div>
          )}
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`bg-custom-bg fixed inset-0 transition-all duration-300 md:hidden ${
            isOpen
              ? 'visible opacity-100'
              : 'pointer-events-none invisible opacity-0'
          }`}
          style={{ zIndex: 55 }}
        >
          <div className="flex h-screen flex-col items-center justify-center space-y-8">
            <Link
              to="/"
              className="text-xl font-medium text-zinc-900 transition-colors hover:text-zinc-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/collections"
              className="text-xl font-medium text-zinc-900 transition-colors hover:text-zinc-600"
              onClick={() => setIsOpen(false)}
            >
              Collections
            </Link>
            <Link
              to="/about"
              className="text-xl font-medium text-zinc-900 transition-colors hover:text-zinc-600"
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
