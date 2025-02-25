import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../../../components/ui/avatar";

export const DefaultAvatar = () => (
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
);

export const FallbackAvatar = () => (
  <Avatar>
    <AvatarImage src="/broken-image.jpg" alt="@user" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
);

export const AvatarSizes = () => (
  <div className="flex items-center gap-4">
    <Avatar className="h-8 w-8">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <Avatar className="h-14 w-14">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <Avatar className="h-20 w-20">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  </div>
);

export const CustomFallbacks = () => (
  <div className="flex items-center gap-4">
    <Avatar>
      <AvatarImage src="/broken-image.jpg" alt="@user" />
      <AvatarFallback className="bg-red-500 text-white">JD</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src="/broken-image.jpg" alt="@user" />
      <AvatarFallback className="bg-blue-500 text-white">AB</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src="/broken-image.jpg" alt="@user" />
      <AvatarFallback className="bg-green-500 text-white">CD</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src="/broken-image.jpg" alt="@user" />
      <AvatarFallback className="bg-purple-500 text-white">EF</AvatarFallback>
    </Avatar>
  </div>
);

export const AvatarGroup = () => (
  <div className="flex items-center -space-x-4">
    <Avatar className="border-2 border-background">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <Avatar className="border-2 border-background">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <Avatar className="border-2 border-background">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <Avatar className="border-2 border-background bg-muted">
      <AvatarFallback>+3</AvatarFallback>
    </Avatar>
  </div>
);

export const AvatarExamples = () => (
  <div className="space-y-8">
    <div>
      <h3 className="text-lg font-medium mb-2">Default Avatar</h3>
      <DefaultAvatar />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-2">Fallback Avatar</h3>
      <FallbackAvatar />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-2">Avatar Sizes</h3>
      <AvatarSizes />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-2">Custom Fallback Colors</h3>
      <CustomFallbacks />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-2">Avatar Group</h3>
      <AvatarGroup />
    </div>
  </div>
);
