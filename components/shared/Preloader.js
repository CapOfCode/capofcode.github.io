"use client"

import { createBannerAnimation } from "@/animation";
import { useEffect } from "react";

const Preloader = () => {
    useEffect(() => {
  const timeline = createBannerAnimation();
  timeline.play();
}, []);
  return (
    <div>
      <div className='boxes'>
        {Array.from({ length: 11 }).map((_, i) => (
          <div key={i} className="box"></div>
        ))}
      </div>
    </div>
  )
}

export default Preloader
