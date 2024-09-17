import React from 'react'
import './Nav.css'
import {NavLink} from "react-router-dom"
function Nav() {
  return (
    <div className='nav-conatiner'>
      <div><h1>Aparna</h1></div>
      <div className='li'><ul>
      <li>
            <NavLink
              to="/"
              exact
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Skills"
              exact
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Project"
              exact
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Project
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              exact
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Resume"
              exact
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              exact
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Contact
            </NavLink>
          </li>
        </ul></div>
    </div>
  )
}

export default Nav
