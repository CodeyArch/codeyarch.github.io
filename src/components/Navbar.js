import React, {useEffect, useRef, useState} from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const sideNavRef = useRef(null);

    const handleMenuClick = () => {
        console.log('handleMenuClick called');
        setIsOpen(!isOpen);
    };

    const handleOutsideClick = (event) => {
        if (
            sideNavRef.current &&
            !sideNavRef.current.contains(event.target) &&
            event.target !== document.querySelector('.hamburger-btn') &&
            !document.querySelector('.hamburger-btn').contains(event.target)
        ) {
            setIsOpen(false);
        }
    };


    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);
    console.log('isOpen', isOpen);
    return (
        <div>
            <div className="desktopNav">
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
                    <a href="#skills" className="navbar-link">
                        Skills
                    </a>
                    <a href="#contact" className="navbar-link">
                        Contact
                    </a>

                </nav>
            </div>
            <div className="mobileNav">
                <div className="navbar-mobile" style={{backgroundColor: "#10161d"}}>
                    <button className="hamburger-btn" onClick={handleMenuClick}>
                        <span className="hamburger-icon"></span>
                    </button>
                    <div className={`side-nav ${isOpen ? 'open' : ''}`} ref={sideNavRef}>
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Navbar;