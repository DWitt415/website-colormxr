import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-[#ededed] box-border content-stretch flex items-center justify-between left-0 overflow-clip px-[20px] py-0 w-full">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1539px]">
        {/* Logo */}
        <Link to="/" className="h-[36px] relative shrink-0 w-[313px]">
          <p className="absolute bottom-[17.75%] font-['Open_Sans'] font-semibold leading-[24px] left-[14.38%] right-0 text-[0px] text-[18px] text-white top-[15.58%]">
            <span className="text-[#939393]">
              Colormxr
            </span>
            <span className="text-[#bfbfbf]">
              {" "}
            </span>
            <span className="font-light text-[#bfbfbf]">
              |
            </span>{" "}
            <span className="font-light text-[#5d83ff]">
              Interactive color play
            </span>
          </p>
          <div className="absolute left-0 size-[35px] top-[0.61px]">
            <div className="absolute bottom-[0.63%] left-0 right-[0.63%] top-0">
              <img
                alt="Colormxr logo"
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                src="/assets/logo-bg.png"
              />
            </div>
            <div className="absolute aspect-[900/900] left-0 right-0 top-0">
              <div className="absolute left-0 size-[35px] top-0">
                <div className="absolute flex items-center justify-center left-0 size-[17.5px] top-0">
                  <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                    <div className="overflow-clip relative size-[17.5px]">
                      <div className="absolute flex items-center justify-center left-0 top-0">
                        <div className="flex-none rotate-[270deg]">
                          <div className="relative size-[17.5px]">
                            <img
                              alt=""
                              className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                              src="/assets/logo-quadrant.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-[17.47px] overflow-clip size-[17.5px] top-0">
                  <div className="absolute flex items-center justify-center left-0 top-0">
                    <div className="flex-none rotate-[270deg]">
                      <div className="relative size-[17.5px]">
                        <img
                          alt=""
                          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                          src="/assets/logo-quadrant.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex items-center justify-center left-0 top-[17.5px]">
                  <div className="flex-none rotate-[90deg]">
                    <div className="relative size-[17.5px]">
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                        src="/assets/logo-quadrant.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute flex items-center justify-center left-[17.47px] top-[17.5px]">
                  <div className="flex-none rotate-[90deg] scale-y-[-100%]">
                    <div className="relative size-[17.5px]">
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                        src="/assets/logo-quadrant.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Menu */}
        <div className="content-stretch flex gap-[10px] h-[48px] items-center justify-end overflow-clip relative shrink-0">
          <div className="content-stretch cursor-pointer flex gap-[11px] items-center overflow-clip relative shrink-0">
            <Link to="/app" className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
              <p className="font-['Inter'] font-semibold leading-[24px] not-italic relative shrink-0 text-[#939393] text-[16px] text-center tracking-[-0.32px]">
                Colormxr
              </p>
            </Link>
            <Link to="/gallery" className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
              <p className="font-['Inter'] font-semibold leading-[24px] not-italic relative shrink-0 text-[#939393] text-[16px] text-center tracking-[-0.32px]">
                Gallery
              </p>
            </Link>
            <Link to="/courses" className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
              <p className="font-['Inter'] font-semibold leading-[24px] not-italic relative shrink-0 text-[#939393] text-[16px] text-center tracking-[-0.32px]">
                Color Learning
              </p>
            </Link>
            <Link to="/neuroarts" className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
              <p className="font-['Inter'] font-semibold leading-[24px] not-italic relative shrink-0 text-[#939393] text-[16px] text-center tracking-[-0.32px]">
                Neuroarts
              </p>
            </Link>
            <Link to="/journey" className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
              <p className="font-['Inter'] font-semibold leading-[24px] not-italic relative shrink-0 text-[#939393] text-[16px] text-center tracking-[-0.32px]">
                My Journey
              </p>
            </Link>
            <Link to="/alchemy" className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
              <p className="font-['Inter'] font-semibold leading-[24px] not-italic relative shrink-0 text-[#939393] text-[16px] text-center tracking-[-0.32px]">
                The Alchemy of Color
              </p>
            </Link>
            <Link to="/join" className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[10px] relative shrink-0">
              <p className="font-['Inter'] font-semibold leading-[24px] not-italic relative shrink-0 text-[#939393] text-[16px] text-center tracking-[-0.32px]">
                Join The Movement
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
