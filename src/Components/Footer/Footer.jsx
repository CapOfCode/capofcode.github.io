import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <section id='footer'>
      <footer>
        <div className='container footer-container'>
          <div className='footer-socials'>
            <a href='https://www.linkedin.com/in/capofcode/' target='_blank'>
              <div className='footer-icon'>
                <BsLinkedin className='linkedin-icon' />
              </div>
            </a>
            <a href='https://github.com/CapOfCode' target='_blank'>
              <div className='footer-icon'>
                <FaGithubSquare className='github-icon' />
              </div>
            </a>
            <a href='https://www.youtube.com/@capofcode' target='_blank'>
              <div className='footer-icon'>
                <BsYoutube className='youtube-icon' />
              </div>
            </a>
            <a href='https://twitter.com/capofcode' target='_blank'>
              <div className='footer-icon'>
                <FaTwitterSquare className='twitter-icon' />
              </div>
            </a>
          </div>
          <p>Copyright &copy; Rashed</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
