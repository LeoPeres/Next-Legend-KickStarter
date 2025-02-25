import React, { useState } from "react";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { Button } from "../../../components/ui/button";
import {
  Search,
  Mail,
  Lock,
  User,
  Calendar,
  DollarSign,
  Phone,
  Link as LinkIcon,
  Eye,
  EyeOff,
} from "lucide-react";

export const BasicInput = () => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor="basic">Basic Input</Label>
    <Input id="basic" placeholder="Type something..." />
  </div>
);

export const SearchInput = () => (
  <div className="relative w-full max-w-sm">
    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
    <Input className="pl-10" placeholder="Search..." />
  </div>
);

export const EmailInput = () => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor="email">Email</Label>
    <div className="relative">
      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input id="email" type="email" placeholder="Email" className="pl-10" />
    </div>
    <p className="text-sm text-muted-foreground">Enter your email address.</p>
  </div>
);

export const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="password">Password</Label>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="pl-10 pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        >
          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
      <p className="text-sm text-muted-foreground">Enter your password.</p>
    </div>
  );
};

export const FormInputs = () => (
  <form className="w-full max-w-sm space-y-4">
    <div className="space-y-2">
      <Label htmlFor="name">Full Name</Label>
      <div className="relative">
        <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input id="name" placeholder="John Doe" className="pl-10" />
      </div>
    </div>

    <div className="space-y-2">
      <Label htmlFor="form-email">Email</Label>
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input id="form-email" type="email" placeholder="john@example.com" className="pl-10" />
      </div>
    </div>

    <div className="space-y-2">
      <Label htmlFor="phone">Phone</Label>
      <div className="relative">
        <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input id="phone" type="tel" placeholder="(123) 456-7890" className="pl-10" />
      </div>
    </div>

    <div className="space-y-2">
      <Label htmlFor="website">Website</Label>
      <div className="relative">
        <LinkIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input id="website" type="url" placeholder="https://example.com" className="pl-10" />
      </div>
    </div>

    <div className="flex justify-end">
      <Button type="submit">Submit</Button>
    </div>
  </form>
);

export const InputWithButton = () => (
  <div className="flex w-full max-w-sm items-center space-x-2">
    <Input type="email" placeholder="Email" />
    <Button type="submit">Subscribe</Button>
  </div>
);

export const DateAndTimeInputs = () => (
  <div className="grid w-full max-w-sm gap-4">
    <div className="space-y-2">
      <Label htmlFor="date">Date</Label>
      <div className="relative">
        <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input id="date" type="date" className="pl-10" />
      </div>
    </div>

    <div className="space-y-2">
      <Label htmlFor="time">Time</Label>
      <Input id="time" type="time" />
    </div>

    <div className="space-y-2">
      <Label htmlFor="datetime">Date and Time</Label>
      <Input id="datetime" type="datetime-local" />
    </div>
  </div>
);

export const NumberInput = () => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor="amount">Amount</Label>
    <div className="relative">
      <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input id="amount" type="number" placeholder="0.00" className="pl-10" />
    </div>
  </div>
);

export const DisabledInput = () => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor="disabled" className="text-muted-foreground">
      Disabled Input
    </Label>
    <Input id="disabled" placeholder="You can't edit this..." disabled />
  </div>
);

export const FileInput = () => (
  <div className="grid w-full max-w-sm items-center gap-1.5">
    <Label htmlFor="file">Upload File</Label>
    <Input id="file" type="file" />
  </div>
);

export const InputExamples = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <h3 className="text-lg font-medium mb-4">Basic Input</h3>
      <BasicInput />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Search Input</h3>
      <SearchInput />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Email Input</h3>
      <EmailInput />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Password Input</h3>
      <PasswordInput />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Input With Button</h3>
      <InputWithButton />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Number Input</h3>
      <NumberInput />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">Disabled Input</h3>
      <DisabledInput />
    </div>
    <div>
      <h3 className="text-lg font-medium mb-4">File Input</h3>
      <FileInput />
    </div>
    <div className="col-span-1 md:col-span-2">
      <h3 className="text-lg font-medium mb-4">Date and Time Inputs</h3>
      <DateAndTimeInputs />
    </div>
    <div className="col-span-1 md:col-span-2">
      <h3 className="text-lg font-medium mb-4">Form Inputs</h3>
      <FormInputs />
    </div>
  </div>
);
