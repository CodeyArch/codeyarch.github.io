import React from 'react';

function Socials() {
    return (
        <section id="socials">
            <div className="socials-header">
                <h1 className="base-header">Socials</h1>
            </div>

            <div className="socials">
                <a href="https://www.facebook.com/">
                    <img src={"./assets/facebook.svg"} alt="Facebook" />
                </a>
                <a href="https://twitter.com/">
                    <img src={"./assets/twitter.svg"} alt="Twitter" />
                </a>
                <a href="https://www.instagram.com/">
                    <img src={"./assets/instagram.svg"} alt="Instagram" />
                </a>
                <a href="https://www.linkedin.com/">
                    <img src={"./assets/linkedin.svg"} alt="LinkedIn" />
                </a>
                <a href="https://www.youtube.com/">
                    <img src={"./assets/youtube.svg"} alt="Youtube" />
                </a>
                <a href="https://discord.com/">
                    <img src={"./assets/discord-new.svg"} alt="Discord" />
                </a>
                <a href="https://github.com/CodeyArch">
                    <img src={"./assets/github.svg"} alt="Github" />
                </a>
                <a href="https://pinterest.com/">
                    <img src={"./assets/pinterest.svg"} alt="Pinterest" />
                </a>
            </div>
        </section>
    );
}
//TODO: Wrapped image srcs with {}, removes the IDE warning for now but untested how it affects loading of images
export default Socials;