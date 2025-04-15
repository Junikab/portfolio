import React, { useRef, useEffect, useState, useMemo } from "react";
import * as d3 from "d3";

// Skills data and colors outside component to avoid recreation
const SKILLS = [
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
    { id: "Responsive Design", group: "methodology", value: 40 },
    { id: "Chrome Extensions", group: "development", value: 32 },
    { id: "GitHub Pages", group: "deployment", value: 30 },
    { id: "QA Automation", group: "testing", value: 38 },
    { id: "GIS", group: "domain", value: 30 },
    { id: "Windsurf IDE", group: "ai_tools", value: 28 },
];

const SKILL_COLORS = {
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
const COLOR_VARIATIONS = Object.entries(SKILL_COLORS).reduce(
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

function SkillsBubbles() {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 400, height: 700 });
    const simulationRef = useRef(null);
    const draggedNodeRef = useRef(null);

    // Handle container resizing - debounced for performance
    useEffect(() => {
        if (!containerRef.current) return;

        const updateSize = () => {
            setDimensions({
                width: containerRef.current.offsetWidth,
                height: 600,
            });
        };

        updateSize();

        // Debounced resize handler
        let timeoutId;
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(updateSize, 100);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    // Memoize node creation to avoid recalculation on every render
    const createNodes = useMemo(
        () => (width, height, sizeFactor) => {
            const centerX = width / 2;
            const centerY = height / 2;

            return SKILLS.map((skill) => ({
                id: skill.id,
                group: skill.group,
                value: skill.value,
                radius: Math.sqrt(skill.value) * sizeFactor,
                x: centerX + (Math.random() - 0.5) * width * 0.6,
                y: centerY + (Math.random() - 0.5) * height * 0.6,
                vx: 0,
                vy: 0,
            }));
        },
        []
    );

    // Setup canvas and D3 simulation
    useEffect(() => {
        if (!canvasRef.current || !dimensions.width) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        const pixelRatio = window.devicePixelRatio || 1;
        const centerX = dimensions.width / 2;
        const centerY = dimensions.height / 2;
        const sizeFactor = 7.0;

        // Setup canvas for high DPI displays
        canvas.width = dimensions.width * pixelRatio;
        canvas.height = dimensions.height * pixelRatio;
        canvas.style.width = `${dimensions.width}px`;
        canvas.style.height = `${dimensions.height}px`;
        context.scale(pixelRatio, pixelRatio);

        // Create nodes with initial positions
        const nodes = createNodes(
            dimensions.width,
            dimensions.height,
            sizeFactor
        );

        // Pre-calculate boundary for performance
        const boundary = {
            width: dimensions.width * 0.85,
            height: dimensions.height * 0.85,
            minX: centerX - (dimensions.width * 0.85) / 2,
            maxX: centerX + (dimensions.width * 0.85) / 2,
            minY: centerY - (dimensions.height * 0.85) / 2,
            maxY: centerY + (dimensions.height * 0.85) / 2,
        };

        // Optimized draw function
        const renderBubbles = () => {
            context.clearRect(0, 0, dimensions.width, dimensions.height);

            // Draw all nodes
            nodes.forEach((node) => {
                // Keep within bounds (optimized)
                node.x = Math.max(
                    boundary.minX + node.radius,
                    Math.min(boundary.maxX - node.radius, node.x)
                );
                node.y = Math.max(
                    boundary.minY + node.radius,
                    Math.min(boundary.maxY - node.radius, node.y)
                );

                // Get pre-computed colors
                const colors =
                    COLOR_VARIATIONS[node.group] || COLOR_VARIATIONS.tool;

                // Create gradient (optimized)
                const gradient = context.createRadialGradient(
                    node.x - node.radius * 0.3,
                    node.y - node.radius * 0.3,
                    node.radius * 0.2,
                    node.x,
                    node.y,
                    node.radius
                );

                gradient.addColorStop(0, colors.lighter);
                gradient.addColorStop(0.7, colors.base);
                gradient.addColorStop(1, colors.darker);

                // Draw bubble with shadow
                context.beginPath();
                context.arc(node.x, node.y, node.radius, 0, 2 * Math.PI);
                context.fillStyle = gradient;
                context.shadowColor = "rgba(0, 0, 0, 0.2)";
                context.shadowBlur = 5;
                context.shadowOffsetX = 2;
                context.shadowOffsetY = 2;
                context.fill();

                // Add text (optimized font calculation)
                const fontSize = Math.min(Math.max(12, node.radius * 0.5), 14);
                context.font = `${fontSize}px sans-serif`;
                context.textAlign = "center";
                context.textBaseline = "middle";
                context.fillStyle = "#1e293b";
                context.shadowColor = "transparent";

                // Handle text wrapping for longer skill names
                const wrapText = (text, maxWidth) => {
                    // For short text, no need to wrap
                    if (context.measureText(text).width <= maxWidth) {
                        return [text];
                    }

                    // Try to break at sensible points
                    if (text.includes(" ")) {
                        // Break at space
                        const words = text.split(" ");
                        if (words.length === 2) {
                            return words;
                        } else if (words.length > 2) {
                            // For 3+ words, try to balance the lines
                            const midPoint = Math.floor(words.length / 2);
                            return [
                                words.slice(0, midPoint).join(" "),
                                words.slice(midPoint).join(" "),
                            ];
                        }
                    } else if (text.includes("-")) {
                        // Break at hyphen
                        return text.split("-");
                    } else if (text.includes(".")) {
                        // Break at dot (for things like D3.js)
                        return text.split(".");
                    } else if (text.length > 10) {
                        // Force break for long single words
                        const midPoint = Math.ceil(text.length / 2);
                        return [
                            text.substring(0, midPoint),
                            text.substring(midPoint),
                        ];
                    }

                    return [text]; // Default to no wrapping
                };

                const maxWidth = node.radius * 1.6;
                const lines = wrapText(node.id, maxWidth);

                // Draw each line of text
                const lineHeight = fontSize * 1.2;
                const totalHeight = (lines.length - 1) * lineHeight;

                lines.forEach((line, i) => {
                    const yOffset = (i - (lines.length - 1) / 2) * lineHeight;
                    context.fillText(line, node.x, node.y + yOffset);
                });
            });
        };

        // Create simulation with optimized configuration
        const simulation = d3
            .forceSimulation(nodes)
            .force("center", d3.forceCenter(centerX, centerY).strength(0.15))
            .force("charge", d3.forceManyBody().strength(-50))
            .force(
                "collide",
                d3
                    .forceCollide()
                    .radius((d) => d.radius + 1)
                    .strength(0.95)
                    .iterations(5)
            )
            .force("x", d3.forceX(centerX).strength(0.08))
            .force("y", d3.forceY(centerY).strength(0.08))
            .velocityDecay(0.5)
            .alphaDecay(0.015)
            .on("tick", renderBubbles);

        // Run simulation for initial positioning
        for (let i = 0; i < 300; ++i) simulation.tick();
        simulation.stop();
        renderBubbles();
        simulationRef.current = simulation;

        // Optimized mouse position calculation
        const getMousePosition = (e) => {
            const rect = canvas.getBoundingClientRect();
            return {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
        };

        // Optimized node finding
        const findNodeUnderMouse = (mouseX, mouseY) => {
            for (let i = nodes.length - 1; i >= 0; i--) {
                const node = nodes[i];
                const distance = Math.hypot(mouseX - node.x, mouseY - node.y);
                if (distance <= node.radius) return node;
            }
            return null;
        };

        // Consolidated event handlers
        const handleMouseDown = (e) => {
            const { x, y } = getMousePosition(e);
            draggedNodeRef.current = findNodeUnderMouse(x, y);

            if (draggedNodeRef.current) {
                canvas.style.cursor = "grabbing";
                simulation.alphaTarget(0.1).restart();
            }
        };

        const handleMouseMove = (e) => {
            const { x, y } = getMousePosition(e);

            if (!draggedNodeRef.current) {
                canvas.style.cursor = findNodeUnderMouse(x, y)
                    ? "grab"
                    : "default";
                return;
            }

            draggedNodeRef.current.x = draggedNodeRef.current.fx = x;
            draggedNodeRef.current.y = draggedNodeRef.current.fy = y;
            renderBubbles();
        };

        const handleMouseUp = () => {
            if (draggedNodeRef.current) {
                draggedNodeRef.current.fx = draggedNodeRef.current.fy = null;
                draggedNodeRef.current = null;
                canvas.style.cursor = "default";
                simulation.alphaTarget(0).alphaDecay(0.1);
                setTimeout(() => simulation.stop(), 500);
            }
        };

        // Add event listeners
        canvas.addEventListener("mousedown", handleMouseDown);
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseup", handleMouseUp);
        canvas.addEventListener("mouseleave", handleMouseUp);

        // Cleanup
        return () => {
            canvas.removeEventListener("mousedown", handleMouseDown);
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseup", handleMouseUp);
            canvas.removeEventListener("mouseleave", handleMouseUp);
            if (simulationRef.current) simulationRef.current.stop();
        };
    }, [dimensions.width, dimensions.height, createNodes]);

    return (
        <div
            ref={containerRef}
            className="w-full h-[600px] bg-white rounded-lg overflow-hidden"
        >
            <canvas ref={canvasRef} className="w-full h-[620px]" />
        </div>
    );
}

export default SkillsBubbles;
