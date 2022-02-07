import React from 'react';
import author from '../me.jpg';
import resume from '../images/cosmelresume.pdf';
const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Hello, My name is Cosmel, I'm a Full-Stack Web Developer. These are
            some of the Technologies that I have used HTML/CSS, Bootstrap, Sass,
            PostgreSQL, SQL, MongoDB, MoonGose, NodeJS, ExpressJS, ServerJS,
            JavaScript, Webpack, Phaser, ReactJs,Redux and RTK Query.
            <br /> I create responsive websites that are displayed on all
            devices, desktops, and smartphones.
          </p>

          <a href={resume} download="cosmelresume.pdf">
            {' '}
            <button className="btn btn-info"> Get my Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
