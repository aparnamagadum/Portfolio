import React from 'react'
import SkillSet from './SkillSet'
import './Skills.css'
import Nav from '../navbar/Nav'
import { FaJava } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { FaSlack } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiRender } from "react-icons/si";
import Footer from '../footer/Footer';

function About() {
  return (
    <div className='about-conatiner'>
    <Nav />
    <div className='skill-container'>
    <h1>Professional <span>Skillset</span></h1>
    <div className='Skillset'>
    <SkillSet icon={<FaJava className='logo'/>} />
    <SkillSet icon={<IoLogoJavascript className='logo'/>} />
    <SkillSet icon={<FaHtml5 className='logo'/>} />
    <SkillSet icon={<FaReact className='logo'/>} />
    <SkillSet icon={<RiTailwindCssFill  className='logo'/>} />
    <SkillSet icon={<SiMysql  className='logo'/>} />
    <SkillSet icon={< DiNodejs  className='logo'/>} />
    <SkillSet icon={<SiMongodb className='logo'/>} />
    <SkillSet icon={<SiExpress className='logo'/>} />
    </div>
    </div>
    <div className='skill-container'>
    <h1><span>Tools</span> I Use</h1>
    <div className='Skillset'>
    <SkillSet icon={< VscVscode  className='logo'/>} />
    <SkillSet icon={< SiPostman  className='logo'/>} />
    <SkillSet icon={< FaSlack  className='logo'/>} />
    <SkillSet icon={< FaGithub className='logo'/>} />
    <SkillSet icon={< IoLogoVercel className='logo'/>} />
    <SkillSet icon={< SiRender className='logo'/>} />
    </div>
    </div>
    <Footer/>
    </div>
    
  )
}

export default About
