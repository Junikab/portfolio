import React from "react";

import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import SocialLinks from "./SocialLinks";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import WidthContainer from "./WidthContainer";

function Title() {
    return (
        <div className="bg-gradient-to-tl from-neutral-100 to-neutral-300 pt-10 pb-24 sm:pt-10 sm:pb-10">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <WidthContainer>
                    <Header />
                </WidthContainer>

                {/* Mobile layout - components stacked in desired order */}
                <div className="mt-10 flex flex-col gap-4 lg:hidden">
                    <About />
                    <Skills />
                    <Experience />
                    <SocialLinks />
                </div>
                <div className="hidden mt-10 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-4 text-justify">
                    <About />
                    <Experience />
                    <SocialLinks />
                    <Skills />
                </div>

                <WidthContainer className="mt-10">
                    <Projects />
                </WidthContainer>

                <WidthContainer>
                    <Footer />
                </WidthContainer>
            </div>
        </div>
    );
}

export default Title;
