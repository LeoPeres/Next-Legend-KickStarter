# Design System Documentation

This document outlines the design principles, component usage guidelines, and best practices for our application's UI.

## Design Principles

Our design system is built on the following core principles:

### 1. Consistency

Maintain visual and functional consistency across the application by using the same design patterns, components, and interactions for similar tasks. This helps users build a mental model of how the application works.

### 2. Hierarchy

Establish clear visual hierarchy to guide users through the interface. Use size, color, spacing, and typography to emphasize important elements and create a natural flow.

### 3. Accessibility

Design for all users, including those with disabilities. Follow WCAG guidelines, ensure proper color contrast, provide keyboard navigation, and support screen readers.

### 4. Simplicity

Keep the interface simple and intuitive. Avoid unnecessary complexity and visual clutter. Focus on the essential functionality and content.

### 5. Feedback

Provide clear feedback for user actions. Use visual cues, animations, and messages to confirm actions, show progress, and communicate errors.

### 6. Flexibility

Design components to be flexible and adaptable to different contexts and screen sizes. Use responsive design principles to ensure a good experience across devices.

## Color System

Our color system is built around a primary blue palette and a neutral gray secondary palette. These colors are defined as CSS variables in our theme and can be accessed through Tailwind classes.

### Primary Colors

The primary color palette is used for key UI elements, calls to action, and branding.

- **Primary**: Blue (`bg-primary`, `text-primary`) - Used for primary buttons, links, and active states
- **Primary Variants**: Various shades from 50-950 (`bg-primary-100`, `text-primary-800`, etc.)

### Secondary Colors

The secondary color palette provides neutral tones for backgrounds, text, and supporting UI elements.

- **Secondary**: Gray (`bg-secondary`, `text-secondary`) - Used for secondary buttons, backgrounds, and non-critical UI elements
- **Secondary Variants**: Various shades from 50-950 (`bg-secondary-100`, `text-secondary-800`, etc.)

### Semantic Colors

- **Destructive**: Red (`bg-destructive`, `text-destructive-foreground`) - Used for error states, delete actions
- **Muted**: Light gray (`bg-muted`, `text-muted-foreground`) - Used for subtle backgrounds, disabled states
- **Accent**: Light blue (`bg-accent`, `text-accent-foreground`) - Used for highlights, focus states

## Typography

Our typography system uses a consistent scale and a limited set of font weights to maintain hierarchy and readability.

### Font Families

- **Sans**: Inter - Primary font for all UI text
- **Heading**: Inter - Used for headings and titles
- **Mono**: JetBrains Mono - Used for code blocks and technical content

### Type Scale

We use a consistent type scale for all text elements:

- **h1**: 2.25rem/3rem (36px/48px) - `text-4xl lg:text-5xl`
- **h2**: 1.875rem/2.25rem (30px/36px) - `text-3xl lg:text-4xl`
- **h3**: 1.5rem/2rem (24px/32px) - `text-2xl lg:text-3xl`
- **h4**: 1.25rem/1.75rem (20px/28px) - `text-xl lg:text-2xl`
- **h5**: 1.125rem/1.5rem (18px/24px) - `text-lg lg:text-xl`
- **h6**: 1rem/1.5rem (16px/24px) - `text-base lg:text-lg`
- **Body**: 1rem/1.5rem (16px/24px) - `text-base`
- **Small**: 0.875rem/1.25rem (14px/20px) - `text-sm`
- **XSmall**: 0.75rem/1rem (12px/16px) - `text-xs`

## Spacing System

Our spacing system uses a consistent scale based on 4px increments. This ensures proper alignment and rhythm throughout the interface.

### Spacing Scale

- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 2.5rem (40px)
- **3xl**: 3rem (48px)
- **4xl**: 4rem (64px)

## Component Usage Guidelines

### Buttons

Buttons are used for actions and navigation. We have several button variants to indicate different levels of emphasis.

#### Button Variants

- **Primary**: High emphasis, used for primary actions
  ```jsx
  <Button>Primary Action</Button>
  ```

- **Secondary**: Medium emphasis, used for secondary actions
  ```jsx
  <Button variant="secondary">Secondary Action</Button>
  ```

- **Outline**: Low emphasis, used for tertiary actions
  ```jsx
  <Button variant="outline">Tertiary Action</Button>
  ```

- **Ghost**: Minimal emphasis, used for subtle actions
  ```jsx
  <Button variant="ghost">Subtle Action</Button>
  ```

- **Destructive**: Used for destructive actions like delete
  ```jsx
  <Button variant="destructive">Delete</Button>
  ```

- **Link**: Appears as a text link
  ```jsx
  <Button variant="link">Text Link</Button>
  ```

#### Button Sizes

- **Default**: Standard size for most contexts
- **Small**: Used in tight spaces or for less important actions
  ```jsx
  <Button size="sm">Small Button</Button>
  ```
- **Large**: Used for prominent actions
  ```jsx
  <Button size="lg">Large Button</Button>
  ```

### Cards

Cards are used to group related content and actions. They provide a visual container with consistent padding and styling.

#### Card Variants

- **Default**: Standard card with background and subtle border
  ```jsx
  <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card description text</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Card content goes here</p>
    </CardContent>
    <CardFooter>
      <Button>Action</Button>
    </CardFooter>
  </Card>
  ```

- **Bordered**: Card with more prominent border
  ```jsx
  <Card variant="bordered">...</Card>
  ```

- **Elevated**: Card with shadow for more emphasis
  ```jsx
  <Card variant="elevated">...</Card>
  ```

- **Interactive**: Card that responds to hover/focus
  ```jsx
  <Card variant="interactive">...</Card>
  ```

### Dialogs

Dialogs are used for modal interactions that require user attention or input.

```jsx
<Dialog>
  <DialogTrigger>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description text</DialogDescription>
    </DialogHeader>
    <div className="py-4">Dialog content goes here</div>
    <DialogFooter>
      <Button variant="outline" onClick={onCancel}>Cancel</Button>
      <Button onClick={onConfirm}>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Form Components

Form components should be wrapped with the FormComponentWrapper for consistent styling and accessibility.

```jsx
<FormComponentWrapper
  label="Email Address"
  description="We'll never share your email with anyone else."
  error={errors.email}
  required
>
  <Input placeholder="Enter your email" />
</FormComponentWrapper>
```

## Layout Patterns

### Page Layout

Use consistent page layouts with proper spacing and container widths.

```jsx
<div className="page-container">
  <header className="page-header">
    <h1>Page Title</h1>
    <p className="text-muted-foreground">Page description</p>
  </header>
  
  <section className="page-section">
    <h2>Section Title</h2>
    <div className="mt-6">
      {/* Section content */}
    </div>
  </section>
</div>
```

### Grid Layouts

Use the grid utility classes for consistent grid layouts.

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid items */}
</div>
```

## Responsive Design

Our components are designed to be responsive by default. Follow these guidelines for responsive layouts:

1. Use the responsive variants of Tailwind classes (e.g., `md:`, `lg:`)
2. Design for mobile-first, then enhance for larger screens
3. Use the defined breakpoints consistently:
   - **xs**: 480px
   - **sm**: 640px
   - **md**: 768px
   - **lg**: 1024px
   - **xl**: 1280px
   - **2xl**: 1536px

## Accessibility Guidelines

1. Ensure sufficient color contrast (WCAG AA minimum)
2. Provide text alternatives for non-text content
3. Make all functionality available from a keyboard
4. Use semantic HTML elements
5. Add ARIA attributes when necessary
6. Test with screen readers and keyboard navigation

## Design-to-Code Workflow

1. Design components in Figma following the design system guidelines
2. Use the design tokens defined in our theme
3. Implement components using shadcn/ui and our custom components
4. Ensure consistency between design and implementation
5. Review and test components for accessibility and responsiveness 