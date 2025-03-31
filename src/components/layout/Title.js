import React from "react";

import About from "./About";
import Experience from "./Experience";
import SocialLinks from "./SocialLinks";
import DownloadResume from "./Resume";
import Skills from "./Skills";

function Title() {
    return (
        <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <p className="mx-auto max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
                    Jenny Deygin
                </p>
                <h2 className="text-center mt-3 text-xl/7 font-semibold text-gray-600">
                    Front End Developer
                </h2>

                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2 text-justify">
                    <About />
                    <Experience />
                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                        <div className="absolute inset-px rounded-lg bg-white"></div>
                        <div className="relative flex flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] p-4 space-y-4">
                            <SocialLinks />
                            <DownloadResume />
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
                    </div>
                    <Skills />
                </div>
            </div>
        </div>
    );
}

export default Title;
