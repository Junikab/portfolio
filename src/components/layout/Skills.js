import React from "react";
import SkillsBubbles from "../SkillsBubbles";
import SectionCard from "./SectionCard";

function Skills({ variant = "card" }) {
    const isHero = variant === "hero";
    const wrapperClassName = "h-full";
    const containerClassName = isHero
        ? "flex h-full flex-col"
        : "flex h-full flex-col overflow-hidden";
    const headerClassName = isHero
        ? "px-0 pt-2"
        : "px-6 pt-6 sm:px-8 sm:pt-8";
    const chartPaddingClassName = isHero
        ? "flex-1 pt-3"
        : "flex-1 px-2 pb-2 pt-3 sm:px-4 sm:pb-4";
    const chartFrameClassName = isHero
        ? "h-full"
        : "h-full rounded-[24px] bg-slate-50/90 ring-1 ring-white";
    const copyClassName = isHero
        ? "mt-2 text-center text-sm leading-6 text-slate-300 lg:text-left"
        : "section-copy mt-3";

    const content = (
        <div className={containerClassName}>
            <div className={headerClassName}>
                <p className={copyClassName}>Drag the bubbles and play around.</p>
            </div>

            <div className={chartPaddingClassName}>
                <div className={chartFrameClassName}>
                    <SkillsBubbles />
                </div>
            </div>
        </div>
    );

    if (isHero) {
        return <div className={wrapperClassName}>{content}</div>;
    }

    return <SectionCard className={wrapperClassName}>{content}</SectionCard>;
}

export default Skills;
