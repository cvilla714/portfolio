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
          <h1 className="about-heading">About Me</h1>
          <p>Hello, My name is Cosmel, I'm a Full-Stack Web Developer. Here are some of the technologies I have used:</p>
          <h2>Front-End Technologies</h2>
          <p>HTML/CSS, Bootstrap, Sass, JavaScript, ReactJS, Redux, RTK Query, Webpack, Phaser</p>

          <h2>Back-End Technologies</h2>
          <p>NodeJS, ExpressJS, ServerJS, PostgreSQL, SQL, MongoDB, Mongoose, Ruby, Ruby on Rails, Python, Flask</p>

          <h2>DevOps Tools</h2>
          <p>Git, Docker, Kubernetes, AWS</p>

          <a href={resume} download="cosmelresume.pdf">
            <button className="btn btn-info">Get my Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
