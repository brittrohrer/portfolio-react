//React
import React from 'react'

//Components
import ProjectCard from '../components/ProjectCard'

//JS Data
import { projects } from '../data/project-data'

//Style Sheet
import '../styles/projects.css'

export default function Projects() {
   
    return (
        <div className="page-content-container">
            <h1 className="page-header">My Projects</h1>
            <section className="projects-container section-container">
                <ProjectCard projects={projects}/>
            </section>
            <h2 className="section-header">Other Work</h2>
        </div>
        
        
    )
}