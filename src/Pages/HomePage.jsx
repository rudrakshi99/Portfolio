import React from 'react';
import { faDev, faGithub, faLinkedin, faMedium, faStackOverflow, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import Tittle from '../Components/Title'
import ImageSection from '../Components/ImageSection';

const HomePage = () => {
    return (
        <div className="AboutPage">
         <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <header className="hero">
                <div className="icons">
                    <Link to="https://www.linkedin.com/in/rudrakshi-soni-403031195/" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon fb" />
                    </Link>
                    <Link to="https://github.com/rudrakshi99" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link to="https://twitter.com/Rudrakshi09" className="icon-holder">
                        <FontAwesomeIcon icon={faTwitter} className="icon tw"/>
                    </Link>
                    <Link to="https://medium.com/@sonirudrakshi99" className="icon-holder">
                        <FontAwesomeIcon icon={faMedium} className="icon md"/>
                    </Link>
                    <Link to="https://dev.to/rudrakshi99" className="icon-holder">
                        <FontAwesomeIcon icon={faDev} className="icon dev"/>
                    </Link>
                    <Link to="https://stackoverflow.com/users/12773738/rudrakshi?tab=profile" className="icon-holder">
                        <FontAwesomeIcon icon={faStackOverflow} className="icon sk"/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;