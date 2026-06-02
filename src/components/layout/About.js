import React from "react";
import jennyImage from "../../assets/Jenny.jpg";
import SectionCard from "./SectionCard";

function About() {
    return (
        <SectionCard className="h-full lg:row-span-2">
            <div className="flex h-full flex-col overflow-hidden">
                <div className="px-6 pt-6 sm:px-8 sm:pt-8">
                    <h2 className="section-heading">About Me</h2>
                    <div className="section-copy mt-4 space-y-4">
                        <p>
                            I&apos;m a junior front-end developer with
                            experience in React, Vue, JavaScript, and QA
                            automation. I enjoy turning rough ideas into clean,
                            responsive interfaces that feel easy to use.
                        </p>
                        <p>
                            My background in testing helps me approach UI work
                            carefully: accessibility, layout consistency, and
                            clear feedback matter just as much as shipping the
                            feature itself.
                        </p>
                    </div>
                </div>

                <div className="relative mt-6 flex flex-1 items-center justify-center overflow-hidden bg-[linear-gradient(180deg,rgba(241,245,249,0.25),rgba(226,232,240,0.72))] px-6 pb-8 pt-2">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-8 top-5 h-20 rounded-full bg-[radial-gradient(circle,_rgba(90,117,146,0.16),_transparent_68%)] blur-2xl"
                    />
                    <figure className="relative space-y-4">
                        <div className="mx-auto h-64 w-64 overflow-hidden rounded-full border-[10px] border-white/80 shadow-[0_28px_60px_rgba(15,23,42,0.18)] sm:h-72 sm:w-72">
                            <img
                                className="h-full w-full object-cover"
                                src={jennyImage}
                                alt="Portrait of Jenny Deygin"
                                loading="lazy"
                            />
                        </div>
                        <figcaption className="text-center text-sm font-medium text-slate-500">
                            Interested in UI polish, data visualisation, and
                            interactive mapping.
                        </figcaption>
                    </figure>
                </div>
            </div>
        </SectionCard>
    );
}

export default About;
