import React from "react";
import SectionCard from "./SectionCard";

function Experience() {
    return (
        <SectionCard className="h-full">
            <div className="flex h-full flex-col px-6 py-6 sm:px-8 sm:py-8">
                <h2 className="section-heading">Experience</h2>
                <div className="mt-5 grid gap-4">
                    <article className="rounded-[24px] bg-slate-50 p-5 ring-1 ring-slate-200/70">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                            Current focus
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-slate-900">
                            Independent front-end developer
                        </h3>
                        <p className="section-copy mt-2">
                            Since 2023, I&apos;ve been building responsive
                            marketing sites and small single-page apps for SMEs
                            and personal brands.
                        </p>
                    </article>

                    <article className="rounded-[24px] bg-slate-50 p-5 ring-1 ring-slate-200/70">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                            Foundation
                        </p>
                        <h3 className="mt-2 text-lg font-semibold text-slate-900">
                            QA automation and product collaboration
                        </h3>
                        <p className="section-copy mt-2">
                            My Cypress and JavaScript QA background still shapes
                            how I work: I think about edge cases, testability,
                            and stable user flows from the start.
                        </p>
                    </article>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-5">
                    <h3 className="text-lg font-semibold text-slate-900">
                        Education and interests
                    </h3>
                    <p className="section-copy mt-2">
                        B.A. in Geography and Human Environment. I&apos;m
                        especially drawn to data visualisation, UI/UX, and
                        interactive mapping work.
                    </p>
                </div>
            </div>
        </SectionCard>
    );
}

export default Experience;
