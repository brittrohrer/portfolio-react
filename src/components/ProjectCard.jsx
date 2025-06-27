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
                        <h3 className="project-name" key={project.id}>{project.title}</h3>
                        <img className="project-img" src={project.image} alt="image description"/>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tool-container">
                            {project.tools.map((tool) => {
                                return (
                                    <p className="project-tool-item">{tool}</p>
                                )
                            })}
                        </div>
                        <div className="project-links-container">
                            <a href={project.live} aria-label="View live website">
                                <i class="fa-solid fa-globe project-link"></i>
                            </a>
                            <a href={project.code} aria-label="View code on github">
                                <i class="fa-brands fa-github project-link"></i>
                            </a>
                        </div>
                    </div>
                    
                )
            })}
        </>
    )
}