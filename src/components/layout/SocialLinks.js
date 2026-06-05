import React from "react";

import DownloadResume from "../Resume";
import Links from "../links";

function SocialLinks() {
    return (
        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4">
            <div>
                <span className="mt-5 max-w-xl space-y-3 text-center text-[15px] leading-6 text-slate-300 lg:text-left sm:text-base sm:leading-7">You can find my contact in the resume.</span>
            </div>
            <div className="mx-auto flex w-full max-w-[17rem] justify-center lg:mx-0 lg:w-auto lg:max-w-none lg:justify-start">
                <DownloadResume
                colorScheme="alternate"
                    fullWidth={false}
                    className="whitespace-nowrap px-5 text-sm sm:text-base"
                />
            </div>
            <Links className="mx-auto w-full justify-center lg:mx-0 lg:w-auto lg:justify-start" />
        </div>
    );
}

export default SocialLinks;
