import React from "react";

function Experience() {
    return (
        <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px shadow-md rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-8 sm:px-10 sm:pt-10">
                    <h2 className="mt-2 text-3xl font-medium text-gray-950 max-lg:text-center">
                        Experience
                    </h2>
                    <div className="mt-2 max-w-lg text-base/7 text-gray-600 max-lg:text-center">
                        <p>
                            <span>Web development</span> - 5 years <br />
                            <span>React</span> - 3 years <br />
                            <span>Education</span> - Bachelor Degree In
                            Geography And Human Environment
                        </p>
                    </div>
                    <div className="mt-2 max-w-lg text-base/7 text-gray-600 max-lg:text-center">
                        <p>
                            <span>Interest</span> - Maps, Visualization.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
