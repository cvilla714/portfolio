import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Hello I am Cosmel, I'am a Full-Stack Web Developer. Technologies I use include HTML/CSS, Bootstrap, Sass, PostgreSQL,SQL,MongoDB, MoonGose,NodeJS, ExpressJS, ServerJS, JavaScript,Webpack, Phaser, ReactJs I create responsive websites that are displayed on all devices desktops and
            smartphones
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
