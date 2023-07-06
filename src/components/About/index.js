import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss"
import { useState, useEffect } from "react";
import { faBootstrap, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000);
    }
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            As a highly ambitious front-end developer, I am actively seeking a position within
            a well-established IT company that offers an exciting opportunity to
            collaborate on cutting-edge technologies and engage in challenging projects with diverse scopes.
          </p>
          <p>
            I'm quite confidant and curious , and am dedicated to honing my skills as a web developer. With each design problem I encounter,
            I embrace the opportunity for growth and improvement, improving myself one problem at a time.
          </p>
        </div>

        <div className='stage-cube-count'>
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#efd81d" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faBootstrap} color="#6f42c1" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-clip-rotate-pulse"/>
    </>
  );
}

export default About;