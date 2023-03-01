import React from 'react';
import projectsData from "../data/projectData";
import {Link} from "react-router-dom";


function Projects() {
    return (
        <section id="projects">
            <div className="projects">
                {/*<div >*/}
                {/*    <img className="projects-icon" src={"./assets/code.svg"} alt="Placeholder" />*/}
                {/*</div>*/}
                <h1 className="base-header">Projects</h1>
                <p>Below are some of the projects I am most proud of and had tons of fun making, check them out!</p>
                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <div className="project-card" key={project.id}>
                            <img src={project.image} alt={project.name} />
                            <div className="overlay">
                                <h2 className="projects-header">{project.name}</h2>
                                <p className="projects-description" >{project.description}</p>
                                <Link to={`/projects/` + project.id} className="overlay-button">Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;