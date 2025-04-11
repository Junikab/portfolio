import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

function SkillsBubbles() {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 400, height: 350 }); // Increased height
    const simulationRef = useRef(null);

    // Skills data
    const skills = [
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

    const skillColors = {
        language: "rgb(80,200,120)", // #4cd137
        framework: "rgb(0, 168, 255)", // #00a8ff
        backend: "rgb(251, 197, 49)", // #fbc531
        database: "rgb(255,166,201)", // #e84118
        styling: "rgb(156, 136, 255)", // #9c88ff
        tool: "rgb(72, 126, 176)", // #487eb0
        testing: "rgb(225, 177, 44)", // #e1b12c
        api: "rgb(255, 159, 67)", // #ff9f43
        state: "rgb(32, 191, 107)", // #20bf6b
        graphics: "rgb(140, 122, 230)", // #8c7ae6
        methodology: "rgb(0, 151, 230)", // #0097e6
        design: "rgb(232, 67, 147)", // #e84393
        library: "rgb(245, 152, 62)", // #f5983e
    };

    useEffect(() => {
        if (!containerRef.current) return;

        const updateSize = () => {
            const actualWidth = containerRef.current.offsetWidth;
            // Let height be fixed at 350px instead of computing from container

            setDimensions({
                width: actualWidth,
                height: 350, // Fixed taller height
            });
        };

        updateSize();
        window.addEventListener("resize", updateSize);

        return () => window.removeEventListener("resize", updateSize);
    }, []);

    useEffect(() => {
        if (!canvasRef.current || !dimensions.width || !dimensions.height)
            return;

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        // Set canvas resolution for high DPI displays
        const pixelRatio = window.devicePixelRatio || 1;
        canvas.width = dimensions.width * pixelRatio;
        canvas.height = dimensions.height * pixelRatio;
        canvas.style.width = `${dimensions.width}px`;
        canvas.style.height = `${dimensions.height}px`;
        context.scale(pixelRatio, pixelRatio);

        // Initialize nodes with positions in a compact cluster
        const centerX = dimensions.width / 2;
        const centerY = dimensions.height / 2;

        // Size factor to make bubbles larger - increased to 3.0
        const sizeFactor = 6.0;

        // Create nodes with initial positions
        const nodes = skills.map((skill) => {
            // Random position in rectangular area - smaller area for tighter cluster
            const rectWidth = dimensions.width * 0.6; // Reduced from 0.7
            const rectHeight = dimensions.height * 0.6; // Reduced from 0.7
            const x = centerX + (Math.random() - 0.5) * rectWidth;
            const y = centerY + (Math.random() - 0.5) * rectHeight;

            return {
                id: skill.id,
                group: skill.group,
                value: skill.value,
                radius: Math.sqrt(skill.value) * sizeFactor,
                x,
                y,
                vx: 0,
                vy: 0,
            };
        });

        // Create simulation with stronger forces for tighter clustering
        const simulation = d3
            .forceSimulation(nodes)
            .force("center", d3.forceCenter(centerX, centerY).strength(0.2)) // Stronger centering
            .force("charge", d3.forceManyBody().strength(-30)) // Reduced repulsion
            .force(
                "collide",
                d3
                    .forceCollide()
                    .radius((d) => d.radius + 0.5)
                    .strength(0.9)
                    .iterations(5)
            ) // Minimal spacing
            // Stronger x and y forces for tighter clustering
            .force("x", d3.forceX(centerX).strength(0.1))
            .force("y", d3.forceY(centerY).strength(0.1))
            .velocityDecay(0.6)
            .alphaDecay(0.02)
            .on("tick", tick);

        simulationRef.current = simulation;

        // Run the simulation longer for better initial positions
        for (let i = 0; i < 300; ++i) simulation.tick();

        // Stop the simulation once the initial layout is done
        simulation.stop();

        // Initial render
        tick();

        // Drag handling
        let draggedNode = null;

        canvas.addEventListener("mousedown", handleMouseDown);
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseup", handleMouseUp);
        canvas.addEventListener("mouseleave", handleMouseUp);

        function handleMouseDown(event) {
            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            // Find the node being clicked
            draggedNode = findNodeUnderMouse(mouseX, mouseY);

            if (draggedNode) {
                canvas.style.cursor = "grabbing";
                // Start simulation during drag
                simulation.alphaTarget(0.1).restart();
            }
        }

        function handleMouseMove(event) {
            if (!draggedNode) {
                // Hover effect
                const rect = canvas.getBoundingClientRect();
                const mouseX = event.clientX - rect.left;
                const mouseY = event.clientY - rect.top;

                const hoverNode = findNodeUnderMouse(mouseX, mouseY);
                canvas.style.cursor = hoverNode ? "grab" : "default";
                return;
            }

            const rect = canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            // Update node position
            draggedNode.x = mouseX;
            draggedNode.y = mouseY;
            draggedNode.fx = mouseX;
            draggedNode.fy = mouseY;

            // Redraw
            tick();
        }

        function handleMouseUp() {
            if (draggedNode) {
                draggedNode.fx = null;
                draggedNode.fy = null;
                draggedNode = null;
                canvas.style.cursor = "default";

                // Slow down and stop simulation after drag
                simulation.alphaTarget(0).alphaDecay(0.1);
                setTimeout(() => simulation.stop(), 500);
            }
        }

        function findNodeUnderMouse(mouseX, mouseY) {
            // Search in reverse order to find top nodes first
            for (let i = nodes.length - 1; i >= 0; i--) {
                const node = nodes[i];
                const dx = mouseX - node.x;
                const dy = mouseY - node.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance <= node.radius) {
                    return node;
                }
            }
            return null;
        }

        function tick() {
            context.clearRect(0, 0, dimensions.width, dimensions.height);

            // Define rectangle boundaries
            const rectWidth = dimensions.width * 0.85; // Increased from 0.8
            const rectHeight = dimensions.height * 0.85; // Increased from 0.8
            const minX = centerX - rectWidth / 2;
            const maxX = centerX + rectWidth / 2;
            const minY = centerY - rectHeight / 2;
            const maxY = centerY + rectHeight / 2;

            // Apply rectangular boundary
            nodes.forEach((node) => {
                node.x = Math.max(
                    minX + node.radius,
                    Math.min(maxX - node.radius, node.x)
                );
                node.y = Math.max(
                    minY + node.radius,
                    Math.min(maxY - node.radius, node.y)
                );
            });

            // Draw nodes with gradients
            nodes.forEach((node) => {
                // Create radial gradient
                const gradient = context.createRadialGradient(
                    node.x - node.radius * 0.3, // x0 - slightly offset for 3D effect
                    node.y - node.radius * 0.3, // y0 - slightly offset for 3D effect
                    node.radius * 0.2, // r0 - inner circle
                    node.x, // x1
                    node.y, // y1
                    node.radius // r1 - outer circle
                );

                // Get base color
                const baseColor = skillColors[node.group] || "#c8d6e5";

                // Create lighter and darker versions for gradient
                const lighterColor = lightenColor(baseColor, 30);
                const darkerColor = darkenColor(baseColor, 20);

                // Add gradient colors
                gradient.addColorStop(0, lighterColor);
                gradient.addColorStop(0.7, baseColor);
                gradient.addColorStop(1, darkerColor);

                // Draw circle with gradient
                context.beginPath();
                context.arc(node.x, node.y, node.radius, 0, 2 * Math.PI);
                context.fillStyle = gradient;
                context.fill();

                // Add a subtle shadow for depth
                context.shadowColor = "rgba(0, 0, 0, 0.2)";
                context.shadowBlur = 5;
                context.shadowOffsetX = 2;
                context.shadowOffsetY = 2;

                // Draw text
                const fontSize = Math.min(Math.max(12, node.radius * 0.5), 14);
                context.font = `${fontSize}px sans-serif`;
                context.textAlign = "center";
                context.textBaseline = "middle";
                context.fillStyle = "#1e293b";

                // Reset shadow for text
                context.shadowColor = "transparent";
                context.fillText(node.id, node.x, node.y);
            });
        }

        // Helper functions
        function lightenColor(color, percent) {
            // Convert RGB string to components
            let r, g, b;
            if (color.startsWith("rgb")) {
                const rgbValues = color.match(/\d+/g);
                r = parseInt(rgbValues[0]);
                g = parseInt(rgbValues[1]);
                b = parseInt(rgbValues[2]);
            } else {
                // Default fallback
                r = 200;
                g = 200;
                b = 200;
            }

            // Lighten by percentage
            r = Math.min(255, r + (255 - r) * (percent / 100));
            g = Math.min(255, g + (255 - g) * (percent / 100));
            b = Math.min(255, b + (255 - b) * (percent / 100));

            return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
        }

        function darkenColor(color, percent) {
            // Convert RGB string to components
            let r, g, b;
            if (color.startsWith("rgb")) {
                const rgbValues = color.match(/\d+/g);
                r = parseInt(rgbValues[0]);
                g = parseInt(rgbValues[1]);
                b = parseInt(rgbValues[2]);
            } else {
                // Default fallback
                r = 200;
                g = 200;
                b = 200;
            }

            // Darken by percentage
            r = Math.max(0, r * (1 - percent / 100));
            g = Math.max(0, g * (1 - percent / 100));
            b = Math.max(0, b * (1 - percent / 100));

            return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
        }

        return () => {
            canvas.removeEventListener("mousedown", handleMouseDown);
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseup", handleMouseUp);
            canvas.removeEventListener("mouseleave", handleMouseUp);

            if (simulationRef.current) {
                simulationRef.current.stop();
            }
        };
    }, [dimensions.width, dimensions.height]);

    return (
        <div
            ref={containerRef}
            className="w-full h-[600px] bg-white rounded-lg overflow-hidden"
        >
            {" "}
            {/* Increased container height */}
            <canvas
                ref={canvasRef}
                className="w-full h-[620px]" // Increased canvas height
            />
        </div>
    );
}

export default SkillsBubbles;
