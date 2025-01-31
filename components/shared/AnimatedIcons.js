'use client'

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import scrollDownAnimation from "./animated_icons/scrollDownAnimation.json";

export const AnimatedScrollMouse = () => {
  return (
    <div>
        <Lottie animationData={scrollDownAnimation} loop={true} />
    </div>
  )
}

 