import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Join() {
  return (
    <div className="relative min-h-screen w-full" style={{ background: 'linear-gradient(180deg, #EDEDED 5.37%, #EBEBE9 15.71%, #EDECEA 72.93%, #F9F9F8 86.3%, #FEFEFE 94.77%)' }}>
      <Navbar />
      <Footer />

      {/* Graphic Background */}
      <div className="absolute h-[945px] left-[716px] top-[48px] w-[2065px]">
        <img
          alt="Background gradient"
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
          src="/assets/bg-grad.jpg"
        />
      </div>

      {/* Main Content */}
      <div className="relative pt-[48px]">
        {/* Header */}
        <div className="absolute box-border content-stretch flex flex-col font-semibold items-start leading-[52px] left-[66px] pb-[8px] pt-0 px-0 text-center top-[237px] tracking-[-2px] w-[595px] whitespace-pre-wrap">
          <p className="font-['Inter'] not-italic relative shrink-0 text-[#f18f02] text-[48px] w-full">
            Join the movement
          </p>
          <p className="font-['Open_Sans'] relative shrink-0 text-[36px] text-white w-full">
            Reclaim sensory play in a digital world
          </p>
        </div>

        {/* Body Text */}
        <div className="absolute font-['Open_Sans'] font-normal leading-[normal] left-[120px] text-[#2b2b2b] text-[16px] top-[396px] w-[488px] whitespace-pre-wrap">
          <p className="mb-0">Colormxr is part of a growing creative movement connecting artists, scientists, and educators who believe color can reconnect us to perception itself, and bring creative color play to all people, not just a select few.</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">Join the movement. Learn. Play. Explore.</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">Subscribe for updates and free lessons</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">Join our next live course</p>
          <p className="mb-0">&nbsp;</p>
          <p>Follow the development of Colormxr and the neuroarts movement</p>
        </div>
      </div>
    </div>
  );
}
