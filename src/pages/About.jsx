//React
import React from "react";

//Components
import { SkillsCard } from "../components/SkillsCard";

//JS Data
import { education, aboutText } from "../data/about-data";

//Style Sheet
import "../styles/About.css"

export default function About() {
    return (
        <div className="page">
            <h1 className="page-header">About Me</h1>

            <div>
                <section className="section-container bg-em">
                    <h2 className="section-header">Hello, I'm Brittni</h2>
                    <div className="flex-container">
                       <p>{aboutText}</p>
                       <img src="#" alt="pic of me"/>
                    </div>
                </section>
            </div>

            <div>
                <section className="education-section section-container">
                        <h2 className="section-header">Education</h2>
                        <div>
                            {education.map(degree => {
                                return (
                                    <div key={degree.school}>
                                        <h3>{degree.school}</h3>
                                        <p>{degree.degree}</p>
                                    </div>
                                )
                            })}
                        </div>
                </section>
            </div>    
            <div>
                <section className="skills-section section-container bg-cr">
                        <h2 className="section-header">My Skills</h2>
                        <SkillsCard />
                </section>
            </div>

        </div>
    )
}