import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import profileImage from "./images/profile-photo.jpg";
import "./Home.css";

const Home = () => {
  return (
    <section id='Home'>
      <div className='container home-container'>
        <header>
          <div className='head-content'>
            <div className='profile-img-div'>
              <img src="https://i.postimg.cc/3NHrCR61/profile-pic-5.png" alt='' className='profile-img' />
            </div>
            <h2>
              <span>MERN</span> Stack Developer
            </h2>
            
          </div>

          <div className='icon-and-text'>
            <div className='header-socials'>
              <a href='https://www.linkedin.com/in/codewithrashed/' target='_blank'>
                <BsLinkedin className='linkedin-icon' />
              </a>
              <a href='https://github.com/codewithrashed' target='_blank'>
                <FaGithubSquare className='github-icon' />
              </a>
              <a href='https://www.youtube.com/@codewithrashed' target='_blank'>
                <BsYoutube className='youtube-icon' />
              </a>
              <a href='https://twitter.com/codewithrashed' target='_blank'>
                <FaTwitterSquare className='twitter-icon' />
              </a>
            </div>
            <div className='scroll-down'>
              <a href='##'>Scrol Down &raquo; &raquo;</a>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Home;
