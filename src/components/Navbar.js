import React, {useEffect, useRef, useState} from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");
    const sideNavRef = useRef(null);

    const handleNavClick = (linkId) => {
        setActiveLink(linkId);
    };
    const handleSmoothScroll = (event, target) => {
        event.preventDefault();
        document.querySelector(target).scrollIntoView({
            behavior: "smooth"
        });
        handleNavClick(target)
    };
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
                        <h1 className="navbar-header-text">Codey Arch</h1>
                        <div className="navbar-divider"></div>
                    </div>

                    <a href="#about" className={`navbar-link ${activeLink === "#about" ? "active" : ""}`}  onClick={(e) => { handleSmoothScroll(e, "#about");  }}>
                        About
                    </a>
                    <a href="#projects" className={`navbar-link ${activeLink === "#projects" ? "active" : ""}`} onClick={(e) => { handleSmoothScroll(e, "#projects");  }}>
                        Projects
                    </a>
                    <a href="#skills" className={`navbar-link ${activeLink === "#skills" ? "active" : ""}`} onClick={(e) => { handleSmoothScroll(e, "#skills");  }}>
                        Skills
                    </a>
                    <a href="#contact" className={`navbar-link ${activeLink === "#contact" ? "active" : ""}`} onClick={(e) => { handleSmoothScroll(e, "#contact");  }}>
                        Contact
                    </a>
                    <a href="#socials" className={`navbar-link ${activeLink === "#socials" ? "active" : ""}`} onClick={(e) => { handleSmoothScroll(e, "#socials");  }}>
                        Socials
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
                            <h1 className="navbar-header-text-mobile">Codey Arch</h1>
                            <li><a href="#about" className={`navbar-link ${activeLink === "#about" ? "active" : ""}`}  onClick={(e) => { handleSmoothScroll(e, "#about");  }}>
                                About
                            </a></li>
                            <li><a href="#projects" className={`navbar-link ${activeLink === "#projects" ? "active" : ""}`} onClick={(e) => { handleSmoothScroll(e, "#projects");  }}>
                                Projects
                            </a></li>
                            <li><a href="#skills" className={`navbar-link ${activeLink === "#skills" ? "active" : ""}`} onClick={(e) => { handleSmoothScroll(e, "#skills");  }}>
                                Skills
                            </a></li>
                            <li><a href="#contact" className={`navbar-link ${activeLink === "#contact" ? "active" : ""}`} onClick={(e) => { handleSmoothScroll(e, "#contact");  }}>
                                Contact
                            </a></li>
                            <li><a href="#socials" className={`navbar-link ${activeLink === "#socials" ? "active" : ""}`} onClick={(e) => { handleSmoothScroll(e, "#socials");  }}>
                                Socials
                            </a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Navbar;