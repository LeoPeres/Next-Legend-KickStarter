import type { Meta, StoryObj } from "@storybook/react";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
} from "../../../components/ui/context-menu";
import { ContextMenuExamples } from "./ContextMenuExamples";
import { useState } from "react";

const meta: Meta<typeof ContextMenu> = {
  title: "UI/ContextMenu",
  component: ContextMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Displays a menu when right-clicking or long-pressing an element. Built on top of Radix UI.",
      },
    },
  },
  argTypes: {
    modal: {
      control: "boolean",
      description: "Whether the context menu should be modal",
      table: {
        category: "Behavior",
        defaultValue: { summary: "true" },
      },
    },
    dir: {
      control: { type: "radio", options: ["ltr", "rtl"] },
      description: "The reading direction of the context menu",
      table: {
        category: "Appearance",
        defaultValue: { summary: "ltr" },
      },
    },
    onOpenChange: {
      action: "open changed",
      description: "Event handler called when the open state changes",
      table: {
        category: "Events",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          Save As...
          <ContextMenuShortcut>⌘S</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Print...
          <ContextMenuShortcut>⌘P</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          View Source
          <ContextMenuShortcut>⌘U</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithSubMenu: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
              Save Page As...
              <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>
          View Source
          <ContextMenuShortcut>⌘U</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

export const WithCheckboxItems: Story = {
  render: () => {
    const [checked, setChecked] = useState({
      showBookmarks: true,
      showFullURLs: false,
      showStatusBar: true,
    });

    return (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuLabel>View Options</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem
            checked={checked.showBookmarks}
            onCheckedChange={(value) => setChecked((prev) => ({ ...prev, showBookmarks: !!value }))}
          >
            Show Bookmarks Bar
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={checked.showFullURLs}
            onCheckedChange={(value) => setChecked((prev) => ({ ...prev, showFullURLs: !!value }))}
          >
            Show Full URLs
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={checked.showStatusBar}
            onCheckedChange={(value) => setChecked((prev) => ({ ...prev, showStatusBar: !!value }))}
          >
            Show Status Bar
          </ContextMenuCheckboxItem>
        </ContextMenuContent>
      </ContextMenu>
    );
  },
};

export const WithRadioItems: Story = {
  render: () => {
    const [zoom, setZoom] = useState("100%");

    return (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuLabel>Zoom</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup value={zoom} onValueChange={setZoom}>
            <ContextMenuRadioItem value="50%">50%</ContextMenuRadioItem>
            <ContextMenuRadioItem value="75%">75%</ContextMenuRadioItem>
            <ContextMenuRadioItem value="100%">100%</ContextMenuRadioItem>
            <ContextMenuRadioItem value="125%">125%</ContextMenuRadioItem>
            <ContextMenuRadioItem value="150%">150%</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
          <ContextMenuSeparator />
          <ContextMenuItem>Custom...</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    );
  },
};

export const CompleteExamples: Story = {
  render: () => <ContextMenuExamples />,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Complete set of context menu examples showing various configurations.",
      },
    },
  },
};
