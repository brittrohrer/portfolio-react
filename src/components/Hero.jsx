import React from "react";

import "../styles/hero.css" 
import heroimg from "../assets/hero-pic.png"

export function Hero() {
    return (
        <section className="hero-section section-container">
            <div>
                <p className="hero-text accent-color">Welcome, my name is</p>
                <h1 className="hero-name">Brittni Rohrer.</h1>
                <h1 className="hero-name accent-color">Front-End Web Developer</h1>
                <p className="hero-text">I build accessible and responsive websites.</p>
            </div>
            <div>
                <img 
                    className="hero-img"
                    src={heroimg}
                    alt="hero image" />
            </div>
        </section>
    )
}