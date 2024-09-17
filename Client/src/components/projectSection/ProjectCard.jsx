import React from 'react'
import './ProjectCard.css'
// import Button from './button'
import Button from './Button.jsx'
function ProjectCard({title , image , para ,href , href1 , icon}) {
  return (
    <div className='card-container'>
      <div className='image-container'>
        <img className='project-ui' src={image} alt="" />
      </div>
      <div>
      <h2 className='name'>{title}</h2>
      <h4 className='tect-stack'>{para}</h4>
      </div>
      <div style={{display:"flex" , gap:20}}>
      <Button title='Github' href={href} icon={icon}/>
      <Button title='Demo' href={href1}/>
      </div>
    </div>
  )
}

export default ProjectCard
