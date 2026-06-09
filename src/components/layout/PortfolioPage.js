import React from "react";

import IntroSection from "./IntroSection";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";
import WidthContainer from "./WidthContainer";

function PortfolioPage() {
    return (
        <main className="relative overflow-hidden px-4 pb-16 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pb-20">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top_left,_rgba(83,114,146,0.18),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(214,153,92,0.16),_transparent_24%)]"
            />
            <div className="mx-auto max-w-7xl space-y-6">
                <WidthContainer>
                    <IntroSection />
                </WidthContainer>

                <WidthContainer>
                    <Experience />
                </WidthContainer>

                <WidthContainer>
                    <About />
                </WidthContainer>

                <WidthContainer className="pt-2">
                    <Projects />
                </WidthContainer>

                <WidthContainer>
                    <Footer />
                </WidthContainer>
            </div>
        </main>
    );
}

export default PortfolioPage;
