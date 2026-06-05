import React from "react";

import DownloadResume from "../Resume";
import Links from "../links";

function SocialLinks() {
    return (
        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4">
            <div>
                <p className="text-center text-[15px] leading-6 text-slate-300 md:text-left sm:text-base sm:leading-7">
                    You can find my contact in the resume.
                </p>
            </div>
            <div className="mx-auto flex w-full max-w-[16rem] justify-center md:mx-0 md:w-auto md:max-w-none md:justify-start">
                <DownloadResume
                    colorScheme="alternate"
                    fullWidth={false}
                    className="whitespace-nowrap px-5 text-sm sm:text-base"
                />
            </div>
            <Links className="mx-auto w-full justify-center md:mx-0 md:w-auto md:justify-start" />
        </div>
    );
}

export default SocialLinks;
