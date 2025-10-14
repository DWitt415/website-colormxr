import React from 'react';
import Navbar from '../components/Navbar';

function VideoLink({ className }) {
  return (
    <a
      className={className}
      href="https://youtu.be/A9jAzC9dK-o"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="absolute h-[203px] left-[95px] overflow-clip rounded-[8px] top-0 w-[354px]">
        <div className="absolute h-[203px] left-0 top-0 w-[354px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt="Colormxr video preview"
              className="absolute h-[101.17%] left-[-1.41%] max-w-none top-[-1.08%] w-[102.26%]"
              src="/assets/screenshot-video.png"
            />
          </div>
        </div>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="bg-[#fefefe] relative h-screen overflow-hidden">
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
      <div className="absolute h-[945px] left-0 top-0 w-[2065px]">
        <img
          alt="Colormxr background"
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src="/assets/graphic-bg.png"
        />
      </div>

      {/* Testimonial - Right Side */}
      <div className="absolute font-['Open_Sans'] font-normal h-[205px] italic leading-[normal] left-[782px] text-[#2c55d2] text-[20px] top-[714px] w-[606px] whitespace-pre-wrap z-5">
        <p className="mb-0">
          "Colormxr invites people to work with color in an intuitive way.
          <br aria-hidden="true" />
          In a way, it's Albers 2.0 for the digital age. Colormxr allows for a level of experiencing color interaction that is immediate and valuable."
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <p className="mb-0">Ed Charbonneau</p>
        <p>Author & Producer of Chromosphere: The Color Theory Podcast</p>
      </div>

      {/* Video Link */}
      <VideoLink className="absolute block cursor-pointer h-[254px] left-[65px] overflow-visible top-[319px] w-[563px] z-5" />

      {/* Main Header - Fixed */}
      <div className="absolute box-border content-stretch flex flex-col font-semibold items-start leading-[52px] left-[68px] pb-[8px] pt-0 px-0 text-center top-[189px] tracking-[-2px] w-[595px] whitespace-pre-wrap z-5">
        <p className="font-['Inter'] not-italic relative shrink-0 text-[#f18f02] text-[48px] w-full">
          Create with Colormxr
        </p>
        <p className="font-['Open_Sans'] relative shrink-0 text-[36px] text-white w-full">
          A digital color tool—and a creative toy
        </p>
      </div>

      {/* Scrollable Text Content - Below Video */}
      <div className="absolute left-[114px] top-[565px] w-[467px] h-[calc(100vh-565px-109px)] overflow-y-auto scrollbar-hide z-5">
        {/* Subheading */}
        <p className="font-['Open_Sans'] font-normal italic leading-[normal] text-[#2c55d2] text-[20px] w-[467px] whitespace-pre-wrap mb-[30px]">
          A revolutionary, hands-on approach to mixing, exploring, and creating colors—unlocking infinite creative possibilities for artists, designers, and anyone curious about color.
        </p>

        {/* Body Text */}
        <div className="font-['Open_Sans'] font-normal leading-[23px] text-[#2b2b2b] text-[16px] w-[467px] whitespace-pre-wrap">
			 <p className="mb-0">Colormxr is a more satisfying and intuitive way to work with digital color using your hand and eye to mix colors and create fine-tuned color combinations, freeing infinite creative possibilities through the interaction of colors.</p>
			 <p className="mb-0">&nbsp;</p>
          <p>Forget dry color theory, presets, and unituitive color pickers. With Colormxr, your eye, hand, and mind move together to explore digital color intuitively. See colors interact, experiment in real time, and uncover vivid, surprising, vibrant, and harmonious color relationships and combinations that standard tools can't reveal.</p>
          
         
        </div>
      </div>
    </div>
  );
}
