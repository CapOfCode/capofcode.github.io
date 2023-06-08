import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { MdWorkHistory } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import "./Nav.css";

const Nav = () => {
  const [activeNow, setActiveNow] = useState("#Home");
  return (
    <nav>
      <div
        className='logo'
        onClick={() => {
          window.location.href = "#Home";
        }}>
        <h2>CapOfCode</h2>
      </div>
      <a
        href='#Home'
        className={activeNow === "#Home" ? "active" : ""}
        onClick={() => {
          setActiveNow("#Home");
        }}>
        <span className='laptop-menu'>Home</span>
        <span
          className={`mobile-menu ${activeNow === "#Home" ? "active" : ""}`}>
          <AiFillHome />
        </span>
      </a>

      <a
        href='#About'
        className={activeNow === "#About" ? "active" : ""}
        onClick={() => {
          setActiveNow("#About");
        }}>
        <span className='laptop-menu'>About</span>
        <span
          className={`mobile-menu ${activeNow === "#About" ? "active" : ""}`}>
          <BsFillPersonFill />
        </span>
      </a>

      <a
        href='#Skills'
        className={activeNow === "#Skills" ? "active" : ""}
        onClick={() => {
          setActiveNow("#Skills");
        }}>
        <span className='laptop-menu'>Skills</span>
        <span
          className={`mobile-menu ${activeNow === "#Skills" ? "active" : ""}`}>
          <GiSkills />
        </span>
      </a>

      <a
        href='#Projects'
        className={activeNow === "#Projects" ? "active" : ""}
        onClick={() => {
          setActiveNow("#Projects");
        }}>
        <span className='laptop-menu'>Projects</span>
        <span
          className={`mobile-menu ${
            activeNow === "#Projects" ? "active" : ""
          }`}>
          <MdWorkHistory />
        </span>
      </a>

      <a
        href='#Contact'
        className={activeNow === "#Contact" ? "active" : ""}
        onClick={() => {
          setActiveNow("#Contact");
        }}>
        <span className='laptop-menu'>Contact</span>
        <span
          className={`mobile-menu ${activeNow === "#Contact" ? "active" : ""}`}>
          <AiFillMessage />
        </span>
      </a>
    </nav>
  );
};

export default Nav;
