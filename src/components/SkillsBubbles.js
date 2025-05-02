import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import { SKILLS, COLOR_VARIATIONS } from "../data/skillData";

// =============================================
// UTILITY FUNCTIONS
// =============================================

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
    const centerX = width / 2;
    const centerY = height / 2;

    return skills.map((skill) => ({
        id: skill.id,
        group: skill.group,
        value: skill.value,
        radius: Math.sqrt(skill.value) * sizeFactor,
        x: centerX + (Math.random() - 0.5) * width * 0.6, // Random initial positions
        y: centerY + (Math.random() - 0.5) * height * 0.6,
        vx: 0, // Initial velocity
        vy: 0,
    }));
}

// Calculate the boundary for nodes
function calculateBoundary(centerX, centerY, dimensions) {
    const margin = 0.15; // 15% margin from edges
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
    context.scale(pixelRatio, pixelRatio);
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

    // Create a radial gradient for a 3D effect
    const gradient = context.createRadialGradient(
        node.x - node.radius * 0.3, // Inner circle offset slightly
        node.y - node.radius * 0.3,
        node.radius * 0.2, // Inner circle radius
        node.x, // Outer circle center
        node.y,
        node.radius // Outer circle radius
    );

    gradient.addColorStop(0, colors.lighter);
    gradient.addColorStop(0.7, colors.base);
    gradient.addColorStop(1, colors.darker);

    // Draw the bubble shape
    context.beginPath();
    context.arc(node.x, node.y, node.radius, 0, 2 * Math.PI);
    context.fillStyle = gradient;

    // Add a subtle shadow
    context.shadowColor = "rgba(0, 0, 0, 0.2)";
    context.shadowBlur = 5;
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;

    context.fill();
}

// Draw text centered within a node, handling wrapping
function drawNodeText(context, node) {
    // Reset shadow before drawing text
    context.shadowColor = "transparent";

    // Calculate font size based on bubble radius (within limits)
    const fontSize = Math.min(Math.max(10, node.radius * 0.45), 14);
    context.font = `${fontSize}px bold sans-serif`;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "#1e293b"; // Dark slate color for good contrast

    // Determine the maximum width for text based on radius
    const maxWidth = node.radius * 1.7; // Allow text slightly wider than bubble diameter
    const lines = wrapText(context, node.id, maxWidth);

    // Draw each line of wrapped text
    const lineHeight = fontSize * 1.2;
    lines.forEach((line, i) => {
        // Calculate vertical offset to center multi-line text
        const yOffset = (i - (lines.length - 1) / 2) * lineHeight;
        context.fillText(line, node.x, node.y + yOffset);
    });
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
        .force("center", d3.forceCenter(centerX, centerY).strength(0.1)) // Pull towards center
        .force("charge", d3.forceManyBody().strength(-40)) // Repel nodes from each other
        .force(
            "collide", // Prevent nodes from overlapping
            d3
                .forceCollide()
                .radius((d) => d.radius + 1.5) // Collision radius slightly larger than visual radius
                .strength(0.9) // Strong collision force
                .iterations(3) // More iterations for better collision resolution
        )
        .force("x", d3.forceX(centerX).strength(0.05)) // Gentle pull towards center X
        .force("y", d3.forceY(centerY).strength(0.05)) // Gentle pull towards center Y
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
    // Refs for DOM elements and simulation state
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const simulationRef = useRef(null); // Stores the D3 simulation instance
    const draggedNodeRef = useRef(null); // Stores the node currently being dragged
    const nodesRef = useRef([]); // Stores the node data array

    // State for component dimensions, responsive to container size
    const [dimensions, setDimensions] = useState({ width: 400, height: 600 });

    // Effect for handling container resize
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const updateSize = () => {
            setDimensions({
                width: container.offsetWidth,
                height: 600, // Keep height fixed or make responsive too
            });
        };

        updateSize(); // Initial size check

        // Debounced resize handler for performance
        let timeoutId;
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(updateSize, 150); // Adjust debounce delay as needed
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    // Effect for creating/updating nodes when dimensions change
    useEffect(() => {
        if (!dimensions.width) return;

        const sizeFactor = 7.0; // Adjust to scale bubble sizes
        nodesRef.current = createNodesFromSkills(
            SKILLS,
            dimensions.width,
            dimensions.height,
            sizeFactor
        );

        // If simulation exists, update nodes and restart
        if (simulationRef.current) {
            simulationRef.current.nodes(nodesRef.current);
            simulationRef.current.alpha(0.3).restart(); // Reheat simulation
        }
    }, [dimensions.width, dimensions.height]);

    // Effect for setting up canvas, simulation, and interactions
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        if (
            !canvas ||
            !context ||
            !dimensions.width ||
            nodesRef.current.length === 0
        )
            return;

        const pixelRatio = window.devicePixelRatio || 1;
        const centerX = dimensions.width / 2;
        const centerY = dimensions.height / 2;

        // Setup canvas resolution
        setupCanvas(canvas, context, dimensions, pixelRatio);

        // Calculate drawing boundaries
        const boundary = calculateBoundary(centerX, centerY, dimensions);

        // Define the rendering loop function
        const renderBubbles = createRenderFunction(
            context,
            nodesRef.current,
            dimensions,
            boundary
        );

        // Setup or update the D3 simulation
        if (!simulationRef.current) {
            // Only create simulation once
            simulationRef.current = setupSimulation(
                nodesRef.current,
                centerX,
                centerY,
                renderBubbles
            );
            initializeSimulation(simulationRef.current); // Settle initial layout
        } else {
            // Update existing simulation parameters
            simulationRef.current
                .force("center", d3.forceCenter(centerX, centerY).strength(0.1))
                .force("x", d3.forceX(centerX).strength(0.05))
                .force("y", d3.forceY(centerY).strength(0.05))
                .on("tick", renderBubbles); // Ensure tick handler is up-to-date
        }

        renderBubbles(); // Initial render

        // Setup interaction handlers and get cleanup function
        const cleanupInteractions = setupInteractionHandlers(
            canvas,
            simulationRef.current,
            nodesRef.current,
            draggedNodeRef
        );

        // Return cleanup function for this effect
        return () => {
            cleanupInteractions();
            // Stop simulation directly here
            if (simulationRef.current) {
                simulationRef.current.stop();
            }
        };

        // Rerun this effect if dimensions change (width/height) to reconfigure canvas/simulation
    }, [dimensions.width, dimensions.height]);

    return (
        <div
            ref={containerRef}
            className="w-full h-full overflow-hidden"
        >
            <canvas ref={canvasRef} className="w-full h-full block" />
        </div>
    );
}

export default SkillsBubbles;
