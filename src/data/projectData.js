import portfolioMark from "../assets/logo.webp";
import lightsOutImage from "../assets/lightsOut.png";
import yelpcampImage from "../assets/yelpCamp.png";
import yahtzeeImage from "../assets/yahtzee.png";
import dadJokesImage from "../assets/dadJokes.png";
import fitfinderIkeaImage from "../assets/fitFinderIkea.png";
import jennysFlowersImage from "../assets/jennysFlowers.png";

const projectsData = [
    {
        id: 1,
        title: "Personal Portfolio",
        description:
            "Responsive portfolio built with React, Tailwind CSS, and a custom D3 skills canvas to showcase projects and experience.",
        image: portfolioMark,
        link: "https://github.com/junikab/portfolio",
        linkLabel: "View source",
        category: "Portfolio",
        year: "2025",
        tech: ["React", "Tailwind CSS", "D3.js", "GitHub Pages"],
    },
    {
        id: 2,
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
        id: 3,
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
        id: 4,
        title: "Lights Out",
        description: "Click lights to solve the colorful grid puzzle.",
        image: lightsOutImage,
        link: "https://junikab.github.io/Lights-Out/",
        linkLabel: "Open site",
        category: "Browser game",
        tech: ["JavaScript", "React", "CSS"],
    },
    {
        id: 5,
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
        id: 6,
        title: "Yahtzee game",
        description: "A Yahtzee game built with React.",
        image: yahtzeeImage,
        link: "https://junikab.github.io/Yahtzee-game/",
        linkLabel: "Open site",
        category: "Browser game",
        tech: ["JavaScript", "React", "CSS"],
    },
    {
        id: 7,
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
