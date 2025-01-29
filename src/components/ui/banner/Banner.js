"use client"
import { useRef } from 'react';

import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from '@gsap/react'; // <-- import the hook from our React package
import { roboto_mono } from '@/app/font';
import ScrollIndicator from './ScrollIndicator';

gsap.registerPlugin(useGSAP);

const Banner = () => {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power1.inOut' } });

    // Animate the left boxes from the left
    tl.to(".box-left", { y: "-100%", duration: 0.2, stagger: 0.1 });

    // Animate the right boxes from the right
    tl.to(".box-right", { y: "-100%", duration: 0.2, stagger: { each: 0.1, from: "end" } }, "<");

    // Animate the center boxes after left and right are done
    tl.to(".box-center", { y: "-100%", duration: 0.2, stagger: { each: 0.1, from: "edges" } });

    // Fade in the banner title after everything is done
   tl.to(".char", {y: "0%", opacity: 1, duration: 0.2, stagger:{ each: 0.1, from: "random" , ease: "easeInOut"}});
  }, { scope: container });

  return (
    <div ref={container} className={roboto_mono.className}>
      <div className='min-h-screen w-full text-content flex flex-col justify-center items-center relative z-10 gap-10'>
        <h3 className="banner-title text-9xl flex justify-center items-center relative z-10 uppercase overflow-hidden">
        {"Rashed".split("").map((char, index) => (
          <span key={index} className="char inline-block opacity-0 translate-y-full">
            {char}
          </span>
        ))}
        </h3>
        <h4 className="banner-subtitle uppercase ">
        {"DEVELOPER".split("").map((char, index) => (
          <span key={index} className="char inline-block opacity-0 translate-y-full text-3xl">
            {char}
          </span>
        ))}
          </h4>
   
          
      </div>
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

      <ScrollIndicator/>
    </div>
  );
};

export default Banner;
