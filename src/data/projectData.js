import finallyScreanshot from "../assets/finallyScreanshot.png";
import lightsOutImage from "../assets/lightsOut.png";
import yelpcampImage from "../assets/yelpCamp.png";
import yahtzeeImage from "../assets/yahtzee.png";
import dadJokesImage from "../assets/dadJokes.png";
import fitfinderIkeaImage from "../assets/fitFinderIkea.png";
import jennysFlowersImage from "../assets/jennysFlowers.png";
import llmJobFinder from "../assets/llmJobFinder.png";

const projectsData = [
    {
        id: 1,
        title: "FinAlly",
        description:
            "AI-assisted trading workspace demo and chat-driven actions.",
        image: finallyScreanshot,
        link: "https://github.com/junikab/finally",
        linkLabel: "View source",
        category: "FinTech demo",
        year: "2026",
        tech: ["Python", "TS", "CSS", "Agentic Coding"],
    },
    {
        id: 2,
        title: "LLM Job Finder",
        description:
            "Job-matching app that uploads a CV, scrapes Jora listings, and ranks roles against the candidate profile with optional LLM scoring.",
        image: llmJobFinder,
        link: "https://junikab.github.io/llm-job-finder/",
        linkLabel: "Open site",
        category: "AI job search app",
        year: "2026",
        tech: [
            "TS",
            "React",
            "Vite",
            "Fastify",
            "Playwright",
        ],
    },
    {
        id: 3,
        title: "Flower Designer",
        description:
            "Custom florist website built for a business client, with a mobile-first layout and room for future gallery growth.",
        image: jennysFlowersImage,
        link: "https://jennysflowers.com.au/",
        linkLabel: "Open site",
        category: "Client site",
        year: "2025",
        tech: ["JavaScript", "Vue", "Bootstrap"],
    },
    {
        id: 4,
        title: "Fitfinder Ikea",
        description:
            "Chrome extension that allows you to filter furniture based on specific dimensions.",
        image: fitfinderIkeaImage,
        link: "https://github.com/Junikab/fitfinderIkea",
        linkLabel: "View source",
        category: "Chrome extension",
        tech: ["JavaScript", "TypeScript", "React", "CSS"],
    },
    {
        id: 5,
        title: "Lights Out",
        description: "Click lights to solve the colorful grid puzzle.",
        image: lightsOutImage,
        link: "https://junikab.github.io/Lights-Out/",
        linkLabel: "Open site",
        category: "Browser game",
        tech: ["JavaScript", "React", "CSS"],
    },
    {
        id: 6,
        title: "Dad Jokes",
        description:
            "A source for the cheesiest and most delightful dad jokes.",
        image: dadJokesImage,
        link: "https://junikab.github.io/Dad-Jokes/",
        linkLabel: "Open site",
        category: "Mini app",
        tech: ["JavaScript", "React", "CSS"],
    },
    {
        id: 7,
        title: "Yahtzee Game",
        description: "A Yahtzee game built with React.",
        image: yahtzeeImage,
        link: "https://junikab.github.io/Yahtzee-game/",
        linkLabel: "Open site",
        category: "Browser game",
        tech: ["JavaScript", "React", "CSS"],
    },
    {
        id: 8,
        title: "YelpCamp",
        description:
            "Full-stack CRUD app for exploring and reviewing campgrounds, including auth, image upload, and map-based discovery.",
        image: yelpcampImage,
        link: "https://yelpcamp-rm96.onrender.com/",
        linkLabel: "Open site",
        category: "Full-stack app",
        year: "2023",
        tech: ["JavaScript", "EJS", "CSS", "MongoDB", "Node.js", "Express"],
    },
];

export default projectsData;
