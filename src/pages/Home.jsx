//React
import React from "react"

//Components
import { Hero } from "../components/Hero"

//Style Sheet
import "../styles/Home.css"

import resume from "../assets/Brittni-Rohrer-Resume.pdf"

export default function Home() {
    return (
        <div className="home-page">
                <Hero />
                <section className="action-section">
                    <div className="resume-container">
                        <a
                            href={resume}
                            target="blank">
                            View Resume!
                        </a>
                    </div>
                    <div className='connect-section'>
                        <div className="social-links-container">
                            <a
                                href=""
                                target="blank">
                                <i className="fa-brands fa-github social-link"></i>
                            </a>
                            <a
                                href=""
                                target="blank">
                                <i className="fa-brands fa-linkedin social-link"></i>
                            </a>
                        </div>
                        <div>
                            <p>
                                <i className="fa-regular fa-envelope"></i>
                                brittnirohrer@gmail.com
                            </p>
                        </div>
                    </div>
                </section>
        </div>
    )
}