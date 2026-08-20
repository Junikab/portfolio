import React from "react";

import DownloadResume from "../Resume";
import Links from "../links";

function SocialLinks() {
    return (
        <div className="mt-6 flex flex-col items-center gap-4 sm:mt-8 lg:items-start">
            <div className="w-full max-w-[18rem]">
                <p className="text-center text-[15px] leading-6 text-slate-300 lg:text-left sm:text-base sm:leading-7">
                    You can find my contact in the resume.
                </p>
            </div>
            <div className="w-full max-w-[18rem]">
                <DownloadResume
                    colorScheme="alternate"
                    className="whitespace-nowrap px-5 text-sm sm:text-base"
                />
                <Links className="mt-3 w-full flex-nowrap [&>a]:flex-1 [&>a]:justify-center" />
            </div>
        </div>
    );
}

export default SocialLinks;
