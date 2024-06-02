import React, { useState } from 'react';
import Typed from 'react-typed';

const Header = () => {
  const [currentSection, setCurrentSection] = useState('front-end');

  const handleFrontEndComplete = () => {
    setCurrentSection('back-end');
  };

  const handleBackEndComplete = () => {
    setCurrentSection('devops');
  };

  const handleDevOpsComplete = () => {
    setCurrentSection('front-end');
  };

  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1 className="main-header">Full-Stack Developer</h1>

        {currentSection === 'front-end' && (
          <>
            <h2 className="tech-category">Front-End Technologies</h2>
            <Typed
              className="typed-text"
              strings={['HTML/CSS', 'JavaScript', 'React', 'Redux', 'RTK Query', 'Webpack', 'Phaser']}
              typeSpeed={40}
              backSpeed={60}
              loop={false}
              onComplete={handleFrontEndComplete}
            />
          </>
        )}

        {currentSection === 'back-end' && (
          <>
            <h2 className="tech-category">Back-End Technologies</h2>
            <Typed
              className="typed-text"
              strings={['Ruby', 'Ruby on Rails', 'NodeJS', 'ExpressJs', 'Python', 'Flask', 'MongoDB', 'Mongoose', 'Oracle', 'PostGreSql', 'SQL']}
              typeSpeed={40}
              backSpeed={60}
              loop={false}
              onComplete={handleBackEndComplete}
            />
          </>
        )}

        {currentSection === 'devops' && (
          <>
            <h2 className="tech-category">DevOps Tools</h2>
            <Typed className="typed-text" strings={['Git', 'Docker', 'Kubernetes', 'AWS']} typeSpeed={40} backSpeed={60} loop={false} onComplete={handleDevOpsComplete} />
          </>
        )}

        <a href="#" className="btn-main-offer">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;
