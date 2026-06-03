import React from "react";
import ReactLogo from "../reactLogo";
import JsLogo from "../jsLogo";
import OpenAILogo from "../openaiLogo";

function Header() {
    return (
        <header className="surface-card overflow-hidden border-0 bg-slate-950 text-slate-50 shadow-[0_32px_80px_rgba(15,23,42,0.22)]">
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.28),_transparent_26%),linear-gradient(135deg,_rgba(51,65,85,0.95),_rgba(15,23,42,1)_60%)]"
            />
            <div className="relative grid gap-8 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[7rem_minmax(0,1fr)_7rem] lg:items-center lg:px-10">
                <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-4">
                    <div
                        aria-hidden="true"
                        className="flex h-16 w-16 items-center justify-center text-white/95"
                    >
                        <OpenAILogo />
                    </div>
                    <div
                        aria-hidden="true"
                        className="flex h-24 w-24 items-center justify-center"
                    >
                        <JsLogo />
                    </div>
                </div>

                <div className="text-center">
                    <h1 className="font-display text-5xl leading-none text-white sm:text-6xl">
                        Jenny Deygin
                    </h1>
                    <p className="mt-3 text-xl font-medium text-slate-200 sm:text-2xl">
                        Front-end developer
                    </p>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
                        Junior front-end developer with a QA automation
                        background, building accessible React and Vue
                        interfaces for small businesses and product teams.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-medium text-slate-300">
                        <span>Sydney, Australia</span>
                        <span className="hidden text-slate-500 sm:inline">
                            •
                        </span>
                        <span>React, Tailwind CSS, D3</span>
                        <span className="hidden text-slate-500 sm:inline">
                            •
                        </span>
                        <span>Responsive UI and QA-minded workflows</span>
                    </div>

                </div>

                <div className="hidden lg:block">
                    <div
                        aria-hidden="true"
                        className="ml-auto flex h-24 w-24 items-center justify-center"
                    >
                        <ReactLogo />
                    </div>
                </div>

                <div className="flex items-center justify-center gap-4 lg:hidden">
                    <div
                        aria-hidden="true"
                        className="flex h-20 w-20 items-center justify-center text-white/95"
                    >
                        <OpenAILogo />
                    </div>
                    <div
                        aria-hidden="true"
                        className="flex h-20 w-20 items-center justify-center"
                    >
                        <JsLogo />
                    </div>
                    <div
                        aria-hidden="true"
                        className="flex h-20 w-20 items-center justify-center"
                    >
                        <ReactLogo />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
