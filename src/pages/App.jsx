import React from 'react';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-[#fefefe] flex flex-col overflow-x-hidden">
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 lg:overflow-hidden overflow-y-auto overflow-x-hidden">

        {/* Mobile/Tablet Layout: Single Column */}
        <div className="lg:hidden flex flex-col gap-8 container mx-auto px-5 py-8 max-w-[1400px]" style={{ background: 'linear-gradient(180deg, #EDEDED 5.37%, #EBEBE9 15.71%, #EDECEA 72.93%, #F9F9F8 86.3%, #FEFEFE 94.77%)', minHeight: 'calc(100vh - 120px)' }}>

          {/* Hero Image */}
          <div className="w-full">
            <img
              src="/assets/colormxr-pro.png"
              alt="Colormxr Pro interface"
              className="w-full h-auto"
            />
          </div>

          {/* Hero Section */}
          <section className="text-center">
            <h1 className="heading-hero mb-[2px]">
              What is Colormxr?
            </h1>
            <h2 className="heading-subhero">
              A Better Way to Work with Color
            </h2>
          </section>

          {/* Body Content */}
          <section className="space-y-6">
            <p className="body-text">
              Colormxr transforms digital color work into a playful, intuitive, and immersive experience:
            </p>

            <div className="body-text space-y-4">
              <p>
                <span className="text-[#2c55d2] font-semibold">• A Tool / Toy for Color Play</span>
                <span> - Drag, tweak, and see colors interact instantly.</span>
              </p>
              <p>
                <span className="text-[#2c55d2] font-semibold">• Hidden Relationships Revealed</span>
                <span> - Explore how all colors relate from first principles.</span>
              </p>
              <p>
                <span className="text-[#2c55d2] font-semibold">• Dynamic Color Creation</span>
                <span> - Build harmonious and vibrant color compositions and palettes through thoughtful interaction.</span>
              </p>
              <p>
                <span className="text-[#2c55d2] font-semibold">• Flow & Discovery</span>
                <span> - Engage in hands-on exercises that spark creativity and curiosity.</span>
              </p>
            </div>

            <p className="subheading-orange">
              WHO IS THIS FOR?
            </p>

            <div className="body-text space-y-4">
              <p className="subheading-bold">
                Digital Artists & Designers:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Break free from unintuitive color pickers and canned palettes.</li>
                <li>Create dynamic color compositions and palettes with control, creativity, and understanding.</li>
                <li>Experienced colorists will learn new methods that complement your existing color skills.</li>
                <li>Beginners will learn a complete color system from first principles.</li>
              </ul>

              <p className="subheading-bold">
                Curious Minds & Creative Explorers:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>A STEAM learning experience teaching color literacy from first principles.</li>
                <li>Engage with color in a way that's fun, surprising, and deeply satisfying.</li>
                <li>Experience playful neuroarts exercises that enhance visual thinking.</li>
              </ul>
            </div>
          </section>

          {/* Testimonial */}
          <section className="subheading-blue space-y-3 py-4">
            <p className="mb-2">"Colormxr is like a fidget toy for digital artists + designers!"</p>
            <p className="not-italic">
              -Margarita T.
              <br />
              Course graduate
            </p>
          </section>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative" style={{ minHeight: 'calc(100vh - 120px)', background: 'linear-gradient(180deg, #EDEDED 5.37%, #EBEBE9 15.71%, #EDECEA 72.93%, #F9F9F8 86.3%, #FEFEFE 94.77%)' }}>

          {/* Background Graphic */}
          <div className="absolute left-[716px] top-0 w-[2065px] h-[945px] pointer-events-none z-0">
            <img
              alt="Background gradient"
              className="w-full h-full object-cover object-left-top"
              src="/assets/bg-grad.jpg"
            />
          </div>

          {/* Left Side Content */}
          <div className="absolute left-[68px] top-[100px] w-[595px] z-10" style={{ height: 'calc(100vh - 220px)' }}>
            {/* Header */}
            <div className="text-center space-y-2">
              <h1 className="heading-hero">
                What is Colormxr?
              </h1>
              <h2 className="heading-subhero">
                A Better Way to Work with Color
              </h2>
            </div>

            {/* Body Content - Scrollable */}
            <div className="space-y-6 pr-4 mt-8 overflow-y-auto scrollbar-hide" style={{ height: 'calc(100% - 120px)' }}>
              <p className="body-text">
                Colormxr transforms digital color work into a playful, intuitive, and immersive experience:
              </p>

              <div className="body-text space-y-4">
                <p>
                  <span className="text-[#2c55d2] font-semibold">• A Tool / Toy for Color Play</span>
                  <span> - Drag, tweak, and see colors interact instantly.</span>
                </p>
                <p>
                  <span className="text-[#2c55d2] font-semibold">• Hidden Relationships Revealed</span>
                  <span> - Explore how all colors relate from first principles.</span>
                </p>
                <p>
                  <span className="text-[#2c55d2] font-semibold">• Dynamic Color Creation</span>
                  <span> - Build harmonious and vibrant color compositions and palettes through thoughtful interaction.</span>
                </p>
                <p>
                  <span className="text-[#2c55d2] font-semibold">• Flow & Discovery</span>
                  <span> - Engage in hands-on exercises that spark creativity and curiosity.</span>
                </p>
              </div>

              <p className="subheading-orange">
                WHO IS THIS FOR?
              </p>

              <div className="body-text space-y-4">
                <p className="subheading-bold">
                  Digital Artists & Designers:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Break free from unintuitive color pickers and canned palettes.</li>
                  <li>Create dynamic color compositions and palettes with control, creativity, and understanding.</li>
                  <li>Experienced colorists will learn new methods that complement your existing color skills.</li>
                  <li>Beginners will learn a complete color system from first principles.</li>
                </ul>

                <p className="subheading-bold">
                  Curious Minds & Creative Explorers:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>A STEAM learning experience teaching color literacy from first principles.</li>
                  <li>Engage with color in a way that's fun, surprising, and deeply satisfying.</li>
                  <li>Experience playful neuroarts exercises that enhance visual thinking.</li>
                </ul>
              </div>
              <div className="pb-[80px]"></div>
            </div>
          </div>

          {/* Right Side - Screenshot Container */}
          <div className="absolute z-5" style={{ left: '716px', top: '48px', height: '490px', width: 'calc(100vw - 716px)' }}>
            <div className="flex items-center justify-center h-full">
              <img
                src="/assets/colormxr-pro.png"
                alt="Colormxr Pro interface"
                className="w-[752px] h-auto"
              />
            </div>
          </div>

          {/* Right Side - Testimonial */}
          <div className="absolute top-[550px] w-[529px] z-10" style={{ left: 'calc(716px + (100vw - 716px) / 2)', transform: 'translateX(-50%)' }}>
            <div className="subheading-blue">
              <p className="mb-2">"Colormxr is like a fidget toy for digital artists + designers!"</p>
              <p className="not-italic">
                -Margarita T.
                <br />
                Course graduate
              </p>
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
