import { useState } from "react";
import "./ProjectCard.css";
import { LuView } from "react-icons/lu";
import { AiFillGithub, AiOutlineFullscreenExit } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";

const ProjectCard = ({
  title,
  description,
  skills,
  demoLink,
  codeLink,
  image,
}) => {
  const [showContent, setShowContent] = useState(false);
  const DisplayIcon = showContent ? AiOutlineFullscreenExit : BiHelpCircle;

  const showDetails = () => {
    setShowContent((prevShowContent) => !prevShowContent);
  };

  return (
    <div className='project-card'>
      <div className='hover-details' onClick={showDetails}>
        <DisplayIcon />
      </div>
      <div className='project-image'>
        <div className={`overly-content ${showContent ? "active" : ""}`}>
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
       
          <img src={image} alt='' />
   
      </div>
      <div className='project-content'>
        <div className='project-title'>
          <h1 className='project-title-text'>{title}</h1>
        </div>
        <div className='cta-button'>
          <a href={demoLink} target='_blank'>
            <p>
              <LuView className='btn-icon-view' />
              Demo
            </p>
          </a>

          <a href={codeLink} target='_blank'>
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
