import gsap from "gsap";
export const sharedTimeline = gsap.timeline({ paused: true });

// Banner Animation
export const createBannerAnimation = () => {

  sharedTimeline.to(".box", { y: "-100%", duration: 0.2, stagger: { each: 0.1, from: "edges" } })
    .to(".boxes", {  opacity: 0, duration: 0.5, ease: "power2.out" })
    .to(".divider", { width: "20%", opacity: 1, duration: 0.3, ease: "power2.out" })
    .to(".banner-title", { y: "0%", opacity: 1, duration: 0.3, ease: "power2.out" })
    .to(".banner-subtitle", { y: "0%", opacity: 1, duration: 0.3, ease: "power2.out" })
    
    // After the banner animation completes, trigger the navbar animation
    .to(".nav-item", { y: 0, opacity: 1, duration: 0.5, stagger: { each: 0.2, from: "start", ease: "circ.out" } })
    .to(".menu-divider", { height: 24,opacity: 1, duration: 0.5, ease: "circ.out" })
    .to(".menu-line", { opacity: 1, translateX: 0, duration: 0.5, stagger: { each: 0.2, from: "end", ease: "circ.out" } })
    .to(".menu-icon", { rotate: 90, duration: 0.5, ease: "circ.out" })
    .to(".menu-line", { height: 25, width: 3, duration: 0.5, stagger: { each: 0.2, from: "start", ease: "ease-in" } })
    .to(".based-text", { opacity: 1, duration: 1, ease: "circ.out" })
    .to(".scroll-indicator", { bottom: 30, opacity: 1, duration: 0.5, ease: "power2.out" })

  return sharedTimeline;
};
