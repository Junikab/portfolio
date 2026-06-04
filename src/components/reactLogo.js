import React from "react";

function ReactLogo() {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <div className="h-full w-full animate-spinPulse">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-11.5 -10.23174 23 20.46348"
                    width="100%"
                    height="100%"
                >
                    <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                    <g stroke="#61dafb" strokeWidth="1" fill="none">
                        <ellipse rx="11" ry="4.2" />
                        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                    </g>
                </svg>
            </div>
        </div>
    );
}

export default ReactLogo;
