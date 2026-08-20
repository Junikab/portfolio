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

                <div className="order-1 relative flex min-h-[20rem] items-center justify-center overflow-hidden border-b border-slate-200 bg-slate-100 px-8 py-8 sm:min-h-[24rem] lg:order-2 lg:min-h-full lg:border-b-0 lg:border-l lg:px-10">
                    <figure className="relative w-full max-w-[18rem]">
                        <div className="aspect-[4/5] w-full overflow-hidden rounded-[6px] border border-slate-300 bg-white p-1.5 shadow-[0_12px_28px_rgba(15,23,42,0.12)]">
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
