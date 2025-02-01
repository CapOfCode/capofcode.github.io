"use client";
import { ReactLenis } from "lenis/react";

function LenisProvider({ children }) {
  
  return (
    <ReactLenis  root options={{ duration: 1.5, smoothWheel: true, multiplier: 2,}}>
      {children}
    </ReactLenis>
  );
}

export default LenisProvider;
