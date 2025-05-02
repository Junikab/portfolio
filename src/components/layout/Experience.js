import React from "react";

function Experience() {
    return (
        <div className="relative lg:row-start-2">
            <div className="absolute inset-px shadow-md rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden">
                <div className="px-8 pt-8 pb-8 sm:px-10 sm:pt-10">
                    <h2 className="mt-2 text-3xl font-medium text-gray-950 max-lg:text-center">
                        Experience
                    </h2>
                    <div className="mt-4 max-w-lg space-y-4 text-base/7 text-gray-600 max-lg:text-center">
                        <div>
                            <p className="mt-1">
                                <span className="font-medium">
                                    Web development
                                </span>{" "}
                                — 5 years <br />
                                <span className="font-medium">React</span> — 3
                                years <br />
                                <span className="font-medium">
                                    AI-assisted development
                                </span>{" "}
                                — Leveraging modern tools like Windsurf to
                                enhance workflow efficiency
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-gray-800">
                                Education
                            </h3>
                            <p className="mt-1">
                                Bachelor Degree in Geography and Human
                                Environment
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-gray-800">
                                Interests & Skills
                            </h3>
                            <p className="mt-1">
                                Data visualization, interactive mapping, UI/UX
                                design, and exploring emerging AI tools for
                                creative development
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
