import React from "react";

import DownloadResume from "../Resume";
import Links from "../links";

function SocialLinks() {
    return (
        <div className="relative lg:row-start-1">
            <div className="shadow-md rounded-lg bg-white max-lg:text-center">
                <div className="relative flex flex-col overflow-hidden px-4 pt-6 space-y-4">
                    <div className="px-6 pt-6">
                        <p className="text-3xl font-medium text-gray-950">
                            Contact me
                        </p>
                    </div>
                    <div className="flex flex-col space-y-4 pb-6 text-gray-600">
                        <div className="px-6">
                            <p>Contact info is in my resume.</p>
                        </div>
                        <div className="px-6">
                            <DownloadResume colorScheme="default" />
                        </div>
                        <div className="flex max-lg:justify-center">
                            <Links />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SocialLinks;
