import React from 'react';
import Navbar from '../components/Navbar';

export default function Neuroarts() {
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
        {/* Neuroarts Image */}
        <div className="absolute h-[375px] left-[846px] top-[131px] w-[648px] z-5">
          <img
            alt="Colormxr Neuroarts"
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            src="/assets/colormxr-neuro.png"
          />
        </div>

        {/* Quote */}
        <p className="absolute font-['Open_Sans'] font-normal italic leading-[normal] left-[944px] text-[#2c55d2] text-[20px] top-[630px] w-[529px] whitespace-pre-wrap z-5">
          Quote
        </p>

        {/* Text Content - Scrollable */}
        <div className="absolute left-[120px] top-[256px] w-[595px] h-[calc(100vh-256px-109px)] overflow-y-auto scrollbar-hide z-5">
          <div className="relative">
            {/* Header */}
            <div className="box-border content-stretch flex flex-col font-semibold items-start leading-[52px] pb-[8px] pt-0 px-0 text-center tracking-[-2px] w-[595px] whitespace-pre-wrap">
              <p className="font-['Inter'] not-italic relative shrink-0 text-[#f18f02] text-[48px] w-full">
                Neuroarts
              </p>
              <p className="font-['Open_Sans'] relative shrink-0 text-[36px] text-white w-full">
                Your brain on color
              </p>
            </div>

            {/* Body Text */}
            <div className="font-['Open_Sans'] font-normal leading-[23px] pl-[35px] text-[#2b2b2b] text-[16px] pt-[20px] w-[526px]">
            <p className="mb-0">
              Neuroarts is a new movement in neuroscience studying how creative arts affect brain, body, and behavior, popularized by Susan Magsamen and Ivy Ross in their book{' '}
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
            <p className="mb-0">Interactive Color Creation with Colormxr engages the brain like no other digital color tool—activating both immediate pleasure and deeper cognitive processing.</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">ICCwC is a prime neuroarts creative tool, combining aesthetics, beauty and flow in an experiential artistic practice:</p>
            <p className="mb-0">&nbsp;</p>

            <ol className="list-decimal mb-0 pl-6">
              <li className="mb-0">
                <span className="text-[#2c55d2] font-semibold">Sensory Input (Perception)</span>
                <ul className="list-disc pl-6 mb-0">
                  <li className="mb-0">Visual cortex processes colors and interactions in real time</li>
                  <li>Effect: bottom-up stimulation and initial pleasure</li>
                </ul>
              </li>
              <li className="mb-0">
                <span className="text-[#2c55d2] font-semibold">Reward / Pleasure (Beauty Response)</span>
                <ul className="list-disc pl-6 mb-0">
                  <li className="mb-0">Orbitofrontal cortex, ventral striatum, amygdala</li>
                  <li>Effect: dopamine-driven "wow" moments from harmonious or surprising combinations</li>
                </ul>
              </li>
              <li className="mb-0">
                <span className="text-[#2c55d2] font-semibold">Cognitive Exploration (Aesthetic Processing)</span>
                <ul className="list-disc pl-6 mb-0">
                  <li className="mb-0">Prefrontal cortex, parietal cortex, hippocampus</li>
                  <li>Effect: top-down evaluation, pattern recognition, and meaning-making</li>
                </ul>
              </li>
              <li className="mb-0">
                <span className="text-[#2c55d2] font-semibold">Creative Flow & Feedback</span>
                <ul className="list-disc pl-6">
                  <li className="mb-0">Interaction of reward + attention networks</li>
                  <li>Effect: immersive flow state combining learning, pleasure, and self-expression</li>
                </ul>
              </li>
            </ol>

            <p className="mb-0">&nbsp;</p>
            <p className="mb-0 text-[#2c55d2] font-semibold">Benefits:</p>
            <ul className="list-disc pl-6 mb-0">
              <li className="mb-0">Engages perception, reward, cognition, and flow</li>
              <li className="mb-0">Enhances learning, creativity, and well-being</li>
              <li>Empowers users to create aesthetic experiences in real time</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
