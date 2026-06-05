import React from "react";
import SkillsBubbles from "../SkillsBubbles";
import SectionCard from "./SectionCard";

function Skills({ variant = "card" }) {
    const isHero = variant === "hero";
    const wrapperClassName = isHero
        ? "h-full rounded-[28px] bg-white/10 p-2 ring-1 ring-white/10 backdrop-blur-sm"
        : "h-full";
    const containerClassName = isHero
        ? "flex h-full flex-col rounded-[24px] bg-slate-50/95"
        : "flex h-full flex-col overflow-hidden";
    const headerClassName = isHero
        ? "px-5 pt-5 sm:px-6 sm:pt-6"
        : "px-6 pt-6 sm:px-8 sm:pt-8";
    const chartPaddingClassName = isHero
        ? "flex-1 px-2 pb-2 pt-3 sm:px-3 sm:pb-3"
        : "flex-1 px-2 pb-2 pt-3 sm:px-4 sm:pb-4";
    const chartFrameClassName = isHero
        ? "h-full rounded-[20px] bg-white ring-1 ring-slate-200/80"
        : "h-full rounded-[24px] bg-slate-50/90 ring-1 ring-white";
    const copyClassName = isHero
        ? "mt-2 text-sm leading-6 text-slate-600"
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
