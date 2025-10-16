import React from 'react';
import Navbar from '../components/Navbar';

export default function Courses() {
  return (
    <div className="min-h-screen bg-[#fefefe] flex flex-col overflow-x-hidden">
      <Navbar />

      {/* Main Content - Mobile First, Scrollable */}
      <main className="flex-1 lg:overflow-hidden overflow-y-auto overflow-x-hidden">

        {/* Mobile/Tablet Layout: Single Column */}
        <div className="lg:hidden flex flex-col gap-8 container mx-auto px-5 py-8 max-w-[1400px]">
          <p className="text-center text-gray-600">Mobile layout coming soon...</p>
        </div>

        {/* Desktop Layout: Original Split Design */}
        <div className="hidden lg:block relative" style={{ minHeight: 'calc(100vh - 120px)', background: 'linear-gradient(180deg, #EDEDED 5.37%, #EBEBE9 15.71%, #EDECEA 72.93%, #F9F9F8 86.3%, #FEFEFE 94.77%)' }}>

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
            {/* Classroom Image */}
            <div className="absolute h-[991px] left-[716px] top-0 w-[1353px] z-5">
              <img
                alt="Classroom"
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                src="/assets/classroom.jpg"
              />
            </div>

            {/* Description Text - Centered in left space */}
            <div className="absolute body-text top-[318px] w-[488px] whitespace-pre-wrap z-5" style={{ left: 'calc(716px / 2)', transform: 'translateX(-50%)' }}>
              <p className="mb-0">Colormxr is based on an entirely new approach to color theory that I've developed as a complete color method and practice, called Interactive Color Creation, based on the methods of RGB+CMY colormixing.</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">Working from first principles, this is an experiential hands-on eyes-on learning approach that teaches an intuitive way of working with color, which is highly approachable for people of all levels, from trained artists + designers to absolute beginners.</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">Artists + designers learn new methods that complement what they already know about color, while newcomers learn foundational color literacy and a complete creative color method that enables them to confidently explore and create with color.</p>
              <p className="mb-0">&nbsp;</p>
              <a href="https://icc-landing-tau.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#2c55d2] hover:text-[#f18f02] transition-colors underline">
                Learn more about Interactive Color Creation &gt;&gt;
              </a>
            </div>

            {/* Header - Centered in left space */}
            <div className="absolute box-border content-stretch flex flex-col font-semibold items-start pb-[8px] pt-0 px-0 text-center top-[181px] w-[595px] whitespace-pre-wrap z-5" style={{ left: 'calc(716px / 2)', transform: 'translateX(-50%)' }}>
              <p className="heading-hero relative shrink-0 w-full">
                Color Learning
              </p>
              <p className="heading-subhero relative shrink-0 w-full">
                An entirely new approach
              </p>
            </div>

            {/* Course Cards - Centered in right space */}
            <div className="absolute box-border content-stretch flex gap-[20px] h-[495px] items-start justify-center px-[60px] py-[40px] top-[433px] w-[1280px] z-5" style={{ left: 'calc(716px + (100vw - 716px) / 2)', transform: 'translateX(-50%)' }}>
              {/* Card 1 - Colormixing 101 */}
              <div className="bg-gradient-to-b from-[#898989] h-[340px] relative rounded-[16px] shrink-0 to-[rgba(35,35,35,0.36)] w-[272px]">
                <div className="content-stretch flex flex-col h-[340px] items-center justify-center overflow-clip relative rounded-[inherit] w-[272px]">
                  <div className="relative shrink-0 w-full">
                    <div className="size-full">
                      <div className="box-border content-stretch flex flex-col gap-[32px] items-start p-[24px] relative w-full">
                        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 w-full">
                          <div className="heading-section flex flex-col justify-center relative shrink-0 w-full">
                            <p className="leading-[38px] whitespace-pre-wrap">Colormixing 101</p>
                          </div>
                          <div className="body-text-large text-light-blue flex flex-col justify-center relative shrink-0 w-full whitespace-pre-wrap">
                            <p className="mb-[16px]">A free foundational course that introduces Colormxr and the basics of RGB + CMY colormixing.</p>
                            <p>Learn more &gt;&gt;</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
              </div>

              {/* Card 2 - Interactive Color Creation */}
              <div className="bg-gradient-to-b from-[#898989] h-[340px] relative rounded-[16px] shrink-0 to-[rgba(35,35,35,0.36)] w-[272px]">
                <div className="content-stretch flex flex-col h-[340px] items-center justify-center overflow-clip relative rounded-[inherit] w-[272px]">
                  <div className="relative shrink-0 w-full">
                    <div className="size-full">
                      <div className="box-border content-stretch flex flex-col gap-[32px] items-start p-[24px] relative w-full">
                        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 w-full">
                          <div className="heading-section flex flex-col justify-center relative shrink-0 w-full">
                            <p className="leading-[38px] whitespace-pre-wrap">Interactive Color Creation - level 1</p>
                          </div>
                          <div className="body-text text-light-blue flex flex-col justify-center relative shrink-0 w-full whitespace-pre-wrap">
                            <p className="mb-0">Created for Artists + Designers, this experiential course teaches constructive color methods for creating color compositions and color palettes</p>
                            <p className="mb-0">&nbsp;</p>
                            <a href="https://colormxr.gumroad.com/l/peuvt" target="_blank" rel="noopener noreferrer" className="text-[#a7d8f7] hover:text-[#f18f02] transition-colors">
                              View course on Gumroad &gt;&gt;
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
              </div>

              {/* Card 3 - Discovering Color */}
              <div className="bg-gradient-to-b from-[#898989] h-[340px] relative rounded-[16px] shrink-0 to-[rgba(35,35,35,0.36)] w-[272px]">
                <div className="content-stretch flex flex-col h-[340px] items-center justify-center overflow-clip relative rounded-[inherit] w-[272px]">
                  <div className="relative shrink-0 w-full">
                    <div className="size-full">
                      <div className="box-border content-stretch flex flex-col gap-[32px] items-start p-[24px] relative w-full">
                        <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 w-full">
                          <div className="heading-section flex flex-col justify-center relative shrink-0 w-full">
                            <p className="leading-[38px] whitespace-pre-wrap">Discovering Color with Colormxr</p>
                          </div>
                          <div className="body-text text-light-blue flex flex-col justify-center relative shrink-0 w-full whitespace-pre-wrap">
                            <p className="mb-0">Designed for all people, this course teaches the same methods, while exploring color psychology with a neuroarts approach.</p>
                            <p>Learn more &gt;&gt;</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
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
