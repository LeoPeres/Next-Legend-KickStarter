import React from "react";
import { render } from "../../test-utils/render";
import { Input } from "../ui/input";

describe("Input Snapshots", () => {
  it("renders default input correctly", () => {
    const { container } = render(<Input placeholder="Default Input" />);
    expect(container).toMatchSnapshot();
  });

  it("renders filled input correctly", () => {
    const { container } = render(<Input variant="filled" placeholder="Filled Input" />);
    expect(container).toMatchSnapshot();
  });

  it("renders underlined input correctly", () => {
    const { container } = render(<Input variant="underlined" placeholder="Underlined Input" />);
    expect(container).toMatchSnapshot();
  });

  it("renders disabled input correctly", () => {
    const { container } = render(<Input disabled placeholder="Disabled Input" />);
    expect(container).toMatchSnapshot();
  });

  it("renders input with value correctly", () => {
    const { container } = render(<Input value="Input with value" readOnly />);
    expect(container).toMatchSnapshot();
  });

  it("renders input with different types correctly", () => {
    const { container: textContainer } = render(<Input type="text" placeholder="Text Input" />);
    expect(textContainer).toMatchSnapshot("text-input");

    const { container: passwordContainer } = render(
      <Input type="password" placeholder="Password Input" />
    );
    expect(passwordContainer).toMatchSnapshot("password-input");

    const { container: numberContainer } = render(
      <Input type="number" placeholder="Number Input" />
    );
    expect(numberContainer).toMatchSnapshot("number-input");

    const { container: emailContainer } = render(<Input type="email" placeholder="Email Input" />);
    expect(emailContainer).toMatchSnapshot("email-input");
  });
});
