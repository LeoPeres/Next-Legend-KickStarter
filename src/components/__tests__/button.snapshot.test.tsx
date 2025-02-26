import React from "react";
import { render } from "../../test-utils/render";
import { Button } from "../ui/button";

describe("Button Snapshots", () => {
  it("renders default button correctly", () => {
    const { container } = render(<Button>Default Button</Button>);
    expect(container).toMatchSnapshot();
  });

  it("renders destructive button correctly", () => {
    const { container } = render(<Button variant="destructive">Destructive Button</Button>);
    expect(container).toMatchSnapshot();
  });

  it("renders outline button correctly", () => {
    const { container } = render(<Button variant="outline">Outline Button</Button>);
    expect(container).toMatchSnapshot();
  });

  it("renders secondary button correctly", () => {
    const { container } = render(<Button variant="secondary">Secondary Button</Button>);
    expect(container).toMatchSnapshot();
  });

  it("renders ghost button correctly", () => {
    const { container } = render(<Button variant="ghost">Ghost Button</Button>);
    expect(container).toMatchSnapshot();
  });

  it("renders link button correctly", () => {
    const { container } = render(<Button variant="link">Link Button</Button>);
    expect(container).toMatchSnapshot();
  });

  it("renders small button correctly", () => {
    const { container } = render(<Button size="sm">Small Button</Button>);
    expect(container).toMatchSnapshot();
  });

  it("renders large button correctly", () => {
    const { container } = render(<Button size="lg">Large Button</Button>);
    expect(container).toMatchSnapshot();
  });

  it("renders disabled button correctly", () => {
    const { container } = render(<Button disabled>Disabled Button</Button>);
    expect(container).toMatchSnapshot();
  });
});
