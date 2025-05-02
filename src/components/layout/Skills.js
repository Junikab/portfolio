import React from "react";
import SkillsBubbles from "../SkillsBubbles";

function Skills() {
    return (
        <div className="relative lg:row-span-2">
            <div className="absolute inset-px shadow-md rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden">
                <div className="px-8 pt-8 pb-4 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-3xl font-medium text-gray-950 max-lg:text-center">
                        Technical Skills
                    </p>
                    <p className="mt-2 max-w-lg text-base/7 text-gray-600 max-lg:text-center">
                        Feel free to drag and move the bubbles around :)
                    </p>
                </div>
                <div>
                    <SkillsBubbles />
                </div>
            </div>
        </div>
    );
}

export default Skills;
