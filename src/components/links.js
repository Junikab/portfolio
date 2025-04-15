import React from "react";

import { FaLinkedin, FaGithub } from "react-icons/fa";

function Links() {
    return (
    <div className="flex px-6 space-x-8 ">
        <a
            href="https://linkedin.com/in/jennydeygin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 bg-white rounded-xlg hover:text-blue-800 transition-colors"
        >
            <FaLinkedin size={40} />
        </a>
        <a
            href="https://github.com/junikab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 bg-white rounded-full hover:text-gray-600 transition-colors"
        >
            <FaGithub size={40} />
        </a>
    </div>
    );
}

export default Links;
