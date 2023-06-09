import React from "react";
import SkillCard from "./SkillCard";
import image from "../../asset/html.png";

import "./Skills.css";
const Skills = () => {
  return (
    <section id='Skills'>
      <div className='container skills-container'>
        <h2 className='title'>Skills</h2>
        <div className='skill-card-container'>
          <div className='Skills-Cards'>
            <SkillCard image={image} />
            <SkillCard image={image} />
            <SkillCard image={image} />
            <SkillCard />
            <SkillCard />
            <SkillCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
