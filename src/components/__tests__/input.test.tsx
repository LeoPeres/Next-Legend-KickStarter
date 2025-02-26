import React from "react";
import { render, screen } from "../../test-utils/render";
import { Input } from "../ui/input";

describe("Input Component", () => {
  it("renders correctly with default props", () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
  });

  it("applies the correct class for variant", () => {
    render(<Input variant="filled" placeholder="Filled input" />);
    const input = screen.getByPlaceholderText("Filled input");
    expect(input).toHaveClass("bg-muted");
  });

  it("passes additional props to the input element", () => {
    render(<Input disabled placeholder="Disabled input" />);
    const input = screen.getByPlaceholderText("Disabled input");
    expect(input).toBeDisabled();
  });

  it("handles value changes", async () => {
    const handleChange = jest.fn();
    const { user } = render(<Input onChange={handleChange} placeholder="Type here" />);

    const input = screen.getByPlaceholderText("Type here");
    await user.type(input, "Hello, world!");

    expect(handleChange).toHaveBeenCalled();
  });

  it("accepts a ref", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} placeholder="Input with ref" />);

    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe("INPUT");
  });
});
