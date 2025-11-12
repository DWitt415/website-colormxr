import React from 'react';
import Navbar from '../components/Navbar';

export default function Courses() {
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
              src="/assets/classroom-sm.jpg"
              alt="Classroom"
              className="w-full h-auto"
            />
          </div>

          {/* Hero Section */}
          <section className="text-left">
            <h1 className="heading-hero">
              Interactive Color Creation
            </h1>
            <h2 className="heading-subhero">
              An entirely new approach
            </h2>
          </section>

          {/* Body Content */}
          <section className="body-text space-y-4">
            <p>Colormxr is based on an entirely new approach to color theory that I've developed as a complete color method and practice, called Interactive Color Creation, based on the methods of RGB+CMY colormixing.</p>

            <p>Working from first principles, this is an experiential hands-on eyes-on learning approach that teaches an intuitive way of working with color, which is highly approachable for people of all levels, from trained artists + designers to absolute beginners.</p>

            <p>Artists + designers learn new methods that complement what they already know about color, while newcomers learn foundational color literacy and a complete creative color method that enables them to confidently explore and create with color.</p>

            <p>
              <a href="https://icc-landing-tau.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#2c55d2] hover:text-[#f18f02] transition-colors underline font-semibold">
                Learn more about Interactive Color Creation &gt;&gt;
              </a>
            </p>
          </section>

          {/* Video Embed */}
          <section className="w-full">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/A9jAzC9dK-o"
                title="Introducing Colormxr"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>

          {/* Testimonial */}
          <section className="subheading-blue space-y-3 py-4">
            <p className="italic">
              "This is a great sandbox for playing with color and helps you understand color in a simple but intuitive way."
            </p>
            <div className="not-italic">
              <p>—Pertti Kainulainen</p>
            </div>
          </section>
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
            <div className="absolute body-text top-[513px] w-[488px] whitespace-pre-wrap z-5" style={{ left: 'calc(716px / 2)', transform: 'translateX(-50%)' }}>
              <p className="mb-0">Colormxr is based on an entirely new approach to color theory that I've developed as a complete color method and practice, called Interactive Color Creation, based on the methods of RGB+CMY colormixing.</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">Working from first principles, this is an experiential hands-on eyes-on learning approach that teaches an intuitive way of working with color, which is highly approachable for people of all levels, from trained artists + designers to absolute beginners.</p>
              <p className="mb-0">&nbsp;</p>
              <p className="mb-0">Artists + designers learn new methods that complement what they already know about color, while newcomers learn foundational color literacy and a complete creative color method that enables them to confidently explore and create with color.</p>
              <p className="mb-0">&nbsp;</p>
              <a href="https://icc-landing-tau.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#2c55d2] hover:text-[#f18f02] transition-colors underline font-semibold">
                Learn more about Interactive Color Creation &gt;&gt;
              </a>
            </div>

            {/* Header - Centered in left space */}
            <div className="absolute box-border content-stretch flex flex-col font-semibold items-start pb-[8px] pt-0 px-0 text-center top-[181px] w-[595px] whitespace-pre-wrap z-5" style={{ left: 'calc(716px / 2)', transform: 'translateX(-50%)' }}>
              <p className="heading-hero relative shrink-0 w-full">
                Interactive Color Creation
              </p>
              <p className="heading-subhero relative shrink-0 w-full">
                An entirely new approach
              </p>
            </div>

            {/* Video */}
            <div className="absolute z-5" style={{ left: 'calc(716px / 2)', transform: 'translateX(-50%)', top: '290px' }}>
              <a
                href="https://youtu.be/A9jAzC9dK-o"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  alt="Colormxr video preview"
                  className="w-[354px] h-[203px] rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  src="/assets/screenshot-video.png"
                />
              </a>
            </div>

            {/* Testimonial - Overlay on classroom image */}
            <div className="absolute w-[606px] z-10" style={{ left: 'calc(716px + (100vw - 716px) / 2)', transform: 'translateX(-50%)', top: '650px' }}>
              <div className="subheading-blue space-y-3">
                <p className="italic">
                  "This is a great sandbox for playing with color and helps you understand color in a simple but intuitive way."
                </p>
                <div className="not-italic">
                  <p>—Pertti Kainulainen</p>
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
