import React from "react";

import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import SocialLinks from "./SocialLinks";
import Skills from "./Skills";
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
                    <Header />
                </WidthContainer>

                <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)_minmax(0,1fr)]">
                    <About />
                    <div className="flex h-full flex-col gap-6 lg:row-span-2">
                        <div className="shrink-0">
                            <SocialLinks />
                        </div>
                        <div className="min-h-0 flex-1">
                            <Experience />
                        </div>
                    </div>
                    <Skills />
                </div>

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
