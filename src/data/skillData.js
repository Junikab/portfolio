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
    { id: "Cypress.io", group: "testing", value: 30 },
    { id: "Material UI", group: "styling", value: 42 },
    { id: "REST", group: "api", value: 35 },
    { id: "Agile", group: "methodology", value: 32 },
    { id: "Bootstrap", group: "styling", value: 35 },
    { id: "Vue.js", group: "framework", value: 40 },
    { id: "EJS", group: "template", value: 30 },
    { id: "D3.js", group: "library", value: 35 },
    { id: "Responsive Design", group: "methodology", value: 42 },
    { id: "Chrome Extensions", group: "development", value: 35 },
    { id: "GitHub Pages", group: "deployment", value: 30 },
    { id: "QA Automation", group: "testing", value: 40 },
    { id: "GIS", group: "domain", value: 30 },
    { id: "Windsurf IDE", group: "ai_tools", value: 30 },
    { id: "Codex", group: "ai_tools", value: 40 },

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
