//React
import React from 'react'

//Components
import { ProjectCard } from '../components/ProjectCard'


export default function Projects() {
   
    return (
        <div className="page">
            <h1 className="page-header">My Projects</h1>
            <div>
                <ProjectCard />
            </div>
            <h2 className="section-header">Other Work</h2>
        </div>
        
        
    )
}