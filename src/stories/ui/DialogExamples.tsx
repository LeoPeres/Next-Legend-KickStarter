import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Checkbox } from "../../../components/ui/checkbox";
import { Settings, User, CreditCard, LogOut, HelpCircle, AlertTriangle, Check } from "lucide-react";

export const BasicDialog = () => (
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
);

export const ConfirmationDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="destructive">Delete Account</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your account and remove your
          data from our servers.
        </DialogDescription>
      </DialogHeader>
      <div className="flex items-center space-x-2 py-4">
        <Checkbox id="confirm" />
        <label
          htmlFor="confirm"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          I understand the consequences
        </label>
      </div>
      <DialogFooter>
        <Button variant="outline">Cancel</Button>
        <Button variant="destructive">Delete Account</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export const AlertDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button>Show Alert</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <div className="flex justify-center mb-2">
          <AlertTriangle className="h-12 w-12 text-amber-500" />
        </div>
        <DialogTitle className="text-center">Connection Lost</DialogTitle>
        <DialogDescription className="text-center">
          Your connection to the server has been lost. We're trying to reconnect you.
        </DialogDescription>
      </DialogHeader>
      <div className="flex justify-center py-4">
        <div className="animate-pulse flex space-x-2">
          <div className="h-2 w-2 bg-muted-foreground rounded-full"></div>
          <div className="h-2 w-2 bg-muted-foreground rounded-full"></div>
          <div className="h-2 w-2 bg-muted-foreground rounded-full"></div>
        </div>
      </div>
      <DialogFooter className="flex justify-center">
        <Button variant="outline">Try Again</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export const SuccessDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={() => setOpen(true)}>Submit Form</Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <div className="flex justify-center mb-2">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <DialogTitle className="text-center">Success!</DialogTitle>
            <DialogDescription className="text-center">
              Your form has been submitted successfully.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 text-center">
            <p className="text-sm text-muted-foreground">
              You will receive a confirmation email shortly.
            </p>
          </div>
          <DialogFooter className="flex justify-center">
            <Button onClick={() => setOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export const SettingsDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">
        <Settings className="mr-2 h-4 w-4" />
        Settings
      </Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Settings</DialogTitle>
        <DialogDescription>Manage your account settings and preferences.</DialogDescription>
      </DialogHeader>
      <div className="py-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span className="text-sm font-medium">Profile</span>
            </div>
            <Button variant="ghost" size="sm">
              Edit
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CreditCard className="h-4 w-4" />
              <span className="text-sm font-medium">Billing</span>
            </div>
            <Button variant="ghost" size="sm">
              View
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <HelpCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Help & Support</span>
            </div>
            <Button variant="ghost" size="sm">
              Open
            </Button>
          </div>
        </div>
      </div>
      <DialogFooter className="flex justify-between">
        <Button variant="outline" size="sm" className="gap-1">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
        <Button>Save Changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export const DialogExamples = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <h3 className="text-lg font-medium mb-4">Basic Dialog</h3>
      <BasicDialog />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Confirmation Dialog</h3>
      <ConfirmationDialog />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Alert Dialog</h3>
      <AlertDialog />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Success Dialog</h3>
      <SuccessDialog />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Settings Dialog</h3>
      <SettingsDialog />
    </div>
  </div>
);
