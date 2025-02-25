import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../../components/ui/button";
import { createPropDef } from "../utils/extractProps";
import {
  ButtonWithIcon,
  ButtonSizes,
  ButtonVariants,
  ButtonStates,
  ButtonUsageExamples,
} from "./ButtonExamples";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A versatile button component with multiple variants and sizes.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      description: "The visual style of the button",
      table: {
        category: "Appearance",
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
      description: "The size of the button",
      table: {
        category: "Appearance",
        defaultValue: { summary: "default" },
      },
    },
    asChild: {
      control: "boolean",
      description: "Whether to render as a child component",
      table: {
        category: "Behavior",
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
      table: {
        category: "State",
        defaultValue: { summary: "false" },
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
      table: {
        category: "Appearance",
      },
    },
    children: {
      control: "text",
      description: "The content to display inside the button",
      table: {
        category: "Content",
      },
    },
    onClick: {
      action: "clicked",
      description: "Function called when the button is clicked",
      table: {
        category: "Events",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "Link",
    variant: "link",
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

// Usage examples
export const WithIcons: Story = {
  render: () => <ButtonWithIcon />,
  parameters: {
    docs: {
      description: {
        story: "Buttons can include icons to enhance visual communication.",
      },
    },
  },
};

export const DifferentSizes: Story = {
  render: () => <ButtonSizes />,
  parameters: {
    docs: {
      description: {
        story: "Buttons come in three sizes: small, default, and large.",
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => <ButtonVariants />,
  parameters: {
    docs: {
      description: {
        story: "All available button variants.",
      },
    },
  },
};

export const ButtonStateExamples: Story = {
  render: () => <ButtonStates />,
  parameters: {
    docs: {
      description: {
        story: "Buttons can be enabled or disabled.",
      },
    },
  },
};

export const CompleteExamples: Story = {
  render: () => <ButtonUsageExamples />,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Complete set of button examples showing various configurations.",
      },
    },
  },
};
