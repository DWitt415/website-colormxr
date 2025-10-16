import React from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fefefe] flex flex-col overflow-x-hidden">
      <Navbar />

      {/* Main Content - Mobile First, Scrollable */}
      <main className="flex-1 lg:overflow-hidden overflow-y-auto overflow-x-hidden">

          {/* Mobile/Tablet Layout: Single Column */}
          <div className="lg:hidden flex flex-col gap-8 container mx-auto px-5 py-8 max-w-[1400px]">

            {/* Hero Image - Desktop Screenshot */}
            <div className="w-full rounded-lg overflow-hidden shadow-lg">
              <img
                src="/assets/colormxr-desktop.png"
                alt="Colormxr desktop interface"
                className="w-full h-auto"
              />
            </div>

            {/* Hero Section */}
            <section className="text-center space-y-4">
              <h1 className="heading-hero">
                Create with Colormxr
              </h1>
              <h2 className="heading-subhero">
                A digital color tool—and a creative toy
              </h2>
            </section>

            {/* Body Content */}
            <section className="space-y-6">
              <p className="subheading-blue">
                Colormxr is a new, human-centered way to work with digital color—part tool, part toy—that lets you mix, explore, and create color compositions intuitively with your eyes and hands.
              </p>

              <div className="body-text space-y-4">
                <p>
                  Built on the principles of Interactive Color Creation, Colormxr teaches color literacy through play, blending art, design, and neuroarts.
                </p>
                <p>
                  Discover the flow of color interaction, unlock your creative potential, and experience the joy of seeing color in motion.
                </p>
              </div>
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
                "Colormxr invites people to work with color in an intuitive way. In a way, it's Albers 2.0 for the digital age. Colormxr allows for a level of experiencing color interaction that is immediate and valuable."
              </p>
              <div className="not-italic">
                <p className="font-semibold mb-1">Ed Charbonneau</p>
                <p className="text-sm">Author & Producer of Chromosphere: The Color Theory Podcast</p>
              </div>
            </section>
          </div>

          {/* Desktop Layout: Original Split Design */}
          <div className="hidden lg:block relative" style={{ minHeight: 'calc(100vh - 120px)' }}>

            {/* Background Graphic */}
            <div className="absolute left-0 top-0 w-[2065px] h-[945px] pointer-events-none">
              <img
                alt="Colormxr background"
                className="w-full h-full object-cover object-left-top"
                src="/assets/graphic-bg.png"
              />
            </div>

            {/* Left Side Content */}
            <div className="absolute left-[68px] top-[100px] w-[595px] space-y-8 z-10">
              {/* Header */}
              <div className="text-center space-y-2">
                <h1 className="heading-hero">
                  Create with Colormxr
                </h1>
                <h2 className="heading-subhero">
                  A digital color tool—and a creative toy
                </h2>
              </div>

              {/* Video */}
              <div className="flex justify-center">
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

              {/* Body Content - No scrolling */}
              <div className="space-y-6 pr-4">
                <p className="subheading-blue">
                  A revolutionary, hands-on approach to mixing, exploring, and creating colors—unlocking infinite creative possibilities for artists, designers, and anyone curious about color.
                </p>

                <div className="body-text space-y-4">
                  <p>
                    Colormxr is a more satisfying and intuitive way to work with digital color using your hand and eye to mix colors and create fine-tuned color combinations, freeing infinite creative possibilities through the interaction of colors.
                  </p>
                  <p>
                    Forget dry color theory, presets, and unituitive color pickers. With Colormxr, your eye, hand, and mind move together to explore digital color intuitively. See colors interact, experiment in real time, and uncover vivid, surprising, vibrant, and harmonious color relationships and combinations that standard tools can't reveal.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Testimonial */}
            <div className="absolute left-[782px] top-[720px] w-[606px] z-10">
              <div className="subheading-blue space-y-3">
                <p className="italic">
                  "Colormxr invites people to work with color in an intuitive way. In a way, it's Albers 2.0 for the digital age. Colormxr allows for a level of experiencing color interaction that is immediate and valuable."
                </p>
                <div className="not-italic">
                  <p className="font-semibold">Ed Charbonneau</p>
                  <p className="text-sm">Author & Producer of Chromosphere: The Color Theory Podcast</p>
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
