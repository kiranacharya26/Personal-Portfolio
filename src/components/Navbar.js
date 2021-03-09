import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-container">
           
            <div className="navlinks">
            <ul >
                <li><Link to ='/'>Home</Link></li>
                <li><Link to ='/about'>About</Link></li>
                <li><Link to ='/projects'>Projects</Link></li>
                <li><Link to ='/contact'>Contact</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar
