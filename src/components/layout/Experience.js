import React from "react";
import SectionCard from "./SectionCard";

const experienceHighlights = [
    {
        title: "Current focus",
        heading: "Independent front-end developer",
        copy:
            "Since 2023, I've been building responsive marketing sites and small single-page apps for SMEs and personal brands.",
    },
    {
        title: "Foundation",
        heading: "QA automation and product collaboration",
        copy:
            "My Cypress and JavaScript QA background still shapes how I work: I think about edge cases, testability, and stable user flows from the start.",
    },
    {
        title: "Education",
        heading: "Geography, UX, and data visualisation",
        copy:
            "B.A. in Geography and Human Environment, with a lasting interest in UI/UX, interactive mapping, and data-driven storytelling.",
    },
];

function Experience() {
    return (
        <SectionCard>
            <div className="flex flex-col px-6 py-6 sm:px-8 sm:py-8">
                <h2 className="section-heading">Experience</h2>
                <div className="mt-4 grid gap-4 lg:grid-cols-3">
                    {experienceHighlights.map((item) => (
                        <article
                            key={item.title}
                            className="rounded-[24px] bg-slate-50 px-4 py-4 ring-1 ring-slate-200/70 sm:px-5"
                        >
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                                {item.title}
                            </p>
                            <h3 className="mt-1.5 text-lg font-semibold text-slate-900">
                                {item.heading}
                            </h3>
                            <p className="section-copy mt-1.5">{item.copy}</p>
                        </article>
                    ))}
                </div>
            </div>
        </SectionCard>
    );
}

export default Experience;
