import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { MdWorkHistory } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className='logo'>
        <h2>CapOfCode</h2>
      </div>
      <a href='#Home'>
        <span className='laptop-menu'>Home</span>
        <span className='mobile-menu'>
          <AiFillHome />
        </span>
      </a>

      <a href='#About'>
        <span className='laptop-menu'>About</span>
        <span className='mobile-menu'>
          <BsFillPersonFill />
        </span>
      </a>

      <a href='#Skills'>
        <span className='laptop-menu'>Skills</span>
        <span className='mobile-menu'>
          <GiSkills />
        </span>
      </a>

      <a href='#Projects'>
        <span className='laptop-menu'>Projects</span>
        <span className='mobile-menu'>
          <MdWorkHistory />
        </span>
      </a>

      <a href='#Contact'>
        <span className='laptop-menu'>Contact</span>
        <span className='mobile-menu'>
          <AiFillMessage />
        </span>
      </a>
    </nav>
  );
};

export default Nav;
