import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function SocialLinks() {
    return (
        <div>
            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Social Links
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center"></p>
            </div>
            <div className="flex space-x-6 justify-center">
                <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                    <FaLinkedin size={24} />
                </a>
                <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-gray-600 transition-colors"
                >
                    <FaGithub size={24} />
                </a>
            </div>
        </div>
    );
}

export default SocialLinks;
