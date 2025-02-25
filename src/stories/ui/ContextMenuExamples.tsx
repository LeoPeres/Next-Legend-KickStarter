import React, { useState } from "react";
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
import {
  Copy,
  Trash,
  Download,
  Share,
  Pencil,
  Star,
  MoreHorizontal,
  Folder,
  File,
  Image,
  Archive,
  Settings,
  Users,
  Layers,
  Eye,
  EyeOff,
  Lock,
  Unlock,
} from "lucide-react";

export const BasicContextMenu = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent className="w-64">
      <ContextMenuItem>
        <Copy className="mr-2 h-4 w-4" />
        Copy
        <ContextMenuShortcut>⌘C</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        <Pencil className="mr-2 h-4 w-4" />
        Edit
        <ContextMenuShortcut>⌘E</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        <Share className="mr-2 h-4 w-4" />
        Share
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>
        <Download className="mr-2 h-4 w-4" />
        Download
        <ContextMenuShortcut>⌘D</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem className="text-red-500">
        <Trash className="mr-2 h-4 w-4" />
        Delete
        <ContextMenuShortcut>⌫</ContextMenuShortcut>
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);

export const NestedContextMenu = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent className="w-64">
      <ContextMenuItem>
        <Copy className="mr-2 h-4 w-4" />
        Copy
      </ContextMenuItem>
      <ContextMenuItem>
        <Pencil className="mr-2 h-4 w-4" />
        Edit
      </ContextMenuItem>
      <ContextMenuSub>
        <ContextMenuSubTrigger>
          <Folder className="mr-2 h-4 w-4" />
          Open With
        </ContextMenuSubTrigger>
        <ContextMenuSubContent className="w-48">
          <ContextMenuItem>Default App</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Text Editor</ContextMenuItem>
          <ContextMenuItem>Image Viewer</ContextMenuItem>
          <ContextMenuItem>Browser</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Choose Another App...</ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
      <ContextMenuSub>
        <ContextMenuSubTrigger>
          <Share className="mr-2 h-4 w-4" />
          Share
        </ContextMenuSubTrigger>
        <ContextMenuSubContent className="w-48">
          <ContextMenuItem>Email</ContextMenuItem>
          <ContextMenuItem>Messages</ContextMenuItem>
          <ContextMenuItem>Notes</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>AirDrop</ContextMenuItem>
          <ContextMenuItem>More Apps...</ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
      <ContextMenuSeparator />
      <ContextMenuItem className="text-red-500">
        <Trash className="mr-2 h-4 w-4" />
        Delete
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);

export const FileContextMenu = () => {
  const [checked, setChecked] = useState({
    hidden: false,
    readonly: false,
    starred: true,
  });

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex flex-col h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        <File className="h-10 w-10 mb-2" />
        document.pdf
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          <Copy className="mr-2 h-4 w-4" />
          Copy
        </ContextMenuItem>
        <ContextMenuItem>
          <Pencil className="mr-2 h-4 w-4" />
          Rename
        </ContextMenuItem>
        <ContextMenuItem>
          <Download className="mr-2 h-4 w-4" />
          Download
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem
          checked={checked.hidden}
          onCheckedChange={(value) => setChecked((prev) => ({ ...prev, hidden: !!value }))}
        >
          {checked.hidden ? <EyeOff className="mr-2 h-4 w-4" /> : <Eye className="mr-2 h-4 w-4" />}
          {checked.hidden ? "Hidden" : "Visible"}
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem
          checked={checked.readonly}
          onCheckedChange={(value) => setChecked((prev) => ({ ...prev, readonly: !!value }))}
        >
          {checked.readonly ? (
            <Lock className="mr-2 h-4 w-4" />
          ) : (
            <Unlock className="mr-2 h-4 w-4" />
          )}
          {checked.readonly ? "Read-only" : "Editable"}
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem
          checked={checked.starred}
          onCheckedChange={(value) => setChecked((prev) => ({ ...prev, starred: !!value }))}
        >
          <Star
            className={`mr-2 h-4 w-4 ${checked.starred ? "fill-yellow-400 text-yellow-400" : ""}`}
          />
          {checked.starred ? "Starred" : "Star"}
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuItem className="text-red-500">
          <Trash className="mr-2 h-4 w-4" />
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export const ViewOptionsContextMenu = () => {
  const [viewType, setViewType] = useState("grid");

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        <div className="text-center">
          <p>Right click to change view</p>
          <p className="text-xs text-muted-foreground mt-1">Current view: {viewType}</p>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuLabel>View Options</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value={viewType} onValueChange={setViewType}>
          <ContextMenuRadioItem value="list">List View</ContextMenuRadioItem>
          <ContextMenuRadioItem value="grid">Grid View</ContextMenuRadioItem>
          <ContextMenuRadioItem value="gallery">Gallery View</ContextMenuRadioItem>
          <ContextMenuRadioItem value="columns">Column View</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            More Settings...
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export const ContextMenuExamples = () => (
  <div className="space-y-12">
    <div>
      <h3 className="text-lg font-medium mb-4">Basic Context Menu</h3>
      <BasicContextMenu />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Nested Context Menu</h3>
      <NestedContextMenu />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">File Context Menu</h3>
      <FileContextMenu />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">View Options Context Menu</h3>
      <ViewOptionsContextMenu />
    </div>
  </div>
);
