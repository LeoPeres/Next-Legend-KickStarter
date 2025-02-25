import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import { InputExamples } from "./InputExamples";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A basic input component for collecting user input in forms.",
      },
    },
  },
  argTypes: {
    type: {
      description: "The type of the input element",
      control: "select",
      options: [
        "text",
        "email",
        "password",
        "number",
        "search",
        "tel",
        "url",
        "date",
        "time",
        "datetime-local",
      ],
      defaultValue: "text",
    },
    placeholder: {
      description: "The placeholder text for the input",
      control: "text",
    },
    disabled: {
      description: "Whether the input is disabled",
      control: "boolean",
    },
    required: {
      description: "Whether the input is required",
      control: "boolean",
    },
    className: {
      description: "Additional CSS classes to apply to the input",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text here...",
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Email" {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: "Enter text here...",
    disabled: true,
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <div className="relative w-full max-w-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <Input className="pl-10" placeholder="Search..." {...args} />
    </div>
  ),
};

export const WithButton: Story = {
  render: (args) => (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input placeholder="Email" {...args} />
      <Button type="submit">Subscribe</Button>
    </div>
  ),
};

export const File: Story = {
  args: {
    type: "file",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password...",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Enter number...",
  },
};

export const CompleteExamples: Story = {
  render: () => <InputExamples />,
};
