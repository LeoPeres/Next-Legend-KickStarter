import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../../../components/ui/checkbox";
import { CheckboxExamples } from "./CheckboxExamples";

const meta: Meta<typeof Checkbox> = {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A control that allows the user to toggle between checked and not checked.",
      },
    },
  },
  argTypes: {
    checked: {
      control: "boolean",
      description: "Whether the checkbox is checked",
      table: {
        category: "State",
        defaultValue: { summary: "undefined" },
      },
    },
    defaultChecked: {
      control: "boolean",
      description: "The default state when uncontrolled",
      table: {
        category: "State",
        defaultValue: { summary: "undefined" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Whether the checkbox is disabled",
      table: {
        category: "State",
        defaultValue: { summary: "false" },
      },
    },
    required: {
      control: "boolean",
      description: "Whether the checkbox is required",
      table: {
        category: "Validation",
        defaultValue: { summary: "false" },
      },
    },
    name: {
      control: "text",
      description: "The name of the checkbox",
      table: {
        category: "Form",
      },
    },
    value: {
      control: "text",
      description: "The value of the checkbox",
      table: {
        category: "Form",
      },
    },
    onCheckedChange: {
      action: "checked changed",
      description: "Event handler called when the checked state changes",
      table: {
        category: "Events",
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
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => <Checkbox />,
};

export const Checked: Story = {
  render: () => <Checkbox defaultChecked />,
};

export const Disabled: Story = {
  render: () => <Checkbox disabled />,
};

export const DisabledChecked: Story = {
  render: () => <Checkbox disabled defaultChecked />,
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
};

export const CompleteExamples: Story = {
  render: () => <CheckboxExamples />,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Complete set of checkbox examples showing various configurations.",
      },
    },
  },
};
