"use client"
import { useEffect, useRef } from 'react';
import { createBannerAnimation } from '@/animation';
import Image from 'next/image';



const Banner = () => {
  const container = useRef();


  useEffect(() => {
    const timeline = createBannerAnimation();
    timeline.play();
  }, []);

  return (
    <div ref={container}>

      {/* BANNER CONTENT START  */}
      <div className='min-h-screen bg-black w-full text-content flex flex-col justify-center items-center relative z-10 gap-10 overflow-hidden pointer-events-none'>
        
      <div className='overflow-hidden'>
        <h3 className="banner-title text-9xl flex justify-center items-center relative z-10 uppercase overflow-hidden text-white opacity-0 translate-y-full">
         Rashed
        </h3>
        </div>

       <div className='overflow-hidden'>
       <h4 className="banner-subtitle uppercase text-white text-4xl opacity-0 -translate-y-full font-bold">
          Full Stack Developer
        </h4>
       </div>


        <h2 className="based-text font-base font-normal text-white absolute bottom-[30px] opacity-0">Based in Bangladesh</h2>
        <Image src="/hero.webp" alt="hero-banner" height={2000} width={2000} object-fit='cover' 
         className='absolute hero-image opacity-50 inset-0 h-full w-full object-cover -z-10' />

      </div>
      {/* BANNER CONTENT END  */}

      {/* PRELOAD BOXES */}
      <div className='boxes inset-0 z-20 flex gap-[2px] h-screen fixed w-full pointer-events-none'>
        {Array.from({ length: 11 }).map((_, i) => (
          <div key={i} className="box bg-white h-full w-full border"></div>
        ))}
      </div>




    </div>
  );
};

export default Banner;
