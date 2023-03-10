import React, { useState } from "react";
import projectDescriptionData from "../data/projectDescriptionData";
import {useParams} from "react-router-dom";

function ProjectExpanded() {
    let {id} = useParams()
    const project = projectDescriptionData[id - 1];
    // This exists to find URLs in the projectDescriptionData.js sections and replace them with clickable links
    const createDescriptionElements = (description) => {
        const urlRegex = /(?:https?|ftp):\/\/[\n\S]+/g;
        const urlMatches = description.match(urlRegex) || []; // get all URL matches
        const parts = description.split(urlRegex); // split description by URLs
        const elements = [];
        for (let i = 0; i < parts.length; i++) {
            elements.push(<span key={`part-${i}`}>{parts[i]}</span>);
            const urlMatch = urlMatches[i];
            if (urlMatch) { // if there is a URL after this part
                elements.push(<a key={`url-${i}`} href={urlMatch}>{urlMatch}</a>);
            }
        }
        return elements;
    }

    return (
        <section className="projectDesc">
            <div className="desktopProject-Expanded" >
                <div className="project-expanded">
                    <div className="projects-description-grid-1">
                        <div className="text-description">
                            <h2 className="text-description-header" style={{marginTop: "40px"}}>Overview:</h2>
                            <p>{createDescriptionElements(project.description)}</p>
                        </div>
                        <div className="text-description">
                            <h2 className="text-description-header">Skills and Technologies:</h2>
                            <p>{createDescriptionElements(project.skillsAndTech)}</p>
                        </div>
                        <div className="text-description">
                            <h2 className="text-description-header">Teams:</h2>
                            <p>{createDescriptionElements(project.teams)}</p>
                        </div>
                        <div className="text-description-no-border">
                            <h2 className="text-description-header">My Roles:</h2>
                            <p>{createDescriptionElements(project.roles)}</p>
                        </div>

                    </div>
                    {ProjectExpandedSlideshowGrid()}

                </div>
            </div>
            <div className="mobileProject-Expanded">
                <div className="project-expanded">
                    {ProjectExpandedSlideshowGrid()}
                    <div className="projects-description-grid-1">
                        <div className="text-description">
                            <h2 className="text-description-header" >Overview:</h2>
                            <p>{createDescriptionElements(project.description)}</p>
                        </div>
                        <div className="text-description">
                            <h2 className="text-description-header">Skills and Technologies:</h2>
                            <p>{createDescriptionElements(project.skillsAndTech)}</p>
                        </div>
                        <div className="text-description">
                            <h2 className="text-description-header">Teams:</h2>
                            <p>{createDescriptionElements(project.teams)}</p>
                        </div>
                        <div className="text-description-no-border">
                            <h2 className="text-description-header">My Roles:</h2>
                            <p>{createDescriptionElements(project.roles)}</p>
                        </div>

                    </div>

                    {/* For socials, they should have links and types pulled from projectDescriptionData.js*/}

                </div>
            </div>

        </section>

    );
}
function ProjectExpandedSlideshowGrid() {
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

    const image = project.images[activeIndex];
    return (
        <div className="projects-description-grid-2">
            <h2 className="projects-header">{project.title}</h2>
            <div className="image-slideshow">
                <img src={image.src} alt={image.alt} />
                <div className="prev" onClick={handlePrevClick}>
                    &#10094;
                </div>
                <div className="next" onClick={handleNextClick}>
                    &#10095;
                </div>
            </div>
            <div className="socials_large">
                {Object.keys(project.socialMedia).map((platform) => {
                    if (platform === "github") {
                        return (
                            <a href={project.socialMedia.github} target="_blank" rel="noopener noreferrer" key = {"Github"}>
                                <img src={"../assets/GitHub_Logo_White.png"} alt="GitHub" />
                            </a>
                        );
                    } else if (platform === "googlePlay") {
                        return (
                            <a href={project.socialMedia.googlePlay} target="_blank" rel="noopener noreferrer" key = {"Google Play"}>
                                <img src={"../assets/google_play.png"} alt="Google Play" />
                            </a>
                        );
                    } else if (platform === "itchIO") {
                        return (
                            <a href={project.socialMedia.itchIO} target="_blank"
                               rel="noopener noreferrer" key = {"Itch.io"}>
                                <img src={"../assets/itch_badge.png"} alt="Itch.io"/>
                            </a>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    )
}

export default ProjectExpanded;