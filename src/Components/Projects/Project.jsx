import React from "react";
import ProjectCard from "./ProjectCard";
import "./Project.css";
import projectImage1 from "../../asset/javascript-clock.png";
import projectImage2 from "../../asset/javascript-clock.png";
import projectImage3 from "../../asset/javascript-clock.png";
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
  ];
  return (
    <section id='Projects'>
      <div className='container project-container'>
        <h1 className='title'>Projects</h1>
        <div className='card-container'>
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
