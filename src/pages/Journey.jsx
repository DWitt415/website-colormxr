import React from 'react';
import Navbar from '../components/Navbar';

export default function Journey() {
  return (
    <div className="min-h-screen bg-[#fefefe] flex flex-col overflow-x-hidden">
      <Navbar />

      {/* Main Content - Mobile First, Scrollable */}
      <main className="flex-1 lg:overflow-hidden overflow-y-auto overflow-x-hidden">

        {/* Mobile/Tablet Layout: Single Column */}
        <div className="lg:hidden flex flex-col gap-8 container mx-auto px-5 py-8 max-w-[1400px]" style={{ background: 'linear-gradient(180deg, #EDEDED 5.37%, #EBEBE9 15.71%, #EDECEA 72.93%, #F9F9F8 86.3%, #FEFEFE 94.77%)', minHeight: 'calc(100vh - 120px)' }}>

          {/* Hero Image */}
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <img
              src="/assets/david-colormxr.png"
              alt="David with Colormxr"
              className="w-full h-auto"
            />
          </div>

          {/* Hero Section */}
          <section className="text-center">
            <h1 className="heading-hero mb-[2px]">
              My color journey
            </h1>
            <h2 className="heading-subhero">
              From pioneer to evangelist
            </h2>
          </section>

          {/* Body Content */}
          <section className="body-text space-y-4">
            <p>My name is David Witt, and I am the creator of Colormxr and the originator of the methods of RGB+CMY colormixing. My mission is to inspire, educate and entertain people through color. I want to turn people on to the beauty and mystery of color interaction, to inspire people all over the world to dive deeply into color, to explore its infinite creative possibilities, and create color compositions that are human expressions.</p>

            <p>I'm an artist, designer and educator with over 20 years of design experience and fine arts practice. Colormixing was born out of my research from my MFA studies at Parsons School of Design in New York back in the 00s. I was dissatisfied with existing color tools. and I wanted to find a better, more intuitive way to work with color on the computer and understand color at its deepest levels, so I began an investigation into color in the parallel worlds of art + science. I desired to create a more fluid way for digital artists to work with color and develop methods closer to the way painters work with color.</p>

            <p>Amazingly, I found an original way to tie it all together in a way that had never been discovered. It became the basis for colormixing and interactive color creation, which I have used professionally and in my own fine art practice in NYC and SF before I had to put it on the shelf for a few years in order to focus on my family. In the years since, there has been an explosion of color software yet, these methods still remain undiscovered and unknown - until now.</p>
          </section>

          {/* Quote */}
          <section className="subheading-blue space-y-3 py-4">
            <p>"As humans, we are captivated by color, and the moments when it breaks out of the ordinary and dazzles us with its appearance.</p>
            <p>
              As an artist + designer, my dream was to capture this appearance in my own work, to work with color in a fluid and expressive way. Inspired by the work and teachings of Josef Albers, I wanted to create a new way to work with digital color fluidly, mixing colors with the same ease and intent shown by the great color masters. Years of synthesis and refinement have produced a truly paradigm-shifting experience that I am delighted to share with you!"
            </p>
            <p className="not-italic">-David</p>
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
            {/* Right Side Image Container */}
            <div className="absolute z-5" style={{ left: '716px', top: '48px', height: '490px', width: 'calc(100vw - 716px)' }}>
              <div className="flex items-center justify-center h-full">
                <div className="overflow-clip rounded-[12px]">
                  <img
                    alt="David with Colormxr"
                    className="block w-[608px] h-auto"
                    src="/assets/david-colormxr.png"
                  />
                </div>
              </div>
            </div>

            {/* Quote - Below Image */}
            <div className="absolute z-5" style={{ left: 'calc(716px + (100vw - 716px) / 2)', transform: 'translateX(-50%)', top: '615px', width: '608px' }}>
              <div className="subheading-blue whitespace-pre-wrap">
                <p className="mb-0">"As humans, we are captivated by color, and the moments when it breaks out of the ordinary and dazzles us with its appearance.</p>
                <p className="mb-0">
                  As an artist + designer, my dream was to capture this appearance in my own work, to work with color in a fluid and expressive way. Inspired by the work and teachings of Josef Albers, I wanted to create a new way to work with digital color fluidly, mixing colors with the same ease and intent shown by the great color masters. Years of synthesis and refinement have produced a truly paradigm-shifting experience that I am delighted to share with you!"
                </p>
                <p>-David</p>
              </div>
            </div>

            {/* Header - Fixed - Centered in left space */}
            <div className="absolute text-center top-[181px] w-[595px] z-5" style={{ left: 'calc(716px / 2)', transform: 'translateX(-50%)' }}>
              <p className="heading-hero mb-0">
                My color journey
              </p>
              <p className="heading-subhero mb-0">
                From pioneer to evangelist
              </p>
            </div>

            {/* Body Text - Scrollable - Centered in left space */}
            <div className="absolute top-[318px] w-[547px] h-[calc(100vh-318px-109px)] overflow-y-auto scrollbar-hide z-5" style={{ left: 'calc(716px / 2)', transform: 'translateX(-50%)' }}>
              <div className="relative">
                <div className="body-text pl-[48px] w-[547px]">
                  <p className="mb-0">My name is David Witt, and I am the creator of Colormxr and the originator of the methods of RGB+CMY colormixing.  My mission is to  inspire, educate and entertain people through color. I want to turn people on to the beauty and mystery of color interaction, to inspire people all over the world to dive deeply into color, to explore its infinite creative possibilities, and create color compositions that are human expressions.</p>
                  <p className="mb-0">&nbsp;</p>
                  <p className="mb-0">&nbsp;</p>
                  <p className="mb-0">&nbsp;</p>
                  <p className="mb-0">I'm an artist, designer and educator with over 20 years of design experience and fine arts practice. Colormixing was born out of my research from my MFA studies at Parsons School of Design in New York back in the 00s. I was dissatisfied with existing color tools. and I wanted to find a better, more intuitive way to work with color on the computer and understand color at its deepest levels, so I began an investigation into color in the parallel worlds of art + science. I desired to create a more fluid way for digital artists to work with color and develop methods closer to the way painters work with color.</p>
                  <p className="mb-0">&nbsp;</p>
                  <p className="mb-0">Amazingly, I found an original way to tie it all together in a way that had never been discovered. It became the basis for colormixing and interactive color creation, which I have used professionally and in my own fine art practice in NYC and SF before I had to put it on the shelf for a few years in order to focus on my family. In the years since, there has been an explosion of color software yet, these methods still remain undiscovered and unknown - until now.</p>
                  <div className="pb-[60px]"></div>
                </div>
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
