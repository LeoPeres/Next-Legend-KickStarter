import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "../../../components/ui/dialog";
import { DialogExamples } from "./DialogExamples";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { useState } from "react";

const meta: Meta<typeof Dialog> = {
  title: "UI/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.",
      },
    },
  },
  argTypes: {
    open: {
      control: "boolean",
      description: "The controlled open state of the dialog",
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
      description: "Whether the dialog should block interactions with content outside the dialog",
      table: {
        category: "Behavior",
        defaultValue: { summary: "true" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" defaultValue="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex flex-col items-center gap-4">
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <p className="text-sm text-muted-foreground">Dialog is {open ? "open" : "closed"}</p>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Controlled Dialog</DialogTitle>
              <DialogDescription>This dialog's state is controlled externally.</DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p>This is a controlled dialog example.</p>
            </div>
            <DialogFooter>
              <Button onClick={() => setOpen(false)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};

export const WithoutFooter: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Notification</DialogTitle>
          <DialogDescription>This is a notification dialog without a footer.</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>This dialog doesn't have a footer section.</p>
        </div>
      </DialogContent>
    </Dialog>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Show Image</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Image Preview</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center py-4">
          <div className="rounded-md bg-muted aspect-video w-full flex items-center justify-center text-muted-foreground">
            Image Placeholder
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Download</Button>
          <Button>Share</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const CompleteExamples: Story = {
  render: () => <DialogExamples />,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Complete set of dialog examples showing various configurations.",
      },
    },
  },
};
