//React
import React from 'react'

//JS Data
import { skills } from '../data/skills-data'

//Syle Sheet
import "../styles/skillscard.css"

export function SkillsCard() {
    return (
        <div className="skill-card-container">
            {skills.map((skill, index) => {
                return (
                    <div className="skill-card">
                        <h3 className="skill-name" key={index}>{skill.name}</h3>
                    </div>
                    
                )
            })}
        </div>
    )
}

