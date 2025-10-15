import React from 'react';
import Navbar from '../components/Navbar';

export default function Neuroarts() {
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
      <div className="absolute h-[945px] left-[716px] top-[48px] w-[2065px] z-0">
        <img
          alt="Background gradient"
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src="/assets/bg-grad.jpg"
        />
      </div>

      {/* Main Content */}
      <div className="relative pt-[48px]">
        {/* Neuroarts Image - Centered in right space */}
        <div className="absolute h-[375px] top-[131px] w-[648px] z-5" style={{ left: 'calc(716px + (100vw - 716px) / 2)', transform: 'translateX(-50%)' }}>
          <img
            alt="Colormxr Neuroarts"
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            src="/assets/colormxr-neuro.png"
          />
        </div>

        {/* Quote - Centered in right space */}
        <p className="absolute subheading-blue top-[630px] w-[529px] whitespace-pre-wrap z-5" style={{ left: 'calc(716px + (100vw - 716px) / 2)', transform: 'translateX(-50%)' }}>
          "Making art is physiologically calming. And the best news is that you don't have to be great, or even good, at making art to experience the benefits."
          Susan Magsamen and Ivy Ross, Your Brain on Art
        </p>

        {/* Header - Fixed - Centered in left space */}
        <div className="absolute box-border content-stretch flex flex-col font-semibold items-start pb-[8px] pt-0 px-0 text-center top-[181px] w-[595px] whitespace-pre-wrap z-5" style={{ left: 'calc(716px / 2)', transform: 'translateX(-50%)' }}>
          <p className="heading-hero relative shrink-0 w-full">
            Neuroarts
          </p>
          <p className="heading-subhero relative shrink-0 w-full">
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
  );
}
