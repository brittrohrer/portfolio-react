//React
import React from "react";

//Components
import { SkillsCard } from "../components/SkillsCard";

//JS Data
import { education } from "../assets/data/education-data";

export default function About() {
    return (
        <>
        <h1>About Me</h1>
            <section>
                <h2>Education</h2>
                <div>
                    {education.map(degree => {
                        return (
                            <>
                                <h3>{degree.school}</h3>
                                <p>{degree.degree}</p>
                            </>
                        )
                    })}
                </div>
            </section>

            <section>
                <h2>My Skills</h2>
                <SkillsCard />
            </section>

        
        </>
    )
}