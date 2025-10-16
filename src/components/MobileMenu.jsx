import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="xl:hidden relative z-50 p-2 text-[#939393] hover:text-[#5771ff] transition-colors"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <svg
          className="w-6 h-6"
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

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#ededed] shadow-lg transform transition-transform duration-300 ease-in-out z-40 xl:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col pt-20 px-6">
          <Link
            to="/app"
            onClick={closeMenu}
            className="py-4 border-b border-[#d0d0d0] nav-link text-left hover:text-[#5771ff] transition-colors"
          >
            Colormxr
          </Link>
          <Link
            to="/gallery"
            onClick={closeMenu}
            className="py-4 border-b border-[#d0d0d0] nav-link text-left hover:text-[#5771ff] transition-colors"
          >
            Gallery
          </Link>
          <Link
            to="/courses"
            onClick={closeMenu}
            className="py-4 border-b border-[#d0d0d0] nav-link text-left hover:text-[#5771ff] transition-colors"
          >
            Color Learning
          </Link>
          <Link
            to="/neuroarts"
            onClick={closeMenu}
            className="py-4 border-b border-[#d0d0d0] nav-link text-left hover:text-[#5771ff] transition-colors"
          >
            Neuroarts
          </Link>
          <Link
            to="/journey"
            onClick={closeMenu}
            className="py-4 border-b border-[#d0d0d0] nav-link text-left hover:text-[#5771ff] transition-colors"
          >
            My Journey
          </Link>
          <Link
            to="/alchemy"
            onClick={closeMenu}
            className="py-4 border-b border-[#d0d0d0] nav-link text-left hover:text-[#5771ff] transition-colors"
          >
            The Alchemy of Color
          </Link>
          <Link
            to="/join"
            onClick={closeMenu}
            className="py-4 border-b border-[#d0d0d0] nav-link text-left hover:text-[#5771ff] transition-colors"
          >
            Join The Movement
          </Link>
        </nav>
      </div>
    </>
  );
}
