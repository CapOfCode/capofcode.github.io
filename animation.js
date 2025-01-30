import gsap from "gsap";

export const sharedTimeline = gsap.timeline({ paused: true });

// Banner Animation
export const createBannerAnimation = () => {
  sharedTimeline.to(".box", { y: "-100%", duration: 0.2, stagger: { each: 0.1, from: "edges" } });
  sharedTimeline.to(".banner-title", { y: "0%", opacity: 1, duration: 0.5, ease: "power2.out" });
  sharedTimeline.to(".banner-subtitle", { y: "0%", opacity: 1, duration: 0.5, ease: "power2.our"});
  sharedTimeline.to("based-text", { opacity: 1, duration: 0.5, ease: "power2.our"});

  // After the banner animation completes, trigger the navbar animation
  sharedTimeline.to(".nav-item", { y: 0, opacity: 1, duration: 0.5, stagger: { each: 0.1, from: "start", ease: "power2.out" } });
  sharedTimeline.to(".hero-image", { opacity: 0.8, scale: 1.03, duration: 2, ease: "power2.out" });

  return sharedTimeline;
};
