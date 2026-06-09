// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

class ResizeObserverMock {
    observe() {}

    unobserve() {}

    disconnect() {}
}

global.ResizeObserver = ResizeObserverMock;

const gradientMock = {
    addColorStop: jest.fn(),
};

HTMLCanvasElement.prototype.getContext = jest.fn(() => ({
    setTransform: jest.fn(),
    scale: jest.fn(),
    clearRect: jest.fn(),
    createRadialGradient: jest.fn(() => gradientMock),
    beginPath: jest.fn(),
    arc: jest.fn(),
    fill: jest.fn(),
    fillText: jest.fn(),
    measureText: jest.fn((text) => ({ width: text.length * 7 })),
    shadowColor: "transparent",
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    fillStyle: "",
    font: "",
    textAlign: "center",
    textBaseline: "middle",
}));
