import React from 'react';
import '../styles/Header.css';


function Header() {
  return (
    <div>
    <h1>Dino Abrego
    </h1>
    <ul className="header">
      <li><a href="/">About Me</a></li>
      <li><a href="/stuff">Portfolio</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/resume">Resume</a></li>
    </ul>
    <div className="content">
       
    </div>
  </div>
  );
}

export default Header;
