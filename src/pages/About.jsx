//React
import React from "react";

//Components
import { SkillsCard } from "../components/SkillsCard";

//JS Data
import { education } from "../data/education-data";

//Style Sheet
import "../styles/about.css"

export default function About() {
    return (
        <div className="page">
            <h1 className="page-header">About Me</h1>
            <section>
                <h2 className="section-header">Hello, I'm Brittni</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Quos hic nihil officia voluptatibus illo voluptatem rem ut 
                    soluta sapiente mollitia dignissimos enim distinctio optio, 
                    blanditiis, asperiores, reprehenderit accusantium maiores 
                    molestias.
                </p>
            </section>
            <section className="education-container">
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

            <section className="skills-container">
                <h2 className="section-header">My Skills</h2>
                <SkillsCard />
            </section>

        
        </div>
    )
}