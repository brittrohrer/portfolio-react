//React
import React from 'react'


//Style Sheet
import '../styles/projectcard.css'

export default function ProjectCard({projects}) {
    return (
        <>
            {projects.map((project) => {
                return (
                    <div className="project-card">
                        <img className="project-img" src={project.image} alt="image description"/>
                        <h3 className="project-name" key={project.id}>{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tool-container">
                            {project.tools.map((tool) => {
                                return (
                                    <p className="project-tool-item">{tool}</p>
                                )
                            })}
                        </div>
                        <div className="project-links-container">
                            <a href={project.live} className="project-link">
                                <i class="fa-solid fa-globe"></i>
                            </a>
                            <a href={project.code} className="project-link">
                                <i class="fa-solid fa-code"></i>
                            </a>
                        </div>
                    </div>
                    
                )
            })}
        </>
    )
}