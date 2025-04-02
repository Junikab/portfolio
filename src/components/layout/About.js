import React from "react";
import jennyImage from "../../assets/Jenny.jpg";

function About() {
    return (
        <>
            <div className="relative lg:row-span-2">
                <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                    <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                        <p className="mt-2 text-lg font-medium text-gray-950 max-lg:text-center">
                            About Me
                        </p>
                        <div className="mt-2 max-w-lg text-base/7 text-gray-600 max-lg:text-center">
                            <p>
                                I am a junior front-end developer experienced in
                                QA automation using Express, JavaScript, and
                                Cypress.io. Passionate about quality and user
                                experience, I strive to improve my skills and
                                stay up-to-date with industry trends.
                            </p>
                        </div>
                    </div>
                    <div className="relative min-h-[30rem] w-full max-lg:mx-auto max-lg:max-w-sm">
                        <div className="absolute inset-x-10 top-6 bottom-8 aboutImg">
                            <img
                                className="meImg border rounded-lg"
                                src={jennyImage}
                                alt="Jenny"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
