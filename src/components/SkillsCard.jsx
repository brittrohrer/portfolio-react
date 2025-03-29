//React
import React from 'react'

//Syle Sheet
import "../styles/skillscard.css"

export function SkillsCard({skills}) {
    return (
        <div className="skill-card-container">
            {skills.map((skill) => {
                return (
                    <div className="skill-card">
                        <h3 className="skill-name" key={skill.name}>{skill.name}</h3>
                    </div>
                    
                )
            })}
        </div>
    )
}

