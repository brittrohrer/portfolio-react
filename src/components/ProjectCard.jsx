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
                        <p className="project-tools">{project.tools}</p>
                        <div className="project-links-container">
                            <a href={project.live}>
                                <i class="fa-solid fa-globe project-link"></i>
                            </a>
                            <a href={project.code}>
                                <i class="fa-brands fa-github project-link"></i>
                            </a>
                        </div>
                    </div>
                    
                )
            })}
        </>
    )
}