import React from "react";

function ReactLogo() {
    return (
        <div className="">
            <div className="flex justify-center items-center h-full">
                <div className="animate-spinPulse">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-11.5 -10.23174 23 20.46348"
                        width="100"
                        height="100"
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
        </div>
    );
}

export default ReactLogo;