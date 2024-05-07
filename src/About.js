import React from 'react'
import "./About.css"

function About(){
    return (
        <>
            <div className='about'>
                <div className='aboutImg'>
                    <img
                        class="meImg"
                        src="./assets/Jenny.jpg"
                        alt="Jenny Deygin, front end developer"
                    />
                </div>
                <div className='aboutText'>
                    <h2 className='aboutTitle'>ABOUT</h2>
                    <p>
                        JavaScript • Node.js • HTML5 • CSS3 • React • Express •
                        Bootstrap • Material-UI • MongoDB • MySQL • Cypress.io •
                        REST
                    </p>
                    <p>
                        I am a junior front-end developer with a strong
                        foundation in JavaScript and Node.js. Passionate about
                        quality user experiences and automation, I have hands-on
                        experience in building front-end projects with clean,
                        maintainable code. My expertise lies in using
                        technologies like React, Express, and Bootstrap to
                        develop intuitive web applications, while leveraging
                        Cypress.io and JavaScript for effective QA automation.
                    </p>
                    <p>
                        My career journey includes contributing to projects at
                        Driva.com as a Junior Automation QA and Edukana.com as
                        an Associate Product Owner. Additionally, I have
                        independently built a diverse portfolio of web
                        applications, showcasing my skills in full-stack
                        development and API management.
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;