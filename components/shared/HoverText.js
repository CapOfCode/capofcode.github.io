"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Register GSAP Plugin
gsap.registerPlugin(TextPlugin);

const HoverText = ({ children }) => {
  const textRef = useRef(null);
  const originalText = children; 
  const chars = "ABCDEFGHIJKLMWXYZ0123456789";

  useEffect(() => {
    const textSpan = textRef.current;
    if (!textSpan) return;

    const letters = textSpan.children;

    const randomCharacter = () => 
      chars.charAt(Math.floor(Math.random() * chars.length));

    const animateText = () => {
      Array.from(letters).forEach((letter, index) => {
        gsap.to(letter, {
          text: randomCharacter(),
          duration: 0.1 + Math.random() * 0.2,
          delay: index * 0.05, // Stagger effect
          onComplete: () => {
            gsap.to(letter, { text: originalText[index], duration: 0.3, delay: 0.1 });
          },
        });
      });
    };

    const resetText = () => {
      Array.from(letters).forEach((letter, index) => {
        gsap.to(letter, { text: originalText[index], duration: 0.3 });
      });
    };

    textSpan.addEventListener("mouseenter", animateText);
    textSpan.addEventListener("mouseleave", resetText);

    return () => {
      textSpan.removeEventListener("mouseenter", animateText);
      textSpan.removeEventListener("mouseleave", resetText);
    };
  }, [children]); // Re-run effect if text changes

  return (
    <span ref={textRef} className="uppercase">
      {originalText.split("").map((char, index) => (
        <span key={index}>{char}</span>
      ))}
    </span>
  );
};

export default HoverText;
