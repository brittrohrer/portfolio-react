import React from "react";
import heroImage from "../assets/head-pic2.jpg"

export function Hero() {
    return (
        <section className="hero-section section-container">
            {/* <img className="hero-Image" src={heroImage} alt="hero pic"/> */}
            <div className="hero-statement">
                <p>Welcome, my name is</p>
                <h1>Brittni Rohrer.</h1>
                <h2>Front End Web Developer</h2>
                <p>I build accessible and responsive websites.</p>
            </div>
        </section>
    )
}