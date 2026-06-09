import { render, screen } from "@testing-library/react";

jest.mock("./components/SkillsBubbles", () => function SkillsBubblesMock() {
    return <div data-testid="skills-bubbles" />;
});

import App from "./App";

test("renders the current portfolio layout", () => {
    render(<App />);

    expect(
        screen.getByRole("heading", { name: /Jenny Deygin/i })
    ).toBeInTheDocument();
    expect(
        screen.getByRole("heading", { name: /^Projects$/i })
    ).toBeInTheDocument();
    expect(
        screen.getByRole("heading", { name: /^About$/i })
    ).toBeInTheDocument();
    expect(
        screen.getByRole("heading", {
            name: /Independent front-end developer/i,
        })
    ).toBeInTheDocument();
    expect(screen.getByTestId("skills-bubbles")).toBeInTheDocument();
});
