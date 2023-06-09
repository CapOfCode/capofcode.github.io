import React, { useState } from "react";
import aboutImage from "./images/profile-photo.jpg";
import { BsDownload } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import "./About.css";
const About = () => {
  return (
    <section id='About'>
      <div className=' container container-about'>
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
              <a
                href='https://docs.google.com/document/d/1kj6NViwHd5_0jWXYqgRCDa-SU_48HE0Vz-gz6DNTPVQ/export?format=pdf'
                download='Resume of Rashed.pdf'>
                <button>
                  <p>DOWNLOAD CV</p>
                  <BsDownload className='btn-icon' />
                </button>
              </a>
              <button
                onClick={() => {
                  window.location.href = "#Contact";
                }}>
                <p>CONTACT ME</p>
                <AiFillMessage className='btn-icon' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
