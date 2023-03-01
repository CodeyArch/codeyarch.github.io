import { useState } from "react";
import projectDescriptionData from "../data/projectDescriptionData";
import {useParams} from "react-router-dom";

function ProjectExpanded() {
    const [activeIndex, setActiveIndex] = useState(0); // set the active image index to 0 by default

    let {id} = useParams()
    const handlePrevClick = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? projectDescriptionData.length - 1 : prevIndex - 1
        ); // set the active image index to the previous index
    };

    const handleNextClick = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === projectDescriptionData.length - 1 ? 0 : prevIndex + 1
        ); // set the active image index to the next index
    };

    const project = projectDescriptionData[id - 1]; // set the active project to the first project by default
    const image = project.images[activeIndex]; // get the active image based on the active image index

    return (
        <div className="project-expanded">
            <div className="image-slideshow">
                <img src={image.src} alt={image.alt} />
                <div className="prev" onClick={handlePrevClick}>
                    &#10094;
                </div>
                <div className="next" onClick={handleNextClick}>
                    &#10095;
                </div>
            </div>
            <div className="text-description">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </div>
        </div>
    );
}

export default ProjectExpanded;