import React from "react";

import About from "./About";
import Experience from "./Experience";
import SocialLinks from "./SocialLinks";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

function Title() {
    return (
        <div className="bg-gradient-to-tl from-neutral-100 to-neutral-300 pt-16 pb-24 sm:pt-16 sm:pb-16">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="mx-auto max-w-lg text-center text-4xl font-semibold uppercase text-gray-800 sm:text-5xl">
                    Jenny Deygin
                </h2>
                <h2 className="text-center mt-3 text-3xl text-gray-600">
                    Front End Developer
                </h2>

                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2 text-justify">
                    <About />
                    <Experience />
                    <SocialLinks />
                    <Skills />
                </div>
                <div className="mt-10">
                    <Projects />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Title;
