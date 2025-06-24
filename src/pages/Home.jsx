//React
import React from "react"

//Components
import { Hero } from "../components/Hero"

//Style Sheet
import "../styles/Home.css"

import resume from "../assets/Brittni-Rohrer-Resume.pdf"
import heroImg from "../assets/hero-pic.png"

export default function Home() {
    return (
        <div className="home-page">
            <div>
                <Hero />
                <section className="action-section">
                    <a
                        href={resume}
                        target="blank">
                        View Resume
                    </a>
                </section>
            </div>
            <div className="image-shape">
                <img className="hero-img" src={heroImg} />
            </div>
        </div>
    )
}