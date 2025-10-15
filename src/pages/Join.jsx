import React from 'react';
import Navbar from '../components/Navbar';

export default function Join() {
  return (
    <div className="relative h-screen w-full overflow-hidden" style={{ background: 'linear-gradient(180deg, #EDEDED 5.37%, #EBEBE9 15.71%, #EDECEA 72.93%, #F9F9F8 86.3%, #FEFEFE 94.77%)' }}>
      <Navbar />

      {/* Footer pinned to bottom */}
      <div className="absolute left-0 bottom-0 w-full z-10">
        <div className="bg-[#fefefe] h-[61px] w-full flex items-center justify-center">
          <p className="footer-text">
            © 2025 David Witt. All rights reserved. Colormxr™
          </p>
        </div>
      </div>

      {/* Graphic Background */}
      <div className="absolute h-[945px] left-[716px] top-[48px] w-[2065px]">
        <img
          alt="Background gradient"
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src="/assets/bg-grad.jpg"
        />
      </div>

      {/* Main Content */}
      <div className="relative pt-[48px]">
        {/* Header - Centered in left space */}
        <div className="absolute box-border content-stretch flex flex-col font-semibold items-start pb-[8px] pt-0 px-0 text-center top-[181px] w-[595px] whitespace-pre-wrap z-5" style={{ left: 'calc(716px / 2)', transform: 'translateX(-50%)' }}>
          <p className="heading-hero relative shrink-0 w-full">
            Join the movement
          </p>
          <p className="heading-subhero relative shrink-0 w-full">
            Reclaim sensory play in a digital world
          </p>
        </div>

        {/* Body Text - Centered in left space */}
        <div className="absolute body-text leading-[normal] top-[308px] w-[488px] whitespace-pre-wrap z-5" style={{ left: 'calc(716px / 2)', transform: 'translateX(-50%)' }}>
          <p className="mb-0">Colormxr is part of a growing creative movement connecting artists, scientists, and educators who believe color can reconnect us to perception itself, and bring creative color play to all people, not just a select few.</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">Join the movement. Learn. Play. Explore.</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">Subscribe for updates and free lessons</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">Join our next live course</p>
          <p className="mb-0">&nbsp;</p>
          <p>Follow the development of Colormxr and the neuroarts movement</p>
        </div>
      </div>
    </div>
  );
}
