import React from 'react';
import linter from '../images/linter.png';
import game from '../images/game.png';
import restaurant from '../images/restaurant.png';
import todolist from '../images/todolist.png';
import weather from '../images/weatherapp.png';
import article from '../images/lifestylearticle.png';
import contact from '../images/contactkeeper.png';
import profile from '../images/githubprofilefinder.png';
import tracker from '../images/trackerexpensesapp.png';
// Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
// React PopupBox
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';
import { FaGithub } from 'react-icons/fa';
import { RiVidicon2Fill } from 'react-icons/ri';
const Porftolio = () => {
  // Expenses Tracker Full Stack App
  const openPopupboxExpensesTracker = () => {
    const content = (
      <>
        <div className="justimage">
          <img
            className="portfolio-image-popupbox-restaurant"
            src={tracker}
            alt="Expenses Tracker App"
          />
        </div>
        <div className="">
          <p className="py-1 legen">
            The Project was about creating a Tracker App for expenses, it is a
            Full Stack Application, using Rails as API to handle Back End and on
            the Front End using React and RTK Query, It tracks expenses per day
            and add them per month and filter it by year the visualization was
            using Chartjs-2. It was built with
          </p>
          <p className="mt-1">Technologies Used:</p>
        </div>
        <div className="technologies">
          <button className="btn btn-success mx-1">Npm</button>
          <button className="btn btn-success mx-1">NodeJs</button>
          <button className="btn btn-success mx-1">React</button>
          <button className="btn btn-success mx-1">React-Router</button>
          <button className="btn btn-success mx-1">React-Dom</button>
          <button className="btn btn-success mx-1">React-Boostrap</button>
          <button className="btn btn-success mx-1">React-Chartjs-2</button>
          <button className="btn btn-success mx-1">RTK Query</button>
          <button className="btn btn-success mx-1">Jess</button>
        </div>
        <br />
        <b>DemoLink:</b>{' '}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              'https://upbeat-montalcini-94dc0b.netlify.app/',
              '_blank',
            )
          }
        >
          <RiVidicon2Fill className="portfolio-media" />
        </a>
        <br />
        <b>
          GitHubCode:
          <a
            className="hyper-link"
            onClick={() =>
              window.open('https://github.com/cvilla714/tracker-expenses-app')
            }
          >
            <FaGithub className="portfolio-media" />
          </a>
        </b>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: 'Expenses Tracker App',
        },
      },
    });
  };

  const popupboxConfigExpensesTracker = {
    titleBar: {
      enable: true,
      text: 'Expenses Tracker App',
    },
    fadeIn: true,
    fadeSpeed: 500,
  };

  // Contact Keeper Full MERM App
  const openPopupboxContctKeeper = () => {
    const content = (
      <>
        <div className="justimage">
          <img
            className="portfolio-image-popupbox-restaurant"
            src={contact}
            alt="Contact Keeper App"
          />
        </div>
        <div className="">
          <p className="py-1 legen">
            This is a Full MERN APP, the idea was to create a contact
            information the user can use to keep their contacts and separate
            them into Personal and Professional it was built with
          </p>
          <p className="mt-1">Technologies Used:</p>
        </div>
        <div className="technologies">
          <button className="btn btn-success mx-1">Npm</button>
          <button className="btn btn-success mx-1">NodeJs</button>
          <button className="btn btn-success mx-1">Express</button>
          <button className="btn btn-success mx-1">React</button>
          <button className="btn btn-success mx-1">React-Dom</button>
          <button className="btn btn-success mx-1">Context-API</button>
          <button className="btn btn-success mx-1">MongoDb</button>
        </div>
        <br />
        <b>DemoLink:</b>{' '}
        <a
          className="hyper-link"
          onClick={() =>
            window.open('https://mighty-stream-12623.herokuapp.com/', '_blank')
          }
        >
          <RiVidicon2Fill className="portfolio-media" />
        </a>
        <br />
        <b>
          GitHubCode:
          <a
            className="hyper-link"
            onClick={() =>
              window.open(
                'https://github.com/cvilla714/contact-keeper-mern-project',
              )
            }
          >
            <FaGithub className="portfolio-media" />
          </a>
        </b>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: 'Contact Keeper App',
        },
      },
    });
  };

  const popupboxConfigContctKeeper = {
    titleBar: {
      enable: true,
      text: 'Contact Keeper App',
    },
    fadeIn: true,
    fadeSpeed: 500,
  };

  // GiHub Profile Finder
  const openPopupboxGitHubProfileFinder = () => {
    const content = (
      <>
        <div className="justimage">
          <img
            className="portfolio-image-popupbox-restaurant"
            src={profile}
            alt="GitHub Profile Finder"
          />
        </div>
        <div className="">
          <p className="py-1 legen">
            The project was created using GitHub API to find users profiles and
            pulls up to 30 users if they all share the name or username you can
            select search for a specific user as well it uses a filter to search
            for users with the same name or username and gives back the user
            information if is hireable or not, the lates repos the user has been
            working on lately the Bio if available and can visit the user's
            profile.
          </p>
          <p className="mt-1">Technologies Used:</p>
        </div>
        <div className="technologies">
          <button className="btn btn-success mx-1">Npm</button>
          <button className="btn btn-success mx-1">NodeJs</button>
          <button className="btn btn-success mx-1">React</button>
          <button className="btn btn-success mx-1">React-Dom</button>
          <button className="btn btn-success mx-1">Redux</button>
        </div>
        <br />
        <b>DemoLink:</b>{' '}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              'https://determined-agnesi-a54f26.netlify.app/',
              '_blank',
            )
          }
        >
          <RiVidicon2Fill className="portfolio-media" />
        </a>
        <br />
        <b>
          GitHubCode:
          <a
            className="hyper-link"
            onClick={() =>
              window.open('https://github.com/cvilla714/react-redux-capstone')
            }
          >
            <FaGithub className="portfolio-media" />
          </a>
        </b>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: 'GitHub Profile Finder',
        },
      },
    });
  };

  const popupboxConfigGitHubProfileFinder = {
    titleBar: {
      enable: true,
      text: 'GitHub Profile Finder',
    },
    fadeIn: true,
    fadeSpeed: 500,
  };

  // Linter Project
  const openPopupboxLinter = () => {
    const content = (
      <>
        <div className="justimage">
          <img
            className="portfolio-image-popupbox-linter"
            src={linter}
            alt="Linter Ruby Capstone Project"
          />
        </div>
        <div className="py-3">
          <p className="mt-3">
            This project was mainly around creating a linter that will check for
            comments, missing semicolons at the end of every line and also
            checking for the initial period to designate a class
          </p>
          <p className="mt-1">Technologies Used:</p>
        </div>
        <div className="technologies">
          <button className="btn btn-success mx-1">Ruby</button>
          <button className="btn btn-success mx-1">RSpec</button>
          <button className="btn btn-success mx-1">Colorize</button>
        </div>
        <br />
        <b>
          SourceCode:
          <a
            className="hyper-link"
            onClick={() =>
              window.open('https://github.com/cvilla714/linterproject')
            }
          >
            <FaGithub className="portfolio-media" />
          </a>
        </b>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: 'Linter Ruby Capstone Project',
        },
      },
    });
  };

  const popupboxConfigLinter = {
    titleBar: {
      enable: true,
      text: 'Linter Ruby Capstone Project',
    },
    fadeIn: true,
    fadeSpeed: 500,
  };

  // Game Project
  const openPopupboxGame = () => {
    const content = (
      <>
        <div className="justimage">
          <img
            className="portfolio-image-popupbox-game"
            src={game}
            alt="Javascript Capstone Project"
          />
        </div>
        <div className="">
          <p className="py-1 legen">
            This project was about creating a game, using Phaser. My version is
            the Endless Runner
          </p>
          <p className="mt-1">Technologies Used:</p>
        </div>
        <div className="technologies">
          <button className="btn btn-success mx-1">Phaser</button>
          <button className="btn btn-success mx-1">Javascript</button>
          <button className="btn btn-success mx-1">Webpack</button>
          <button className="btn btn-success mx-1">Jest</button>
        </div>
        <br />
        <b>DemoLink:</b>{' '}
        <a
          className="hyper-link"
          onClick={() =>
            window.open('https://frosty-fermat-dca644.netlify.app/', '_blank')
          }
        >
          <RiVidicon2Fill className="portfolio-media" />
        </a>
        <br />
        <b>
          GitHubCode:
          <a
            className="hyper-link"
            onClick={() =>
              window.open('https://github.com/cvilla714/javascriptcapstone')
            }
          >
            <FaGithub className="portfolio-media" />
          </a>
        </b>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: 'Javascript Capstone Project',
        },
      },
    });
  };

  const popupboxConfigGame = {
    titleBar: {
      enable: true,
      text: 'Javascript Capstone Project',
    },
    fadeIn: true,
    fadeSpeed: 500,
  };

  // Resturant Project
  const openPopupboxRestaurant = () => {
    const content = (
      <>
        <div className="justimage">
          <img
            className="portfolio-image-popupbox-restaurant"
            src={restaurant}
            alt="Restaurant Project"
          />
        </div>
        <div className="">
          <p className="py-1 legen">
            The Project was about creating a restaurant page using javascript to
            generate the tabs and loading all the proper info, also using a
            single div in the HTML to append all elements
          </p>
          <p className="mt-1">Technologies Used:</p>
        </div>
        <div className="technologies">
          <button className="btn btn-success mx-1">Sass</button>
          <button className="btn btn-success mx-1">Webpack</button>
          <button className="btn btn-success mx-1">Npm</button>
          <button className="btn btn-success mx-1">Javascript</button>
          <button className="btn btn-success mx-1">Jest</button>
        </div>
        <br />
        <b>DemoLink:</b>{' '}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              'https://rawcdn.githack.com/cvilla714/restaurant-page/4e6e899bba8894e04bb6481fdfec67082086a407/dist/index.html',
              '_blank',
            )
          }
        >
          <RiVidicon2Fill className="portfolio-media" />
        </a>
        <br />
        <b>
          GitHubCode:
          <a
            className="hyper-link"
            onClick={() =>
              window.open('https://github.com/cvilla714/restaurant-page')
            }
          >
            <FaGithub className="portfolio-media" />
          </a>
        </b>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: 'Restaurant Project',
        },
      },
    });
  };

  const popupboxConfigRestaurant = {
    titleBar: {
      enable: true,
      text: 'Restaurant Project',
    },
    fadeIn: true,
    fadeSpeed: 500,
  };

  // TodoLIst Project
  const openPopupboxList = () => {
    const content = (
      <>
        <div className="justimage">
          <img
            className="portfolio-image-popupbox-list"
            src={todolist}
            alt="TodoList Project"
          />
        </div>
        <div className="">
          <p className="py-1 legen">
            The main concept was to create a todo list that could be added to
            existing projects or creating new ones
          </p>
          <p className="mt-1">Technologies Used:</p>
        </div>
        <div className="technologies">
          <button className="btn btn-success mx-1">Bootstrap</button>
          <button className="btn btn-success mx-1">Webpack</button>
          <button className="btn btn-success mx-1">Jest</button>
          <button className="btn btn-success mx-1">Javascript</button>
        </div>
        <br />
        <b>DemoLink:</b>{' '}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              'https://rawcdn.githack.com/cvilla714/list/2d7d50834770fd5e9d7f2a3b5203a9db841d2e85/dist/index.html',
              '_blank',
            )
          }
        >
          <RiVidicon2Fill className="portfolio-media" />
        </a>
        <br />
        <b>
          GitHubCode:
          <a
            className="hyper-link"
            onClick={() => window.open('https://github.com/cvilla714/list')}
          >
            <FaGithub className="portfolio-media" />
          </a>
        </b>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: 'Todo List Project',
        },
      },
    });
  };

  const popupboxConfigList = {
    titleBar: {
      enable: true,
      text: 'Todo List Project',
    },
    fadeIn: true,
    fadeSpeed: 500,
  };

  // Weather App Project
  const openPopupboxWeatherApp = () => {
    const content = (
      <>
        <div className="justimage">
          <img
            className="portfolio-image-popupbox-weatherapp"
            src={weather}
            alt="Weather App Project"
          />
        </div>
        <div className="">
          <p className="py-1 legen">
            The project was developed using an API, the idea is for the users to
            submit the city name in the input-form, and then display back the
            information regarding the temperature in Celcius, using with a
            toggle button change it to Farenheights and change the icon of the
            card to show if it's day or night and the forecast. Extra features
            were to provide the time zone and the English name.
          </p>
          <p className="mt-1">Technologies Used:</p>
        </div>
        <div className="technologies">
          <button className="btn btn-success mx-1">Bootstrap</button>
          <button className="btn btn-success mx-1">Webpack</button>
          <button className="btn btn-success mx-1">Jest</button>
          <button className="btn btn-success mx-1">Javascript</button>
        </div>
        <br />
        <b>DemoLink:</b>{' '}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              'https://rawcdn.githack.com/cvilla714/weather-app/e69d6a5a8edc54b6dcffc98761f872ad1898e26f/dist/index.html',
              '_blank',
            )
          }
        >
          <RiVidicon2Fill className="portfolio-media" />
        </a>
        <br />
        <b>
          GitHubCode:
          <a
            className="hyper-link"
            onClick={() =>
              window.open('https://github.com/cvilla714/weather-app')
            }
          >
            <FaGithub className="portfolio-media" />
          </a>
        </b>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: 'Weather App',
        },
      },
    });
  };

  const popupboxConfigWeatherApp = {
    titleBar: {
      enable: true,
      text: 'Weather App Project',
    },
    fadeIn: true,
    fadeSpeed: 500,
  };

  // LifeStyle Capstone Project
  const openPopupboxArticle = () => {
    const content = (
      <>
        <div className="justimage">
          <img
            className="portfolio-image-popupbox-article"
            src={article}
            alt="LifeStyle Capstone Project"
          />
        </div>
        <div className="">
          <p className="py-1 legen">
            This project was about creating a Sports Article App, where the
            users will have the choice to select from several categories and get
            articles that are making references to the respective categories.
            The user can create their articles as well and add categories to add
            value to the app. The App will feature on the main page the article
            that has the most likes, and each article card will show the most
            recent article added to the corresponding category.
          </p>
          <p className="mt-1">Technologies Used:</p>
        </div>
        <div className="technologies">
          <button className="btn btn-success mx-1">Ruby</button>
          <button className="btn btn-success mx-1">Ruby on Rails</button>
          <button className="btn btn-success mx-1">Boostrap</button>
          <button className="btn btn-success mx-1">PostgreSQL</button>
          <button className="btn btn-success mx-1">RSpec</button>
        </div>
        <br />
        <b>DemoLink:</b>{' '}
        <a
          className="hyper-link"
          onClick={() =>
            window.open('https://morning-island-07101.herokuapp.com/', '_blank')
          }
        >
          <RiVidicon2Fill className="portfolio-media" />
        </a>
        <br />
        <b>
          GitHubCode:
          <a
            className="hyper-link"
            onClick={() =>
              window.open('https://github.com/cvilla714/rails-capstone')
            }
          >
            <FaGithub className="portfolio-media" />
          </a>
        </b>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: 'Rails Capstone Project',
        },
      },
    });
  };

  const popupboxConfigArticle = {
    titleBar: {
      enable: true,
      text: 'Rails Capstone Project',
    },
    fadeIn: true,
    fadeSpeed: 500,
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div
            className="portfolio-image-box mx-3 my-3"
            onClick={openPopupboxExpensesTracker}
          >
            <img
              className="portfolio-image"
              src={tracker}
              alt="Expenses Tracker Project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*-*/}

          <div
            className="portfolio-image-box mx-3 my-3"
            onClick={openPopupboxContctKeeper}
          >
            <img
              className="portfolio-image"
              src={contact}
              alt="Contact Keeper App"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*-*/}

          <div
            className="portfolio-image-box mx-3 my-3"
            onClick={openPopupboxGitHubProfileFinder}
          >
            <img
              className="portfolio-image"
              src={profile}
              alt="GitHub Profile Finder"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*-*/}

          <div
            className="portfolio-image-box mx-3 my-3"
            onClick={openPopupboxLinter}
          >
            <img
              className="portfolio-image"
              src={linter}
              alt="linter project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*-*/}

          <div
            className="portfolio-image-box mx-3 my-3"
            onClick={openPopupboxGame}
          >
            <img
              className="portfolio-image"
              src={game}
              alt="Phaser Game Endless Runner"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*-*/}

          <div
            className="portfolio-image-box mx-3 my-3"
            onClick={openPopupboxRestaurant}
          >
            <img
              className="portfolio-image"
              src={restaurant}
              alt="Restaurante Page Project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*-*/}

          <div
            className="portfolio-image-box mx-3 my-3"
            onClick={openPopupboxList}
          >
            <img
              className="portfolio-image"
              src={todolist}
              alt="Todo List Project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*-*/}

          <div
            className="portfolio-image-box mx-3 my-3"
            onClick={openPopupboxWeatherApp}
          >
            <img
              className="portfolio-image"
              src={weather}
              alt="Build A Weather App"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/*-*/}

          <div
            className="portfolio-image-box mx-3 my-3"
            onClick={openPopupboxArticle}
          >
            <img
              className="portfolio-image"
              src={article}
              alt="Rails Capstone"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigExpensesTracker} />
      <PopupboxContainer {...popupboxConfigContctKeeper} />
      <PopupboxContainer {...popupboxConfigGitHubProfileFinder} />
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
