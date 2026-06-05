import React from "react";
import ReactLogo from "../reactLogo";
import JsLogo from "../jsLogo";
import OpenAILogo from "../openaiLogo";

const introLogos = [
    {
        key: "openai",
        Logo: OpenAILogo,
        className: "h-11 w-11 text-white/95 sm:h-12 sm:w-12",
    },
    {
        key: "js",
        Logo: JsLogo,
        className: "h-11 w-11 sm:h-12 sm:w-12",
    },
    {
        key: "react",
        Logo: ReactLogo,
        className: "h-12 w-12 sm:h-14 sm:w-14",
    },
];

function HeaderLogo({ Logo, className = "" }) {
    return (
        <div
            aria-hidden="true"
            className={`flex items-center justify-center ${className}`}
        >
            <Logo />
        </div>
    );
}

function Header() {
    return (
        <header>
            <div className="mt-5 text-center md:text-left">
                <h1 className="font-display text-[2.75rem] leading-none text-white sm:text-5xl lg:text-[3.4rem]">
                    Jenny Deygin
                </h1>
                <p className="mt-2 text-base font-medium text-slate-200 sm:text-xl">
                    Front-end developer
                </p>
            </div>
            <div className="mt-5 max-w-xl space-y-3 text-center text-[15px] leading-6 text-slate-300 md:text-left sm:text-base sm:leading-7">
                <p>
                    I build clean, responsive interfaces with React, Vue, and
                    JavaScript, with a QA background that keeps the experience
                    careful, reliable, and easy to use.
                </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 md:justify-start sm:gap-8">
                {introLogos.map(({ key, Logo, className }) => (
                    <HeaderLogo
                        key={key}
                        Logo={Logo}
                        className={className}
                    />
                ))}
            </div>
 
        </header>
    );
}

export default Header;
