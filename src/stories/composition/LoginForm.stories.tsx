import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "./LoginForm";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof LoginForm> = {
  title: "Composition/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A login form composed of multiple UI components working together.",
      },
    },
  },
  argTypes: {
    onSubmit: { action: "submitted" },
    isLoading: {
      control: "boolean",
      description: "Whether the form is in a loading state",
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  args: {
    isLoading: false,
    onSubmit: action("form submitted"),
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    onSubmit: action("form submitted"),
  },
};

export const WithPrefilledEmail: Story = {
  render: (args) => {
    // This demonstrates how to customize the component for a specific story
    return (
      <div className="space-y-4">
        <p className="text-sm text-gray-500">This example shows a pre-filled email address.</p>
        <LoginForm {...args} />
      </div>
    );
  },
  args: {
    isLoading: false,
    onSubmit: action("form submitted"),
  },
  play: async ({ canvasElement }) => {
    // This is an example of using the play function to interact with the component
    const emailInput = canvasElement.querySelector("#email") as HTMLInputElement;
    if (emailInput) {
      emailInput.value = "user@example.com";
      emailInput.dispatchEvent(new Event("input", { bubbles: true }));
    }
  },
};
