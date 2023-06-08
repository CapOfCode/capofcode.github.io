import React from "react";
import aboutImage from "./images/profile-photo.jpg";
import { BsDownload } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import "./About.css";
const About = () => {
  return (
    <section id='About'>
      <div className='container container-about'>
        <h2 className='title'>About Me</h2>
        <div className='contant'>
          <div className='image-container'>
            <img src={aboutImage} alt='' />
          </div>
          <div className='text-container'>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              quam sed repellat vel minus illo autem corporis officia explicabo
              ex? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              aspernatur? Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Ipsa quam sed repellat vel minus illo autem corporis officia
              explicabo ex? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ipsa, aspernatur?
            </p>
            <div className='button-div'>
              <button>
                <p>Download CV</p>
                <span>
                  <BsDownload />
                </span>
              </button>
              <button>
                <p>Contact Me</p>
                <span>
                  <AiFillMessage />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
