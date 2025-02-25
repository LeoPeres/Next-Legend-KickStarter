import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Popover, PopoverTrigger, PopoverContent } from "../../../components/ui/popover";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { PopoverExamples } from "./PopoverExamples";

const meta: Meta<typeof Popover> = {
  title: "UI/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Displays rich content in a portal, triggered by a button.",
      },
    },
  },
  argTypes: {
    open: {
      control: "boolean",
      description: "The controlled open state of the popover",
      table: {
        category: "State",
        defaultValue: { summary: "undefined" },
      },
    },
    defaultOpen: {
      control: "boolean",
      description: "The default open state when uncontrolled",
      table: {
        category: "State",
        defaultValue: { summary: "false" },
      },
    },
    onOpenChange: {
      action: "open changed",
      description: "Event handler called when the open state changes",
      table: {
        category: "Events",
      },
    },
    modal: {
      control: "boolean",
      description: "Whether the popover should be modal (prevent interaction outside)",
      table: {
        category: "Behavior",
        defaultValue: { summary: "false" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input id="maxHeight" defaultValue="none" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const WithForm: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Profile</h4>
            <p className="text-sm text-muted-foreground">Update your profile information.</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="John Doe" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@johndoe" className="col-span-2 h-8" />
            </div>
          </div>
          <Button size="sm">Save Changes</Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <div className="flex flex-col items-center gap-4">
        <Button onClick={() => setOpen(!open)}>{open ? "Close" : "Open"} Popover</Button>
        <p className="text-sm text-muted-foreground">Popover is {open ? "open" : "closed"}</p>

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline">Controlled Popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Controlled Popover</h4>
                <p className="text-sm text-muted-foreground">
                  This popover's state is controlled externally.
                </p>
              </div>
              <Button onClick={() => setOpen(false)}>Close</Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
};

export const CompleteExamples: Story = {
  render: () => <PopoverExamples />,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Complete set of popover examples showing various configurations.",
      },
    },
  },
};
