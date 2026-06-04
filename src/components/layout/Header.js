import React from "react";
import ReactLogo from "../reactLogo";
import JsLogo from "../jsLogo";
import OpenAILogo from "../openaiLogo";

const desktopLeftLogos = [
    {
        key: "openai-desktop",
        Logo: OpenAILogo,
        className: "h-12 w-12 text-white/95",
    },
    {
        key: "js-desktop",
        Logo: JsLogo,
        className: "h-12 w-12",
    },
];

const mobileLogos = [
    {
        key: "openai-mobile",
        Logo: OpenAILogo,
        className: "h-12 w-12 text-white/95 sm:h-12 sm:w-12",
    },
    {
        key: "js-mobile",
        Logo: JsLogo,
        className: "h-12 w-12 sm:h-12 sm:w-12",
    },
    {
        key: "react-mobile",
        Logo: ReactLogo,
        className: "h-12 w-12 sm:h-16 sm:w-16",
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
        <header className="surface-card border-0 bg-slate-950 text-slate-50 shadow-[0_32px_80px_rgba(15,23,42,0.22)]">
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.28),_transparent_26%),linear-gradient(135deg,_rgba(51,65,85,0.95),_rgba(15,23,42,1)_60%)]"
            />
            <div className="relative grid gap-5 px-6 py-6 sm:gap-6 sm:px-8 sm:py-7 lg:grid-cols-[5.5rem_minmax(0,1fr)_5.5rem] lg:items-center lg:px-9">
                <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-3">
                    {desktopLeftLogos.map(({ key, Logo, className }) => (
                        <HeaderLogo
                            key={key}
                            Logo={Logo}
                            className={className}
                        />
                    ))}
                </div>

                <div className="text-center">
                    <h1 className="font-display text-4xl leading-none text-white sm:text-5xl">
                        Jenny Deygin
                    </h1>
                    <p className="mt-2 text-lg font-medium text-slate-200 sm:text-xl">
                        Front-end developer
                    </p>
                </div>

                <div className="hidden lg:flex lg:justify-center">
                    <HeaderLogo Logo={ReactLogo} className="h-16 w-16" />
                </div>

                <div className="flex items-center justify-center gap-3 lg:hidden">
                    {mobileLogos.map(({ key, Logo, className }) => (
                        <HeaderLogo
                            key={key}
                            Logo={Logo}
                            className={className}
                        />
                    ))}
                </div>
            </div>
        </header>
    );
}

export default Header;
