import resumePDF from "../assets/JennyDeyginCV.pdf";

function DownloadResume({ colorScheme = "default" }) {
    const buttonStyles = {
        default: "bg-slate-900 text-white hover:bg-slate-800",
        alternate:
            "bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20",
    };

    const buttonClassName = buttonStyles[colorScheme] || buttonStyles.default;

    return (
        <a
            href={resumePDF}
            download="JennyDeyginCV.pdf"
            aria-label="Download Jenny Deygin resume as PDF"
            className={`cta-button ${buttonClassName}`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
            </svg>
            <span>Download Resume</span>
        </a>
    );
}

export default DownloadResume;
