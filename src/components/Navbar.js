import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li> <NavLink to="/">Home</NavLink></li>
                <li> <NavLink to="/about">About</NavLink></li>
                <li> <NavLink to="/services">Services</NavLink></li>
                <li> <NavLink to="/userlist">User List</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar