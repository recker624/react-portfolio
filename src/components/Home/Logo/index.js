import './index.scss';
import LogoS from '../../../assets/images/logo-s.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
const Logo = () => {

  const bgRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    gsap.timeline().to(bgRef.current, {
      duration: 1,
      opacity: 1,
    })
    
    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1, 
        delay: 4,
        duration: 4,
      }
    );
  }, []);

  return (
    <div className='logo-container' ref={bgRef}>
      <img className='solid-logo' src={LogoS} alt="logo" ref={solidLogoRef} />
    </div>
  );
}

export default Logo;