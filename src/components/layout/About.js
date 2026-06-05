import React from "react";
import jennyImage from "../../assets/Jenny.jpg";
import SectionCard from "./SectionCard";

function About() {
    return (
        <SectionCard>
            <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
                <div className="order-2 px-6 py-6 sm:px-8 sm:py-8 lg:order-1 lg:py-10">
                    <h2 className="section-heading">About</h2>
                    <div className="section-copy mt-4 max-w-2xl space-y-4">
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
                            in data visualisation and interactive mapping,
                            where thoughtful design can make complex
                            information easier to understand.
                        </p>
                    </div>
                </div>

                <div className="order-1 relative flex min-h-[18rem] items-center justify-center overflow-hidden bg-[linear-gradient(0deg,rgb(255,255,255),rgba(15,23,42,0.72))] px-6 py-8 sm:min-h-[20rem] sm:px-8 lg:order-2 lg:min-h-full lg:bg-[linear-gradient(90deg,rgb(255,255,255),rgba(15,23,42,0.72))] lg:px-10">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-8 top-6 h-24 rounded-full bg-[radial-gradient(circle,_rgba(90,117,146,0.18),_transparent_68%)] blur-2xl"
                    />
                    <figure className="relative">
                        <div className="mx-auto h-56 w-56 overflow-hidden rounded-full border-[4px] border-white/80 shadow-[0_24px_50px_rgba(15,23,42,0.16)] sm:h-64 sm:w-64 lg:h-72 lg:w-72">
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
