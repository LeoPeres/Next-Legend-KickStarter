import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from "../../../components/ui/dropdown-menu";
import { Button } from "../../../components/ui/button";
import {
  User,
  CreditCard,
  Settings,
  Keyboard,
  LogOut,
  PlusCircle,
  Cloud,
  Github,
  LifeBuoy,
  Mail,
  MessageSquare,
  CheckCircle2,
  LayoutGrid,
  List,
  SlidersHorizontal,
} from "lucide-react";

export const BasicDropdownMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">My Account</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard className="mr-2 h-4 w-4" />
          <span>Billing</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Keyboard className="mr-2 h-4 w-4" />
          <span>Keyboard shortcuts</span>
          <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LogOut className="mr-2 h-4 w-4" />
        <span>Log out</span>
        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export const NestedDropdownMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Open</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuItem>
        <PlusCircle className="mr-2 h-4 w-4" />
        <span>New Task</span>
        <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <Cloud className="mr-2 h-4 w-4" />
          <span>Cloud Storage</span>
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent className="w-48">
          <DropdownMenuItem>
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Cloud className="mr-2 h-4 w-4" />
            <span>Google Drive</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <PlusCircle className="mr-2 h-4 w-4" />
            <span>Add Service</span>
          </DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LifeBuoy className="mr-2 h-4 w-4" />
        <span>Support</span>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem disabled>
        <Cloud className="mr-2 h-4 w-4" />
        <span>API</span>
        <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export const CheckboxDropdownMenu = () => {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showActivityBar, setShowActivityBar] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Settings</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
          <CheckCircle2 className="mr-2 h-4 w-4" />
          <span>Status Bar</span>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar}>
          <CheckCircle2 className="mr-2 h-4 w-4" />
          <span>Activity Bar</span>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
          <CheckCircle2 className="mr-2 h-4 w-4" />
          <span>Panel</span>
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <div className="px-2 py-1.5">
          <span className="text-xs text-muted-foreground">
            {showStatusBar ? "Status Bar: Visible" : "Status Bar: Hidden"}
            <br />
            {showActivityBar ? "Activity Bar: Visible" : "Activity Bar: Hidden"}
            <br />
            {showPanel ? "Panel: Visible" : "Panel: Hidden"}
          </span>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const RadioDropdownMenu = () => {
  const [viewType, setViewType] = useState("list");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">View Options</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>View Type</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={viewType} onValueChange={setViewType}>
          <DropdownMenuRadioItem value="list">
            <List className="mr-2 h-4 w-4" />
            <span>List</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="grid">
            <LayoutGrid className="mr-2 h-4 w-4" />
            <span>Grid</span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="kanban">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            <span>Kanban</span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <div className="px-2 py-1.5">
          <span className="text-xs text-muted-foreground">
            Current view: {viewType.charAt(0).toUpperCase() + viewType.slice(1)}
          </span>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const CommunicationDropdownMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Communication</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>Contact via</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Mail className="mr-2 h-4 w-4" />
        <span>Email</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <MessageSquare className="mr-2 h-4 w-4" />
        <span>Message</span>
      </DropdownMenuItem>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <User className="mr-2 h-4 w-4" />
          <span>More Options</span>
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuItem>Team Chat</DropdownMenuItem>
          <DropdownMenuItem>Video Call</DropdownMenuItem>
          <DropdownMenuItem>Schedule Meeting</DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Settings className="mr-2 h-4 w-4" />
        <span>Communication Preferences</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export const DropdownMenuExamples = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <h3 className="text-lg font-medium mb-4">Basic Dropdown Menu</h3>
      <BasicDropdownMenu />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Nested Dropdown Menu</h3>
      <NestedDropdownMenu />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Checkbox Dropdown Menu</h3>
      <CheckboxDropdownMenu />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Radio Dropdown Menu</h3>
      <RadioDropdownMenu />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Communication Dropdown Menu</h3>
      <CommunicationDropdownMenu />
    </div>
  </div>
);
