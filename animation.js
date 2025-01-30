import gsap from "gsap";

// Create a shared timeline
export const sharedTimeline = gsap.timeline({ paused: true });

// Block scroll function
const blockScroll = () => {
  document.body.style.overflow = "hidden";
};

// Unblock scroll function
const unblockScroll = () => {
  document.body.style.overflow = "auto";
};

// Banner Animation
export const createBannerAnimation = () => {
  // Block scroll when animation starts
  blockScroll();

  sharedTimeline.to(".box", { y: "-100%", duration: 0.2, stagger: { each: 0.1, from: "edges" } })
    .to(".banner-title", { y: "0%", opacity: 1, duration: 0.5, ease: "power2.out" })
    .to(".banner-subtitle", { y: "0%", opacity: 1, duration: 0.5, ease: "power2.out" })
    
    // After the banner animation completes, trigger the navbar animation
    .to(".nav-item", { y: 0, opacity: 1, duration: 0.5, stagger: { each: 0.1, from: "start", ease: "power2.out" } })
    .to(".based-text", { opacity: 1, duration: 0.5, ease: "power2.out" })
    .to(".hero-image", { opacity: 0.8, scale: 1.03, duration: 2, ease: "power2.out" })
    
    // Once the animation completes, unblock scroll
    .add(() => unblockScroll());

  return sharedTimeline;
};
