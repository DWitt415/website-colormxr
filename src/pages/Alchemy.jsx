import React from 'react';
import Navbar from '../components/Navbar';

export default function Alchemy() {
  return (
    <div className="relative h-screen w-full overflow-hidden" style={{ background: 'linear-gradient(180deg, #EDEDED 5.37%, #EBEBE9 15.71%, #EDECEA 72.93%, #F9F9F8 86.3%, #FEFEFE 94.77%)' }}>
      <Navbar />

      {/* Footer pinned to bottom */}
      <div className="absolute left-0 bottom-0 w-full z-10">
        <div className="bg-[#fefefe] h-[61px] w-full flex items-center justify-center">
          <p className="font-['Open_Sans'] font-light leading-[24px] text-[#5771ff] text-[16px] tracking-[0.2px]">
            © 2025 David Witt. All rights reserved. Colormxr™
          </p>
        </div>
      </div>

      {/* Graphic Background */}
      <div className="absolute h-[945px] left-[716px] top-[48px] w-[2065px] z-0">
        <img
          alt="Background gradient"
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src="/assets/bg-grad.jpg"
        />
      </div>

      {/* Main Content */}
      <div className="relative pt-[48px]">
        {/* Alchemy Image - Centered in right space */}
        <div className="absolute h-[395px] top-[57px] w-[636px] z-5" style={{ left: 'calc(716px + (100vw - 716px) / 2)', transform: 'translateX(-50%)' }}>
          <img
            alt="The Alchemy of Color"
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full rounded-[8px]"
            src="/assets/alchemy-image.png"
          />
        </div>

        {/* Description Text - Centered in left space */}
        <div className="absolute font-['Open_Sans'] font-normal leading-[23px] text-[#2b2b2b] text-[16px] top-[308px] w-[563px] whitespace-pre-wrap z-5" style={{ left: 'calc(716px / 2)', transform: 'translateX(-50%)' }}>
          <p className="mb-0">Color is mysterious, elusive, and endlessly surprising.</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">
            On <span className="text-[#f18f02]">The Alchemy of Color</span>, I write about the art, science, and psychology of color—sharing insights from my practice, experiments, and teaching.
          </p>
          <p className="mb-0">&nbsp;</p>
          <p>
            Visit{' '}
            <a
              className="cursor-pointer text-[#f18f02] hover:underline"
              href="http://thealchemyofcolor.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Alchemy of Color
            </a>
            {' '}to explore and learn more.
          </p>
        </div>

        {/* Header - Centered in left space */}
        <div className="absolute box-border content-stretch flex flex-col font-semibold items-start leading-[52px] pb-[8px] pt-0 px-0 text-center top-[181px] tracking-[-2px] w-[595px] whitespace-pre-wrap z-5" style={{ left: 'calc(716px / 2)', transform: 'translateX(-50%)' }}>
          <p className="font-['Inter'] not-italic relative shrink-0 text-[#f18f02] text-[48px] w-full">
            The Alchemy of Color
          </p>
          <p className="font-['Open_Sans'] relative shrink-0 text-[36px] text-white w-full">
            Thoughts on the mysteries of color
          </p>
        </div>
      </div>
    </div>
  );
}
