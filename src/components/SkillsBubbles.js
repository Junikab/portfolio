import React, { useRef, useEffect, useState } from "react";
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
};

function SkillsBubbles() {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 400, height: 350 });
    const simulationRef = useRef(null);

    // Handle container resizing
    useEffect(() => {
        if (!containerRef.current) return;

        const updateSize = () => {
            setDimensions({
                width: containerRef.current.offsetWidth,
                height: 350,
            });
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    // Setup canvas and D3 simulation
    useEffect(() => {
        if (!canvasRef.current || !dimensions.width) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        const pixelRatio = window.devicePixelRatio || 1;

        // Setup canvas for high DPI displays
        canvas.width = dimensions.width * pixelRatio;
        canvas.height = dimensions.height * pixelRatio;
        canvas.style.width = `${dimensions.width}px`;
        canvas.style.height = `${dimensions.height}px`;
        context.scale(pixelRatio, pixelRatio);

        const centerX = dimensions.width / 2;
        const centerY = dimensions.height / 2;
        const sizeFactor = 6.0;

        // Create nodes with initial positions
        const nodes = SKILLS.map((skill) => ({
            id: skill.id,
            group: skill.group,
            value: skill.value,
            radius: Math.sqrt(skill.value) * sizeFactor,
            x: centerX + (Math.random() - 0.5) * dimensions.width * 0.6,
            y: centerY + (Math.random() - 0.5) * dimensions.height * 0.6,
            vx: 0,
            vy: 0,
        }));

        // Utility functions for colors
        const modifyColor = (color, percent, lighten = true) => {
            if (!color.startsWith("rgb"))
                return lighten ? "rgb(200,200,200)" : "rgb(100,100,100)";
            const rgbValues = color.match(/\d+/g).map((v) => parseInt(v));
            return `rgb(${rgbValues
                .map((v, i) => {
                    return Math.round(
                        lighten
                            ? Math.min(255, v + (255 - v) * (percent / 100))
                            : Math.max(0, v * (1 - percent / 100))
                    );
                })
                .join(", ")})`;
        };

        // Draw function
        const renderBubbles = () => {
            context.clearRect(0, 0, dimensions.width, dimensions.height);

            // Apply boundaries
            const boundary = {
                width: dimensions.width * 0.85,
                height: dimensions.height * 0.85,
                minX: centerX - (dimensions.width * 0.85) / 2,
                maxX: centerX + (dimensions.width * 0.85) / 2,
                minY: centerY - (dimensions.height * 0.85) / 2,
                maxY: centerY + (dimensions.height * 0.85) / 2,
            };

            nodes.forEach((node) => {
                // Keep within bounds
                node.x = Math.max(
                    boundary.minX + node.radius,
                    Math.min(boundary.maxX - node.radius, node.x)
                );
                node.y = Math.max(
                    boundary.minY + node.radius,
                    Math.min(boundary.maxY - node.radius, node.y)
                );

                // Draw bubble
                const baseColor = SKILL_COLORS[node.group] || "#c8d6e5";
                const gradient = context.createRadialGradient(
                    node.x - node.radius * 0.3,
                    node.y - node.radius * 0.3,
                    node.radius * 0.2,
                    node.x,
                    node.y,
                    node.radius
                );

                gradient.addColorStop(0, modifyColor(baseColor, 30, true));
                gradient.addColorStop(0.7, baseColor);
                gradient.addColorStop(1, modifyColor(baseColor, 20, false));

                context.beginPath();
                context.arc(node.x, node.y, node.radius, 0, 2 * Math.PI);
                context.fillStyle = gradient;

                // Add shadow
                context.shadowColor = "rgba(0, 0, 0, 0.2)";
                context.shadowBlur = 5;
                context.shadowOffsetX = 2;
                context.shadowOffsetY = 2;
                context.fill();

                // Add text
                const fontSize = Math.min(Math.max(12, node.radius * 0.5), 14);
                context.font = `${fontSize}px sans-serif`;
                context.textAlign = "center";
                context.textBaseline = "middle";
                context.fillStyle = "#1e293b";
                context.shadowColor = "transparent";
                context.fillText(node.id, node.x, node.y);
            });
        };

        // Create simulation
        const simulation = d3
            .forceSimulation(nodes)
            .force("center", d3.forceCenter(centerX, centerY).strength(0.2))
            .force("charge", d3.forceManyBody().strength(-30))
            .force(
                "collide",
                d3
                    .forceCollide()
                    .radius((d) => d.radius + 0.5)
                    .strength(0.9)
                    .iterations(5)
            )
            .force("x", d3.forceX(centerX).strength(0.1))
            .force("y", d3.forceY(centerY).strength(0.1))
            .velocityDecay(0.6)
            .alphaDecay(0.02)
            .on("tick", renderBubbles);

        // Run simulation for initial positioning
        for (let i = 0; i < 300; ++i) simulation.tick();
        simulation.stop();
        renderBubbles();
        simulationRef.current = simulation;

        // Interaction handling
        let draggedNode = null;

        const findNodeUnderMouse = (mouseX, mouseY) => {
            for (let i = nodes.length - 1; i >= 0; i--) {
                const node = nodes[i];
                const distance = Math.hypot(mouseX - node.x, mouseY - node.y);
                if (distance <= node.radius) return node;
            }
            return null;
        };

        const mouseHandlers = {
            down: (e) => {
                const rect = canvas.getBoundingClientRect();
                const mouseX = e.clientX - rect.left;
                const mouseY = e.clientY - rect.top;

                draggedNode = findNodeUnderMouse(mouseX, mouseY);
                if (draggedNode) {
                    canvas.style.cursor = "grabbing";
                    simulation.alphaTarget(0.1).restart();
                }
            },

            move: (e) => {
                const rect = canvas.getBoundingClientRect();
                const mouseX = e.clientX - rect.left;
                const mouseY = e.clientY - rect.top;

                if (!draggedNode) {
                    canvas.style.cursor = findNodeUnderMouse(mouseX, mouseY)
                        ? "grab"
                        : "default";
                    return;
                }

                draggedNode.x = draggedNode.fx = mouseX;
                draggedNode.y = draggedNode.fy = mouseY;
                renderBubbles();
            },

            up: () => {
                if (draggedNode) {
                    draggedNode.fx = draggedNode.fy = null;
                    draggedNode = null;
                    canvas.style.cursor = "default";
                    simulation.alphaTarget(0).alphaDecay(0.1);
                    setTimeout(() => simulation.stop(), 500);
                }
            },
        };

        // Add event listeners
        canvas.addEventListener("mousedown", mouseHandlers.down);
        canvas.addEventListener("mousemove", mouseHandlers.move);
        canvas.addEventListener("mouseup", mouseHandlers.up);
        canvas.addEventListener("mouseleave", mouseHandlers.up);

        return () => {
            canvas.removeEventListener("mousedown", mouseHandlers.down);
            canvas.removeEventListener("mousemove", mouseHandlers.move);
            canvas.removeEventListener("mouseup", mouseHandlers.up);
            canvas.removeEventListener("mouseleave", mouseHandlers.up);
            if (simulationRef.current) simulationRef.current.stop();
        };
    }, [dimensions.width, dimensions.height]);

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
