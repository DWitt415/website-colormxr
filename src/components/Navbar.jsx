import React from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#ededed] w-full">
      <div className="container mx-auto px-4 xl:px-5 flex items-center justify-between h-16 xl:h-auto xl:py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          {/* Logo Icon */}
          <div className="relative size-[35px] max-sm:size-[30px] flex-shrink-0">
            <img
              alt="Colormxr logo"
              className="w-full h-full object-contain"
              src="/assets/logo-bg.png"
            />
          </div>

          {/* Logo Text */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-[18px] max-sm:text-[14px] font-semibold text-[#939393] whitespace-nowrap">
              Colormxr
            </span>
            <span className="hidden sm:inline text-[18px] max-sm:text-[14px] font-light text-[#bfbfbf]">
              |
            </span>
            <span className="hidden sm:inline text-[18px] font-light text-[#5d83ff] whitespace-nowrap">
              Interactive color play
            </span>
          </div>
        </Link>

        {/* Desktop Menu - Hidden on mobile */}
        <div className="hidden xl:flex gap-1 items-center flex-wrap">
          <Link to="/app" className="px-2 py-2 nav-link hover:text-[#5771ff] transition-colors whitespace-nowrap">
            Colormxr
          </Link>
          <Link to="/gallery" className="px-2 py-2 nav-link hover:text-[#5771ff] transition-colors whitespace-nowrap">
            Gallery
          </Link>
          <Link to="/courses" className="px-2 py-2 nav-link hover:text-[#5771ff] transition-colors whitespace-nowrap">
            Color Learning
          </Link>
          <Link to="/neuroarts" className="px-2 py-2 nav-link hover:text-[#5771ff] transition-colors whitespace-nowrap">
            Neuroarts
          </Link>
          <Link to="/journey" className="px-2 py-2 nav-link hover:text-[#5771ff] transition-colors whitespace-nowrap">
            My Journey
          </Link>
          <Link to="/alchemy" className="px-2 py-2 nav-link hover:text-[#5771ff] transition-colors whitespace-nowrap">
            The Alchemy of Color
          </Link>
          <Link to="/join" className="px-2 py-2 nav-link hover:text-[#5771ff] transition-colors whitespace-nowrap">
            Connect
          </Link>
        </div>

        {/* Mobile Menu - Shown on mobile/tablet */}
        <MobileMenu />
      </div>
    </nav>
  );
}
