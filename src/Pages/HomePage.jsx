import React from "react";
import {
  faDev,
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tittle from "../Components/Title";
import ImageSection from "../Components/ImageSection";

const HomePage = () => {
  return (
    <div className="AboutPage">
      <Tittle title={"About Me"} span={"About Me"} />
      <ImageSection />
      <header className="hero">
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/rudrakshi-soni-403031195/"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon fb" />
          </a>
          <a href="https://github.com/rudrakshi99" className="icon-holder">
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
          <a href="https://twitter.com/Rudrakshi09" className="icon-holder">
            <FontAwesomeIcon icon={faTwitter} className="icon tw" />
          </a>
          <a href="https://medium.com/@sonirudrakshi99" className="icon-holder">
            <FontAwesomeIcon icon={faMedium} className="icon md" />
          </a>
          <a href="https://dev.to/rudrakshi99" className="icon-holder">
            <FontAwesomeIcon icon={faDev} className="icon dev" />
          </a>
          <a
            href="https://stackoverflow.com/users/12773738/rudrakshi?tab=profile"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faStackOverflow} className="icon sk" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
