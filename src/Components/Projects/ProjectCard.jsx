import React from "react";
import "./ProjectCard.css";
import { LuView } from "react-icons/lu";
import { AiFillGithub } from "react-icons/ai";

const ProjectCard = ({
  title,
  description,
  skills,
  demoLink,
  codeLink,
  image,
}) => {
  return (
    <div class='project-card'>
      <div className='project-image'>
        <div className='overly-content'>
          <h1>Description</h1>
          <p>{description}</p>
        </div>
        <div className='skill-used'>
          <div className='project-skills'>
            {skills.map((skill) => (
              <p key={skill}>{skill}</p>
            ))}
          </div>
        </div>
        <div>
          <img src={image} alt='' />
        </div>
      </div>
      <div className='project-content'>
        <div className='project-title'>
          <h1 className='project-title-text'>{title}</h1>
        </div>
        <div className='cta-button'>
          <a href={demoLink}>
            <p>
              <LuView className='btn-icon' />
              Demo
            </p>
          </a>

          <a href={codeLink}>
            <p>
              <AiFillGithub className='btn-icon-git' />
              Code
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
