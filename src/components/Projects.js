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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod lorem et magna luctus, in facilisis dolor fringilla. Pellentesque vitae massa nec arcu placerat lobortis. Integer vel euismod velit.</p>
                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <div className="project-card" key={project.id}>
                            <img src={project.image} alt={project.name} />
                            <div className="overlay">
                                <h2 className="projects-header">{project.name}</h2>
                                <p className="projects-description" >{project.description}</p>
                                <Link to={`/projects/` + project.id}>Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;