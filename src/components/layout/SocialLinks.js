import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import DownloadResume from "../Resume";

function SocialLinks() {
    return (
        <div className="lg:col-start-2 lg:row-start-2">
            <div className="h-full shadow-md rounded-lg bg-white max-lg:text-center">
                <div className="relative flex flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] px-4 py-4 space-y-4">
                    <div className="px-6 pt-6">
                        <p className="text-3xl font-medium text-gray-950">
                            Social Links
                        </p>
                    </div>
                    <div className="flex flex-col space-y-4 pb-6">
                        <div className="px-6">
                            <p>Contact info is in my resume.</p>
                        </div>
                        <div className="px-6 pb-4">
                            <DownloadResume />
                        </div>
                        <div className="flex px-6 space-x-8">
                            <a
                                href="https://linkedin.com/in/jennydeygin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 transition-colors"
                            >
                                <FaLinkedin size={40} />
                            </a>
                            <a
                                href="https://github.com/junikab"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-800 hover:text-gray-600 transition-colors"
                            >
                                <FaGithub size={40} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SocialLinks;
