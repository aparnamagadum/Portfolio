import React from 'react';
import "./Resume.css"
import Button from '../projectSection/Button.jsx';
import Nav from '../navbar/Nav';
import Footer from '../footer/Footer';
function Resume() {
  return (
    <div className="resume-container">
    <Nav/>
    <div className='resume'>
      <h1>My Resume</h1>
      <h2>You can download my resume by clicking the button below:</h2>
      <a href="/Aparna_Magadum_FullStack.pdf" download="Aparna_Magadum_FullStack.pdf">
      <Button title="Download Resume"/>
      </a>
      </div>
      <Footer/>
    </div>
  );
}

export default Resume;
