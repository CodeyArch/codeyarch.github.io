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
                    <h2 className="base-header">Hey! I'm Codey Arch</h2>
                    <div className="desktopAboutDesc">
                        <p>I love making apps, games and websites and I'm currently specialising in Android Development.
                            Programming has always been a passion of mine and I have been making my own projects for over 2 years
                            and dabbling with programming since I was 12.
                            <br/><br/>
                            My beginnings were with simplistic python scripts and terminal games and that evolved to
                            making my own Unity games and eventually my own Android Apps. You can check some of these out in the projects section below
                            <br/><br/>
                            Most of my experience is solo work but I have experience working in teams for projects such as Skyhouse with Skyblock.tools.
                            When I work in a team, I build a strong connection with my teammates because
                            I enjoy getting to know my team and learning about the goals of any business I work with.
                            <br/><br/>
                            If you want to learn more about me, check out my projects or contact me via the form or my socials</p>
                    </div>
                    <div className="mobileAboutDesc">
                        <p>I love making apps, games and websites. Currently specialising in Android Development.
                            I have been programming since I was 12 and making my own passion projects for over 2 years
                            <br/><br/>
                            My main experience is solo work but I have experience working in teams for projects such as Skyhouse with Skyblock.tools.
                            When I work in a team, I build a strong connection with my teammates because
                            I enjoy getting to know my team and learning about the goals of any business I work with.
                            <br/><br/>
                            If you want to learn more about me, check out my projects or contact me via the form or my socials</p>
                    </div>

                    <div>
                        <button className="btn-lime" onClick={(e) => handleClick(e, "#contact")}>Get In Contact</button>
                        <button className="btn-gray" onClick={(e) => handleClick(e, "#projects")}>See My Projects</button>

                    </div>
                </div>
                <div className="grid-item-circle">
                    <img src={"./assets/GoobyDev.png"} alt="Placeholder" />
                </div>
            </div>
        </section>
    );
}

export default About;