import React from "react";
import { Alert, AlertTitle, AlertDescription } from "../../../components/ui/alert";
import { Terminal, AlertCircle, Info, CheckCircle, Bell } from "lucide-react";

export const DefaultAlert = () => (
  <Alert className="w-full max-w-md">
    <Terminal className="h-4 w-4" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
  </Alert>
);

export const DestructiveAlert = () => (
  <Alert variant="destructive" className="w-full max-w-md">
    <AlertCircle className="h-4 w-4" />
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
  </Alert>
);

export const InfoAlert = () => (
  <Alert className="w-full max-w-md">
    <Info className="h-4 w-4" />
    <AlertTitle>Information</AlertTitle>
    <AlertDescription>This feature is currently in beta and may change.</AlertDescription>
  </Alert>
);

export const SuccessAlert = () => (
  <Alert className="w-full max-w-md border-green-500">
    <CheckCircle className="h-4 w-4 text-green-500" />
    <AlertTitle className="text-green-500">Success</AlertTitle>
    <AlertDescription>Your changes have been saved successfully.</AlertDescription>
  </Alert>
);

export const NotificationAlert = () => (
  <Alert className="w-full max-w-md">
    <Bell className="h-4 w-4" />
    <AlertTitle>Notification</AlertTitle>
    <AlertDescription>You have 3 unread messages in your inbox.</AlertDescription>
  </Alert>
);

export const AlertExamples = () => (
  <div className="space-y-6">
    <div>
      <h3 className="text-lg font-medium mb-2">Default Alert</h3>
      <DefaultAlert />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-2">Destructive Alert</h3>
      <DestructiveAlert />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-2">Info Alert</h3>
      <InfoAlert />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-2">Success Alert (Custom Styled)</h3>
      <SuccessAlert />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-2">Notification Alert</h3>
      <NotificationAlert />
    </div>
  </div>
);
