import React from "react";

import { FaLinkedin, FaGithub } from "react-icons/fa";

function Links({ className = "" }) {
    return (
        <div className={`flex flex-wrap gap-3 ${className}`}>
            <a
                href="https://linkedin.com/in/jennydeygin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
                className="social-link"
            >
                <FaLinkedin size={18} />
                <span>LinkedIn</span>
            </a>
            <a
                href="https://github.com/junikab"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub profile"
                className="social-link"
            >
                <FaGithub size={18} />
                <span>GitHub</span>
            </a>
        </div>
    );
}

export default Links;
