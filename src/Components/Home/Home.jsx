import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <section id='Home'>
      <div className='container home-container'>
        <header>
          <h1>Home Section</h1>

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
