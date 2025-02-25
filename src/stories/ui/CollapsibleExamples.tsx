import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "../../../components/ui/collapsible";
import { Button } from "../../../components/ui/button";
import {
  ChevronsUpDown,
  Plus,
  Minus,
  ChevronDown,
  ChevronUp,
  Settings,
  Info,
  AlertCircle,
} from "lucide-react";
import { Badge } from "../../../components/ui/badge";

export const BasicCollapsible = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[400px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">Basic Collapsible Example</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        Click the button to show more content.
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          This content can be expanded and collapsed.
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          It's hidden by default and shown when the trigger is clicked.
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export const CustomTriggerCollapsible = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[400px] space-y-2">
      <div className="flex items-center justify-between space-x-4">
        <h4 className="text-sm font-semibold">Custom Trigger Collapsible</h4>
        <CollapsibleTrigger asChild>
          <Button variant="outline" size="sm">
            {isOpen ? (
              <>
                <Minus className="h-4 w-4 mr-2" />
                Hide Details
              </>
            ) : (
              <>
                <Plus className="h-4 w-4 mr-2" />
                Show Details
              </>
            )}
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        This example uses a custom trigger with different icons.
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm bg-muted">
          <p className="mb-2">Additional details:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>The trigger changes based on the open state</li>
            <li>Different icons are shown for open and closed states</li>
            <li>The trigger has a more descriptive label</li>
          </ul>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export const AccordionStyleCollapsible = () => {
  return (
    <div className="w-[400px] space-y-2 border rounded-md">
      <CollapsibleItem
        title="Section 1: Introduction"
        content="This is the introduction section of the document. It provides an overview of the content and sets the context for the reader."
      />
      <CollapsibleItem
        title="Section 2: Getting Started"
        content="This section covers the basics of getting started with the product. It includes installation instructions and initial setup steps."
      />
      <CollapsibleItem
        title="Section 3: Advanced Usage"
        content="For advanced users, this section details more complex features and usage patterns. It assumes familiarity with the basic concepts covered in earlier sections."
      />
    </div>
  );
};

const CollapsibleItem = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="border-b last:border-b-0">
      <CollapsibleTrigger asChild>
        <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50">
          <h4 className="text-sm font-medium">{title}</h4>
          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="p-4 pt-0 text-sm border-t">{content}</div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export const NotificationCollapsible = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[400px] border rounded-md overflow-hidden"
    >
      <CollapsibleTrigger asChild>
        <div className="flex items-center justify-between p-4 bg-muted/50 cursor-pointer hover:bg-muted">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 mr-2 text-orange-500" />
            <h4 className="text-sm font-medium">System Notification</h4>
          </div>
          <Badge variant="outline" className="ml-auto mr-2">
            New
          </Badge>
          {isOpen ? (
            <ChevronUp className="h-4 w-4 flex-shrink-0" />
          ) : (
            <ChevronDown className="h-4 w-4 flex-shrink-0" />
          )}
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="p-4 text-sm space-y-2">
          <p>
            Your system will undergo scheduled maintenance on Friday, July 15th from 2:00 AM to 4:00
            AM UTC.
          </p>
          <p>
            During this time, the service may be intermittently unavailable. We apologize for any
            inconvenience this may cause.
          </p>
          <div className="flex justify-end space-x-2 mt-4">
            <Button variant="outline" size="sm">
              Dismiss
            </Button>
            <Button size="sm">Learn More</Button>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export const CollapsibleExamples = () => (
  <div className="space-y-10">
    <div>
      <h3 className="text-lg font-medium mb-4">Basic Collapsible</h3>
      <BasicCollapsible />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Custom Trigger Collapsible</h3>
      <CustomTriggerCollapsible />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Accordion Style Collapsible</h3>
      <AccordionStyleCollapsible />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Notification Collapsible</h3>
      <NotificationCollapsible />
    </div>
  </div>
);
