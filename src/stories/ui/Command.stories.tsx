import type { Meta, StoryObj } from "@storybook/react";
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from "../../../components/ui/command";
import { CommandExamples } from "./CommandExamples";
import { useState } from "react";

const meta: Meta<typeof Command> = {
  title: "UI/Command",
  component: Command,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A command menu for keyboard-first interactions. Built on top of cmdk.",
      },
    },
  },
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
      table: {
        category: "Appearance",
      },
    },
    loop: {
      control: "boolean",
      description: "Whether to loop through the items when navigating",
      table: {
        category: "Behavior",
        defaultValue: { summary: "true" },
      },
    },
    shouldFilter: {
      control: "boolean",
      description: "Whether to filter items based on the input value",
      table: {
        category: "Behavior",
        defaultValue: { summary: "true" },
      },
    },
    filter: {
      control: "text",
      description: "Custom filter function",
      table: {
        category: "Behavior",
      },
    },
    value: {
      control: "text",
      description: "The controlled value of the command menu",
      table: {
        category: "State",
      },
    },
    onValueChange: {
      action: "value changed",
      description: "Event handler called when the value changes",
      table: {
        category: "Events",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Command>;

export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-[400px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <span>Calendar</span>
            <CommandShortcut>⌘C</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Search</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Settings</span>
            <CommandShortcut>⌘,</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Recent">
          <CommandItem>
            <span>Documents</span>
          </CommandItem>
          <CommandItem>
            <span>Projects</span>
          </CommandItem>
          <CommandItem>
            <span>Reports</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export const WithSearch: Story = {
  render: () => {
    const [search, setSearch] = useState("");

    return (
      <Command className="rounded-lg border shadow-md w-[400px]">
        <CommandInput
          placeholder="Type a command or search..."
          value={search}
          onValueChange={setSearch}
        />
        <CommandList>
          {search && <CommandEmpty>No results found.</CommandEmpty>}
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <span>Calendar</span>
              <CommandShortcut>⌘C</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <span>Search</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <span>Settings</span>
              <CommandShortcut>⌘,</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Recent">
            <CommandItem>
              <span>Documents</span>
            </CommandItem>
            <CommandItem>
              <span>Projects</span>
            </CommandItem>
            <CommandItem>
              <span>Reports</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );
  },
};

export const WithDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex flex-col items-center">
        <p className="mb-4 text-sm text-muted-foreground">
          Click the button below to open the command dialog
        </p>
        <button
          className="px-4 py-2 rounded-md bg-primary text-primary-foreground"
          onClick={() => setOpen(true)}
        >
          Open Command Menu
        </button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <span>Calendar</span>
                <CommandShortcut>⌘C</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <span>Search</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <span>Settings</span>
                <CommandShortcut>⌘,</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Recent">
              <CommandItem>
                <span>Documents</span>
              </CommandItem>
              <CommandItem>
                <span>Projects</span>
              </CommandItem>
              <CommandItem>
                <span>Reports</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
    );
  },
};

export const CompleteExamples: Story = {
  render: () => <CommandExamples />,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Complete set of command examples showing various configurations.",
      },
    },
  },
};
