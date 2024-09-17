import React from 'react'
import './Footer.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
function Footer() {
  return (
    <div className='footer-section'>
      <h3>Designed and developed by Aparna Magadum</h3>
      <h3>Copyright@2024 AP</h3>
      <div style={{display:'flex' , gap:20}}>
       <a className='Contact' href="https://github.com/aparnamagadum"><FaGithub /></a>
       <a className='Contact' href="https://www.linkedin.com/in/aparnamagadum2/"><FaLinkedin /></a>
       <a className='Contact' href="https://www.instagram.com/aparnas.m/"><FaSquareInstagram /></a>
      </div>
    </div>
  )
}

export default Footer
