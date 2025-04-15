import React from "react";

import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import SocialLinks from "./SocialLinks";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";



function Title() {
    return (
        <div className="bg-gradient-to-tl shadow-md from-neutral-100 to-neutral-300 pt-16 pb-24 sm:pt-16 sm:pb-16">
            <div className="w-full mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <Header />

                <div className="w-full mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2 text-justify">
                    <About />
                    <Experience />
                    <SocialLinks />
                    <Skills />
                </div>
                <div className="w-full mt-10">
                    <Projects />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Title;
