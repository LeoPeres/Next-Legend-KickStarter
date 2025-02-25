/**
 * Utility function to extract and document TypeScript props
 * This is used to enhance the automatic prop table generation in Storybook
 */

import { PropItem } from "@storybook/blocks";

export interface ExtendedPropItem extends PropItem {
  defaultValue?: {
    summary: string;
    detail?: string;
  };
  description?: string;
  required?: boolean;
  control?: {
    type: string;
    options?: string[];
  };
  table?: {
    category?: string;
    type?: {
      summary: string;
      detail?: string;
    };
    defaultValue?: {
      summary: string;
      detail?: string;
    };
  };
}

export interface PropDef {
  [key: string]: ExtendedPropItem;
}

/**
 * Creates a prop definition object for Storybook
 * @param props Object containing prop definitions
 * @returns PropDef object for Storybook
 */
export function createPropDef(props: Record<string, Partial<ExtendedPropItem>>): PropDef {
  return Object.entries(props).reduce((acc, [key, value]) => {
    acc[key] = {
      name: key,
      type: { name: value.type?.name || "unknown" },
      ...value,
    };
    return acc;
  }, {} as PropDef);
}

/**
 * Example usage:
 *
 * const buttonProps = createPropDef({
 *   variant: {
 *     type: { name: 'string' },
 *     description: 'The visual style of the button',
 *     control: { type: 'select', options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] },
 *     table: {
 *       category: 'Appearance',
 *       defaultValue: { summary: 'default' },
 *     },
 *   },
 *   // ... other props
 * });
 */
