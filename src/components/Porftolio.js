import React from "react";
import linter from "../images/linter.png";
import game from "../images/game.png";
import restaurant from "../images/restaurant.png";
import todolist from "../images/todolist.png";
import weather from "../images/weatherapp.png";
import article from "../images/lifestylearticle.png";

const Porftolio = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box">
            <img className="portfolio-image" src={linter} alt="linter project" />
          </div>
          {/*-*/}

          <div className="portfolio-image-box">
            <img className="portfolio-image" src={game} alt="Phaser Game Endless Runner" />
          </div>
          {/*-*/}

          <div className="portfolio-image-box">
            <img className="portfolio-image" src={restaurant} alt="Restaurante Page Project" />
          </div>
          {/*-*/}

          <div className="portfolio-image-box">
            <img className="portfolio-image" src={todolist} alt="Todo List Project" />
          </div>
          {/*-*/}

          <div className="portfolio-image-box">
            <img className="portfolio-image" src={weather} alt="Build A Weather App" />
          </div>
          {/*-*/}

          <div className="portfolio-image-box">
            <img className="portfolio-image" src={article} alt="Rails Capstone" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Porftolio;
