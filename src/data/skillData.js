// Skills data and groups for the skills bubbles component

// Skills list with their group and value (controls size)
export const SKILLS = [
    { id: "JavaScript", group: "language", value: 80 },
    { id: "React", group: "framework", value: 80 },
    { id: "HTML5", group: "language", value: 35 },
    { id: "CSS3", group: "language", value: 40 },
    { id: "TypeScript", group: "language", value: 50 },
    { id: "Node.js", group: "backend", value: 50 },
    { id: "Express", group: "backend", value: 30 },
    { id: "MongoDB", group: "database", value: 30 },
    { id: "PostgreSQL", group: "database", value: 30 },
    { id: "Tailwind", group: "styling", value: 40 },
    { id: "Git", group: "tool", value: 60 },
    { id: "Cypress.io", group: "testing", value: 30 },
    { id: "Material UI", group: "styling", value: 40 },
    { id: "REST", group: "api", value: 35 },
    { id: "Agile", group: "methodology", value: 30 },
    { id: "Bootstrap", group: "styling", value: 40 },
    { id: "Vue.js", group: "framework", value: 50 },
    { id: "EJS", group: "template", value: 40 },
    { id: "D3.js", group: "library", value: 35 },
    { id: "Responsive Design", group: "methodology", value: 60 },
    { id: "Chrome Extensions", group: "development", value: 30 },
    { id: "GitHub Pages", group: "deployment", value: 30 },
    { id: "QA Automation", group: "testing", value: 40 },
    { id: "GIS", group: "domain", value: 30 },
    { id: "Windsurf IDE", group: "ai_tools", value: 30 },
    { id: "Codex", group: "ai_tools", value: 70 },

];

// Color scheme for different skill groups
export const SKILL_COLORS = {
    language: "rgb(76, 119, 149)",
    framework: "rgb(69, 150, 132)",
    backend: "rgb(208, 146, 69)",
    database: "rgb(182, 96, 92)",
    styling: "rgb(111, 123, 182)",
    tool: "rgb(88, 110, 143)",
    testing: "rgb(196, 122, 71)",
    api: "rgb(104, 151, 104)",
    state: "rgb(58, 138, 128)",
    graphics: "rgb(72, 148, 164)",
    methodology: "rgb(104, 132, 86)",
    design: "rgb(188, 103, 121)",
    library: "rgb(171, 139, 82)",
    template: "rgb(170, 112, 86)",
    development: "rgb(83, 136, 181)",
    deployment: "rgb(74, 121, 117)",
    domain: "rgb(123, 110, 169)",
    ai_tools: "rgb(145, 114, 161)",
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
