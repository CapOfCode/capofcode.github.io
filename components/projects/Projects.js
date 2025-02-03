"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import Lenis from "lenis";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef([]);
  const descriptionsRef = useRef([]);
  const imagesWrapperRef = useRef(null);
  const indicatorRef = useRef(null); 
  const [activeIndex, setActiveIndex] = useState(0);
  const titleContainerRef = useRef(); 

  const projects = [
    { title: "Project 1", image: "/project-5.webp", description: "This is project 1 description." },
    { title: "Project 2", image: "/project-6.webp", description: "This is project 2 description." },
    { title: "Project 3", image: "/project-7.webp", description: "This is project 3 description." },
    { title: "Project 4", image: "/project-8.webp", description: "This is project 4 description." },
    { title: "Project 5", image: "/project-5.webp", description: "This is project 5 description." },
    { title: "Project 6", image: "/project-6.webp", description: "This is project 6 description." },
    { title: "Project 7", image: "/project-7.webp", description: "This is project 7 description." },
    { title: "Project 8", image: "/project-8.webp", description: "This is project 8 description." },
  ];

  useEffect(() => {
    const lenis = new Lenis({ smooth: true });

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const projectCount = projects.length;
    const scrollDuration = window.innerHeight * 1.5;

    projectsRef.current.forEach((project, index) => {
      ScrollTrigger.create({
        trigger: ".pin-section",
        start: `top+=${index * scrollDuration} top`,
        end: `+=${scrollDuration}`,
        scrub: 1,
        onEnter: () => setActiveIndex(index),
        onLeaveBack: () => setActiveIndex(index > 0 ? index - 1 : 0),
      });
    });

    ScrollTrigger.create({
      trigger: ".pin-section",
      start: "top top",
      end: `+=${projectCount * scrollDuration}`,
      pin: true,
      scrub: 1,
    });
  }, []);


  useEffect(() => {
    if (imagesWrapperRef.current) {
      gsap.to(imagesWrapperRef.current, {
        y: -activeIndex * 300, 
        duration: 0.8,
        ease: "power2.inOut",
      });
    }
  }, [activeIndex]);


  useEffect(() => {
    if (indicatorRef.current && projectsRef.current[activeIndex]) {


      const activeTitle = projectsRef.current[activeIndex];

      const { offsetTop, offsetWidth, offsetHeight } = activeTitle;
      const indicatorHeight = titleContainerRef.current.offsetHeight / projects.length
      const indicatorTop = activeIndex * indicatorHeight
      gsap.to(indicatorRef.current, {
        top: indicatorTop,
        width: offsetWidth + 30,
        height: indicatorHeight,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [activeIndex]);

  return (
    <ReactLenis root>
      <div id="projects" className="bg-white min-h-screen flex flex-col justify-between w-screen">
        <div className="container w-screen">
          <div className="pin-section h-screen w-screen">
            <div className="projects h-full w-full flex justify-center items-center gap-10">
              
              {/* Left: Project Titles */}
              <div ref={titleContainerRef} className="projects-names w-1/2 flex justify-center items-center flex-col gap-4 relative">
                {/* Indicator for active title */}
                <div
                  ref={indicatorRef}
                  className="indicator absolute bg-black -z-10"
                  style={{
                    width: "0", // Initially width is 0
                    height: "0", // Initially height is 0
                    transition: "width 0.3s ease, top 0.3s ease, height 0.3s ease",
                  }}
                ></div>

                {projects.map((project, index) => (
                  <p
                    key={index}
                    ref={(el) => (projectsRef.current[index] = el)}
                    className={`project-title font-jer text-4xl cursor-pointer transition-colors duration-300 ${
                      activeIndex === index ? "text-white" : "text-gray-400"
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {project.title}
                  </p>
                ))}
              </div>

              <div className="projects-details w-1/2 relative flex justify-center items-center flex-col gap-4">
                {/* Right: Project Images with Smooth Scrolling */}
                <div className="projects-images overflow-hidden relative h-[300px] w-[500px]">
                  <div ref={imagesWrapperRef} className="relative w-full">
                    {projects.map((project, index) => (
                      <Image
                        key={index}
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="project-image h-[300px]"
                      />
                    ))}
                  </div>
                </div>

                {/* Project Descriptions */}
                <div className="description-container w-full flex justify-center py-8 relative">
                  {projects.map((project, index) => (
                    <p
                      key={index}
                      ref={(el) => (descriptionsRef.current[index] = el)}
                      className={`description absolute text-xl transition-opacity duration-500 ${
                        activeIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {project.description}
                    </p>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
};

export default Projects;
