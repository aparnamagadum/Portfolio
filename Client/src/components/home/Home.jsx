import React from 'react'
import HomeContainer from './HomeContainer'
import './Home.css'
import Nav from '../navbar/Nav'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import Footer from '../footer/Footer';
import Picture from './Images/PHOTO.jpg';
function Home() {
  return (
    <div className='home'>
     <Nav/>
     <HomeContainer title1="Hi " title2="I'M Aparna Magadum" title3="I am a passionate Full Stack Web Developer, specialized in ( HTML, CSS , Tailwind CSS , MongoDB , Javascript , Express.js , React.js , and Node.js ). With a strong focus on web development." image={Picture}/>
    <div className='Social-media'>
      <h1>Find Me On</h1>
       <h2>Feel free to connect with me</h2>
       <div className='connection'>
       <a href="https://github.com/aparnamagadum"><FaGithub /></a>
       <a href="https://www.linkedin.com/in/aparnamagadum2/"><CiLinkedin /></a>
       <a href="https://www.instagram.com/aparnas.m/"><FaInstagram /></a>
       </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
