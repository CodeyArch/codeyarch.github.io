import React, { useState } from "react";
import projectDescriptionData from "../data/projectDescriptionData";
import {useParams} from "react-router-dom";

function ProjectExpanded() {
    const [activeIndex, setActiveIndex] = useState(0); // set the active image index to 0 by default

    let {id} = useParams()
    const project = projectDescriptionData[id - 1];
    const handlePrevClick = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
        ); // set the active image index to the previous index
    };

    const handleNextClick = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
        ); // set the active image index to the next index
    };

     // set the active project to the first project by default
    const image = project.images[activeIndex]; // get the active image based on the active image index

    return (
        <section className="projectDesc">
            <div className="project-expanded">
                <div className="text-description">
                    <h2 className="projects-header">{project.title}</h2>
                    <p>{project.description}</p>
                </div>
                <div className="image-slideshow">
                    <img src={image.src} alt={image.alt} />
                    <div className="prev" onClick={handlePrevClick}>
                        &#10094;
                    </div>
                    <div className="next" onClick={handleNextClick}>
                        &#10095;
                    </div>
                </div>
                {/* For socials, they should have links and types pulled from projectDescriptionData.js*/}
                <div className="socials_large">
                    <a href="https://github.com/CodeyArch">
                        <img src={"../assets/GitHub_Logo_White.png"} alt="Github" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=me.goobydev.composenotes">
                        <img src={"../assets/google_play.png"} alt="Google Play" />
                    </a>
                </div>


            </div>
        </section>

    );
}

export default ProjectExpanded;