import React from "react";

function Experience() {
    return (
        <div className="relative lg:row-start-2">
            <div className="absolute inset-px shadow-md rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden">
                <div className="px-6 pt-6 pb-6 sm:px-10 sm:pt-10">
                    <h2 className="mt-2 text-3xl font-medium text-gray-950 max-lg:text-center">
                        Experience
                    </h2>
                    <div className="mt-4 max-w-lg space-y-4 text-base/7 text-gray-600 max-lg:text-center">
                        <div>
                            <p className="mt-2">
                                <span className="font-bold">
                                    Web development
                                </span>{" "}
                                — 5 years
                                <br className="mb-1" />
                                <span className="font-bold">React</span> — 3
                                years
                                <br className="mb-1" />
                                <span className="font-bold">
                                    AI-assisted workflows
                                </span>{" "}
                                — Using <strong>Windsurf</strong>
                            </p>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-lg font-bold text-gray-800">
                                Education
                            </h3>
                            <p className="mt-2">
                                Bachelor in Geography and Human Environment
                            </p>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-lg font-bold text-gray-800">
                                Interests
                            </h3>
                            <p className="mt-2">
                                <strong>Data viz</strong> •
                                <strong> UI/UX</strong> •
                                <strong> Interactive mapping</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
