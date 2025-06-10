//React
import React from "react";

//Components

//JS Data
import { education, aboutText } from "../data/about-data";
import { skills } from '../data/skills-data'

//Style Sheet
import "../styles/About.css"
import "../styles/skillscard.css"

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

            {/* Education Section
                    - display degree from each school
            */}
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


            {/* Skills Section
                    - create container for each coding skill
            */}
            <div>
                <section className="skills-section section-container bg-cr">
                        <h2 className="section-header">My Skills</h2>
                        <div className="skill-card-container">
                            {skills.map((skill) => {
                                return (
                                    <div className="skill-card">
                                        <h3 className="skill-name" key={skill.name}>{skill.name}</h3>
                                    </div>
                                )
                            })}
                    </div>
                </section>
            </div>

        </div>
    )
}