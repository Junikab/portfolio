import React from "react";

import Header from "./Header";
import SocialLinks from "./SocialLinks";
import Skills from "./Skills";
import SectionCard from "./SectionCard";

function IntroSection() {
    return (
        <SectionCard className="border-slate-800 bg-slate-950 text-slate-50 shadow-[0_14px_36px_rgba(15,23,42,0.14)]">
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(51,65,85,0.72),_rgba(15,23,42,0.98)_62%)]"
            />
            <div className="relative grid gap-5 px-5 py-5 sm:gap-6 sm:px-8 sm:py-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-stretch lg:gap-7 lg:px-9 lg:py-9">
                <div className="min-w-0 w-full max-w-[34rem] mx-auto flex flex-col justify-between lg:max-w-none lg:mx-0">
                    <Header />
                    <SocialLinks />
                </div>

                <div className="min-w-0 w-full max-w-[34rem] mx-auto lg:max-w-none lg:mx-0">
                    <Skills variant="hero" />
                </div>
            </div>
        </SectionCard>
    );
}

export default IntroSection;
