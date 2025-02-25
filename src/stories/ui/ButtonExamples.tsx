import React from "react";
import { Button } from "../../../components/ui/button";
import { PlusCircle, Trash, Save, Mail, ArrowRight } from "lucide-react";

export const ButtonWithIcon = () => (
  <div className="flex flex-col gap-4">
    <div className="flex gap-4">
      <Button>
        <PlusCircle className="mr-2 h-4 w-4" />
        Add New
      </Button>
      <Button variant="destructive">
        <Trash className="mr-2 h-4 w-4" />
        Delete
      </Button>
      <Button variant="outline">
        <Save className="mr-2 h-4 w-4" />
        Save
      </Button>
    </div>
    <div className="flex gap-4">
      <Button variant="secondary">
        <Mail className="mr-2 h-4 w-4" />
        Email
      </Button>
      <Button variant="ghost">
        <ArrowRight className="mr-2 h-4 w-4" />
        Next
      </Button>
    </div>
  </div>
);

export const ButtonSizes = () => (
  <div className="flex items-center gap-4">
    <Button size="sm">Small</Button>
    <Button size="default">Default</Button>
    <Button size="lg">Large</Button>
  </div>
);

export const ButtonVariants = () => (
  <div className="flex flex-col gap-4">
    <div className="flex gap-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
    </div>
    <div className="flex gap-4">
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  </div>
);

export const ButtonStates = () => (
  <div className="flex gap-4">
    <Button>Enabled</Button>
    <Button disabled>Disabled</Button>
    <Button className="opacity-50 cursor-not-allowed">Custom Disabled</Button>
  </div>
);

export const ButtonUsageExamples = () => (
  <div className="space-y-8">
    <div>
      <h3 className="text-lg font-medium mb-2">Button with Icons</h3>
      <ButtonWithIcon />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-2">Button Sizes</h3>
      <ButtonSizes />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-2">Button Variants</h3>
      <ButtonVariants />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-2">Button States</h3>
      <ButtonStates />
    </div>
  </div>
);
