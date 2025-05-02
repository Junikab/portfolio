import React from "react";
import DownloadResume from "../Resume";
import Links from "../links";


function Footer() {
    return (
        <footer className="mx-auto py-10 bg-gray-50 rounded-xl shadow-md bg-gradient-to-r from-indigo-500/70 via-purple-500/70 to-pink-500/70">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
                    <div>
                        <p className="text-white">
                            <h2 className="text-3xl mb-4 font-medium capitalize">
                                Inspired By
                            </h2>{" "}
                        </p>
                        <div className="text-gray-50 text-lg/8">
                            <p>
                                Beautiful portfolio by{" "}
                                <a
                                    href="https://juliakuchina.github.io/portfolio/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-fuchsia-300 hover:text-gray-800 uppercase transition-colors"
                                >
                                    juliakuchina
                                </a>{" "}
                            </p>
                            <p>Google fonts -Inter/Roboto</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl mb-4 font-medium capitalize text-white">
                            Built With
                        </h2>
                        <div className="text-gray-50 text-lg/8">
                            <p>
                                <span className="font-medium">React</span> -
                                Component-based UI library
                            </p>
                            <p>
                                <span className="font-medium">
                                    Tailwind CSS
                                </span>{" "}
                                - Utility-first CSS framework
                            </p>
                            <p>
                                <span className="font-medium">D3.js</span> -
                                Data-driven document visualization
                            </p>
                        </div>
                    </div>
                    <div className="h-full flex flex-col justify-between px-6 pb-4">
                        <div className="self-start">
                            <DownloadResume colorScheme="alternate" />
                        </div>
                        <div className="mt-4 self-left">
                            <Links />
                        </div>
                        <div className="self-bottom">
                            <p className="mt-auto pt-4 text-gray-50 text-sm/8">
                                &copy; 2025 Junikab. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
