"use client"
import { useEffect, useRef } from 'react';
import { roboto_mono } from '@/app/font';
import ScrollIndicator from '../shared/ScrollIndicator';
import { createBannerAnimation } from '@/animation';



const Banner = () => {
  const container = useRef();


  useEffect(() => {
    const timeline = createBannerAnimation();
    timeline.play(); 
  }, []);

  return (
    <div ref={container} className={roboto_mono.className}>

      {/* BANNER CONTENT START  */}
      <div className='min-h-screen w-full text-content flex flex-col justify-center items-center relative z-10 gap-10 overflow-hidden pointer-events-none'>
        <h3 className="banner-title text-9xl flex justify-center items-center relative z-10 uppercase overflow-hidden">
          {"Rashed".split("").map((char, index) => (
            <span key={index} className="char inline-block opacity-0 translate-y-full">
              {char}
            </span>
          ))}
        </h3>
        <h4 className="banner-subtitle uppercase ">
          {"FULL  STACK DEVELOPER".split("").map((char, index) => (
            <span key={index} className="char inline-block opacity-0 translate-y-full text-3xl">
              {char}
            </span>
          ))}
        </h4>


      </div>
      {/* BANNER CONTENT END  */}
      
      {/* PRELOAD BOXES */}
      <div className='boxes inset-0 z-20 flex gap-[2px] h-screen fixed w-full pointer-events-none'>
        <div className="box-left bg-white h-full w-full border"></div>
        <div className="box-left bg-white h-full w-full border"></div>
        <div className="box-left bg-white h-full w-full border"></div>
        <div className="box-left bg-white h-full w-full border"></div>
        <div className="box-center bg-white h-full w-full border"></div>
        <div className="box-center bg-white h-full w-full border"></div>
        <div className="box-center bg-white h-full w-full border"></div>
        <div className="box-center bg-white h-full w-full border"></div>
        <div className="box-center bg-white h-full w-full border"></div>
        <div className="box-right bg-white h-full w-full border"></div>
        <div className="box-right bg-white h-full w-full border"></div>
        <div className="box-right bg-white h-full w-full border"></div>
        <div className="box-right bg-white h-full w-full border"></div>
      </div>

   

   
    </div>
  );
};

export default Banner;
