import React from 'react';
import Navbar from '../components/Navbar';

export default function About() {
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
      <div className="absolute left-0 top-[48px] right-0 bottom-[61px] overflow-y-auto scrollbar-hide">
        {/* Screenshot - Centered in right space */}
        <div className="absolute h-[436px] top-[59px] w-[752px] z-5" style={{ left: 'calc(716px + (100vw - 716px) / 2)', transform: 'translateX(-50%)' }}>
          <img
            alt="Colormxr Pro interface"
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            src="/assets/colormxr-pro.png"
          />
        </div>

        {/* Testimonial - Centered in right space */}
        <div className="absolute subheading-blue h-[164px] top-[615px] w-[529px] whitespace-pre-wrap z-5" style={{ left: 'calc(716px + (100vw - 716px) / 2)', transform: 'translateX(-50%)' }}>
          <p className="mb-0">"Colormxr is like a fidget toy for digital artists + designers!"</p>
          <p className="mb-0">&nbsp;</p>
          <p>
            -Margarita T.
            <br aria-hidden="true" />
            Course graduate
          </p>
        </div>

        {/* Main Description - Centered in left space */}
        <div className="absolute body-text h-[644px] leading-[0] text-[0px] top-[308px] w-[568px] whitespace-pre-wrap z-5" style={{ left: 'calc(716px / 2)', transform: 'translateX(-50%)' }}>
          <p className="leading-[normal] mb-0 text-[16px]">
            Colormxr transforms digital color work into a playful, intuitive, and immersive experience:
          </p>
          <p className="leading-[normal] mb-0 text-[16px]">&nbsp;</p>
          <p className="leading-[23px] mb-0 text-[16px]">
            <span className="text-[#2c55d2]">• A Tool / Toy for Color Play</span>
            <span> - Drag, tweak, and see colors interact instantly.</span>
          </p>
          <p className="leading-[23px] mb-0 text-[16px]">
            <span className="text-[#2c55d2]">• Hidden Relationships Revealed</span>
            <span> - Explore how all colors relate from first principles.</span>
          </p>
          <p className="leading-[23px] mb-0 text-[16px]">
            <span className="text-[#2c55d2]">• Dynamic Color Creation</span>
            <span> - Build harmonious and vibrant color compositions and palettes through thoughtful interaction.</span>
          </p>
          <p className="leading-[23px] mb-0 text-[16px]">
            <span className="text-[#2c55d2]">• Flow & Discovery</span>
            <span> - Engage in hands-on exercises that spark creativity and curiosity.</span>
          </p>
          <p className="leading-[normal] mb-0 text-[16px]">&nbsp;</p>
          <p className="subheading-orange leading-[normal] mb-0">
            WHO IS THIS FOR?
          </p>
          <p className="leading-[normal] mb-0 text-[20px]">&nbsp;</p>
          <p className="subheading-bold leading-[normal] mb-0">
            Digital Artists & Designers:
          </p>
          <ul className="list-disc mb-0 ml-6">
            <li className="mb-0">
              <span className="leading-[23px] text-[16px]">
                • Break free from unintuitive color pickers and canned palettes.
              </span>
            </li>
            <li className="mb-0">
              <span className="leading-[23px] text-[16px]">
                • Create dynamic color compositions and palettes with control, creativity, and understanding.
              </span>
            </li>
            <li className="mb-0">
              <span className="leading-[23px] text-[16px]">
                • Experienced colorists will learn new methods that complement your existing color skills.
              </span>
            </li>
            <li>
              <span className="leading-[23px] text-[16px]">
                • Beginners will learn a complete color system from first principles.
              </span>
            </li>
          </ul>
          <p className="leading-[normal] mb-0 text-[16px]">&nbsp;</p>
          <p className="subheading-bold leading-[normal] mb-0">
            Curious Minds & Creative Explorers:
          </p>
          <ul className="list-disc mb-0 ml-6">
            <li className="mb-0">
              <span className="leading-[23px] text-[16px]">
                • A STEAM learning experience teaching color literacy from first principles.
              </span>
            </li>
            <li className="mb-0">
              <span className="leading-[23px] text-[16px]">
                • Engage with color in a way that's fun, surprising, and deeply satisfying.
              </span>
            </li>
            <li>
              <span className="leading-[23px] text-[16px]">
                •   Experience playful neuroarts exercises that enhance visual thinking.
              </span>
            </li>
          </ul>
        </div>

        {/* Header - Centered in left space */}
        <div className="absolute box-border content-stretch flex flex-col font-semibold items-start pb-[8px] pt-0 px-0 text-center top-[181px] w-[595px] whitespace-pre-wrap z-5" style={{ left: 'calc(716px / 2)', transform: 'translateX(-50%)' }}>
          <p className="heading-hero relative shrink-0 w-full">
            What is Colormxr?
          </p>
          <p className="heading-subhero relative shrink-0 w-full">
            A Better Way to Work with Color
          </p>
        </div>
      </div>
    </div>
  );
}
