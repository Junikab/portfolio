import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import DownloadResume from "./Resume";

function SocialLinks() {
    return (
        <div>
            <div className="px-6 py-6">
                <p className="mb-6 text-lg font-medium text-gray-950 max-lg:text-center">
                    Social Links
                </p>
            </div>
            <div className="flex flex-col space-y-4 pb-6">
                <div className="flex justify-center pb-4">
                    <DownloadResume />
                </div>
                <div className="flex justify-center space-x-10">
                    <a
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        <FaLinkedin size={40} />
                    </a>
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-gray-600 transition-colors"
                    >
                        <FaGithub size={40} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SocialLinks;
