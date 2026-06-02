import React from "react";
import SkillsBubbles from "../SkillsBubbles";
import SectionCard from "./SectionCard";

function Skills() {
    return (
        <SectionCard className="h-full lg:row-span-2">
            <div className="flex h-full flex-col overflow-hidden">
                <div className="px-6 pt-6 sm:px-8 sm:pt-8">
                    <h2 className="section-heading">Technical Skills</h2>
                    <p className="section-copy mt-3">
                        Drag the bubbles to explore the tools, frameworks, and
                        workflows I use most often.
                    </p>
                </div>

                <div className="flex-1 px-2 pb-2 pt-4 sm:px-4 sm:pb-4">
                    <div className="h-full rounded-[24px] bg-slate-50/90 ring-1 ring-white">
                        <SkillsBubbles />
                    </div>
                </div>
            </div>
        </SectionCard>
    );
}

export default Skills;
