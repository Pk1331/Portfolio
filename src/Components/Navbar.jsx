import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = ({ onAboutClick, onSkillsClick, onProjectsClick, onEducationClick, onContactClick }) => {
  return (
    <div className="navbar">
        <Link to="/" className='link'><div className="user">Pavan</div ></Link>
        <div className="nav-items">
           <ul>
               <li onClick={onAboutClick}>About</li>
               <li onClick={onSkillsClick}>Skills</li>
               <li onClick={onProjectsClick}>Projects</li>
               <li onClick={onEducationClick}>Education</li>
               <li onClick={onContactClick}>Contact</li>
           </ul>
        </div>
    </div>
  )
}

export default Navbar