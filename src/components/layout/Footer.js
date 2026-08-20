import React from "react";
import DownloadResume from "../Resume";
import Links from "../links";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="surface-card overflow-hidden border-slate-800 bg-slate-950 px-6 py-8 text-slate-100 shadow-[0_12px_30px_rgba(15,23,42,0.12)] sm:px-8 sm:py-10">
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(30,41,59,0.76),_rgba(15,23,42,1)_68%)]"
            />
            <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
                <div>
                    <h2 className="font-display text-3xl font-medium text-white">
                        Selected front-end work
                    </h2>
                    <p className="mt-4 text-base leading-7 text-slate-300">
                        A collection of client websites, interactive apps, and
                        experiments spanning responsive UI, browser tools, data
                        visualisation, and practical uses of AI.
                    </p>
                </div>

                <div>
                    <h2 className="font-display text-3xl font-medium text-white">
                        Built with
                    </h2>
                    <ul className="mt-4 space-y-1 text-base leading-7 text-slate-300">
                        <li>
                            <span className="font-semibold text-white">
                                React
                            </span>{" "}
                            for component-driven UI
                        </li>
                        <li>
                            <span className="font-semibold text-white">
                                Tailwind CSS
                            </span>{" "}
                            for layout and visual system work
                        </li>
                        <li>
                            <span className="font-semibold text-white">
                                D3
                            </span>{" "}
                            for the draggable skills visualisation
                        </li>
                    </ul>
                </div>

                <div className="flex h-full flex-col justify-between gap-6">
                    <div className="w-full max-w-[20rem]">
                        <DownloadResume colorScheme="alternate" />
                        <Links className="mt-4 w-full flex-nowrap [&>a]:flex-1 [&>a]:justify-center" />
                    </div>

                    <div className="space-y-2 text-sm leading-6 text-slate-400">
                        <p>
                            Portfolio concept originally sparked by{" "}
                            <a
                                href="https://juliakuchina.github.io/portfolio/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-slate-200 transition-colors hover:text-white"
                            >
                                Julia Kuchina
                            </a>
                            .
                        </p>
                        <p>&copy; {currentYear} Jenny Deygin.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
