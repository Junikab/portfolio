// Skills data and groups for the skills bubbles component

// Skills list with their group and value (controls size)
export const SKILLS = [
    { id: "JavaScript", group: "language", value: 50 },
    { id: "React", group: "framework", value: 45 },
    { id: "HTML5", group: "language", value: 35 },
    { id: "CSS3", group: "language", value: 40 },
    { id: "TypeScript", group: "language", value: 40 },
    { id: "Node.js", group: "backend", value: 30 },
    { id: "Express", group: "backend", value: 30 },
    { id: "MongoDB", group: "database", value: 40 },
    { id: "Tailwind", group: "styling", value: 35 },
    { id: "Git", group: "tool", value: 30 },
    { id: "Cypress.io", group: "testing", value: 40 },
    { id: "Material UI", group: "styling", value: 42 },
    { id: "REST", group: "api", value: 35 },
    { id: "Agile", group: "methodology", value: 32 },
    { id: "Bootstrap", group: "styling", value: 35 },
    { id: "Vue.js", group: "framework", value: 38 },
    { id: "EJS", group: "template", value: 30 },
    { id: "D3.js", group: "library", value: 35 },
    { id: "Responsive Design", group: "methodology", value: 42 },
    { id: "Chrome Extensions", group: "development", value: 35 },
    { id: "GitHub Pages", group: "deployment", value: 30 },
    { id: "QA Automation", group: "testing", value: 40 },
    { id: "GIS", group: "domain", value: 30 },
    { id: "Windsurf IDE", group: "ai_tools", value: 30 },
];

// Color scheme for different skill groups
export const SKILL_COLORS = {
    language: "rgb(80,200,120)",
    framework: "rgb(0, 168, 255)",
    backend: "rgb(251, 197, 49)",
    database: "rgb(255,166,201)",
    styling: "rgb(156, 136, 255)",
    tool: "rgb(72, 126, 176)",
    testing: "rgb(225, 177, 44)",
    api: "rgb(255, 159, 67)",
    state: "rgb(32, 191, 107)",
    graphics: "rgb(140, 122, 230)",
    methodology: "rgb(0, 151, 230)",
    design: "rgb(232, 67, 147)",
    library: "rgb(245, 152, 62)",
    template: "rgb(255, 99, 71)",
    development: "rgb(255, 215, 0)",
    deployment: "rgb(0, 128, 0)",
    domain: "rgb(128, 0, 128)",
    ai_tools: "rgb(255, 166, 201)",
};

// Pre-compute color variations for performance
export const COLOR_VARIATIONS = Object.entries(SKILL_COLORS).reduce(
    (acc, [group, color]) => {
        if (color.startsWith("rgb")) {
            const rgbValues = color.match(/\d+/g).map((v) => parseInt(v));
            acc[group] = {
                base: color,
                lighter: `rgb(${rgbValues
                    .map((v) => Math.min(255, v + (255 - v) * 0.3))
                    .join(", ")})`,
                darker: `rgb(${rgbValues
                    .map((v) => Math.max(0, v * 0.8))
                    .join(", ")})`,
            };
        } else {
            acc[group] = {
                base: color,
                lighter: "rgb(200,200,200)",
                darker: "rgb(100,100,100)",
            };
        }
        return acc;
    },
    {}
);
