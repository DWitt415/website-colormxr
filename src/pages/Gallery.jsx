import React, { useRef, useState } from 'react';
import Navbar from '../components/Navbar';

export default function Gallery() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

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

      {/* Fixed Graphic Background */}
      <div className="fixed h-[886px] left-0 top-0 w-[2058px] pointer-events-none z-0">
        <img
          alt="Background gradient"
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src="/assets/bg-grad-1.jpg"
        />
      </div>

      {/* Scrollable Gallery Content */}
      <div
        ref={scrollRef}
        className="relative pt-[48px] pb-[100px] overflow-x-auto overflow-y-hidden z-10 scrollbar-hide cursor-grab select-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="flex gap-[190px] items-start pl-[307px] pr-[190px] pt-[127px]">
          {/* Title Card */}
          <div className="h-[553px] relative shrink-0 w-[595px] flex flex-col items-center justify-center">
            <div className="font-['Inter'] font-semibold leading-[52px] not-italic text-[48px] text-center tracking-[-2px] whitespace-nowrap mb-[14px]">
              <p className="mb-0 text-[#f18f02]">Colormxr Gallery</p>
            </div>
            <p className="font-['Open_Sans'] font-normal leading-[23px] text-[#2b2b2b] text-[16px] text-center">
              Select examples of  color compositions made with Colormxr
            </p>
          </div>

          {/* Gallery Images */}
          <div className="h-[514px] relative shrink-0 w-[893px]">
            <img
              alt="Color composition 1"
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src="/assets/gallery-1.png"
            />
          </div>

          <div className="h-[514px] relative shrink-0 w-[895px]">
            <img
              alt="Color composition 2"
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src="/assets/gallery-2.png"
            />
          </div>

          <div className="h-[514px] relative shrink-0 w-[894px]">
            <img
              alt="Color composition 3"
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src="/assets/gallery-3.png"
            />
          </div>

          <div className="h-[514px] relative shrink-0 w-[895px]">
            <img
              alt="Color composition 4"
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src="/assets/gallery-4.png"
            />
          </div>

          <div className="h-[515px] relative shrink-0 w-[896px]">
            <img
              alt="Color composition 5"
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src="/assets/gallery-5.png"
            />
          </div>

          <div className="h-[507px] relative shrink-0 w-[889px]">
            <img
              alt="Color composition 6"
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src="/assets/gallery-6.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
