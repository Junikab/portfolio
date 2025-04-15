import React from "react";
import ReactLogo from "../reactLogo";
import JsLogo from "../jsLogo";

function Header() {
    const Title = () => (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl font-semibold uppercase text-gray-800 sm:text-5xl text-center">
                Jenny Deygin
            </h2>
            <h2 className="mt-3 text-3xl text-gray-600 text-center">
                Front End Developer
            </h2>
        </div>
    );


    return (
        <div className="bg-white shadow-md rounded-lg py-10">
            {/* Desktop Layout (3-column grid) - hidden on mobile */}
            <div className="hidden md:grid md:grid-cols-3">
                <div className="flex justify-center items-center">
                    <div className="w-24 h-24">
                        <JsLogo />
                    </div>
                </div>

                <Title />

                <div className="flex justify-center items-center">
                    <div className="w-24 h-24">
                        <ReactLogo />
                    </div>
                </div>
            </div>

            {/* Mobile Layout (stacked) - hidden on desktop */}
            <div className="flex flex-col md:hidden">
                <div className="mb-6">
                    <Title />
                </div>

                <div className="flex justify-center items-center space-x-8">
                    <div className="w-20 h-20">
                        <JsLogo />
                    </div>
                    <div className="w-20 h-20">
                        <ReactLogo />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
