//React
import React from 'react'

//JS Data
import { skills } from '../assets/data/skills-data'

export function SkillsCard() {
    return (
        <>
            {skills.map((skill, index) => {
                return (
                    <div>
                        <h3 key={index}>{skill.name}</h3>
                    </div>
                    
                )
            })}
        </>
    )
}

