import React from 'react';
import Navbar from '../components/Navbar';

export default function Alchemy() {
  return (
    <div className="min-h-screen bg-[#fefefe] flex flex-col overflow-x-hidden">
      <Navbar />

      {/* Main Content - Mobile First, Scrollable */}
      <main className="flex-1 lg:overflow-hidden overflow-y-auto overflow-x-hidden">

        {/* Mobile/Tablet Layout: Single Column */}
        <div className="lg:hidden flex flex-col gap-8 container mx-auto px-5 pt-20 pb-8 max-w-[1400px]" style={{ background: 'linear-gradient(180deg, #EDEDED 5.37%, #EBEBE9 15.71%, #EDECEA 72.93%, #F9F9F8 86.3%, #FEFEFE 94.77%)', minHeight: 'calc(100vh - 120px)' }}>

          {/* Hero Image */}
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <img
              src="/assets/alchemy-image.png"
              alt="The Alchemy of Color"
              className="w-full h-auto"
            />
          </div>

          {/* Hero Section */}
          <section className="text-left">
            <h1 className="heading-hero">
              The Alchemy of Color
            </h1>
            <h2 className="heading-subhero">
              Thoughts on the mysteries of color
            </h2>
          </section>

          {/* Body Content */}
          <section className="body-text space-y-4">
            <p>Color is mysterious, elusive, and endlessly surprising.</p>

            <p>
              On <span className="text-[#f18f02]">The Alchemy of Color</span>, I write about the art, science, and psychology of color—sharing insights from my practice, experiments, and teaching.
            </p>

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
          </section>

          {/* Quote */}
          <section className="subheading-blue space-y-3 py-4">
            <p className="italic">
              "With color one obtains an energy that seems to stem from witchcraft."
            </p>
            <p className="not-italic font-semibold">-Henri Matisse</p>
          </section>
        </div>

        {/* Desktop Layout: Original Split Design */}
        <div className="hidden lg:block relative" style={{ minHeight: 'calc(100vh - 120px)', background: 'linear-gradient(180deg, #EDEDED 5.37%, #EBEBE9 15.71%, #EDECEA 72.93%, #F9F9F8 86.3%, #FEFEFE 94.77%)' }}>

          {/* Graphic Background */}
          <div className="absolute h-[945px] left-[716px] top-0 w-[2065px] z-0">
            <img
              alt="Background gradient"
              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
              src="/assets/bg-grad.jpg"
            />
          </div>

          {/* Main Content */}
          <div className="relative pt-[48px]">
            {/* Alchemy Image Container */}
            <div className="absolute z-5" style={{ left: '716px', top: '48px', height: '490px', width: 'calc(100vw - 716px)' }}>
              <div className="flex items-center justify-center h-full">
                <img
                  alt="The Alchemy of Color"
                  className="w-[636px] h-auto rounded-[8px]"
                  src="/assets/alchemy-image.png"
                />
              </div>
            </div>

            {/* Description Text - Centered in left space */}
            <div className="absolute body-text top-[308px] w-[563px] whitespace-pre-wrap z-5" style={{ left: 'calc(716px / 2)', transform: 'translateX(-50%)' }}>
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
            <div className="absolute text-center top-[181px] w-[595px] z-5" style={{ left: 'calc(716px / 2)', transform: 'translateX(-50%)' }}>
              <p className="heading-hero mb-0">
                The Alchemy of Color
              </p>
              <p className="heading-subhero mb-0">
                Thoughts on the mysteries of color
              </p>
            </div>

            {/* Quote - Centered in right space */}
            <div className="absolute w-[529px] z-10" style={{ left: 'calc(716px + (100vw - 716px) / 2)', transform: 'translateX(-50%)', top: '650px' }}>
              <div className="subheading-blue space-y-3">
                <p className="italic">
                  "With color one obtains an energy that seems to stem from witchcraft."
                </p>
                <p className="not-italic font-semibold">-Henri Matisse</p>
              </div>
            </div>
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="bg-[#fefefe] py-2">
        <div className="container mx-auto px-5 text-center">
          <p className="footer-text">
            © 2025 David Witt. All rights reserved. Colormxr™
          </p>
        </div>
      </footer>
    </div>
  );
}
