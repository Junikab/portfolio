import React from "react";
import jennyImage from "../../assets/Jenny.jpg";
import SectionCard from "./SectionCard";

function About() {
    return (
        <SectionCard className="h-full">
            <div className="flex h-full flex-col overflow-hidden">
                <div className="px-6 pt-6 sm:px-8 sm:pt-8">
                    <h2 className="section-heading">About Me</h2>
                    <div className="section-copy mt-4 space-y-4">
                        <p>
                            I&apos;m a junior front-end developer who enjoys
                            building clean, responsive interfaces with React,
                            Vue, and JavaScript. I like taking an idea from a
                            rough concept to something clear, polished, and
                            genuinely pleasant to use.
                        </p>
                        <p>
                            My background in QA automation taught me to pay
                            attention to the details that shape a good
                            experience, from layout consistency and
                            accessibility to the small interactions that make a
                            page feel finished. I&apos;m especially interested
                            in data visualisation, and interactive
                            mapping, where thoughtful design can make complex
                            information easier to understand.
                        </p>
                    </div>
                </div>

                <div className="relative mt-4 flex flex-1 items-center justify-center overflow-hidden bg-[linear-gradient(rgb(255,255,255),rgba(15,23,42,0.72))] px-6 pb-6 pt-2">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-8 top-5 h-20 rounded-full bg-[radial-gradient(circle,_rgba(90,117,146,0.16),_transparent_68%)] blur-2xl"
                    />
                    <figure className="relative space-y-4">
                        <div className="mx-auto h-52 w-52 overflow-hidden rounded-full border-[8px] border-white/80 shadow-[0_24px_50px_rgba(15,23,42,0.16)] sm:h-60 sm:w-60">
                            <img
                                className="h-full w-full object-cover"
                                src={jennyImage}
                                alt="Portrait of Jenny Deygin"
                                loading="lazy"
                            />
                        </div>
                    </figure>
                </div>
            </div>
        </SectionCard>
    );
}

export default About;
