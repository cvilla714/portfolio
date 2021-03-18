import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1 className="main-header">Full-Stack Developer</h1>
        <Typed className="typed-text" strings={["HTML/CSS", "Ruby", "Ruby on Rails", "Javascript", "Webpack", "Phaser", "NOde.js", "ExpressJs", "MongoDB", "Moongoose", "PostGreSql", "SQL", "React"]} typeSpeed={40} backSpeed={60} loop />
        <a href="#" className="btn-main-offer">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;
