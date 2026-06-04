import React from "react";

import DownloadResume from "../Resume";
import Links from "../links";
import SectionCard from "./SectionCard";

function SocialLinks() {
    return (
        <SectionCard className="h-full">
            <div className="flex h-full flex-col px-6 py-6 sm:px-8 sm:py-8">
                <h2 className="section-heading">Contact</h2>
                <p className="section-copy mt-3">
                    My resume has the essentials, and you can find me on
                    LinkedIn and GitHub right below.
                </p>

                <div className="mt-12">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                        Currently Open To
                    </p>
                    <ul className="mt-4 space-y-3 text-sm font-medium text-slate-500">
                        <li className="flex items-start gap-2">
                            <span
                                aria-hidden="true"
                                className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400"
                            />
                            <span>Junior front-end opportunities</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span
                                aria-hidden="true"
                                className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400"
                            />
                            <span>Thoughtful UI and product work</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span
                                aria-hidden="true"
                                className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400"
                            />
                            <span>Data visualisation and mapping projects</span>
                        </li>
                    </ul>
                </div>

                <div className="mt-12 flex flex-col gap-6">
                    <div>
                        <DownloadResume colorScheme="default" />
                    </div>
                    <Links />
                </div>
            </div>
        </SectionCard>
    );
}

export default SocialLinks;
