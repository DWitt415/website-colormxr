import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
    <div className="bg-[#fefefe] relative min-h-screen">
      <Navbar />
      <Footer />

      {/* Graphic Background */}
      <div className="absolute h-[945px] left-0 top-0 w-[2065px]">
        <img
          alt="Colormxr background"
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src="/assets/graphic-bg.png"
        />
      </div>

      {/* Main Content */}
      <div className="absolute h-[241px] left-[114px] top-[752px] w-[467px]">
        {/* Testimonial */}
        <div className="absolute font-['Open_Sans'] font-normal h-[205px] italic leading-[normal] left-[668px] text-[#2c55d2] text-[20px] top-[-8px] w-[606px] whitespace-pre-wrap">
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

        {/* Body Text */}
        <div className="absolute font-['Open_Sans'] font-normal h-[342px] leading-[23px] left-0 text-[#2b2b2b] text-[16px] top-0 w-[467px] whitespace-pre-wrap">
          <p className="mb-0">Forget dry color theory, presets, and canned palettes. With Colormxr, your eye, hand, and mind move together to explore digital color intuitively. See colors interact, experiment in real time, and uncover vivid, surprising, vibrant, and harmonious color relationships and combinations that standard tools can't reveal.</p>
          <p className="mb-0">&nbsp;</p>
          <p>Colormxr is a more satisfying and intuitive way to work with digital color using your hand and eye to mix colors and create fine-tuned color combinations, freeing infinite creative possibilities through the interaction of colors.</p>
        </div>

        {/* Subheading */}
        <p className="absolute font-['Open_Sans'] font-normal h-[125px] italic leading-[normal] left-[12px] text-[#2c55d2] text-[20px] top-[-137px] w-[467px] whitespace-pre-wrap">
          A revolutionary, hands-on approach to mixing, exploring, and creating colors—unlocking infinite creative possibilities for artists, designers, and anyone curious about color.
        </p>

        {/* Video Link */}
        <VideoLink className="absolute block cursor-pointer h-[254px] left-[-49px] overflow-visible top-[-433px] w-[563px]" />
      </div>

      {/* Main Header */}
      <div className="absolute box-border content-stretch flex flex-col font-semibold items-start leading-[52px] left-[68px] pb-[8px] pt-0 px-0 text-center top-[189px] tracking-[-2px] w-[595px] whitespace-pre-wrap">
        <p className="font-['Inter'] not-italic relative shrink-0 text-[#f18f02] text-[48px] w-full">
          Create with Colormxr
        </p>
        <p className="font-['Open_Sans'] relative shrink-0 text-[36px] text-white w-full">
          A digital color tool—and a creative toy
        </p>
      </div>
    </div>
  );
}
