import React from "react";
import "./SkillCard.css";

const SkillCard = (props) => {
  const { image } = props;
  return (
    <div className='card'>
      <h1 className='skill-name-title'>
        <span className='skill-name'>{props.skillName}</span>
      </h1>
      <h1 className='project-count'>
        <span className='projects-done'>Project: {props.projectCount}</span>
      </h1>
      <div className='icon-card'>
        <div className='card-image'>
          <img src={image} alt='' />
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
