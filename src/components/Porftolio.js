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
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Linter Ruby Capstone Project",
        },
      },
    });
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
        <b>DemoLink:</b>{" "}
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
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Javascript Capstone Project",
        },
      },
    });
  };

  const popupboxConfigGame = {
    titleBar: {
      enable: true,
      text: "Javascript Capstone Project",
    },
    fadeIn: true,
    fadeSpeed: 500,
  };

  // Resturant Project
  const openPopupboxRestaurant = () => {
    const content = (
      <>
        <div className="justimage">
          <img className="portfolio-image-popupbox-restaurant" src={restaurant} alt="Restaurant Project" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia totam alias illo molestias explicabo ab modi quae sequi minima, rerum error in nisi aut laboriosam. Consequuntur quis earum doloremque nulla.</p>
        <b>DemoLink:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://rawcdn.githack.com/cvilla714/restaurant-page/4e6e899bba8894e04bb6481fdfec67082086a407/dist/index.html", "_blank")}>
          https://rawcdn.githack.com/cvilla714/restaurant-page/4e6e899bba8894e04bb6481fdfec67082086a407/dist/index.html
        </a>
        <br />
        <b>GitHubCode:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://github.com/cvilla714/restaurant-page")}>
          https://github.com/cvilla714/restaurant-page
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Restaurant Project",
        },
      },
    });
  };

  const popupboxConfigRestaurant = {
    titleBar: {
      enable: true,
      text: "Restaurant Project",
    },
    fadeIn: true,
    fadeSpeed: 500,
  };

  // TodoLIst Project
  const openPopupboxList = () => {
    const content = (
      <>
        <div className="justimage">
          <img className="portfolio-image-popupbox-list" src={todolist} alt="TodoList Project" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia totam alias illo molestias explicabo ab modi quae sequi minima, rerum error in nisi aut laboriosam. Consequuntur quis earum doloremque nulla.</p>
        <b>DemoLink:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://rawcdn.githack.com/cvilla714/list/2d7d50834770fd5e9d7f2a3b5203a9db841d2e85/dist/index.html", "_blank")}>
          https://rawcdn.githack.com/cvilla714/list/2d7d50834770fd5e9d7f2a3b5203a9db841d2e85/dist/index.html
        </a>
        <br />
        <b>GitHubCode:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://github.com/cvilla714/list")}>
          https://github.com/cvilla714/list
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Todo List Project",
        },
      },
    });
  };

  const popupboxConfigList = {
    titleBar: {
      enable: true,
      text: "Todo List Project",
    },
    fadeIn: true,
    fadeSpeed: 500,
  };

  // Weather App Project
  const openPopupboxWeatherApp = () => {
    const content = (
      <>
        <div className="justimage">
          <img className="portfolio-image-popupbox-weatherapp" src={weather} alt="Weather App Project" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia totam alias illo molestias explicabo ab modi quae sequi minima, rerum error in nisi aut laboriosam. Consequuntur quis earum doloremque nulla.</p>
        <b>DemoLink:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://rawcdn.githack.com/cvilla714/weather-app/e69d6a5a8edc54b6dcffc98761f872ad1898e26f/dist/index.html", "_blank")}>
          https://rawcdn.githack.com/cvilla714/weather-app/e69d6a5a8edc54b6dcffc98761f872ad1898e26f/dist/index.html
        </a>
        <br />
        <b>GitHubCode:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://github.com/cvilla714/weather-app")}>
          https://github.com/cvilla714/weather-app
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Weather App",
        },
      },
    });
  };

  const popupboxConfigWeatherApp = {
    titleBar: {
      enable: true,
      text: "Weather App Project",
    },
    fadeIn: true,
    fadeSpeed: 500,
  };

  // LifeStyle Capstone Project
  const openPopupboxArticle = () => {
    const content = (
      <>
        <div className="justimage">
          <img className="portfolio-image-popupbox-article" src={article} alt="LifeStyle Capstone Project" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia totam alias illo molestias explicabo ab modi quae sequi minima, rerum error in nisi aut laboriosam. Consequuntur quis earum doloremque nulla.</p>
        <b>DemoLink:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://morning-island-07101.herokuapp.com/", "_blank")}>
          https://morning-island-07101.herokuapp.com/
        </a>
        <br />
        <b>GitHubCode:</b>{" "}
        <a className="hyper-link" onClick={() => window.open("https://github.com/cvilla714/rails-capstone")}>
          https://github.com/cvilla714/rails-capstone
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: "Rails Capstone Project",
        },
      },
    });
  };

  const popupboxConfigArticle = {
    titleBar: {
      enable: true,
      text: "Rails Capstone Project",
    },
    fadeIn: true,
    fadeSpeed: 500,
  };

  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box mx-3 my-3" onClick={openPopupboxLinter}>
            <img className="portfolio-image" src={linter} alt="linter project" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*-*/}

          <div className="portfolio-image-box mx-3 my-3" onClick={openPopupboxGame}>
            <img className="portfolio-image" src={game} alt="Phaser Game Endless Runner" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*-*/}

          <div className="portfolio-image-box mx-3 my-3" onClick={openPopupboxRestaurant}>
            <img className="portfolio-image" src={restaurant} alt="Restaurante Page Project" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*-*/}

          <div className="portfolio-image-box mx-3 my-3" onClick={openPopupboxList}>
            <img className="portfolio-image" src={todolist} alt="Todo List Project" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*-*/}

          <div className="portfolio-image-box mx-3 my-3" onClick={openPopupboxWeatherApp}>
            <img className="portfolio-image" src={weather} alt="Build A Weather App" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*-*/}

          <div className="portfolio-image-box mx-3 my-3" onClick={openPopupboxArticle}>
            <img className="portfolio-image" src={article} alt="Rails Capstone" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigLinter} />
      <PopupboxContainer {...popupboxConfigGame} />
      <PopupboxContainer {...popupboxConfigRestaurant} />
      <PopupboxContainer {...popupboxConfigList} />
      <PopupboxContainer {...popupboxConfigWeatherApp} />
      <PopupboxContainer {...popupboxConfigArticle} />
    </div>
  );
};

export default Porftolio;
