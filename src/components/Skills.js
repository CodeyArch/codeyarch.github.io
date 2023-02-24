import React from 'react';
import skillsData from "../data/skillsData" ;


function Skills () {
    const skills = skillsData.sort((a, b) => b.rating - a.rating)
    return (
        <section id="skills">
            <div className="skills-container">
                <h1 className="base-header">Skills</h1>
                {skills.map((skill) => (
                    <div className="skill-item" key={skill.id}>
                        <p className="skill-name">{skill.name}</p>
                        <div className="skill-rating">
                            {[...Array(5)].map((_, i) => (
                                <img className={`star-icon ${i < skill.rating ? 'filled' : 'empty'}`} key={i} src="/assets/star.svg" alt ="star ratings"></img>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;