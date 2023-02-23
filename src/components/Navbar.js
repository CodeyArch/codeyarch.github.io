import React from 'react';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-header">
                <h1 className="navbar-header-text">Codey's Example Portfolio</h1>
                <div className="navbar-divider"></div>
            </div>

            <a href="#about" className="navbar-link">
                About
            </a>
            <a href="#projects" className="navbar-link">
                Projects
            </a>
            <a href="#contact" className="navbar-link">
                Contact
            </a>

        </nav>
    );
}

export default Navbar;