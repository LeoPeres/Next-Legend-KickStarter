import React, { useState } from "react";
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
import {
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  FileText,
  BarChart,
  Inbox,
  PlusCircle,
  Github,
  LifeBuoy,
  Cloud,
  LogOut,
} from "lucide-react";

export const BasicCommand = () => (
  <Command className="rounded-lg border shadow-md w-[400px]">
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem>
          <Calendar className="mr-2 h-4 w-4" />
          <span>Calendar</span>
          <CommandShortcut>⌘C</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <CreditCard className="mr-2 h-4 w-4" />
          <span>Billing</span>
          <CommandShortcut>⌘B</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
          <CommandShortcut>⌘S</CommandShortcut>
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Profile">
        <CommandItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
          <CommandShortcut>⌘P</CommandShortcut>
        </CommandItem>
        <CommandItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <CommandShortcut>⌘L</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
);

interface CommandItem {
  name: string;
  icon: React.ReactNode;
  shortcut?: string;
}

interface CommandGroup {
  group: string;
  items: CommandItem[];
}

export const SearchableCommand = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const items: CommandGroup[] = [
    {
      group: "General",
      items: [
        { name: "Calendar", icon: <Calendar className="mr-2 h-4 w-4" />, shortcut: "⌘C" },
        { name: "Search", icon: <FileText className="mr-2 h-4 w-4" />, shortcut: "⌘S" },
        { name: "Settings", icon: <Settings className="mr-2 h-4 w-4" />, shortcut: "⌘," },
      ],
    },
    {
      group: "Tools",
      items: [
        { name: "Analytics", icon: <BarChart className="mr-2 h-4 w-4" /> },
        { name: "Messages", icon: <Inbox className="mr-2 h-4 w-4" /> },
        { name: "Create New", icon: <PlusCircle className="mr-2 h-4 w-4" /> },
      ],
    },
    {
      group: "Help",
      items: [
        { name: "Documentation", icon: <FileText className="mr-2 h-4 w-4" /> },
        { name: "GitHub", icon: <Github className="mr-2 h-4 w-4" /> },
        { name: "Support", icon: <LifeBuoy className="mr-2 h-4 w-4" /> },
      ],
    },
  ];

  const filteredItems = items
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="w-[400px]">
      <p className="mb-2 text-sm text-muted-foreground">Type to search commands</p>
      <Command className="rounded-lg border shadow-md">
        <CommandInput
          placeholder="Type a command or search..."
          value={search}
          onValueChange={setSearch}
        />
        <CommandList>
          {filteredItems.length === 0 && <CommandEmpty>No results found.</CommandEmpty>}
          {filteredItems.map((group) => (
            <React.Fragment key={group.group}>
              <CommandGroup heading={group.group}>
                {group.items.map((item) => (
                  <CommandItem key={item.name}>
                    {item.icon}
                    <span>{item.name}</span>
                    {item.shortcut && <CommandShortcut>{item.shortcut}</CommandShortcut>}
                  </CommandItem>
                ))}
              </CommandGroup>
              {group !== filteredItems[filteredItems.length - 1] && <CommandSeparator />}
            </React.Fragment>
          ))}
        </CommandList>
      </Command>
    </div>
  );
};

export const CommandDialogExample = () => {
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
          <CommandGroup heading="Applications">
            <CommandItem>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <FileText className="mr-2 h-4 w-4" />
              <span>Documents</span>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Cloud Services">
            <CommandItem>
              <Cloud className="mr-2 h-4 w-4" />
              <span>Storage</span>
            </CommandItem>
            <CommandItem>
              <Github className="mr-2 h-4 w-4" />
              <span>GitHub</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export const CommandWithActions = () => {
  const [open, setOpen] = useState(false);

  const runAction = (action: string) => {
    console.log(`Running action: ${action}`);
    setOpen(false);
  };

  return (
    <div className="w-[400px]">
      <p className="mb-2 text-sm text-muted-foreground">Command with clickable actions</p>
      <Command className="rounded-lg border shadow-md">
        <CommandInput placeholder="Type a command..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem onSelect={() => runAction("new-file")}>
              <PlusCircle className="mr-2 h-4 w-4" />
              <span>New File</span>
            </CommandItem>
            <CommandItem onSelect={() => runAction("new-tab")}>
              <PlusCircle className="mr-2 h-4 w-4" />
              <span>New Tab</span>
            </CommandItem>
            <CommandItem onSelect={() => runAction("new-window")}>
              <PlusCircle className="mr-2 h-4 w-4" />
              <span>New Window</span>
              <CommandShortcut>⌘N</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export const CommandExamples = () => (
  <div className="space-y-12">
    <div>
      <h3 className="text-lg font-medium mb-4">Basic Command</h3>
      <BasicCommand />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Searchable Command</h3>
      <SearchableCommand />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Command Dialog</h3>
      <CommandDialogExample />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Command With Actions</h3>
      <CommandWithActions />
    </div>
  </div>
);
