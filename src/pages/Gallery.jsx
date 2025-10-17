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
    <div className="min-h-screen bg-[#fefefe] flex flex-col overflow-x-hidden">
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 lg:overflow-hidden overflow-y-auto overflow-x-hidden">

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden flex flex-col container mx-auto px-5 pt-20 pb-8 max-w-[1400px]" style={{ background: 'linear-gradient(180deg, #EDEDED 5.37%, #EBEBE9 15.71%, #EDECEA 72.93%, #F9F9F8 86.3%, #FEFEFE 94.77%)', minHeight: 'calc(100vh - 120px)' }}>

          {/* First Gallery Image */}
          <div className="w-full shadow-lg">
            <img
              alt="Color composition 1"
              className="w-full h-auto"
              src="/assets/gallery-1.png"
            />
          </div>

          {/* Hero Section */}
          <section className="text-left mt-[40px] mb-[200px]">
              <h1 className="heading-hero">
                Colormxr Gallery
              </h1>
              <h2 className="heading-subhero">
                Select examples of color compositions made with Colormxr
              </h2>
          </section>

          {/* Remaining Gallery Images */}
          <section className="flex flex-col gap-[200px]">
            <div className="w-full shadow-lg">
              <img
                alt="Color composition 2"
                className="w-full h-auto"
                src="/assets/gallery-2.png"
              />
            </div>

            <div className="w-full shadow-lg">
              <img
                alt="Color composition 3"
                className="w-full h-auto"
                src="/assets/gallery-3.png"
              />
            </div>

            <div className="w-full shadow-lg">
              <img
                alt="Color composition 4"
                className="w-full h-auto"
                src="/assets/gallery-4.png"
              />
            </div>

            <div className="w-full shadow-lg">
              <img
                alt="Color composition 5"
                className="w-full h-auto"
                src="/assets/gallery-5.png"
              />
            </div>

            <div className="w-full shadow-lg">
              <img
                alt="Color composition 6"
                className="w-full h-auto"
                src="/assets/gallery-6.png"
              />
            </div>
          </section>
        </div>

        {/* Desktop Layout - Horizontal Scrolling Gallery */}
        <div className="hidden lg:block relative" style={{ height: 'calc(100vh - 120px)' }}>
          {/* Fixed Background */}
          <div className="fixed left-0 top-0 w-[2058px] h-[886px] pointer-events-none z-0">
            <img
              alt="Background gradient"
              className="w-full h-full object-cover object-left-top"
              src="/assets/bg-grad-1.jpg"
            />
          </div>

          {/* Scrollable Gallery Content */}
          <div
            ref={scrollRef}
            className="relative overflow-x-auto overflow-y-hidden h-full scrollbar-hide cursor-grab select-none z-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className="flex gap-[190px] items-center pl-[307px] pr-[190px] h-full">
              {/* Title Card */}
              <div className="h-[553px] w-[595px] flex flex-col items-center justify-center shrink-0">
                <h1 className="heading-hero text-center mb-0">
                  Colormxr Gallery
                </h1>
                <h2 className="heading-subhero text-center">
                  Select examples of color compositions made with Colormxr
                </h2>
              </div>

              {/* Gallery Images */}
              <div className="h-[514px] w-[893px] shrink-0">
                <img
                  alt="Color composition 1"
                  className="w-full h-full object-cover"
                  src="/assets/gallery-1.png"
                />
              </div>

              <div className="h-[514px] w-[895px] shrink-0">
                <img
                  alt="Color composition 2"
                  className="w-full h-full object-cover"
                  src="/assets/gallery-2.png"
                />
              </div>

              <div className="h-[514px] w-[894px] shrink-0">
                <img
                  alt="Color composition 3"
                  className="w-full h-full object-cover"
                  src="/assets/gallery-3.png"
                />
              </div>

              <div className="h-[514px] w-[895px] shrink-0">
                <img
                  alt="Color composition 4"
                  className="w-full h-full object-cover"
                  src="/assets/gallery-4.png"
                />
              </div>

              <div className="h-[515px] w-[896px] shrink-0">
                <img
                  alt="Color composition 5"
                  className="w-full h-full object-cover"
                  src="/assets/gallery-5.png"
                />
              </div>

              <div className="h-[507px] w-[889px] shrink-0">
                <img
                  alt="Color composition 6"
                  className="w-full h-full object-cover"
                  src="/assets/gallery-6.png"
                />
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-[#fefefe] py-2 lg:absolute lg:bottom-0 lg:w-full">
        <div className="container mx-auto px-5 text-center">
          <p className="footer-text">
            © 2025 David Witt. All rights reserved. Colormxr™
          </p>
        </div>
      </footer>
    </div>
  );
}
