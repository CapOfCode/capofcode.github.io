import React from "react";
import SkillCard from "./SkillCard";
import HTML from "../../asset/html.png";
import CSS from "../../asset/css.png";
import JavaScript from "../../asset/javascript.png";
import ReactIcon from "../../asset/react.png";
import Debugging from "../../asset/testing.png";
import Git from "../../asset/git.png";

import "./Skills.css";
const Skills = () => {
  return (
    <section id='Skills'>
      <div className='skills-container'>
        <h2 className='title'>Skills</h2>
        <div className='skill-card-container'>
          <div className='Skills-Cards'>
            <SkillCard image={HTML} projectCount='10' skillName='HTML' />
            <SkillCard image={CSS} projectCount='10' skillName='CSS' />
            <SkillCard
              image={JavaScript}
              projectCount='10'
              skillName='JavaScript'
            />
            <SkillCard image={ReactIcon} projectCount='10' skillName='React' />
            <SkillCard
              image={Debugging}
              projectCount='10'
              skillName='Debugging'
            />
            <SkillCard image={Git} projectCount='10' skillName='Git/Github' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
