import React from "react";
import jennyImage from "../../assets/Jenny.jpg";

function About() {
    return (
        <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full shadow-md flex-col overflow-hidden rounded-lg">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <p className="mt-2 text-3xl font-medium text-gray-950 max-lg:text-center">
                        About Me
                    </p>
                    <div className="my-2 max-w-lg text-base/7 text-gray-600 max-lg:text-center">
                        <p>
                            I am a <strong>front-end developer</strong> with
                            experience in <strong>QA automation</strong> using{" "}
                            <strong>Express</strong>,{" "}
                            <strong>JavaScript</strong>, and{" "}
                            <strong>Cypress.io</strong>. Early in my career,
                            I've embraced both traditional development practices
                            and modern <strong>AI-assisted workflows</strong> to
                            enhance productivity. <br/>I'm passionate about
                            creating <strong>intuitive interfaces</strong> while
                            continuously exploring
                            <strong> emerging technologies</strong> that reshape
                            our development landscape.
                        </p>
                    </div>
                </div>
                <div className="relative bg-gradient-to-t from-violet-950 to-violet-100/10 w-full h-full pt-6 flex-grow pb-6 flex justify-center">
                    <div className="h-72 w-72 border-2 border-indigo-950 rounded-full overflow-hidden">
                        <img
                            className="object-cover w-full h-full"
                            src={jennyImage}
                            alt="Jenny"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
