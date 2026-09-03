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
            <div className="text-center lg:text-left">
                <h1 className="text-[3.25rem] font-medium leading-[0.9] text-white sm:text-6xl lg:text-[4.25rem]">
                    Jenny Deygin
                </h1>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-300 sm:text-base">
                    Front-end developer
                </p>
            </div>
            <div className="mt-5 max-w-xl space-y-3 text-center text-[15px] leading-6 text-slate-300 lg:text-left sm:text-base sm:leading-7">
                <p>
                    I build clean, responsive interfaces with React, Vue, and
                    JavaScript, with a QA background that keeps the experience
                    careful, reliable, and easy to use.
                </p>
            </div>
            <div className="mx-auto mt-6 flex w-full max-w-[18rem] flex-wrap items-center justify-between gap-4 lg:mx-0">
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
