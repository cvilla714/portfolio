import React from "react";
import linter from "../images/linter.png";
import game from "../images/game.png";
import restaurant from "../images/restaurant.png";
import todolist from "../images/todolist.png";
import weather from "../images/weatherapp.png";
import article from "../images/lifestylearticle.png";
// Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// React PopupBox
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Porftolio = () => {
  // Linter Project
  const openPopupboxLinter = () => {
    const content = (
      <>
        <div className="justimage">
          <img className="portfolio-image-popupbox-linter" src={linter} alt="Linter Ruby Capstone Project" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia totam alias illo molestias explicabo ab modi quae sequi minima, rerum error in nisi aut laboriosam. Consequuntur quis earum doloremque nulla.</p>
        <b>GitHub:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://github.com/cvilla714/linterproject")}>
          https://github.com/cvilla714/linterproject
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigLinter = {
    titleBar: {
      enable: true,
      text: "Linter Ruby Capstone Project",
    },
    fadeIn: true,
    fadeSpeed: 500,
  };

  // Game Project
  const openPopupboxGame = () => {
    const content = (
      <>
        <div className="justimage">
          <img className="portfolio-image-popupbox-game" src={game} alt="Javascript Capstone Project" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia totam alias illo molestias explicabo ab modi quae sequi minima, rerum error in nisi aut laboriosam. Consequuntur quis earum doloremque nulla.</p>
        <b>DemoLink:</b>
        <a className="hyper-link" onClick={() => window.open("https://frosty-fermat-dca644.netlify.app/", "_blank")}>
          https://frosty-fermat-dca644.netlify.app/
        </a>
        <br />
        <b>GitHubCode:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://github.com/cvilla714/javascriptcapstone")}>
          https://github.com/cvilla714/javascriptcapstone
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigGame = {
    titleBar: {
      enable: true,
      text: "Javascript Capstone Project",
    },
    fadeIn: true,
    fadeSpeed: 500,
  };

  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box-linter mx-3 my-3" onClick={openPopupboxLinter}>
            <img className="portfolio-image" src={linter} alt="linter project" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*-*/}

          <div className="portfolio-image-box-game mx-3 my-3" onClick={openPopupboxGame}>
            <img className="portfolio-image" src={game} alt="Phaser Game Endless Runner" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*-*/}

          <div className="portfolio-image-box mx-3 my-3">
            <img className="portfolio-image" src={restaurant} alt="Restaurante Page Project" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*-*/}

          <div className="portfolio-image-box mx-3 my-3">
            <img className="portfolio-image" src={todolist} alt="Todo List Project" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*-*/}

          <div className="portfolio-image-box mx-3 my-3">
            <img className="portfolio-image" src={weather} alt="Build A Weather App" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*-*/}

          <div className="portfolio-image-box mx-3 my-3">
            <img className="portfolio-image" src={article} alt="Rails Capstone" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigLinter} />
      <PopupboxContainer {...popupboxConfigGame} />
    </div>
  );
};

export default Porftolio;
