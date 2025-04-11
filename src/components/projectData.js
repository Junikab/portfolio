import lightsOutImage from "../assets/lightsOut.png";
import yelpcampImage from "../assets/yelpCamp.png";
import yahtzeeImage from "../assets/yahtzee.png";
import dadJokesImage from "../assets/dadJokes.png";
import fitfinderIkeaImage from "../assets/fitFinderIkea.png";
import jennysFlowersImage from "../assets/jennysFlowers.png";

const projectsData = [
    {
        id: 1,
        title: "Lights-Out",
        description: "Description 1",
        image: lightsOutImage,
        link: "https://junikab.github.io/Lights-Out/",
        tech: ["JavaScript", "React", "CSS"],
    },
    {
        id: 2,
        title: "YelpCamp",
        description: "A platform for exploring and reviewing campgrounds.",
        image: yelpcampImage,
        link: "https://yelpcamp-rm96.onrender.com/",
        tech: ["JavaScript", "EJS", "CSS", "MongoDB", "Node.js", "Express"],
    },
    {
        id: 3,
        title: "Yahtzee-game",
        description: "A Yahtzee game built with React.",
        image: yahtzeeImage,
        link: "https://junikab.github.io/Yahtzee-game/",
        tech: ["JavaScript", "React", "CSS"],
    },
    {
        id: 4,
        title: "Dad-Jokes",
        description:
            "A source for the cheesiest and most delightful dad jokes.",
        image: dadJokesImage,
        link: "https://junikab.github.io/Dad-Jokes/",
        tech: ["JavaScript", "React", "CSS"],
    },
    {
        id: 5,
        title: "fitfinderIkea",
        description:
            "Chrome extension that allows you to filter furniture based on specific dimensions.",
        image: fitfinderIkeaImage,
        link: "https://github.com/Junikab/fitfinderIkea",
        tech: ["JavaScript", "TypeScript", "React", "CSS"],
    },
    {
        id: 6,
        title: "Jenny's Flowers",
        description: "Description 6",
        image: jennysFlowersImage,
        link: "https://junikab.github.io/jennys-flowers/",
        tech: ["JavaScript", "Vue", "Bootstrap"],
    },
];

export default projectsData;
