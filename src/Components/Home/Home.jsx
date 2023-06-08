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
              <img src={profileImage} alt='' className='profile-img' />
            </div>
            <h2>
              <span>R</span>ashed
            </h2>
            <p>
              <span>F</span>ront-End <span>W</span>eb <span>D</span>eveloper
            </p>
          </div>

          <div className='icon-and-text'>
            <div className='header-socials'>
              <a href='##' target='_blank'>
                <BsLinkedin />
              </a>
              <a href='##' target='_blank'>
                <FaGithubSquare />
              </a>
              <a href='##' target='_blank'>
                <BsYoutube />
              </a>
              <a href='##' target='_blank'>
                <FaTwitterSquare />
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
