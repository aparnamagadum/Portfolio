import React from 'react'
import './Button.css'
import { FaGithub } from "react-icons/fa";
function Button({title,href,icon , type}) {
  return (
   <button className='btn'><a className='link' href={href} type={type}>{icon} {title}</a></button>
  )
}

export default Button
