import React from 'react';

function Socials() {
    return (
        <section id="socials">
            <div className="socials-header">
                <h1 className="base-header">Socials</h1>
            </div>

            <div className="socials">
                <a href="https://www.linkedin.com/in/codeyarch/">
                    <img src={"./assets/linkedin.svg"} alt="LinkedIn" />
                </a>
                <a href="https://discord.gg/n4gKz8J8W2">
                    <img src={"./assets/discord-new.svg"} alt="Discord" />
                </a>
                <a href="https://github.com/CodeyArch">
                    <img src={"./assets/github.svg"} alt="Github" />
                </a>
            </div>
        </section>
    );
}
//TODO: Wrapped image srcs with {}, removes the IDE warning for now but untested how it affects loading of images
export default Socials;