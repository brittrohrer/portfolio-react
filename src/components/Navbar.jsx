import React from 'react'
import { NavLink } from "react-router-dom"

export function Navbar() {
   
    return (
        <>
            <nav className="navbar">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
            </nav>
            
        </>
    )
}