import React from 'react'
import { FooterContainerStyle } from './FooterStyles'
import logoInstagram from '../../../assets/instagram_logo.webp'
import logoLinkedin from '../../../assets/linkedin_logo.png'
import logoGithub from '../../../assets/github_logo.png'
import { useNavigate } from 'react-router-dom'
import { FaArrowUp } from "react-icons/fa";


const Footer = () => {
  const navigator = useNavigate();
  
  const goHome = () => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });

    navigator('/')
  }

  return (
    <FooterContainerStyle>
      <h2 className='titleFooter' onClick={() => goHome()}>TRICAMPEÓN</h2>
      <span className='redesContainer'>
        <p>TRICAMPEÓN</p>
      </span>
      <span className='topPage' onClick={() => window.scroll({top: 0, behavior: "smooth"})}>
        <FaArrowUp  className="iconTopPage"/>
        <p>Ir al inicio</p>
      </span>
    </FooterContainerStyle>
  )
}

export default Footer