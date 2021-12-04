import React from 'react';
import "./Home.css"
import seattle from "../images/seattle.jpg"
import profile from "../images/profile.jpeg"

function Home() {
    return (
        <div>
            <section>
                <img id="seattle" src={seattle} />
                <div className="container">
                    <div className="centered">WEB DEVELOPMENT &amp;<br /> PROJECT MANAGEMENT</div>
                </div>
            </section>

            <div className="homeContent">

                <div className="imgCard">
                    <img src={profile} alt="profile pic" />
                </div>
                <div className="infoCard">
                    <h2>About Me</h2>
                    <p> Hi, I'm Minhvan. I am a former project manager turned web developer. I'm currently studying coding at the University of Washington with an expected graduation date of December 2021. I'm fascinated by the world of technology and what it can do. I think the possibilities are endless. So I'm turning that fascination in reality and pursuing a career in coding.
                        Even though I am new to coding, I have over 5 year of project management experience giving me a better aspect of business. Please feel free to check out my projects up top and my GitHub and LinkedIn profile below.

                        If you would like to connect, please do not hesitate to reach out!
                        <ul>
                            <li>Git/GitHub</li>
                            <li>MongoDB</li>
                            <li>Bootstrap</li>
                            <li>Express</li>
                            <li>NodeJS</li>
                            <li>Sequelize</li>
                            <li>MySql</li>
                            <li>React</li>
                            <li>JQuery</li>
                            <li>Javascript</li>
                            <li>CSS</li>
                            <li>HTML</li>
                        </ul>
                    </p>


                </div>
            </div>
        </div>
    )
}

export default Home;