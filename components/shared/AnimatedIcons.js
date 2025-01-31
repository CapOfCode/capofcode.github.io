'use client'

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import scrollDownAnimation from "./animated_icons/scrollDownAnimation.json";
import homeIcon from "./animated_icons/homeIcon.json";

export const AnimatedScrollMouse = () => {
  return (
    <div>
      <Lottie animationData={scrollDownAnimation} loop={true} />
    </div>
  )
}


export const AnimatedHome = () => {
  return (
    <div className="mix-blend-difference">
      <Lottie animationData={homeIcon} autoPlay={true} loop={false} />
    </div>
  )
}

