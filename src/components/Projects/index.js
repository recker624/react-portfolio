import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';

import ResturantPage from '../../assets/images/resturant-page.png';
import WeatherApp from '../../assets/images/weather-app.png';
import ResumeBuilder from '../../assets/images/weather-app.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward, faLink } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const projectsData =
    [
      {
        projectTitle: 'Resturant page',
        projectDescription: 'A simple resturant page with a menu and navigation tabs.',
        projectImage: ResturantPage,
        projectLink: 'https://github.com/recker624/WeatherApp',
        websiteLink: 'https://recker624.github.io/Resturant-page/',
        alt:'Resturant page'
      },
      {
        projectTitle: 'Weather App',
        projectDescription: 'A weather app that shows current weather and forcast.',
        projectImage: WeatherApp,
        projectLink: 'https://github.com/recker624/Resturant-page',
        websiteLink: 'https://recker624.github.io/Resturant-page/',
        alt:'Weather App'
      },
      {
        projectTitle: 'Resume Builder',
        projectDescription: 'A resume builder with a pdf resume generator',
        projectImage: ResumeBuilder,
        projectLink: 'https://github.com/recker624/cv-project',
        websiteLink: '',
        alt:'Resume Builder'
      },
    ];

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000);
    }
  }, [])

  return (
    <>
      <div className="container project-page">
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M','y',' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1> 
          <div className="projects-container">
            {
              projectsData.map(function (value, index) {
                return (
                  <div className={"project-card project-card-hover" + " " + "_15" + index} key={value.projectTitle + "_" + index}>
                    <img src={value.projectImage} alt={ value.alt } className="website-img"></img>
                    <div className="project-info">
                      <h2>{value.projectTitle}</h2>
                      <div className='project-description'>
                        <p>{value.projectDescription}</p>
                      </div>
                      <div className='project-link'>
                        <a href={value.projectLink} target="_blank" rel="noreferrer">
                          GitHub Link
                          <FontAwesomeIcon icon={faLink} />
                        </a>
                      </div>
                      <div className='website-link'>
                        <a href={value.websiteLink} target="_blank" rel="noreferrer">
                          Visit Website
                          <FontAwesomeIcon icon={faLink} />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
      <Loader type="ball-clip-rotate-pulse"/>
    </>
  );
}

export default Projects;