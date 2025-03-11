//React
import React from 'react'

//JS Data
import { projects } from '../data/project-data'


export function ProjectCard() {
    return (
        <>
            {projects.map((project, index) => {
                return (
                    <div>
                        <h3 key={index}>{project.title}</h3>
                        <p>{project.description}</p>
                        <p>{project.tools}</p>
                        <div>
                            <a href={project.live}>Live Site</a>
                            <a href={project.code}>View Code</a>
                        </div>
                    </div>
                    
                )
            })}
        </>
    )
}