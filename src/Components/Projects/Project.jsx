
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import ProjectCard from "./ProjectCard";
import "./Project.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import "swiper/css/navigation";

// Import required modules
import { EffectCoverflow, Pagination, Navigation, Mousewheel } from "swiper";

const Project = () => {
  const projectData = [
    {
      title: "Donation Campaign",
      description: "A simple Donation Campaign App.Where We have organize some donation campaign to help people. You can donate on any campaign you want.",
      skills: ["React", "Tailwind"],
      demoLink: "https://donation-campaign-rose.vercel.app/",
      codeLink: "https://github.com/CodeWithRashed/donation-campaign-public",
      image: "https://i.postimg.cc/59RBfmwM/screencapture-donation-campaign-rose-vercel-app-2023-10-04-21-42-38.png",
    },
    {
      title: "Course Hub App",
      description: "The Course Hub App is a user-friendly platform for selecting courses, with features like credit hour limits, duplicate course prevention, and real-time price updates. It utilizes React, Vite, and Tailwind CSS for a seamless user experience and offers practical insights into modern web development and UI design. Ideal for education and career planning",
      skills: ["React", "Tailwind"],
      demoLink: "https://course-hub-nu.vercel.app/",
      codeLink: "https://github.com/CodeWithRashed/course-hub-public",
      image: "https://i.postimg.cc/q7GBp0ZZ/course-hub.png",
    },
    {
      title: "PH Tube",
      description: "PH Tube is a minimalist video platform, boasting a clean design, search functionality, and responsive layout. Utilizing Vite and Tailwind CSS, it showcases the power of modern web development, making it a great resource for learning responsive design and UI development with simplicity at its core.",
      skills: ["JavaScript", "Tailwind"],
      demoLink: "https://ph-tube-three.vercel.app/",
      codeLink: "https://github.com/CodeWithRashed/ph-tube-public",
      image: "https://i.postimg.cc/900yGL7C/ph-tube.png",
    },
    {
      title: "Summer Sale",
      description: "Summer Sale is a vibrant e-commerce platform showcasing your expertise in Tailwind CSS. It features coupon application, stylish modals, and is hosted on Firebase for a dynamic shopping experience.",
      skills: ["JavaScript", "Tailwind"],
      demoLink: "https://summer-sale-pi.vercel.app/",
      codeLink: "https://github.com/CodeWithRashed/summer-sale-public",
      image: "https://i.postimg.cc/sD6s6wGb/summer-sale.png",
    },
    {
      title: "Legal Solution",
      description: "The Legal Solution Website offers expert legal guidance and resources. It's built using HTML, CSS (Tailwind CSS), and JavaScript, showcasing your proficiency in sliders and overlays for a comprehensive legal support platform.",
      skills: ["Tailwind"],
      demoLink: "https://codewithrashed.github.io/legal-solution/",
      codeLink: "https://github.com/CodeWithRashed/legal-solution",
      image: "https://i.postimg.cc/XNBPSLPT/legal-solution.png",
    },
    {
      title: "Fruit Shop",
      description: "The Fruit Shop Website brings exotic flavors to your screen, featuring an appealing and responsive design crafted using HTML and Tailwind CSS.",
      skills: ["Tailwind"],
      demoLink: "https://codewithrashed.github.io/fruit_shop/",
      codeLink: "https://github.com/CodeWithRashed/fruit_shop",
      image: "https://i.postimg.cc/wj1y0tMc/fruit-shop.png",
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
          mousewheel={true}
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
          modules={[EffectCoverflow, Pagination, Mousewheel, Navigation]}
          className='mySwiper'>
          {projectData.map((project, index) => (
            <SwiperSlide key={index} className='swiper-slide'>
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='slider-controler'>
          <div className='controle-btn'>
            <div className='swiper-button-prev swiper-button'>
              <AiOutlineArrowLeft className='arrow-back-outline' />
            </div>
            <div className='swiper-button-next swiper-button'>
              <AiOutlineArrowRight className='arrow-forward-outline' />
            </div>
            <div className='swiper-pagination'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
