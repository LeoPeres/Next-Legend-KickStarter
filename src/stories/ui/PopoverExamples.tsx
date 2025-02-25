import React, { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "../../../components/ui/popover";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Checkbox } from "../../../components/ui/checkbox";
import {
  Settings,
  User,
  Calendar,
  Bell,
  Share,
  HelpCircle,
  Palette,
  Sliders,
  Check,
} from "lucide-react";

export const BasicPopover = () => (
  <Popover>
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
);

export const ProfilePopover = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline" className="flex items-center gap-2">
        <User className="h-4 w-4" />
        Profile
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-80">
      <div className="grid gap-4">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
            JD
          </div>
          <div>
            <h4 className="font-medium leading-none">John Doe</h4>
            <p className="text-sm text-muted-foreground">john.doe@example.com</p>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="w-full justify-start">
              <User className="h-4 w-4 mr-2" />
              View Profile
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start text-destructive hover:text-destructive"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </PopoverContent>
  </Popover>
);

export const DatePickerPopover = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline" className="flex items-center gap-2">
        <Calendar className="h-4 w-4" />
        Pick a date
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-auto p-0">
      <div className="p-4">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Select Date</h4>
          <p className="text-sm text-muted-foreground">Choose a date for your event.</p>
        </div>
        <div className="mt-3 grid gap-2">
          <div className="grid grid-cols-7 gap-1 rounded-md border p-3">
            {/* This is a simplified calendar UI */}
            {Array.from({ length: 31 }, (_, i) => (
              <div
                key={i}
                className={`flex h-8 w-8 items-center justify-center rounded-md text-sm ${
                  i === 14 ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <Button size="sm">Confirm</Button>
          </div>
        </div>
      </div>
    </PopoverContent>
  </Popover>
);

export const NotificationPopover = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, read: false, content: "New message from Jane" },
    { id: 2, read: false, content: "Your post was liked by Tom" },
    { id: 3, read: true, content: "Meeting reminder: Team sync at 3 PM" },
  ]);

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="relative">
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-destructive text-xs flex items-center justify-center text-destructive-foreground">
              {unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium leading-none">Notifications</h4>
            <Button variant="ghost" size="sm" onClick={markAllAsRead} disabled={unreadCount === 0}>
              Mark all as read
            </Button>
          </div>
          <div className="grid gap-2">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`rounded-md p-2 ${notification.read ? "bg-background" : "bg-muted"}`}
              >
                <div className="flex items-start gap-2">
                  {!notification.read && <div className="mt-1 h-2 w-2 rounded-full bg-blue-500" />}
                  <p className={`text-sm ${notification.read ? "text-muted-foreground" : ""}`}>
                    {notification.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" size="sm" className="w-full">
            View all notifications
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export const SettingsPopover = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [sound, setSound] = useState(true);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Settings className="h-4 w-4 mr-2" />
          Settings
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Preferences</h4>
            <p className="text-sm text-muted-foreground">
              Manage your app preferences and settings.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Palette className="h-4 w-4" />
                <Label htmlFor="dark-mode">Dark Mode</Label>
              </div>
              <Checkbox
                id="dark-mode"
                checked={darkMode}
                onCheckedChange={(checked) => setDarkMode(checked === true)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <Label htmlFor="notifications">Notifications</Label>
              </div>
              <Checkbox
                id="notifications"
                checked={notifications}
                onCheckedChange={(checked) => setNotifications(checked === true)}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sliders className="h-4 w-4" />
                <Label htmlFor="sound">Sound</Label>
              </div>
              <Checkbox
                id="sound"
                checked={sound}
                onCheckedChange={(checked) => setSound(checked === true)}
              />
            </div>
          </div>
          <Button size="sm">Save Preferences</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export const SharePopover = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">
        <Share className="h-4 w-4 mr-2" />
        Share
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-80">
      <div className="grid gap-4">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Share this page</h4>
          <p className="text-sm text-muted-foreground">
            Anyone with the link can view this document.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Input value="https://example.com/shared-document" readOnly />
          <Button size="sm" variant="ghost" className="shrink-0">
            Copy
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" size="sm">
            <svg
              className="mr-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
            Twitter
          </Button>
          <Button variant="outline" size="sm">
            <svg
              className="mr-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
            Instagram
          </Button>
        </div>
      </div>
    </PopoverContent>
  </Popover>
);

export const HelpPopover = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
        <HelpCircle className="h-4 w-4" />
      </Button>
    </PopoverTrigger>
    <PopoverContent side="left" className="w-80">
      <div className="grid gap-4">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Help & Resources</h4>
          <p className="text-sm text-muted-foreground">
            Find answers to common questions and access support resources.
          </p>
        </div>
        <div className="grid gap-2">
          <Button variant="link" className="justify-start p-0 h-auto">
            <Check className="h-4 w-4 mr-2" />
            Getting Started Guide
          </Button>
          <Button variant="link" className="justify-start p-0 h-auto">
            <Check className="h-4 w-4 mr-2" />
            Frequently Asked Questions
          </Button>
          <Button variant="link" className="justify-start p-0 h-auto">
            <Check className="h-4 w-4 mr-2" />
            Contact Support
          </Button>
        </div>
      </div>
    </PopoverContent>
  </Popover>
);

export const PopoverExamples = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <h3 className="text-lg font-medium mb-4">Basic Popover</h3>
      <BasicPopover />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Profile Popover</h3>
      <ProfilePopover />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Date Picker Popover</h3>
      <DatePickerPopover />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Notification Popover</h3>
      <NotificationPopover />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Settings Popover</h3>
      <SettingsPopover />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Share Popover</h3>
      <SharePopover />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Help Popover</h3>
      <HelpPopover />
    </div>
  </div>
);
