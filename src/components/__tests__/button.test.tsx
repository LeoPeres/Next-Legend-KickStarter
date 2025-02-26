import React from "react";
import { render, screen } from "../../test-utils/render";
import { Button } from "../ui/button";

describe("Button Component", () => {
  it("renders correctly with default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it("applies the correct class for variant", () => {
    render(<Button variant="destructive">Destructive Button</Button>);
    const button = screen.getByRole("button", { name: /destructive button/i });
    expect(button).toHaveClass("bg-destructive");
  });

  it("applies the correct class for size", () => {
    render(<Button size="sm">Small Button</Button>);
    const button = screen.getByRole("button", { name: /small button/i });
    expect(button).toHaveClass("h-9");
  });

  it("passes additional props to the button element", () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole("button", { name: /disabled button/i });
    expect(button).toBeDisabled();
  });

  it("handles click events", async () => {
    const handleClick = jest.fn();
    const { user } = render(<Button onClick={handleClick}>Clickable Button</Button>);

    const button = screen.getByRole("button", { name: /clickable button/i });
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
