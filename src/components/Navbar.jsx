import React from 'react'
import { NavLink } from "react-router-dom"

//Styles
import '../styles/navbar.css'

export function Navbar() {
   
    return (
        <>
            <nav className="navbar-container">
                <div className="navbar-logo">BR</div>
                <div className="navbar-links">
                    <li className="navbar-item">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/projects">Projects</NavLink>
                    </li>
                </div>
            </nav>
            
        </>
    )
}