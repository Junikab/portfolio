import React from 'react'
import "./Title.css"

function Title(){
    return (
        <div className='title'>
            <div>
                <h1>Jenny Deygin</h1>
                <h3>Front End Developer </h3>
                <p>Contact info is in my resume.</p>
                <div>
                    <a download href="./assets/JennyDeyginCV.pdf">
                        <span>Download resume</span>
                    </a>
                </div>
            </div>
        </div>
    );
    
}

export default Title;