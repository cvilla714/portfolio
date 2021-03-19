import React from "react";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="d-flex  justify-content-around">
          <a className="footer-nav">Home</a>
          <br />
          <a className="footer-nav">About Me</a>

          <a className="footer-nav">Portfolio</a>
          <br />
          <a className="footer-nav">Contact Me</a>
        </div>
        <div className=" aling-items-center">
          <div className="d-flex justify-content-center">
            <a href="https://github.com/cvilla714" target="_blank" className="link">
              {" "}
              <FaGithub className="media" />
            </a>
            <a href="https://twitter.com/kckeyti" target="_blank" className="link">
              {" "}
              <FaTwitter className="media" />
            </a>
            <a href="https://www.linkedin.com/in/cosvilla/" target="_blank" className="link">
              {" "}
              <FaLinkedin className="media" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
