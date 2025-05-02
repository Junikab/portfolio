import resumePDF from "../assets/JennyDeyginCV.pdf";

function DownloadResume({ colorScheme = "default" }) {
    // Define different color schemes
    const gradients = {
        default: "bg-gradient-to-r from-indigo-500/70 to-pink-500/70",
        alternate: "bg-purple-600/70",
        // Add more schemes as needed
    };

    // Use the selected gradient or fall back to default
    const gradientClasses = gradients[colorScheme] || gradients.default;

    return (
        <a
            href={resumePDF}
            download="JennyDeyginCV.pdf"
            className={`inline-flex items-center justify-center w-[95%] px-2 py-6 ${gradientClasses} shadow-lg text-xl text-white font-medium rounded-lg hover:opacity-90 transition-all`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mr-2"
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
            Download Resume
        </a>
    );
}

export default DownloadResume;
