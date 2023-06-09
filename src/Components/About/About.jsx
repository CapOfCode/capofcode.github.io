import React from "react";
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
              👋 Greetings! I'm a passionate front-end web developer,
              well-versed in the enchanting arts of HTML, CSS, and JavaScript.
              Currently, I'm on a thrilling quest to master the mystical MERN
              stack (MongoDB, Express.js, React.js, Node.js). Together, let's
              embark on a journey to create captivating web experiences! ✨
              <br />
              <br />✨ In the realm of coding, I am a sorcerer of pixels and a
              maestro of creativity. With a wave of my keyboard, I conjure
              digital wonders that will leave you spellbound! Let's bring your
              ideas to life and sprinkle a touch of magic to make your web
              dreams come true! 🌟
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
