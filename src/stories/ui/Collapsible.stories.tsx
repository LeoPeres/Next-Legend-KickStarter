import type { Meta, StoryObj } from "@storybook/react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "../../../components/ui/collapsible";
import { CollapsibleExamples } from "./CollapsibleExamples";
import { Button } from "../../../components/ui/button";
import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";

const meta: Meta<typeof Collapsible> = {
  title: "UI/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "An interactive component that expands/collapses a panel.",
      },
    },
  },
  argTypes: {
    open: {
      control: "boolean",
      description: "The controlled open state of the collapsible",
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
    disabled: {
      control: "boolean",
      description: "When true, prevents the user from interacting with the collapsible",
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
  },
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">@radix-ui/react-collapsible</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          A React component that helps you build accessible collapsible sections.
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            Radix Primitives are low-level UI components for building accessible design systems.
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            Collapsible provides a simple way to expand and collapse content.
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="space-y-4 w-[350px]">
        <div className="flex justify-end">
          <Button onClick={() => setIsOpen(!isOpen)} variant="outline" size="sm">
            {isOpen ? "Close" : "Open"}
          </Button>
        </div>
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-2">
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            This is always visible
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              This content can be expanded and collapsed.
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    );
  },
};

export const DefaultOpen: Story = {
  render: () => (
    <Collapsible defaultOpen className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">Default Open Collapsible</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        This collapsible is open by default.
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          This content is visible by default.
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const CompleteExamples: Story = {
  render: () => <CollapsibleExamples />,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Complete set of collapsible examples showing various configurations.",
      },
    },
  },
};
