import React from "react";
import { Checkbox } from "../../../components/ui/checkbox";

export const BasicCheckboxes = () => (
  <div className="flex items-center space-x-8">
    <div className="flex items-center space-x-2">
      <Checkbox id="basic-unchecked" />
      <label
        htmlFor="basic-unchecked"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Unchecked
      </label>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox id="basic-checked" defaultChecked />
      <label
        htmlFor="basic-checked"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Checked
      </label>
    </div>
  </div>
);

export const DisabledCheckboxes = () => (
  <div className="flex items-center space-x-8">
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled-unchecked" disabled />
      <label
        htmlFor="disabled-unchecked"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Disabled
      </label>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled-checked" disabled defaultChecked />
      <label
        htmlFor="disabled-checked"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Disabled Checked
      </label>
    </div>
  </div>
);

export const CheckboxWithText = () => (
  <div className="items-top flex space-x-2">
    <Checkbox id="terms1" />
    <div className="grid gap-1.5 leading-none">
      <label
        htmlFor="terms1"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
      <p className="text-sm text-muted-foreground">
        You agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  </div>
);

export const CheckboxList = () => (
  <div className="space-y-2">
    <div className="flex items-center space-x-2">
      <Checkbox id="option1" />
      <label
        htmlFor="option1"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Option 1
      </label>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox id="option2" />
      <label
        htmlFor="option2"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Option 2
      </label>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox id="option3" />
      <label
        htmlFor="option3"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Option 3
      </label>
    </div>
  </div>
);

export const CheckboxForm = () => (
  <form className="space-y-6">
    <div className="space-y-4">
      <h4 className="text-sm font-medium">Notification Preferences</h4>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="email" defaultChecked />
          <label
            htmlFor="email"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Email notifications
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="sms" />
          <label
            htmlFor="sms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            SMS notifications
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="push" defaultChecked />
          <label
            htmlFor="push"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Push notifications
          </label>
        </div>
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox id="marketing" />
      <label
        htmlFor="marketing"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        I agree to receive marketing emails
      </label>
    </div>
  </form>
);

export const CheckboxExamples = () => (
  <div className="space-y-8">
    <div>
      <h3 className="text-lg font-medium mb-2">Basic Checkboxes</h3>
      <BasicCheckboxes />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-2">Disabled Checkboxes</h3>
      <DisabledCheckboxes />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-2">Checkbox with Text</h3>
      <CheckboxWithText />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-2">Checkbox List</h3>
      <CheckboxList />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-2">Checkbox in a Form</h3>
      <CheckboxForm />
    </div>
  </div>
);
