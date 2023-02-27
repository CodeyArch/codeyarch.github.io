import React from 'react';


function About() {
    const handleClick = (event, target) => {
        event.preventDefault();
        document.querySelector(target).scrollIntoView({
            behavior: "smooth"
        });
    };
    return (
        <section id="about" style={{width: "100%"}}>
            <div className="grid-container">
                <div className="grid-item" style={{width: "100%"}}>
                    <h2 className="base-header">About Me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div>
                        <button className="btn-lime" onClick={(e) => handleClick(e, "#contact")}>Get In Contact</button>
                        <button className="btn-gray" onClick={(e) => handleClick(e, "#projects")}>See My Projects</button>

                    </div>
                </div>
                <div className="grid-item-circle">
                    <img src="https://via.placeholder.com/300x300" alt="Placeholder" />
                </div>
            </div>
        </section>
    );
}

export default About;