import React from "react";
import SkillsBubbles from "../SkillsBubbles";

function Skills() {
    return (
        <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-4 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium text-gray-950 max-lg:text-center">
                        Technical Skills
                    </p>
                    <p className="mt-2 max-w-lg text-base/7 text-gray-600 max-lg:text-center">
                        Feel free to drag and move the bubbles around :)
                    </p>

                    {/* <div className="mt-2 max-w-lg text-base/7 text-gray-600 max-lg:text-center">
                        <p>
                            JavaScript • TypeScript • Node.js • HTML5 • CSS3 •
                            React • Express • Bootstrap • Material-UI • MongoDB
                            • Cypress.io • REST • Git • Vue • Vite • Tailwind •
                            Agile
                        </p>
                        <p>Interests: Maps, Visualization</p>
                    </div> */}
                </div>
                <div className="px-6 pb-6">
                    <SkillsBubbles />
                </div>
            </div>
        </div>
    );
}

export default Skills;
