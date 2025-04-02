import React from "react";

function Experience() {
    return (
        <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium text-gray-950 max-lg:text-center">
                        Experience
                    </p>
                    <div className="mt-2 max-w-lg text-base/7 text-gray-600 max-lg:text-center">
                        <p>
                            Web development -5 years <br />
                            React - 3 years <br />
                            Education: Bachelor Degree In Geography And Human
                            Environment
                        </p>
                    </div>
                </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
        </div>
    );
}

export default Experience;
