import gsap from "gsap";

export const sharedTimeline = gsap.timeline({ paused: true });

// Banner Animation
export const createBannerAnimation = () => {
  sharedTimeline.to(".box-left", { y: "-100%", duration: 0.2, stagger: 0.1 });
  sharedTimeline.to(".box-right", { y: "-100%", duration: 0.2, stagger: { each: 0.1, from: "end" } }, "<");
  sharedTimeline.to(".box-center", { y: "-100%", duration: 0.2, stagger: { each: 0.1, from: "edges" } });
  sharedTimeline.to(".char", { y: "0%", opacity: 1, duration: 0.2, stagger: { each: 0.1, from: "random", ease: "easeInOut" } });

  // After the banner animation completes, trigger the navbar animation
  sharedTimeline.to(".nav-item", { y: 0, opacity: 1, duration: 0.5, stagger: { each: 0.1, from: "start", ease: "power2.out" } });
  sharedTimeline.to(".scroll-indicator", { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" });

  return sharedTimeline;
};
