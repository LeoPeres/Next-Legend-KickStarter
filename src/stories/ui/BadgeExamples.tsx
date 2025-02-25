import React from "react";
import { Badge } from "../../../components/ui/badge";

export const BadgeVariants = () => (
  <div className="flex flex-wrap gap-2">
    <Badge variant="default">Default</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="destructive">Destructive</Badge>
    <Badge variant="outline">Outline</Badge>
  </div>
);

export const BadgeWithIcons = () => (
  <div className="flex flex-wrap gap-2">
    <Badge className="gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
      Verified
    </Badge>
    <Badge variant="secondary" className="gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
      Paid
    </Badge>
    <Badge variant="destructive" className="gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
      Rejected
    </Badge>
  </div>
);

export const CustomBadges = () => (
  <div className="flex flex-wrap gap-2">
    <Badge className="bg-blue-500 hover:bg-blue-700 text-white">Blue</Badge>
    <Badge className="bg-green-500 hover:bg-green-700 text-white">Green</Badge>
    <Badge className="bg-purple-500 hover:bg-purple-700 text-white">Purple</Badge>
    <Badge className="bg-amber-500 hover:bg-amber-700 text-white">Amber</Badge>
    <Badge className="bg-pink-500 hover:bg-pink-700 text-white">Pink</Badge>
  </div>
);

export const BadgeUseCases = () => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-2">
      <span>Status:</span>
      <Badge
        variant="outline"
        className="bg-green-100 text-green-800 hover:bg-green-200 border-green-500"
      >
        Active
      </Badge>
    </div>
    <div className="flex items-center gap-2">
      <span>Category:</span>
      <Badge variant="secondary">Technology</Badge>
    </div>
    <div className="flex items-center gap-2">
      <span>Notifications:</span>
      <Badge variant="destructive">12</Badge>
    </div>
    <div className="flex items-center gap-2">
      <span>Version:</span>
      <Badge variant="outline">v1.0.0</Badge>
    </div>
  </div>
);

export const BadgeExamples = () => (
  <div className="space-y-8">
    <div>
      <h3 className="text-lg font-medium mb-2">Badge Variants</h3>
      <BadgeVariants />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-2">Badges with Icons</h3>
      <BadgeWithIcons />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-2">Custom Colored Badges</h3>
      <CustomBadges />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-2">Badge Use Cases</h3>
      <BadgeUseCases />
    </div>
  </div>
);
