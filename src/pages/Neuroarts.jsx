import React from 'react';
import Navbar from '../components/Navbar';

export default function Neuroarts() {
  return (
    <div className="min-h-screen bg-[#fefefe] flex flex-col overflow-x-hidden">
      <Navbar />

      {/* Main Content - Mobile First, Scrollable */}
      <main className="flex-1 lg:overflow-hidden overflow-y-auto overflow-x-hidden">

        {/* Mobile/Tablet Layout: Single Column */}
        <div className="lg:hidden flex flex-col gap-8 container mx-auto px-5 pt-20 pb-8 max-w-[1400px]" style={{ background: 'linear-gradient(180deg, #EDEDED 5.37%, #EBEBE9 15.71%, #EDECEA 72.93%, #F9F9F8 86.3%, #FEFEFE 94.77%)', minHeight: 'calc(100vh - 120px)' }}>

          {/* Hero Image */}
          <div className="w-full">
            <img
              src="/assets/colormxr-neuro.png"
              alt="Colormxr Neuroarts"
              className="w-full h-auto"
            />
          </div>

          {/* Hero Section */}
          <section className="text-left">
            <h1 className="heading-hero">
              Neuroarts
            </h1>
            <h2 className="heading-subhero">
              Your brain on color
            </h2>
          </section>

          {/* Body Content */}
          <section className="body-text space-y-4">
            <p>
              Neuroarts is a growing movement in neuroscience studying how practicing creative arts positively affects your brain, body, and behavior, as popularized by Susan Magsamen and Ivy Ross in their breakthrough 2022 book{' '}
              <a
                className="cursor-pointer text-[#f18f02] hover:underline"
                href="https://yourbrainonart.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Your Brain on Art.
              </a>
            </p>

            <p>Combining Colormxr with Ix Color Creation, yields a prime neuroarts practice, combining aesthetics, beauty and flow in an experiential artistic practice, activating both immediate pleasure and deeper cognitive processing. Human psychophysical response to Ix Color Creation:</p>

            <div className="space-y-3">
              <div>
                <p className="text-[#2c55d2] font-semibold mb-1">Sensory Input (Perception)</p>
                <p className="mb-1">Visual cortex processes colors and interactions in real time</p>
                <p>Effect: bottom-up stimulation and initial pleasure</p>
              </div>

              <div>
                <p className="text-[#2c55d2] font-semibold mb-1">Reward / Pleasure (Beauty Response)</p>
                <p className="mb-1">Orbitofrontal cortex, ventral striatum, amygdala</p>
                <p>Effect: dopamine-driven "wow" moments from harmonious or surprising combinations</p>
              </div>

              <div>
                <p className="text-[#2c55d2] font-semibold mb-1">Cognitive Exploration (Aesthetic Processing)</p>
                <p className="mb-1">Prefrontal cortex, parietal cortex, hippocampus</p>
                <p>Effect: top-down evaluation, pattern recognition, and meaning-making</p>
              </div>

              <div>
                <p className="text-[#2c55d2] font-semibold mb-1">Creative Flow & Feedback</p>
                <p className="mb-1">Interaction of reward + attention networks</p>
                <p>Effect: immersive flow state combining learning, pleasure, and self-expression</p>
              </div>
            </div>

            <div>
              <p className="text-[#2c55d2] font-semibold mb-2">Benefits:</p>
              <p className="mb-1">Engages perception, reward, cognition, and flow</p>
              <p className="mb-1">Enhances learning, creativity, and well-being</p>
              <p>Empowers users to create aesthetic experiences in real time</p>
            </div>
          </section>

          {/* Quote */}
          <section className="subheading-blue space-y-3 py-4">
            <p className="italic">
              "Making art is physiologically calming. And the best news is that you don't have to be great, or even good, at making art to experience the benefits."
            </p>
            <div className="not-italic">
              <p>—Susan Magsamen and Ivy Ross</p>
            </div>
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
            {/* Neuroarts Image Container */}
            <div className="absolute z-5" style={{ left: '716px', top: '48px', height: '490px', width: 'calc(100vw - 716px)' }}>
              <div className="flex items-center justify-center h-full">
                <img
                  alt="Colormxr Neuroarts"
                  className="w-[648px] h-auto"
                  src="/assets/colormxr-neuro.png"
                />
              </div>
            </div>

            {/* Quote - Centered in right space */}
            <div className="absolute top-[630px] w-[529px] z-5" style={{ left: 'calc(716px + (100vw - 716px) / 2)', transform: 'translateX(-50%)' }}>
              <div className="subheading-blue space-y-3">
                <p className="italic">
                  "Making art is physiologically calming. And the best news is that you don't have to be great, or even good, at making art to experience the benefits."
                </p>
                <div className="not-italic">
                  <p>—Susan Magsamen and Ivy Ross</p>
                </div>
              </div>
            </div>

            {/* Header - Fixed - Centered in left space */}
            <div className="absolute text-center top-[181px] w-[595px] z-5" style={{ left: 'calc(716px / 2)', transform: 'translateX(-50%)' }}>
              <p className="heading-hero mb-0">
                Neuroarts
              </p>
              <p className="heading-subhero mb-0">
                Your brain on color
              </p>
            </div>

            {/* Body Text - Scrollable - Centered in left space */}
            <div className="absolute top-[318px] w-[595px] h-[calc(100vh-318px-109px)] overflow-y-auto scrollbar-hide z-5" style={{ left: 'calc(716px / 2)', transform: 'translateX(-50%)' }}>
              <div className="relative">
                <div className="body-text pl-[35px] w-[595px]">
                <p className="mb-0">
                  Neuroarts is a growing movement in neuroscience studying how practicing creative arts positively affects your brain, body, and behavior, as popularized by Susan Magsamen and Ivy Ross in their groundbreaking 2022 book{' '}
                  <a
                    className="cursor-pointer text-[#f18f02] hover:underline"
                    href="https://yourbrainonart.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Your Brain on Art.
                  </a>
                </p>
                <p className="mb-0">&nbsp;</p>
                <p className="mb-0">Combining Colormxr with Ix Color Creation, yields a prime neuroarts practice, combining aesthetics, beauty and flow in an experiential artistic practice, activating both immediate pleasure and deeper cognitive processing.  Human psychophysical response to Ix Color Creation:</p>
                <p className="mb-0">&nbsp;</p>

                <p className="mb-0"><span className="text-[#2c55d2] font-semibold">Sensory Input (Perception)</span></p>
                <p className="mb-0">Visual cortex processes colors and interactions in real time</p>
                <p className="mb-0">Effect: bottom-up stimulation and initial pleasure</p>
                <p className="mb-0"><span className="text-[#2c55d2] font-semibold">Reward / Pleasure (Beauty Response)</span></p>
                <p className="mb-0">Orbitofrontal cortex, ventral striatum, amygdala</p>
                <p className="mb-0">Effect: dopamine-driven "wow" moments from harmonious or surprising combinations</p>
                <p className="mb-0"><span className="text-[#2c55d2] font-semibold">Cognitive Exploration (Aesthetic Processing)</span></p>
                <p className="mb-0">Prefrontal cortex, parietal cortex, hippocampus</p>
                <p className="mb-0">Effect: top-down evaluation, pattern recognition, and meaning-making</p>
                <p className="mb-0"><span className="text-[#2c55d2] font-semibold">Creative Flow & Feedback</span></p>
                <p className="mb-0">Interaction of reward + attention networks</p>
                <p className="mb-0">Effect: immersive flow state combining learning, pleasure, and self-expression</p>

                <p className="mb-0">&nbsp;</p>
                <p className="mb-0 text-[#2c55d2] font-semibold">Benefits:</p>
                <p className="mb-0">Engages perception, reward, cognition, and flow</p>
                <p className="mb-0">Enhances learning, creativity, and well-being</p>
                <p className="mb-0">Empowers users to create aesthetic experiences in real time</p>
                <div className="pb-[50px]"></div>
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
