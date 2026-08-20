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
            <div className="mx-auto max-w-7xl space-y-8">
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
