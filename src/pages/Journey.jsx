import React from 'react';
import Navbar from '../components/Navbar';

export default function Journey() {
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
        {/* Right Side Content - Centered between gradient-bg and browser edge */}
        <div className="absolute top-[48px] w-[608px] z-5" style={{ left: 'calc(716px + (100vw - 716px) / 2)', transform: 'translateX(-50%)' }}>
          {/* David Image */}
          <div className="overflow-clip rounded-[12px] ml-[10px]">
            <img
              alt="David with Colormxr"
              className="block"
              src="/assets/david-colormxr.png"
            />
          </div>

          {/* Quote */}
          <div className="font-['Open_Sans'] font-normal italic leading-[normal] text-[#2c55d2] text-[20px] mt-[125px] w-[608px] whitespace-pre-wrap">
            <p className="mb-0">"As humans, we are captivated by color, and the moments when it breaks out of the ordinary and dazzles us with its appearance.</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">
              As an artist + designer, my dream was to capture this appearance in my own work, to work with color in a fluid and expressive way. Inspired by the work and teachings of Josef Albers, I wanted to create a new way to work with digital color fluidly, mixing colors with the same ease and intent shown by the great color masters. Years of synthesis and refinement have produced a truly paradigm-shifting experience that I am delighted to share with you!"
            </p>
            <p className="mb-0">&nbsp;</p>
            <p>-David</p>
          </div>
        </div>

        {/* Text Content - Scrollable - Centered in left space */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[152px] w-[595px] h-[calc(100vh-152px-109px)] overflow-y-auto scrollbar-hide z-5" style={{ left: 'calc(716px / 2)' }}>
          <div className="relative">
            {/* Header */}
            <div className="box-border content-stretch flex flex-col font-semibold items-start leading-[52px] pb-[8px] pt-0 px-0 text-center tracking-[-2px] w-[595px] whitespace-pre-wrap">
              <p className="font-['Inter'] not-italic relative shrink-0 text-[#f18f02] text-[48px] w-full">
                My color journey
              </p>
              <p className="font-['Open_Sans'] relative shrink-0 text-[36px] text-white w-full">
                From pioneer to evangelist
              </p>
            </div>

            {/* Body Text */}
            <div className="font-['Open_Sans'] font-normal leading-[23px] pl-[48px] text-[#2b2b2b] text-[16px] pt-[20px] w-[547px]">
              <p className="mb-0">My name is David Witt, and I am the creator of Colormxr and the originator of the methods of RGB+CMY colormixing.</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">What is my mission?</p>
              <p className="mb-0">To educate, entertain and inspire people through color.</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">I want to turn people on to color, and teach you an intuitive way to understand and interact with color.</p>
              <p className="mb-0">My goal inspire artists, designers and students all over the world</p>
              <p className="mb-0">to dive deeply into color, explore its infinite creative possibilities</p>
              <p className="mb-0">and create color compositions that are human expressions.</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">//</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">I'm an artist, designer and educator with over 20 years of design experience and fine arts practice. Colormixing was born out of my research from my MFA studies at Parsons School of Design in New York back in the 00s. I was dissatisfied with existing color tools. and I wanted to find a better, more intuitive way to work with color on the computer and understand color at its deepest levels, so I began an investigation into color in the parallel worlds of art + science. I desired to create a more fluid way for digital artists to work with color and develop methods closer to the way painters work with color.</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">Amazingly, I found an original way to tie it all together in a way that had never been discovered. It became the basis for colormixing and interactive color creation, which I have used professionally and in my own fine art practice in NYC and SF before I had to put iton the shelf for a few years in order to focus on my family. In the years since, there has been an explosion of color software yet, these methods still remain undiscovered - until now.</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">//</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">Why am I doing this?</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">Because I made some incredible discoveries and I want to share them with the world.</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">I found some really incredible things</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">I found a better way to work with color</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">and I want to share these methods</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">I love to play with color</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">There is something really satisfying about playing with color</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">there is a better way to work with color than the status quo of color pickers</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">I want to demystify color</p>
              <p className="mb-0">and reveal the hidden relationships between all colors</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">I want to share a new way to look at color, experience color, work with color, play with color</p>
              <p className="mb-0">&nbsp;</p>
              <p>I want to give you something, the knowledge and understanding that will enable you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
