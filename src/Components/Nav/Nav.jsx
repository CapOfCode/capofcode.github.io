import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className='nav'>
      <ul>
        <li>
          <a href='#Home'>Home</a>
        </li>
        <li>
          <a href='#About'>About</a>
        </li>
        <li>
          <a href='#Skills'>Skills</a>
        </li>
        <li>
          <a href='#Projects'>Projects</a>
        </li>
        <li>
          <a href='#Contact'>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
