# Component Library Documentation

This document provides comprehensive documentation for the UI components in the Next-Legend-KickStarter project.

## Overview

The component library is built on top of [shadcn/ui](https://ui.shadcn.com/), which provides a set of accessible, reusable, and customizable UI components. These components are built with [Radix UI](https://www.radix-ui.com/) primitives and styled with [Tailwind CSS](https://tailwindcss.com/).

## Component Structure

Components are organized into two main categories:

1. **Base UI Components**: Located in `src/components/ui/`, these are the foundational components that are used to build more complex components.
2. **Custom Components**: Located in `src/components/`, these are application-specific components built using the base UI components.

## Base UI Components

### Button

The Button component is used to trigger an action or event.

#### Import

```tsx
import { Button } from "@/components/ui/button";
```

#### Props

| Prop      | Type                                                                | Default     | Description                                                                                                |
| --------- | ------------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------- |
| variant   | `'default' \| 'destructive' \| 'outline' \| 'secondary' \| 'ghost' \| 'link'` | `'default'` | The visual style of the button.                                                                            |
| size      | `'default' \| 'sm' \| 'lg'`                                         | `'default'` | The size of the button.                                                                                    |
| asChild   | `boolean`                                                           | `false`     | Change the default rendered element for the one passed as a child, merging their props and behavior.       |
| className | `string`                                                            | `''`        | Additional CSS classes to apply to the button.                                                             |

#### Examples

```tsx
// Default button
<Button>Click me</Button>

// Destructive button
<Button variant="destructive">Delete</Button>

// Outline button
<Button variant="outline">Cancel</Button>

// Secondary button
<Button variant="secondary">Secondary</Button>

// Ghost button
<Button variant="ghost">Ghost</Button>

// Link button
<Button variant="link">Link</Button>

// Small button
<Button size="sm">Small</Button>

// Large button
<Button size="lg">Large</Button>
```

### Card

The Card component is used to group related content.

#### Import

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
```

#### Props

| Component       | Props                                  | Description                                |
| --------------- | -------------------------------------- | ------------------------------------------ |
| Card            | `React.HTMLAttributes<HTMLDivElement>` | The main card container.                   |
| CardHeader      | `React.HTMLAttributes<HTMLDivElement>` | The header section of the card.            |
| CardTitle       | `React.HTMLAttributes<HTMLHeadingElement>` | The title of the card.                 |
| CardDescription | `React.HTMLAttributes<HTMLParagraphElement>` | The description of the card.         |
| CardContent     | `React.HTMLAttributes<HTMLDivElement>` | The content section of the card.           |
| CardFooter      | `React.HTMLAttributes<HTMLDivElement>` | The footer section of the card.            |

#### Examples

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
```

### Dialog

The Dialog component is used to create a modal dialog.

#### Import

```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
```

#### Props

| Component        | Props                                  | Description                                |
| ---------------- | -------------------------------------- | ------------------------------------------ |
| Dialog           | `DialogProps`                          | The main dialog container.                 |
| DialogTrigger    | `DialogTriggerProps`                   | The button that triggers the dialog.       |
| DialogContent    | `DialogContentProps`                   | The content section of the dialog.         |
| DialogHeader     | `React.HTMLAttributes<HTMLDivElement>` | The header section of the dialog.          |
| DialogTitle      | `DialogTitleProps`                     | The title of the dialog.                   |
| DialogDescription| `DialogDescriptionProps`               | The description of the dialog.             |
| DialogFooter     | `React.HTMLAttributes<HTMLDivElement>` | The footer section of the dialog.          |

#### Examples

```tsx
<Dialog>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog Description</DialogDescription>
    </DialogHeader>
    <div>Dialog Content</div>
    <DialogFooter>
      <Button>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Input

The Input component is used to get user input in a form.

#### Import

```tsx
import { Input } from "@/components/ui/input";
```

#### Props

The Input component extends the HTML input element with the following props:

| Prop      | Type     | Default | Description                                |
| --------- | -------- | ------- | ------------------------------------------ |
| className | `string` | `''`    | Additional CSS classes to apply to the input. |

#### Examples

```tsx
// Default input
<Input placeholder="Enter your name" />

// Disabled input
<Input disabled placeholder="Disabled input" />

// Input with label
<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>
```

### Label

The Label component is used to add a label to a form element.

#### Import

```tsx
import { Label } from "@/components/ui/label";
```

#### Props

The Label component extends the Radix UI Label component with the following props:

| Prop      | Type     | Default | Description                                |
| --------- | -------- | ------- | ------------------------------------------ |
| className | `string` | `''`    | Additional CSS classes to apply to the label. |

#### Examples

```tsx
<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Email" />
</div>
```

## Custom Components

### Header

The Header component is used to display the application header.

#### Import

```tsx
import { Header } from "@/components/header";
```

#### Props

| Prop      | Type     | Default | Description                                |
| --------- | -------- | ------- | ------------------------------------------ |
| className | `string` | `''`    | Additional CSS classes to apply to the header. |

#### Examples

```tsx
<Header />
```

### Footer

The Footer component is used to display the application footer.

#### Import

```tsx
import { Footer } from "@/components/footer";
```

#### Props

| Prop      | Type     | Default | Description                                |
| --------- | -------- | ------- | ------------------------------------------ |
| className | `string` | `''`    | Additional CSS classes to apply to the footer. |

#### Examples

```tsx
<Footer />
```

### ThemeToggle

The ThemeToggle component is used to toggle between light and dark themes.

#### Import

```tsx
import { ThemeToggle } from "@/components/theme-toggle";
```

#### Props

| Prop      | Type     | Default | Description                                |
| --------- | -------- | ------- | ------------------------------------------ |
| className | `string` | `''`    | Additional CSS classes to apply to the theme toggle. |

#### Examples

```tsx
<ThemeToggle />
```

## Theming and Customization

The component library supports theming through Tailwind CSS. The theme configuration is defined in `tailwind.config.ts`.

### Theme Configuration

The theme configuration includes:

- Colors
- Typography
- Spacing
- Border radius
- Shadows
- Transitions

### Customizing Components

Components can be customized by:

1. **Extending Tailwind Classes**: Use the `className` prop to add additional Tailwind classes.
2. **Modifying Theme Variables**: Update the theme variables in `tailwind.config.ts`.
3. **Creating Component Variants**: Use the `cva` function to create component variants.

### Example: Customizing Button

```tsx
// Custom button with additional classes
<Button className="bg-gradient-to-r from-purple-500 to-pink-500">
  Gradient Button
</Button>

// Custom button with variant
import { buttonVariants } from "@/components/ui/button";

<a className={buttonVariants({ variant: "outline" })}>
  Custom Link Button
</a>
```

## Component Playground

The component library includes a Storybook playground for interactive component development and testing.

### Running Storybook

```bash
npm run storybook
```

Storybook will be available at [http://localhost:6006](http://localhost:6006).

### Component Stories

Each component has a corresponding story in the `src/stories` directory. These stories demonstrate the component's usage and variants.

### Example: Button Story

```tsx
// src/stories/ui/Button.stories.tsx
import { Button } from "@/components/ui/button";

export default {
  title: "UI/Button",
  component: Button,
};

export const Default = () => <Button>Default Button</Button>;
export const Destructive = () => <Button variant="destructive">Destructive Button</Button>;
export const Outline = () => <Button variant="outline">Outline Button</Button>;
```

## Accessibility

The component library is built with accessibility in mind. All components follow WAI-ARIA guidelines and are keyboard navigable.

### Keyboard Navigation

- **Button**: Focusable with Tab, activatable with Enter or Space.
- **Dialog**: Traps focus within the dialog, closable with Escape.
- **Dropdown**: Navigable with Arrow keys, activatable with Enter.

### Screen Reader Support

All components include appropriate ARIA attributes for screen reader support.

## Best Practices

When using the component library, follow these best practices:

1. **Use Semantic Components**: Use the appropriate component for the task (e.g., Button for actions, Link for navigation).
2. **Maintain Consistency**: Use consistent variants and sizes throughout the application.
3. **Prioritize Accessibility**: Ensure all components have appropriate labels and ARIA attributes.
4. **Responsive Design**: Test components at different screen sizes.
5. **Performance**: Avoid unnecessary re-renders by memoizing components when appropriate. 