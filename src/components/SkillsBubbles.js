import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import { SKILLS, COLOR_VARIATIONS } from "../data/skillData";

const DEFAULT_DIMENSIONS = { width: 400, height: 440 };

// =============================================
// UTILITY FUNCTIONS
// =============================================

function getCanvasHeight(width) {
    if (width < 480) return 280;
    if (width < 1024) return 320;
    return 440;
}

// Get pointer position (works for both mouse and touch)
function getEventPosition(e, canvas) {
    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;

    if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
    } else {
        clientX = e.clientX;
        clientY = e.clientY;
    }

    return {
        x: clientX - rect.left,
        y: clientY - rect.top,
    };
}

// Find a node under the pointer
function findNodeUnderPointer(x, y, nodes) {
    // Iterate backwards to prioritize nodes drawn on top
    for (let i = nodes.length - 1; i >= 0; i--) {
        const node = nodes[i];
        const distance = Math.hypot(x - node.x, y - node.y);
        if (distance <= node.radius) return node;
    }
    return null;
}

// Create nodes from skill data
function createNodesFromSkills(skills, width, height, sizeFactor) {
    const horizontalPadding = width * 0.08;
    const verticalPadding = height * 0.08;

    return skills.map((skill) => ({
        id: skill.id,
        group: skill.group,
        value: skill.value,
        radius: Math.sqrt(skill.value) * sizeFactor,
        // Seed nodes across most of the canvas so the layout uses the full area.
        x: horizontalPadding + Math.random() * (width - horizontalPadding * 2),
        y: verticalPadding + Math.random() * (height - verticalPadding * 2),
        vx: 0, // Initial velocity
        vy: 0,
    }));
}

// Calculate the boundary for nodes
function calculateBoundary(centerX, centerY, dimensions) {
    const margin = 0.08;
    const effectiveWidth = dimensions.width * (1 - margin);
    const effectiveHeight = dimensions.height * (1 - margin);
    return {
        minX: centerX - effectiveWidth / 2,
        maxX: centerX + effectiveWidth / 2,
        minY: centerY - effectiveHeight / 2,
        maxY: centerY + effectiveHeight / 2,
    };
}

// Setup canvas for appropriate resolution
function setupCanvas(canvas, context, dimensions, pixelRatio) {
    canvas.width = dimensions.width * pixelRatio;
    canvas.height = dimensions.height * pixelRatio;
    canvas.style.width = `${dimensions.width}px`;
    canvas.style.height = `${dimensions.height}px`;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
}

function parseRgbColor(color) {
    const values = color.match(/\d+/g);
    if (!values) return [100, 116, 139];
    return values.map(Number);
}

function withAlpha(color, alpha) {
    const [r, g, b] = parseRgbColor(color);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function getRelativeLuminance(color) {
    const [r, g, b] = parseRgbColor(color).map((value) => {
        const channel = value / 255;
        return channel <= 0.03928
            ? channel / 12.92
            : ((channel + 0.055) / 1.055) ** 2.4;
    });

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// =============================================
// RENDERING FUNCTIONS
// =============================================

// Create the main render function that draws all bubbles
function createRenderFunction(context, nodes, dimensions, boundary) {
    return () => {
        context.clearRect(0, 0, dimensions.width, dimensions.height);

        nodes.forEach((node) => {
            constrainNodeToBoundary(node, boundary); // Keep nodes within bounds
            drawBubble(context, node);
            drawNodeText(context, node);
        });
    };
}

// Constrains a node to stay within the calculated boundaries
function constrainNodeToBoundary(node, boundary) {
    node.x = Math.max(
        boundary.minX + node.radius,
        Math.min(boundary.maxX - node.radius, node.x)
    );
    node.y = Math.max(
        boundary.minY + node.radius,
        Math.min(boundary.maxY - node.radius, node.y)
    );
}

// Draw a single bubble with gradient and shadow
function drawBubble(context, node) {
    const colors = COLOR_VARIATIONS[node.group] || COLOR_VARIATIONS.tool; // Fallback color

    // Create a richer radial gradient so the bubbles feel less washed out.
    const gradient = context.createRadialGradient(
        node.x - node.radius * 0.3, // Inner circle offset slightly
        node.y - node.radius * 0.3,
        node.radius * 0.2, // Inner circle radius
        node.x, // Outer circle center
        node.y,
        node.radius // Outer circle radius
    );

    gradient.addColorStop(0, colors.lighter);
    gradient.addColorStop(0.55, colors.base);
    gradient.addColorStop(1, colors.darker);

    // Draw the bubble shape
    context.beginPath();
    context.arc(node.x, node.y, node.radius, 0, 2 * Math.PI);
    context.fillStyle = gradient;

    context.shadowColor = withAlpha(colors.darker, 0.24);
    context.shadowBlur = 10;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 4;

    context.fill();
}

// Draw text centered within a node, handling wrapping
function drawNodeText(context, node) {
    const colors = COLOR_VARIATIONS[node.group] || COLOR_VARIATIONS.tool;
    const usesDarkText = getRelativeLuminance(colors.base) > 0.28;

    // Calculate font size based on bubble radius (within limits)
    const fontSize = Math.min(Math.max(10, node.radius * 0.35), 18);
    context.font = `500 ${fontSize}px "Libre Franklin", sans-serif`;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = usesDarkText ? "#0f172a" : "#f8fafc";
    context.strokeStyle = usesDarkText
        ? "rgba(255, 255, 255, 0.28)"
        : "rgba(15, 23, 42, 0.38)";
    context.shadowColor = usesDarkText
        ? "rgba(255, 255, 255, 0.24)"
        : "rgba(15, 23, 42, 0.28)";
    context.shadowBlur = 6;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 1;

    // Determine the maximum width for text based on radius
    const maxWidth = node.radius * 1.7; // Allow text slightly wider than bubble diameter
    const lines = wrapText(context, node.id, maxWidth);

    // Draw each line of wrapped text
    const lineHeight = fontSize * 1.2;
    lines.forEach((line, i) => {
        // Calculate vertical offset to center multi-line text
        const yOffset = (i - (lines.length - 1) / 2) * lineHeight;
        context.strokeText(line, node.x, node.y + yOffset);
        context.fillText(line, node.x, node.y + yOffset);
    });

    context.shadowColor = "transparent";
}

// Utility to wrap text if it exceeds maxWidth
function wrapText(context, text, maxWidth) {
    // Simple case: Text fits, return as single line
    if (context.measureText(text).width <= maxWidth) {
        return [text];
    }

    // Attempt intelligent wrapping based on common separators
    const separators = [" ", "-", "."];
    for (const sep of separators) {
        if (text.includes(sep)) {
            const parts = text.split(sep);
            if (parts.length === 2) return parts; // Simple split for two parts
            // For more parts, try to balance lines (e.g., "Responsive Design")
            if (parts.length > 2 && sep === " ") {
                const midPoint = Math.ceil(parts.length / 2);
                return [
                    parts.slice(0, midPoint).join(sep),
                    parts.slice(midPoint).join(sep),
                ];
            }
        }
    }

    // Force break for long words without separators
    if (text.length > 10) {
        const midPoint = Math.ceil(text.length / 2);
        return [text.substring(0, midPoint), text.substring(midPoint)];
    }

    return [text]; // Fallback: return original text if no wrapping strategy applies
}

// =============================================
// SIMULATION FUNCTIONS
// =============================================

// Setup D3 force simulation with appropriate forces
function setupSimulation(nodes, centerX, centerY, tickHandler) {
    return d3
        .forceSimulation(nodes)
        .force("center", d3.forceCenter(centerX, centerY).strength(0.04))
        .force("charge", d3.forceManyBody().strength(-55))
        .force(
            "collide", // Prevent nodes from overlapping
            d3
                .forceCollide()
                .radius((d) => d.radius + 1.5) // Collision radius slightly larger than visual radius
                .strength(0.9) // Strong collision force
                .iterations(3) // More iterations for better collision resolution
        )
        .force("x", d3.forceX(centerX).strength(0.02))
        .force("y", d3.forceY(centerY).strength(0.02))
        .velocityDecay(0.4) // How quickly nodes slow down
        .alphaDecay(0.01) // How quickly simulation cools down
        .on("tick", tickHandler); // Function to call on each simulation step
}

// Run initial simulation steps to settle nodes quickly
function initializeSimulation(simulation) {
    // Run a fixed number of ticks without rendering to get a stable layout faster
    for (let i = 0; i < 250; ++i) simulation.tick();
    simulation.stop(); // Stop the simulation after initial settling
}

// =============================================
// INTERACTION HANDLING
// =============================================

// Setup event handlers for dragging bubbles
function setupInteractionHandlers(canvas, simulation, nodes, draggedNodeRef) {
    const handleDragStart = (e) => {
        const isTouchEvent = e.type === "touchstart";
        const { x, y } = getEventPosition(e, canvas);
        const node = findNodeUnderPointer(x, y, nodes);

        if (node) {
            if (isTouchEvent) e.preventDefault(); // Prevent page scroll on touch devices

            draggedNodeRef.current = node;
            if (!isTouchEvent) canvas.style.cursor = "grabbing";

            // "Wake up" simulation and fix node position during drag
            simulation.alphaTarget(0.1).restart();
            node.fx = node.x;
            node.fy = node.y;
        }
    };

    const handleDragMove = (e) => {
        const isTouchEvent = e.type === "touchmove";
        const { x, y } = getEventPosition(e, canvas);

        // Update cursor style on hover (mouse only)
        if (!draggedNodeRef.current && !isTouchEvent) {
            canvas.style.cursor = findNodeUnderPointer(x, y, nodes)
                ? "grab"
                : "default";
            return;
        }

        // If not dragging a node, exit
        if (!draggedNodeRef.current) return;

        if (isTouchEvent) e.preventDefault(); // Prevent scroll while dragging on touch

        // Update the fixed position of the dragged node
        draggedNodeRef.current.fx = x;
        draggedNodeRef.current.fy = y;

        // Keep simulation active while dragging
        if (simulation.alpha() < 0.1) simulation.alphaTarget(0.1).restart();
    };

    const handleDragEnd = (e) => {
        if (!draggedNodeRef.current) return; // Exit if nothing was being dragged

        // Release the fixed position constraint
        draggedNodeRef.current.fx = null;
        draggedNodeRef.current.fy = null;

        if (e.type === "mouseup" || e.type === "mouseleave")
            canvas.style.cursor = "default";

        // Allow simulation to cool down
        simulation.alphaTarget(0).alphaDecay(0.02);
        draggedNodeRef.current = null;
    };

    // Attach event listeners
    canvas.addEventListener("mousedown", handleDragStart);
    canvas.addEventListener("mousemove", handleDragMove);
    canvas.addEventListener("mouseup", handleDragEnd);
    canvas.addEventListener("mouseleave", handleDragEnd);

    canvas.addEventListener("touchstart", handleDragStart, { passive: false });
    canvas.addEventListener("touchmove", handleDragMove, { passive: false });
    canvas.addEventListener("touchend", handleDragEnd);
    canvas.addEventListener("touchcancel", handleDragEnd);

    // Return cleanup function to remove listeners
    return () => {
        canvas.removeEventListener("mousedown", handleDragStart);
        canvas.removeEventListener("mousemove", handleDragMove);
        canvas.removeEventListener("mouseup", handleDragEnd);
        canvas.removeEventListener("mouseleave", handleDragEnd);

        canvas.removeEventListener("touchstart", handleDragStart);
        canvas.removeEventListener("touchmove", handleDragMove);
        canvas.removeEventListener("touchend", handleDragEnd);
        canvas.removeEventListener("touchcancel", handleDragEnd);
    };
}

// =============================================
// MAIN COMPONENT
// =============================================

function SkillsBubbles() {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const simulationRef = useRef(null);
    const draggedNodeRef = useRef(null);
    const nodesRef = useRef([]);

    const [dimensions, setDimensions] = useState(DEFAULT_DIMENSIONS);
    const { width, height } = dimensions;

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const updateSize = () => {
            const width = container.offsetWidth || DEFAULT_DIMENSIONS.width;
            const parentHeight = container.parentElement?.offsetHeight || 0;
            const responsiveHeight = getCanvasHeight(width);
            setDimensions({
                width,
                height: Math.max(parentHeight, responsiveHeight),
            });
        };

        updateSize();

        if (typeof ResizeObserver !== "undefined") {
            const observer = new ResizeObserver(updateSize);
            observer.observe(container);
            return () => observer.disconnect();
        }

        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    useEffect(() => {
        if (!width) return;

        const sizeFactor = 7.0;
        nodesRef.current = createNodesFromSkills(
            SKILLS,
            width,
            height,
            sizeFactor
        );

        if (simulationRef.current) {
            simulationRef.current.nodes(nodesRef.current);
            simulationRef.current.alpha(0.3).restart();
        }
    }, [height, width]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        const currentDimensions = { width, height };
        if (
            !canvas ||
            !context ||
            !width ||
            nodesRef.current.length === 0
        )
            return;

        const pixelRatio = window.devicePixelRatio || 1;
        const centerX = width / 2;
        const centerY = height / 2;

        setupCanvas(canvas, context, currentDimensions, pixelRatio);
        const boundary = calculateBoundary(centerX, centerY, currentDimensions);
        const renderBubbles = createRenderFunction(
            context,
            nodesRef.current,
            currentDimensions,
            boundary
        );

        if (!simulationRef.current) {
            simulationRef.current = setupSimulation(
                nodesRef.current,
                centerX,
                centerY,
                renderBubbles
            );
            initializeSimulation(simulationRef.current);
        } else {
            simulationRef.current
                .force("center", d3.forceCenter(centerX, centerY).strength(0.04))
                .force("x", d3.forceX(centerX).strength(0.02))
                .force("y", d3.forceY(centerY).strength(0.02))
                .on("tick", renderBubbles)
                .alpha(0.25)
                .restart();
        }

        renderBubbles();
        const cleanupInteractions = setupInteractionHandlers(
            canvas,
            simulationRef.current,
            nodesRef.current,
            draggedNodeRef
        );

        return () => {
            cleanupInteractions();
            if (simulationRef.current) {
                simulationRef.current.stop();
            }
        };
    }, [height, width]);

    return (
        <div
            ref={containerRef}
            className="h-full min-h-[280px] w-full overflow-hidden rounded-[24px] sm:min-h-[320px] lg:min-h-[360px]"
        >
            <canvas
                ref={canvasRef}
                className="block h-full w-full"
                role="img"
                aria-label="Interactive skills bubble chart"
            />
        </div>
    );
}

export default SkillsBubbles;
