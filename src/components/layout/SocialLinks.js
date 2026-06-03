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
                    The resume includes my phone number, email, and current
                    experience. If you want a quick first stop, LinkedIn and
                    GitHub are right below.
                </p>

                <div className="mt-5 flex flex-col gap-4">
                    <DownloadResume colorScheme="default" />
                    <Links />
                </div>
            </div>
        </SectionCard>
    );
}

export default SocialLinks;
