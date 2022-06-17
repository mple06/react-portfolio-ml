import React from "react";
import MeAtSammish from "../../img/profile.jpg";
import "./style.css";

function About() {

    return (
        <div className="viewThree" id="about">
            <div className="row">
                <div className="col-md about-left">
                    <img src={MeAtSammish} className="about-photo img-fluid" alt="Me"></img>
                </div>
                <div className="col-md">
                    <h3 className="viewTitle" id="aboutTitle">ABOUT</h3>
                    <div className="row align-self-center bioText">
                        <p className="bio">Hi, I'm Minhvan. I am a former project manager turned full stack web developer. I recently earned a certificate from the University of Washington Coding Program, with newly developed skills in Javascript, CSS, Node.js, Express, React.js and much more.
                            As a project manager, I am a leader with strengths in communication and cultivating relationships. I have a strong ability to work independently as well as a team. I am also a strategic thinker and self-motivated individual able to manage several projects and perform under pressure in fast-paced, deadline-focused environments.
                            As a web developer, I am an innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. Having skills in multiple facets of a business gives me a better understanding. I’m excited to leverage my skills as part of a rapid, quality-driven team to build better experiences for all.
                            Please feel free to check out my projects.</p>
                        <p className="bio"><span className="skillHeader">Some skills I bring to the table:</span>
                            <ul className=" skillList text-center">
                                <li className="skill">JavaScript</li>
                                <li className="skill">ReactJS</li>
                                <li className="skill">HTML & CSS</li>
                                <li className="skill">Node</li>
                                <li className="skill">Express</li>
                                <li className="skill">SQL</li>
                                <li className="skill">MongoDB</li>
                                <li className="skill">Sequelize</li>
                                <li className="skill">Git/GitHub</li>
                                <li className="skill">Project Management</li>
                            </ul>
                        </p>
                        <p className="bio">I look forward to working with you!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;