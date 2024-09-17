import React from 'react'
import './Project.css'
import ProjectCard  from './ProjectCard'
import Nav from '../navbar/Nav'
import Footer from '../footer/Footer'
import { FaGithub } from "react-icons/fa";
import PokemonImage from './Images/Pokemon.png';
import LangTranslator from './Images/LangTranslator.png';
import Url from  './Images/Url.png';
import Ario from './Images/Ario.png';
import TataMotors from './Images/TataMotors.png';
import Notepad from './Images/Notepad.png';
import YoutubeClone from './Images/YoutubeClone.png';
function Project() {
  return (
    <div className='projectSection'>
      <Nav />
      <div className='heading'>
      <h1 style={{color:"white"}}>My Recent Works</h1>
      <h2 style={{color:"white"}}>Here are few projects I've worked on recently.</h2>
      </div>
      <div className='projects'>
      <ProjectCard title="Pokemon" image={PokemonImage}  para="Tech Stack: HTML,CSS,JavaScript" href="https://github.com/aparnamagadum/pokemon" href1="https://aparnamagadum.github.io/pokemon/" icon={<FaGithub />}/>
       <ProjectCard  title="Language Translator" image={LangTranslator} para="Tech Stack: React" href="https://github.com/aparnamagadum/LangTranslator" href1="https://lang-translator-two.vercel.app/" icon={<FaGithub />}/>
      <ProjectCard title="Aria Website" image={Ario} para="Tech Stack: HTML , CSS"  href="https://github.com/aparnamagadum/Major-project" href1="https://aparnamagadum.github.io/Major-project/" icon={<FaGithub />}/>
      <ProjectCard title="Tata Motors" image={TataMotors} para="Tech Stack: HTML , CSS , Tailwind" href="https://github.com/aparnamagadum/Geekthon-tatamotors" href1="https://aparnamagadum.github.io/Geekthon-tatamotors/" icon={<FaGithub />}/>
      <ProjectCard title="NotePadMarkdown" image={Notepad} para="Tech Stack: React" href="https://github.com/aparnamagadum/NotePadMarkdown" href1="https://note-pad-markdown-afgn.vercel.app/" icon={<FaGithub />}/>
      <ProjectCard title="YouTube Clone" image={YoutubeClone} para="Tech Stack: HTML , CSS" href="https://github.com/aparnamagadum/Youtube-clone" href1="https://aparnamagadum.github.io/Youtube-clone/" icon={<FaGithub />}/>
      <ProjectCard title="URL-Shortner" image={Url} para="Tech Stack: React , Node.js , express , MongoDB" href="https://github.com/aparnamagadum/URL-Shortner" href1="https://url-shortner-frontend-xe7v.onrender.com/" icon={<FaGithub />}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Project
