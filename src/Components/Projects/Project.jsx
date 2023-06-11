import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import ProjectCard from "./ProjectCard";
import "./Project.css";
import projectImage1 from "../../asset/javascript-clock.png";
import projectImage2 from "../../asset/javascript-clock.png";
import projectImage3 from "../../asset/javascript-clock.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import "swiper/css/navigation";

// Import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

const Project = () => {
  const projectData = [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet...",
      skills: ["React", "JavaScript"],
      demoLink: "https://example.com/demo1",
      codeLink: "https://example.com/code1",
      image: projectImage1,
    },
    {
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet...",
      skills: ["React", "Python"],
      demoLink: "https://example.com/demo2",
      codeLink: "https://example.com/code2",
      image: projectImage2,
    },
    {
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet...",
      skills: ["HTML", "CSS"],
      demoLink: "https://example.com/demo3",
      codeLink: "https://example.com/code3",
      image: projectImage3,
    },
    {
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet...",
      skills: ["HTML", "CSS"],
      demoLink: "https://example.com/demo3",
      codeLink: "https://example.com/code3",
      image: projectImage3,
    },
    {
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet...",
      skills: ["HTML", "CSS"],
      demoLink: "https://example.com/demo3",
      codeLink: "https://example.com/code3",
      image: projectImage3,
    },
    {
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet...",
      skills: ["HTML", "CSS"],
      demoLink: "https://example.com/demo3",
      codeLink: "https://example.com/code3",
      image: projectImage3,
    },
  ];

  return (
    <section id='Projects'>
      <div className='container'>
        <h1 className='title'>Projects</h1>

        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          grabCursor={false}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1.5,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className='mySwiper'>
          {projectData.map((project, index) => (
            <SwiperSlide key={index} className='swiper-slide'>
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className='slider-controler'>
          <div className='swiper-button-prev swiper-button'>
            <AiOutlineArrowLeft className='arrow-back-outline' />
          </div>
          <div className='swiper-button-next swiper-button'>
            <AiOutlineArrowRight className='arrow-forward-outline' />
          </div>
          <div className='swiper-pagination'></div>
        </div>
      </div>
    </section>
  );
};

export default Project;
