import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../../../components/ui/badge";
import { BadgeExamples } from "./BadgeExamples";

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A small visual indicator used to highlight status, categories, or counts.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
      description: "The visual style of the badge",
      table: {
        category: "Appearance",
        defaultValue: { summary: "default" },
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
      table: {
        category: "Appearance",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Badge",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const WithCustomClass: Story = {
  args: {
    children: "Custom",
    className: "bg-blue-500 hover:bg-blue-700 text-white",
  },
};

export const CompleteExamples: Story = {
  render: () => <BadgeExamples />,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Complete set of badge examples showing various configurations.",
      },
    },
  },
};
