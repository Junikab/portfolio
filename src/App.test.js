import { render, screen } from "@testing-library/react";

jest.mock("./components/SkillsBubbles", () => function SkillsBubblesMock() {
    return <div data-testid="skills-bubbles" />;
});

import App from "./App";

test("renders the portfolio hero and project section", () => {
    render(<App />);

    expect(
        screen.getByRole("heading", { name: /Jenny Deygin/i })
    ).toBeInTheDocument();
    expect(
        screen.getByRole("heading", { name: /My Projects/i })
    ).toBeInTheDocument();
    expect(
        screen.getByRole("heading", { name: /About Me/i })
    ).toBeInTheDocument();
    expect(
        screen.getByRole("heading", { name: /Experience/i })
    ).toBeInTheDocument();
    expect(screen.getByTestId("skills-bubbles")).toBeInTheDocument();
});
