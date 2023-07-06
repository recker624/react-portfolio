import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs  from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet';

const Contact = () => {

  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef();

    useEffect(() => {
      return () => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000);
      }
    }, [])
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('default_service', 'template_5sjglsv', refForm.current, '78iVUFq8HqZNEgXiG')
      .then(() => {
        alert('Message successfully sent!');
        window.location.reload(false);
      }, () => {
          alert("ERROR: Message not sent, please try again.")
      });
  }

  return (
    <>
      <div className='container contact-page'>
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1> 
          <p>
            I'm excited to work on new projects and gain practical experience. If you have any questions, job opportunities, or would like to connect
            with a fellow web enthusiast, I would love to hear from you. Please feel free to use the contact form below to get in touch.
            Let's create something amazing together!
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required/>
                </li>
                <li className="half">
                  <input type="email" name="email" placeholder="Email" required/>
                </li>   
                <li>
                  <input type="text" name="subject" placeholder="Subject" required/>
                </li>    
                <li>
                  <textarea name="message" placeholder="Message" required></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND"/>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Sahil Saini,
          <br />
          Barara, Haryana <br />
          India, 133201 <br />
          <span>sahilsaini624@gmail.com</span>
        </div>
        <div className="map-wrapper">
          <MapContainer center={[30.2120, 77.0402]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[30.2120,77.0402]} >
              <Popup>
                Hi! I'm here.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="ball-clip-rotate-pulse"/>
    </>
  );
}

export default Contact;