import React from 'react';


function About() {
    return (
        <section id="about" style={{width: "100%"}}>
            <div className="grid-container">
                <div className="grid-item" style={{width: "100%"}}>
                    <h2 className="base-header">About Me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div>
                        <a href="#contact" className="btn-lime">Get In Contact</a>
                        <a href="#projects" className="btn-gray">Check Out My Projects</a>

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